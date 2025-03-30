import fs, { read } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import readline from "readline";

let state = {
  existingVueFiles: [],
  content: "",
};
let multilineCache = [];
let multilineOptions = {};

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const markdownArticleDirectory = path.join(
  __dirname,
  "../src/views/BlogView/articles",
);
const outputDirectory = path.join(__dirname, "../src/views/BlogView/");

function main() {
  readExistingVueFiles();
  initMarkdownProcessing();
}

// Read Vue Files and append them to the existingVueFiles array
function readExistingVueFiles() {
  fs.readdir(outputDirectory, (err, files) => {
    if (err) {
      console.error("Error reading output directory:", err.message);
      return;
    }

    // Filter only Vue files and store them in an array
    const vueFiles = files.filter((file) => file.endsWith(".vue"));
    vueFiles.forEach((file) => {
      const fileName = file.replace(".vue", "");
      if (fileName !== "BlogView") {
        state.existingVueFiles.push(fileName);
      }
    });
  });
}

// Read markdown files, match them with existing Vue files, and process unmatched files
function initMarkdownProcessing() {
  // Read all files in the directory
  fs.readdir(markdownArticleDirectory, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err.message);
      return;
    }

    // Filter only markdown files and store them in an array
    const markdownFiles = files.filter((file) => file.endsWith(".md"));

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
  });
}

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

  // collapse links
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
}

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

function blockQuoteCollapse(line) {
  if (!line.startsWith(">") && multilineCache.length > 0) {
    multilineOptions.alive = false;
    state.content += wrapMultiline() + "\n";
    return;
  }
  multilineCache.push(line.slice(1).trim());
}

function unorderedListCollapse(line) {
  if (!line.startsWith("-") && multilineCache.length > 0) {
    multilineOptions.alive = false;
    state.content += wrapMultiline() + "\n";
    return;
  }
  multilineCache.push(`<li>${line.slice(1).trim()}</li>`);
}

function orderedListCollapse(line) {
  if (!line.match(/^\d/) && multilineCache.length > 0) {
    multilineOptions.alive = false;
    state.content += wrapMultiline() + "\n";
    return;
  }
  multilineCache.push(`<li>${line.split(" ")[1]}</li>`);
}

function checkSingleLine(line) {
  if (line.startsWith("#")) return true;
  return false;
}

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

main();
