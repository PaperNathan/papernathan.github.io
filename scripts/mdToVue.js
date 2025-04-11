import fs, { read } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import readline from "readline";

import textFormatter from "./textFormatter.js";

const { fileNameToVueComponentName, removeFileExtension } = textFormatter();

let state = {
  existingVueFiles: [],
  content: "",
};
let multilineCache = [];
let multilineOptions = {};
let vueFiles = [];
let markdownFiles = [];
let metadata = {};

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const markdownArticleDirectory = path.join(
  __dirname,
  "../src/views/BlogView/articles",
);
const outputDirectory = path.join(
  __dirname,
  "../src/views/BlogView/components",
);

/**
 * Main function to initialize the script
 */
function main() {
  readExistingVueFiles();
  initMarkdownProcessing();
}

/**
 * Reads the existing Vue files in the output directory
 * and populates the existingVueFiles array.
 */
function readExistingVueFiles() {
  fs.readdir(outputDirectory, (err, files) => {
    if (err) {
      console.error("Error reading output directory:", err.message);
      return;
    }

    // Filter only Vue files and store them in an array
    vueFiles = files.filter((file) => file.endsWith(".vue"));
    vueFiles.forEach((file) => {
      const fileName = file.replace(".vue", "");
      state.existingVueFiles.push(fileName);
    });
  });
}

/**
 * Read all markdown files from the articles directory
 * Check for nonexistant Vue files and process the markdown files
 */
function initMarkdownProcessing() {
  fs.readdir(markdownArticleDirectory, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err.message);
      return;
    }

    // Filter only markdown files and store them in an array
    markdownFiles = files.filter((file) => file.endsWith(".md"));

    // Process each file
    markdownFiles.forEach((file) => {
      const fileName = file.replace(".md", "");
      const filePath = path.join(markdownArticleDirectory, file);

      // Check if the corresponding Vue file already exists and process file
      if (!state.existingVueFiles.includes(fileName + ".vue")) {
        console.log("Processing file:", filePath);
        const fileOptions = {
          name: fileName,
          date: new Date(),
        };
        processMarkdownFile(filePath, fileOptions);
      } else {
        console.log(
          `Vue file already exists for ${fileName}. Skipping processing...`,
        );
      }
    });

    writeArticleIndex();
  });
}

/**
 *  Process a single markdown file into a vue file.
 *    - Reads the markdown file
 *    - Collapses interline markdown (e.g. bold, italic)
 *    - Collapses mutliline markdown (e.g. code blocks, blockquotes, lists)
 *    - Collapses single line markdown (e.g. headings)
 *    - Writes the processed content to a new Vue file
 * @param filePath The filepath of the markdown file
 * @param fileOptions The filename and the date of processing
 */
function processMarkdownFile(filePath, fileOptions) {
  const readStream = fs.createReadStream(filePath, "utf8");
  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity, // Handles both \n and \r\n line endings
  });

  rl.on("line", (line) => {
    line = collapseInterlineMd(line);

    checkMultiline(line);

    if (multilineOptions.alive) {
      switch (multilineOptions.kind) {
        case "pre":
          codeBlockCollapse(line);
          break;
        case "blockquote":
          blockQuoteCollapse(line);
          break;
        case "ul":
          unorderedListCollapse(line);
          break;
        case "ol":
          orderedListCollapse(line);
          break;
        case "metadata":
          processMetadata(line);
          break;
      }
    } else if (checkSingleLine(line)) {
      processSingleLine(line);
    } else {
      state.content += line + "\n";
    }
  });

  rl.on("close", () => {
    if (multilineCache.length > 0 && multilineOptions.alive) {
      multilineOptions.alive = false;
      state.content += wrapMultiline() + "\n";
    }

    // write the processed content to a new Vue file
    const vueFileName = fileOptions.name + ".vue";
    const vueFilePath = path.join(outputDirectory, vueFileName);
    const vueContent = `
<template>
  <div class="Article">
  ${state.content}
  </div>
</template>
`;
    fs.writeFile(vueFilePath, vueContent, (err) => {
      if (err) {
        console.error("Error writing file:", err.message);
      } else {
        console.log("Vue file created:", vueFilePath);
      }
    });
  });
}

