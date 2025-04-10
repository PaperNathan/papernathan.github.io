export default function textFormatter() {
  /**
   * Removes file extension from a filename.
   * @example removeFileExtension("test.vue") => "test"
   * @param fileName - The name of the file to process.
   * @returns The filename without the extension.
   */
  const removeFileExtension = (fileName) => {
    return fileName.split(".")[0];
  };

  /**
   * Converts a filename to a Vue component name.
   * @example fileNameToVueComponentName("test.vue") => "TestView"
   * @param fileName - The name of the file to convert.
   * @returns The converted Vue component name.
   */
  const fileNameToVueComponentName = (fileName) => {
    const name = fileName.replace(".vue", "");
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return { fileNameToVueComponentName, removeFileExtension };
}
