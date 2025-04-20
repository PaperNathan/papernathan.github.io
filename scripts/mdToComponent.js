import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import readline from "readline";
import crypto from "crypto";

let existingComponentFiles = [];
let multilineCache = [];
let multilineOptions = {};
let componentFiles = [];
let markdownFiles = [];
let markdownProcessingCounter = 0;

let importFileString = `export default [\n`;

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const markdownArticleDirectory = path.join(
  __dirname,
  "../src/pages/Blog/articles"
);
const outputDirectory = path.join(__dirname, "../src/pages/Blog/components");

/**
 * Main function to initialize the script
 */
function main() {
  readexistingComponentFiles();
  initMarkdownProcessing();
}

/**
 * Reads the existing  files in the output directory
 * and populates the existingComponentFiles array.
 */
function readexistingComponentFiles() {
  fs.readdir(outputDirectory, (err, files) => {
    if (err) {
      console.error("Error reading output directory:", err.message);
      return;
    }

    // Filter only  files and store them in an array
    componentFiles = files.filter((file) => file.endsWith(".tsx"));
    componentFiles.forEach((file) => {
      const fileName = file.replace(".tsx", "");
      existingComponentFiles.push(fileName);
    });
  });
}

/**
 * Read all markdown files from the articles directory
 * Check for nonexistant  files and process the markdown files
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
    markdownFiles.forEach((file, i) => {
      const fileName = file.replace(".md", "");
      const filePath = path.join(markdownArticleDirectory, file);

      // Send it brother!
      const fileOptions = {
        name: fileName,
        date: new Date(),
      };

      processMarkdownFile(filePath, fileOptions, () => {
        markdownProcessingCounter++;
        if (markdownProcessingCounter == markdownFiles.length) {
          writeArticleIndex();
        }
      });
    });
  });
}

/**
 *  Process a single markdown file into a  file.
 *    - Reads the markdown file
 *    - Collapses interline markdown (e.g. bold, italic)
 *    - Collapses mutliline markdown (e.g. code blocks, blockquotes, lists)
 *    - Collapses single line markdown (e.g. headings)
 *    - Writes the processed content to a new  file
 * @param filePath The filepath of the markdown file
 * @param fileOptions The filename and the date of processing
 */
