// src/app/admin/editor/editorToolsReadOnly.ts

import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Delimiter from "@editorjs/delimiter";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import Code from "@editorjs/code";
import Raw from "@editorjs/raw";
import Embed from "@editorjs/embed";

export const editorToolsReadOnly = {
  header: {
    class: Header,
    inlineToolbar: true,
    config: {
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 2,
    },
  },

  paragraph: {
    class: Paragraph,
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

};
