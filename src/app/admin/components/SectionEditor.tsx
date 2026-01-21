"use client";

import { PageSection, ContentBlock } from "../utils";
import { useEffect, useState } from "react";

import axios from "axios";
import ContentBlocksList from "./ContentBlocksList";
interface Props {
  section: PageSection;
  onChange: (section: PageSection) => void;
}
console.log("3");

export default function SectionEditor({ section, onChange }: Props) {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([]);
  const handleContentBlocksChange = (blocks: ContentBlock[]) => {
    setContentBlocks(blocks);

    onChange({
      ...section,
      sectionValue: JSON.stringify(blocks),
    });
  };

  useEffect(() => {
    let mounted = true;
    // setLoading(true);

    axios
      .get<ContentBlock[]>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cms/sections/${section.sectionId}/contents`,
      )
      .then((res) => {
        if (!mounted) return;

        setContentBlocks(res.data);

        // 🔑 sync with parent
        onChange({
          ...section,
        });
      })
      .finally(() => {
        // if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [section.sectionId]);

  return (
    <div className="border rounded mb-3">
      {/* SECTION HEADER */}
      <div
        className="d-flex justify-content-between align-items-center p-2 bg-light cursor-pointer"
        onClick={() => setOpen(!open)}
        // style={{ cursor: "pointer" }}
      >
        <strong>{section.sectionTitle}</strong>
        <span>{open ? "−" : "+"}</span>
      </div>

      {/* SECTION BODY */}
      {open && (
        <div className="p-3">
          <ContentBlocksList
            contentBlocks={contentBlocks}
            setContentBlocks={setContentBlocks}
          />
        </div>
      )}
    </div>
  );
}