/**
 * Looks at an individual line and collapses interline markdown elements
 * @example collapseInterlineMd("This is **bold** text") // This is <strong>bold</strong> text
 * @param line A line of markdown text
 * @returns html string that matches markdown
 */
function collapseInterlineMd(line) {
  line = collapseChunk(line, "***", {
    open: "<strong><em>",
    close: "</strong></em>",
  });
  line = collapseChunk(line, "**", {
    open: "<strong>",
    close: "</strong>",
  });
  line = collapseChunk(line, "*", {
    open: "<em>",
    close: "</em>",
  });
  line = collapseChunk(line, "_", {
    open: "<em>",
    close: "</em>",
  });
  line = collapseChunk(line, "`", {
    open: "<code>",
    close: "</code>",
  });

  // Collapse Links
  while (line.includes("[")) {
    let start = line.indexOf("[");
    let end = line.indexOf("]");
    let linkStart = line.indexOf("(");
    let linkEnd = line.indexOf(")");

    let text = line.slice(start + 1, end);
    let link = line.slice(linkStart + 1, linkEnd);

    let lineStart = line.slice(0, start);
    let lineEnd = line.slice(linkEnd + 1, line.length);

    line = lineStart + `<a href="${link}">${text}</a>` + lineEnd;
  }

  return line;
}

/**
 * Collapses a chunk of markdown into html tags
 * @example collapseChunk("This is **bold** text", "**") // This is <strong>bold</strong> text
 * @param line A line of markdown text
 * @param chunk The chunk of markdown to collapse
 * @param replacement The replacement html tags
 * @returns html string that matches markdown
 */
function collapseChunk(line, chunk, replacement) {
  if (line.includes("```")) return line;
  if (line.includes(chunk)) {
    let openTag = true;
    while (line.includes(chunk)) {
      line = openTag
        ? line.replace(chunk, replacement.open)
        : line.replace(chunk, replacement.close);
      openTag = !openTag;
    }
  }

  return line;
}

/**
 * Checks for multiline markdown elements and sets the multilineOptions
 * @param line a line of markdown text
 */
function checkMultiline(line) {
  if (line.startsWith("```")) {
    multilineOptions.kind = "pre";
    multilineOptions.alive = true;
  }
  if (line.startsWith(">")) {
    multilineOptions.kind = "blockquote";
    multilineOptions.alive = true;
  }
  if (line.startsWith("-")) {
    multilineOptions.kind = "ul";
    multilineOptions.alive = true;
  }
  if (!!line.match(/^\d/)) {
    multilineOptions.kind = "ol";
    multilineOptions.alive = true;
  }
  if (line.startsWith("---")) {
    multilineOptions.kind = "metadata";
    multilineOptions.alive = true;
  }
}

/**
 * Collapses codeblock markdown elements into html tags
 * @param line a line of markdown text
 * @returns void; used to break out of the collapse when the block is opened and closed.
 */
function codeBlockCollapse(line) {
  if (multilineCache.length == 0) {
    multilineCache.push("<code>");
    return;
  } else if (line.startsWith("```") && multilineCache.length > 0) {
    multilineCache.push("</code>");
    multilineOptions.alive = false;
    state.content += wrapMultiline() + "\n";
    return;
  }
  multilineCache.push(line);
}
/**
 * Collapses blockquote markdown elements into html tags
 * @param line a line of markdown text
 * @returns void; used to break out of the collapse when the block is opened and closed.
 */
function blockQuoteCollapse(line) {
  if (!line.startsWith(">") && multilineCache.length > 0) {
    multilineOptions.alive = false;
    state.content += wrapMultiline() + "\n";
    return;
  }
  multilineCache.push(line.slice(1).trim());
}

