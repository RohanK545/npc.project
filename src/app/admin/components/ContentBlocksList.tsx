import { useState } from "react";
import EditorJsViewer from "../components/EditorJsViewer";
import { ContentBlock } from "../utils";
import EditorJsViewerReadOnly from "./EditorJsViewerReadOnly";
// import SectionEditor from "../components/SectionEditor";

interface Props {
  contentBlocks: ContentBlock[];
  setContentBlocks: (blocks: ContentBlock[]) => void;
}
console.log("4");

export default function ContentBlocksList({
  contentBlocks,
  setContentBlocks,
}: Props) {
  const [editingContentId, setEditingContentId] = useState<number | null>(null);
  console.log(contentBlocks);
  if (!contentBlocks || contentBlocks.length === 0) {
    return null; // or loader
  }

  const handleChange = (contentId: number, newData: ContentBlock) => {
    const updatedBlocks = contentBlocks.map((block) =>
      block.contentId === contentId
        ? { ...block, contentValue: JSON.stringify(newData) }
        : block,
    );
    setContentBlocks(updatedBlocks);
  };

  const handleSave = () => {
    // TODO: persist updated contentBlocks to backend or context
    setEditingContentId(null);
  };

  const cancelEditing = () => {
    setEditingContentId(null);
  };

  return (
    <>
      {contentBlocks.map((content) => {
        const editorData =
          typeof content.contentValue === "string"
            ? JSON.parse(content.contentValue)
            : content.contentValue;

        const isEditing = content.contentId === editingContentId;

        return (
          <div key={content.contentId} className="mb-3 border rounded p-2">
            {isEditing ? (
              <>
                {/* <EditorJsViewer
                  key={`edit-${content.contentId}`}
                  data={editorData}
                  onChange={(data) => handleChange(content.contentId, data)}
                /> */}
                <div className="mt-2">
                  <button className="btn btn-primary me-2" onClick={handleSave}>
                    Save
                  </button>
                  <button className="btn btn-secondary" onClick={cancelEditing}>
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <EditorJsViewerReadOnly
                  key={`view-${content.contentId}`}
                  data={editorData}
                />
                <button
                  className="btn btn-link mt-2"
                  onClick={() => setEditingContentId(content.contentId)}
                >
                  Edit
                </button>
              </>
            )}
          </div>
        );
      })}
    </>
  );
}
