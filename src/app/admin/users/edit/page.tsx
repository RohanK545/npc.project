import { Suspense } from "react";
import EditUserClient from "./EditUserClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading user editor...</div>}>
      <EditUserClient />
    </Suspense>
  );
}
