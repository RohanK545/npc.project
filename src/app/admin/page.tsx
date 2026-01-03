"use client";

import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";
import Table from "@editorjs/table";

const AdminEditor: React.FC = () => {
  const ejInstance = useRef<EditorJS | null>(null);
  const editorHolderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!editorHolderRef.current || ejInstance.current) return;

    ejInstance.current = new EditorJS({
      holder: editorHolderRef.current,
      placeholder: "Start writing content here...",
      tools: {
        paragraph: {
          class: Paragraph as any,
          inlineToolbar: true,
        },
        header: {
          class: Header,
          inlineToolbar: true,
          config: {
            levels: [2, 3, 4],
            defaultLevel: 3,
          },
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
        },
      },
    });

    return () => {
      ejInstance.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  const saveContent = async () => {
    if (!ejInstance.current) return;

    try {
      const output = await ejInstance.current.save();
      console.log("Saved data:", output);

      // Send JSON to backend
      // await api.savePageContent(output);
    } catch (error) {
      console.error("Failed to save content:", error);
    }
  };

  return (
    <div>
      <div
        ref={editorHolderRef}
        style={{
          border: "1px solid #ccc",
          padding: "12px",
          borderRadius: "4px",
        }}
      />
      <button onClick={saveContent} style={{ marginTop: "10px" }}>
        Save Content
      </button>
    </div>
  );
};

export default AdminEditor;
