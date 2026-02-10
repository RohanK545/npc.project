import { Suspense } from "react";
import EditPageClient from "./EditPageClient";

export default function Page() {
  return (
    <div className="container-fluid">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          className="form-control w-50"
          value={page.metaTitle ?? ""}
          placeholder="Page Title"
          onChange={(e) => setPage({ ...page, metaTitle: e.target.value })}
        />

        <div>
          <button className="btn btn-secondary me-2" onClick={savePage}>
            Save Draft
          </button>
          <button className="btn btn-primary">Publish</button>
        </div>
      </div>

      {/* BODY */}
      <div className="row">
        {/* LEFT – SECTIONS & BLOCKS */}
        <div className="col-md-8">
          <div className="mb-3 d-flex justify-content-end">
            <button className="btn btn-warning" onClick={saveSectionOrder}>
              Save Section Order
            </button>
          </div>

          {sections.map((section, index) => {
            let editorData;
            try {
              editorData = section.sectionValue
                ? JSON.parse(section.sectionValue)
                : {};
            } catch {
              editorData = {};
            }

            return (
              <div key={section.sectionId} className="mb-3 border rounded p-2">
                <EditorJsViewerReadOnly data={editorData} />

                <div className="d-flex justify-content-between align-items-center mt-2">
                  <strong>{section.sectionTitle}</strong>

                  <div className="btn-group btn-group-sm">
                    <button
                      className="btn btn-outline-secondary"
                      disabled={index === 0}
                      onClick={() => moveSection(index, "up")}
                    >
                      ↑
                    </button>

                    <button
                      className="btn btn-outline-secondary"
                      disabled={index === sections.length - 1}
                      onClick={() => moveSection(index, "down")}
                    >
                      ↓
                    </button>
                  </div>
                </div>

                <button
                  className="btn btn-link mt-2"
                  onClick={() => {
                    setModalSectionId(section.sectionId);
                    setIsModalOpen(true);
                  }}
                >
                  Edit
                </button>
              </div>
            );
          })}
        </div>

        {/* RIGHT – PAGE SETTINGS */}
        <div className="col-md-4">
          <PageSettings page={page} setPage={setPage} />
        </div>
        <LightweightModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={`Edit Section #${modalSectionId}`}
        >
          {modalSectionId !== null && (
            <EditorJsViewer
              data={JSON.parse(
                sections.find((s) => s.sectionId === modalSectionId)
                  ?.sectionValue || "{}",
              )}
              onChange={(data) => handleChange(modalSectionId, JSON.stringify(data))}
            />
          )}
        </LightweightModal>
      </div>
    </div>
    <Suspense fallback={<div>Loading editor...</div>}>
      <EditPageClient />
    </Suspense>
  );
}
