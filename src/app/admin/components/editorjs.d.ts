// src/types/editorjs.d.ts

declare module "@editorjs/marker";
declare module "@editorjs/inline-code";
declare module "@editorjs/checklist";
declare module "@editorjs/warning";
declare module "@editorjs/delimiter";
declare module "@editorjs/table";
declare module "@editorjs/code";
declare module "@editorjs/raw";
declare module "@editorjs/link";
declare module "@editorjs/image";

declare module "@editorjs/embed" {
  import { ToolConstructable } from "@editorjs/editorjs";

  const Embed: ToolConstructable;
  export default Embed;
}


