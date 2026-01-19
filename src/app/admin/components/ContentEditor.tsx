"use client";

import { PageSection } from "../utils";
import SectionEditor from "../components/SectionEditor";

interface Props {
  sections: PageSection[];
  onChange: (sections: PageSection[]) => void;
}
console.log("2");

export default function ContentEditor({ sections, onChange }: Props) {
  const updateSection = (index: number, section: PageSection) => {
    const updated = [...sections];
    updated[index] = section;
    onChange(updated);
  };

  return (
    <div className="card">
      <div className="card-header fw-bold">Page Content</div>

      <div className="card-body">
        {sections.length === 0 && (
          <div className="text-muted">No sections added</div>
        )}

        {sections.map((section, index) => (
          <SectionEditor
            key={section.sectionId}
            section={section}
            onChange={(updated) => updateSection(index, updated)}
          />
        ))}
      </div>
    </div>
  );
}
