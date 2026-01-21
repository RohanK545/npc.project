"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Page {
  id: number;
  title: string;
  slug: string;
  metaTitle?: string | null;
  metaDescription?: string | null;
  isPublished?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export default function PagesList() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchPages() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cms/pages`,
        );
        setPages(res.data);
      } catch (err) {
        setError("Failed to load pages");
      } finally {
        setLoading(false);
      }
    }
    fetchPages();
  }, []);
  const goToDetails = () => {
    router.push("/admin/pages/details");
  };
  const GoBack = () => {
    router.push("/admin/dashboard");
  };
  const goToEdit = (id: number) => {
    router.push(`/admin/pages/edit?id=${id}`);
  };

  if (loading) return <div>Loading pages...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Pages List</h2>
      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Slug</th>
            {/* <th>Meta Title</th>
            <th>Meta Description</th> */}
            <th>Published</th>
            <th>Created On</th>
            {/* <th>Updated On</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pages.length === 0 ? (
            <tr>
              <td colSpan={8} className="text-center">
                No pages found.
              </td>
            </tr>
          ) : (
            pages.map((page) => (
              <tr key={page.id}>
                <td>{page.id}</td>
                <td>{page.title}</td>
                <td>{page.slug}</td>
                {/* <td>{page.metaTitle ?? "-"}</td>
                <td>{page.metaDescription ?? "-"}</td> */}
                <td>{page.isPublished ? "Yes" : "No"}</td>
                {/* <td>
                  {page.createdAt
                    ? new Date(page.createdAt).toLocaleDateString()
                    : "-"}
                </td> */}
                <td>
                  {page.updatedAt
                    ? new Date(page.updatedAt).toLocaleDateString()
                    : "-"}
                </td>
                <td className="text-center">
                  <div className="d-flex justify-content-center gap-2">
                    {/* <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={goToDetails}
                    >
                      Details
                    </button> */}
                    <button className="btn btn-sm btn-outline-secondary">
                      <h4>View</h4>
                    </button>

                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => goToEdit(page.id)}
                    >
                      <h4>Edit</h4>
                    </button>

                    <button className="btn btn-sm btn-danger">
                      <h4>Delete</h4>
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="d-flex justify-content-end gap-3 mt-5 me-4">
        <button className="btn btn-secondary" onClick={() => GoBack()}>
          Back
        </button>
      </div>
    </div>
  );
}
