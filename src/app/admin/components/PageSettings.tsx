"use client";

import { PageEditor } from "../utils";
import { Dispatch, SetStateAction } from "react";

interface Props {
  page: PageEditor | null;
  setPage: Dispatch<SetStateAction<PageEditor>>;
}

export default function PageSettings({ page, setPage }: Props) {
  if (!page) return null;
  return (
    <>
      {/* BASIC SETTINGS */}
      <div className="card mb-3">
        <div className="card-header fw-bold">Page Settings</div>
        <div className="card-body">
          <label>Slug</label>
          <input
            className="form-control mb-2"
            value={page.slug}
            onChange={(e) => setPage({ ...page, slug: e.target.value })}
          />

          <label>Status</label>
          <select
            className="form-select"
            value={page.status}
            onChange={(e) =>
              setPage({
                ...page,
                status: e.target.value as "Draft" | "Published",
              })
            }
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
          </select>
        </div>
      </div>

      {/* SEO */}
      <div className="card">
        <div className="card-header fw-bold">SEO</div>
        <div className="card-body">
          <input
            className="form-control mb-2"
            placeholder="Meta Title"
            value={page.metaTitle}
            onChange={(e) => setPage({ ...page, metaTitle: e.target.value })}
          />

          <textarea
            className="form-control"
            // rows="3"
            placeholder="Meta Description"
            value={page.metaDescription}
            onChange={(e) =>
              setPage({ ...page, metaDescription: e.target.value })
            }
          />
        </div>
      </div>
    </>
  );
}
