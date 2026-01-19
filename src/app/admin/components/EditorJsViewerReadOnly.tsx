import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { editorToolsReadOnly } from "../components/editorToolsReadOnly";
interface EditorJsViewerProps {
  data?: any;
}

export default function EditorJsReadOnly({ data }: EditorJsViewerProps) {
  const holderRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<EditorJS | null>(null);
  const prevDataRef = useRef<string | null>(null);

  useEffect(() => {
    const newDataString = JSON.stringify(data);
    if (prevDataRef.current === newDataString) {
      // data is the same, skip re-init
      return;
    }
    prevDataRef.current = newDataString;

    if (!holderRef.current) return;
    if (editorRef.current) {
      editorRef.current.destroy();
      editorRef.current = null;
    }

    (async () => {
      if (!holderRef.current) return;
      const EditorJSModule = (await import("@editorjs/editorjs")).default;

      editorRef.current = new EditorJSModule({
        holder: holderRef.current,
        tools: editorToolsReadOnly,
        data,
        readOnly: true,
        autofocus: false,
      });
    })();

    return () => {
      editorRef.current?.destroy();
      editorRef.current = null;
    };
  }, [data]);

  if (!data || (Array.isArray(data.blocks) && data.blocks.length === 0)) {
    return null;
  }

  return (
    <div ref={holderRef} style={{ border: "1px solid #ddd", padding: 10 }} />
  );
}