function processMarkdownFile(filePath, fileOptions, onComplete) {
  const readStream = fs.createReadStream(filePath, "utf8");
  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity, // Handles both \n and \r\n line endings
  });

  multilineCache = [];
  multilineOptions = { alive: false, kind: "" };
  let localMetadata = {};
  let content = { value: "" };

  rl.on("line", (line) => {
    console.log("Original line:", line);
    line = collapseInterlineMd(line);

    checkMultiline(line);

    if (multilineOptions.alive) {
      switch (multilineOptions.kind) {
        case "pre":
          codeBlockCollapse(line, content);
          break;
        case "blockquote":
          blockQuoteCollapse(line, content);
          break;
        case "ul":
          unorderedListCollapse(line, content);
          break;
        case "ol":
          orderedListCollapse(line, content);
          break;
        case "metadata":
          processMetadata(line, localMetadata);
          break;
      }
    } else if (checkSingleLine(line)) {
      processSingleLine(line, content);
    } else {
      content.value += line + "\n";
    }
  });

  rl.on("close", () => {
    if (multilineCache.length > 0 && multilineOptions.alive) {
      multilineOptions.alive = false;
      content.value += wrapMultiline() + "\n";
    }

    // write the processed content to a new file
    const componentFileName = fileOptions.name + ".tsx";
    const componentFilePath = path.join(outputDirectory, componentFileName);
    const componentContent = `export default function ${fileOptions.name}() {
  return (
    <div>
      <h1>${fileOptions.name}</h1>
      ${content.value}
    </div>
  );
}\n
`;

    // add the metadata to the import file
    localMetadata.id = crypto.randomUUID();

    importFileString =
      `import ${fileOptions.name} from "./${fileOptions.name}.tsx";\n` +
      importFileString;
    importFileString += `{ component: ${
      fileOptions.name
    }, metadata: ${JSON.stringify(localMetadata)} },\n`;

    fs.writeFile(componentFilePath, componentContent, (err) => {
      if (err) {
        console.error("Error writing file:", err.message);
      } else {
        console.log("File created:", componentFilePath);
      }
    });

    onComplete();
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

    line =
      lineStart + `<a href="${link}" target="_blank">${text}</a>` + lineEnd;
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
function codeBlockCollapse(line, content) {
  if (multilineCache.length == 0) {
    multilineCache.push("<code>");
    return;
  } else if (line.startsWith("```") && multilineCache.length > 0) {
    multilineCache.push("</code>");
    content.value += wrapMultiline() + "\n";
    return;
  }
  multilineCache.push(line);
}
/**
 * Collapses blockquote markdown elements into html tags
 * @param line a line of markdown text
 * @returns void; used to break out of the collapse when the block is opened and closed.
 */
function blockQuoteCollapse(line, content) {
  if (!line.startsWith(">") && multilineCache.length > 0) {
    content.value += wrapMultiline() + "\n";
    return;
  }
  multilineCache.push(line.slice(1).trim());
}

/**
 * Collapses unordered list markdown elements into html tags
 * @param line a line of markdown text
 * @returns void; used to break out of the collapse when the block is opened and closed.
 */
function unorderedListCollapse(line, content) {
  if (!line.startsWith("-") && multilineCache.length > 0) {
    content.value += wrapMultiline() + "\n";
    return;
  }
  multilineCache.push(`<li>${line.slice(1).trim()}</li>`);
}

/**
 * Collapses ordered list markdown elements into html tags
 * @param line a line of markdown text
 * @returns void; used to break out of the collapse when the block is opened and closed.
 */
function orderedListCollapse(line, content) {
  if (!line.match(/^\d/) && multilineCache.length > 0) {
    content.value += wrapMultiline() + "\n";
    return;
  }
  multilineCache.push(`<li>${line.split(" ")[1]}</li>`);
}

/**
 * Processes file metadata
 * @param line a line of markdown text
 * @returns void; used to break out of the collapse when the block is opened and closed.
 */
function processMetadata(line, localMetadata) {
  if (line.startsWith("---") && Object.keys(localMetadata).length == 0) {
    return;
  } else if (line.startsWith("---") && Object.keys(localMetadata).length == 0) {
    multilineOptions.alive = false;
    return;
  }
  if (line.includes("title:")) {
    localMetadata.title = line.split(":")[1].trim();
  }
  if (line.includes("description:")) {
    localMetadata.description = line.split(":")[1].trim();
  }
  if (line.includes("tags:")) {
    localMetadata.tags = line.split(":")[1].trim().split(",");
  }
  if (line.includes("date:")) {
    localMetadata.date = line.split(":")[1].trim();
  }
  if (line.includes("image:")) {
    localMetadata.image = line.split(":")[1].trim();
  }
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
 * Collapses a single line of markdown into html tags and updates content
 * @param line a line of markdown text
 */
function processSingleLine(line, content) {
  if (line.startsWith("####")) {
    line = line.replace("####", "<h4>") + "</h4>";
  } else if (line.startsWith("###")) {
    line = line.replace("###", "<h3>") + "</h3>";
  } else if (line.startsWith("##")) {
    line = line.replace("##", "<h2>") + "</h2>";
  } else if (line.startsWith("#")) {
    line = line.replace("#", "<h1>") + "</h1>";
  }

  content.value += line + "\n";
}

/**
 * Wraps the multiline cache into a single html tag
 * @param line a line of markdown text
 * @param kind the html tag for the markdown element
 * @returns the html wrapped content
 */
function wrapMultiline() {
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
 * Article files.
 */
function writeArticleIndex() {
  const filePath = path.join(
    __dirname,
    "../src/pages/Blog/components/index.ts"
  );

  importFileString += `];\n`;

  fs.writeFile(filePath, importFileString, (err) => {
    if (err) {
      console.error("Error writing file:", err.message);
    } else {
      console.log("Article index file created:", filePath);
    }
  });
}

main();
