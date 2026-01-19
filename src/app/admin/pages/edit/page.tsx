"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import ContentEditor from "../../components/ContentEditor";
import PageSettings from "../../components/PageSettings";
import { PageEditor, PageSection } from "../../utils";
import axios from "axios";
import EditorJsViewerReadOnly from "../../components/EditorJsViewerReadOnly";
import EditorJsViewer from "../../components/EditorJsViewer";
import LightweightModal from "../../components/LightweightModal";

export default function EditPage() {
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSectionId, setModalSectionId] = useState<number | null>(null);
  const id = searchParams.get("id");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<PageEditor>({
    pageId: 0,
    metaTitle: "",
    slug: "",
    status: "Draft",
    metaDescription: "",
    sections: [],
  });
  const [editingContentId, setEditingContentId] = useState<number | null>(null);

  const [sections, setSections] = useState<PageSection[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(true);
    }, 0);

    axios
      .get<PageEditor>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cms/pages/${id}`,
      )
      .then((res) => {
        setPage(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
        clearTimeout(timeout);
      });
  }, [id]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(true);
    }, 0);

    axios
      .get<PageSection[]>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cms/pages/${id}/sections`,
      )
      .then((res) => {
        setSections(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
        clearTimeout(timeout);
      });
  }, [id]);
  console.log("1");

  const savePage = async () => {
    try {
      await axios.put(`/api/pages/${id}/editor`, page, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Page saved");
    } catch (error) {
      console.error("Error saving page:", error);
      alert("Failed to save page. Please try again.");
    }
  };
  const handleSave = async () => {
    if (editingContentId === null) return;

    try {
      // Find the updated section from local state
      const sectionToSave = sections.find(
        (s) => s.sectionId === editingContentId,
      );
      if (!sectionToSave) return;

      await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cms/sections/${editingContentId}`,
        {
          sectionTitle: sectionToSave.sectionTitle,
          sectionType: sectionToSave.sectionType,
          sectionValue: sectionToSave.sectionValue,
          isActive: true, // or your logic here
        },
      );

      alert("Section saved");
      setEditingContentId(null);
    } catch (error) {
      console.error("Error saving section:", error);
      alert("Failed to save section");
    }
  };

  const handleChange = (contentId: number, newData: string) => {
    const updatedBlocks = sections.map((block) =>
      block.sectionId === contentId
        ? { ...block, sectionValue: JSON.stringify(newData) }
        : block,
    );
    setSections(updatedBlocks);
  };
  const moveSection = (index: number, direction: "up" | "down") => {
    setSections((prev) => {
      const newSections = [...prev];
      const targetIndex = direction === "up" ? index - 1 : index + 1;

      if (targetIndex < 0 || targetIndex >= newSections.length) {
        return prev;
      }

      [newSections[index], newSections[targetIndex]] = [
        newSections[targetIndex],
        newSections[index],
      ];

      return newSections.map((s, i) => ({
        ...s,
        order: i + 1,
      }));
    });
  };

  const saveSectionOrder = async () => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cms/sections/reorder`,
        sections.map((s) => ({
          sectionId: s.sectionId,
          order: s.displayOrder,
        })),
      );

      alert("Section order updated");
    } catch (error) {
      console.error(error);
      alert("Failed to update order");
    }
  };

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
              onChange={(data) => handleChange(modalSectionId, data)}
            />
          )}
        </LightweightModal>
      </div>
    </div>
  );
}
