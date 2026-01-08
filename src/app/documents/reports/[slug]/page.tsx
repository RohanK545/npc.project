import { documentDetailsPage } from "@/data/documentDetails";

export default async function AboutUs({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const decodedSlug = decodeURIComponent(resolvedParams.slug);

  // Use pageTitle from searchParams as the key
  const key = resolvedSearchParams.pageTitle as string;
  const pageData = documentDetailsPage[key as keyof typeof documentDetailsPage];

  if (!pageData) {
    return (
      <>
        <div style={{}}></div>
        <section className="maincontent"></section>
      </>
    );
  }

  return (
    <>
      <div style={{}}></div>

      <section className="maincontent">
        <div className="container">
          <h2>{pageData.title}</h2>
          <div
            className="content-box help-editor"
            dangerouslySetInnerHTML={{ __html: pageData.content }}
          ></div>
        </div>
      </section>
    </>
  );
}
