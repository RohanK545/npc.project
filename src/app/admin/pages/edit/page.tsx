import { Suspense } from "react";
import EditPageClient from "./EditPageClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading editor...</div>}>
      <EditPageClient />
    </Suspense>
  );
}