/**
 * Collapses unordered list markdown elements into html tags
 * @param line a line of markdown text
 * @returns void; used to break out of the collapse when the block is opened and closed.
 */
function unorderedListCollapse(line) {
  if (!line.startsWith("-") && multilineCache.length > 0) {
    multilineOptions.alive = false;
    state.content += wrapMultiline() + "\n";
    return;
  }
  multilineCache.push(`<li>${line.slice(1).trim()}</li>`);
}

/**
 * Collapses ordered list markdown elements into html tags
 * @param line a line of markdown text
 * @returns void; used to break out of the collapse when the block is opened and closed.
 */
function orderedListCollapse(line) {
  if (!line.match(/^\d/) && multilineCache.length > 0) {
    multilineOptions.alive = false;
    state.content += wrapMultiline() + "\n";
    return;
  }
  multilineCache.push(`<li>${line.split(" ")[1]}</li>`);
}

/**
 * Processes file metadata
 * @param line a line of markdown text
 * @returns void; used to break out of the collapse when the block is opened and closed.
 */
function processMetadata(line) {
  /**
   * TODO: Process metadata.
   * Ideally, this treats imaginary markdown as metadata.  Converting a section
   * of the markdown file into an object. Then it will use that object to build
   * a part of the vue file with things like (title, date, tags, and uuid).  This
   * uuid can be used for dynamic routing.
   *
   * To process this further, we'll need to have an idea of what it looks like
   * when completed.  Blocked by building a fake article and getting styling
   * completed.
   */
}

/**
 * Checks if the line is a single line of markdown
 * @param line a line of markdown text
 * @returns true when the line starts with "#" and false for all other lines.
 */
function checkSingleLine(line) {
  if (line.startsWith("#")) return true;
  return false;
}

/**
 * Collapses a single line of markdown into html tags and updates state.content
 * @param line a line of markdown text
 */
function processSingleLine(line) {
  if (line.startsWith("####")) {
    line = line.replace("####", "<h4>") + "</h4>";
  } else if (line.startsWith("###")) {
    line = line.replace("###", "<h3>") + "</h3>";
  } else if (line.startsWith("##")) {
    line = line.replace("##", "<h2>") + "</h2>";
  } else if (line.startsWith("#")) {
    line = line.replace("#", "<h1>") + "</h1>";
  }

  state.content += line + "\n";
}

/**
 * Wraps the multiline cache into a single html tag
 * @param line a line of markdown text
 * @param kind the html tag for the markdown element
 * @returns the html wrapped content
 */
function wrapMultiline(line, kind) {
  let wrappedContent = "";
  wrappedContent += `<${multilineOptions.kind}>\n`;
  multilineCache.forEach((line) => {
    wrappedContent += line + "\n";
  });
  wrappedContent += `</${multilineOptions.kind}>\n`;
  multilineCache = [];
  multilineOptions.kind = "";
  multilineOptions.alive = false;
  return wrappedContent;
}

/**
 * Write an index file that imports and exports all
 * Vue article files.
 */
function writeArticleIndex() {
  let fileImports = ``;

  markdownFiles.forEach((file) => {
    const fileName = fileNameToVueComponentName(removeFileExtension(file));
    fileImports += `import ${fileName} from "./${fileName}.vue";\n `;
  });

  fileImports += `export { \n`;

  markdownFiles.forEach((file) => {
    const fileName = fileNameToVueComponentName(removeFileExtension(file));
    fileImports += `${fileName}, \n `;
  });

  fileImports += `}; \n`;

  const filePath = path.join(
    __dirname,
    "../src/views/BlogView/components/index.ts",
  );

  fs.writeFile(filePath, fileImports, (err) => {
    if (err) {
      console.error("Error writing file:", err.message);
    } else {
      console.log("Article index file created:", filePath);
    }
  });
}

main();
