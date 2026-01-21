// src/app/admin/editor/editorTools.ts
"use client";
import dynamic from "next/dynamic";

import type EditorJS from "@editorjs/editorjs";

import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Delimiter from "@editorjs/delimiter";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
// import Checklist from "@editorjs/checklist";
const Checklist = dynamic(() => import("@editorjs/checklist"), { ssr: false });
const LinkTool = dynamic(() => import("@editorjs/link"), { ssr: false });

const ImageTool = dynamic(() => import("@editorjs/image"), { ssr: false });

import Code from "@editorjs/code";
import Raw from "@editorjs/raw";
import Embed from "@editorjs/embed";
// import LinkTool from "@editorjs/link";
// import ImageTool from "@editorjs/image";

export const editorTools: EditorJS.EditorConfig["tools"] = {
  header: {
    class: Header as unknown as EditorJS.ToolConstructable,
    inlineToolbar: true,
    config: {
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 2,
    },
  },

  paragraph: {
    class: Paragraph as unknown as EditorJS.ToolConstructable,
    inlineToolbar: true,
  },

  list: {
    class: List,
    inlineToolbar: true,
  },

  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: "Enter quote",
      captionPlaceholder: "Quote author",
    },
  },

  delimiter: Delimiter,

  table: {
    class: Table,
    inlineToolbar: true,
  },

  warning: {
    class: Warning,
    inlineToolbar: true,
    config: {
      titlePlaceholder: "Warning title",
      messagePlaceholder: "Warning message",
    },
  },

  marker: {
    class: Marker,
  },

  inlineCode: {
    class: InlineCode,
  },

  checklist: {
    class: Checklist,
    inlineToolbar: true,
  },

  code: {
    class: Code,
  },

  raw: {
    class: Raw,
  },

  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        twitter: true,
        instagram: true,
      },
    },
  },

  linkTool: {
    class: LinkTool,
    config: {
      endpoint: "/api/link-preview", // Your backend link preview endpoint
    },
  },

  image: {
    class: ImageTool,
    config: {
      endpoints: {
        byFile: "/api/upload/image", // Your backend file upload endpoint
        byUrl: "/api/upload/image-by-url", // Your backend URL upload endpoint
      },
    },
  },
} as any;
