// Menu options for the sidebar file system navigation
import type { FileDisplayOptions } from "@/components/MenuOptions/MenuOptions";

export const fileSystemMenuOptions: FileDisplayOptions[] = [
  {
    fileType: "yml",
    fileName: "nathan",
    linkPath: "/"
  },
  {
    fileType: "doc",
    fileName: "resume",
    linkPath: "/resume"
  },
  {
    fileType: "json",
    fileName: "stack",
    linkPath: "/stack"
  },
  {
    fileType: "git",
    fileName: "about",
    linkPath: "/about"
  }
]