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
        tools: editorToolsReadOnly as any,
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
// import { useEffect, useRef } from "react";
// import type EditorJS from "@editorjs/editorjs";
// import { editorToolsReadOnly } from "../components/editorToolsReadOnly";

// interface EditorJsViewerProps {
//   data?: any;
// }

// export default function EditorJsReadOnly({ data }: EditorJsViewerProps) {
//   const holderRef = useRef<HTMLDivElement>(null);
//   const editorRef = useRef<EditorJS | null>(null);
//   const prevDataRef = useRef<string | null>(null);

//   useEffect(() => {
//     if (!data || !holderRef.current) return;

//     const newDataString = JSON.stringify(data);
//     if (prevDataRef.current === newDataString) return;
//     prevDataRef.current = newDataString;

//     editorRef.current?.destroy();
//     editorRef.current = null;

//     (async () => {
//       const EditorJSModule = (await import("@editorjs/editorjs")).default;

//       editorRef.current = new EditorJSModule({
//         holder: holderRef.current!,
//         tools: editorToolsReadOnly,
//         data,
//         readOnly: true,
//         autofocus: false,
//       });
//     })();

//     return () => {
//       editorRef.current?.destroy();
//       editorRef.current = null;
//     };
//   }, [data]);

//   if (!data?.blocks?.length) return null;

//   return (
//     <div
//       ref={holderRef}
//       className="border rounded p-2 w-100"
//       style={{ maxWidth: "100%" }}
//     />
//   );
// }
