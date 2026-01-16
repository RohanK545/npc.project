"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Page {
  id: number;
  title: string;
  slug: string;
  createdOn: string;
}

export default function PagesList() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPages() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cms/pages`
        );
        setPages(res.data);
      } catch (err: any) {
        setError("Failed to load pages");
      } finally {
        setLoading(false);
      }
    }
    fetchPages();
  }, []);

  if (loading) return <div>Loading pages...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container py-4">
      <h2 className="mb-4">Pages List</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Created On</th>
          </tr>
        </thead>
        <tbody>
          {pages.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center">
                No pages found.
              </td>
            </tr>
          ) : (
            pages.map((page) => (
              <tr key={page.id}>
                <td>{page.id}</td>
                <td>{page.title}</td>
                <td>{page.slug}</td>
                <td>{new Date(page.createdOn).toLocaleDateString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
