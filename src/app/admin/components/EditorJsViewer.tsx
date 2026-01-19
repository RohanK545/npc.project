"use client";

import { useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { editorTools } from "../components/editorTools";

interface EditorJsEditableProps {
  data?: OutputData;
  onChange?: (data: OutputData) => void;
  readOnly?: boolean;
}

export default function EditorJsEditable({
  data,
  onChange,
  readOnly = false,
}: EditorJsEditableProps) {
  const holderRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<EditorJS | null>(null);
  const isReadyRef = useRef(false);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!holderRef.current) return;

    // Destroy previous instance
    if (editorRef.current) {
      editorRef.current.destroy();
      editorRef.current = null;
    }

    isReadyRef.current = false;

    (async () => {
      const EditorJSModule = (await import("@editorjs/editorjs")).default;

      editorRef.current = new EditorJSModule({
        holder: holderRef.current!,
        tools: editorTools,
        data,
        readOnly,
        autofocus: !readOnly,
        onReady: () => {
          isReadyRef.current = true;
        },
      });

      const saveData = () => {
        if (!isReadyRef.current || !onChange) return;

        if (saveTimeoutRef.current) {
          clearTimeout(saveTimeoutRef.current);
        }

        saveTimeoutRef.current = setTimeout(async () => {
          const output = await editorRef.current?.save();
          if (output) onChange(output);
        }, 300);
      };

      // editorRef.current.blocks?.on("change", saveData);
    })();

    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
      editorRef.current?.destroy();
      editorRef.current = null;
    };
  }, [data, onChange, readOnly]);

  return <div ref={holderRef} className=" p-2" />;
}
