import InnerBannerSection from "@/components/InnerBannerSection";
import { documentDetailsPage } from "@/data/documentDetails";
import { navigationConfig } from "@/config/naviagtion";

export default async function AboutUs({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const breadcrumbs = [
    { title: "Home", href: "/" },
    { title: "Documents" },
    { title: "Reports" },
  ];

  const navItems = [
    { label: "Reports", href: "/documents/", active: false },
    {
      label: "Acts And Policies",
      href: "/documents/acts-policies",
      active: false,
    },
    {
      label: "Orders And Notices",
      href: "/documents/orders-notices",
      active: false,
    },
    { label: "Publications", href: "/documents/publications", active: false },
    { label: "Press Release", href: "/documents/press-release", active: false },
    {
      label: "Gazettes Notifications",
      href: "/documents/gazettes",
      active: false,
    },
    { label: "Guidelines", href: "/documents/guidelines", active: false },
  ];

  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const decodedSlug = decodeURIComponent(resolvedParams.slug);

  console.log("DECODED SLUG:", decodedSlug);
  console.log("SEARCH PARAMS:", resolvedSearchParams);

  // Use pageTitle from searchParams as the key
  const key = resolvedSearchParams.pageTitle as string;
  const pageData = documentDetailsPage[key as keyof typeof documentDetailsPage];

  console.log("KEY:", key);
  console.log("PAGE DATA:", pageData);

  if (!pageData) {
    return (
      <>
        <div style={{}}>
          <InnerBannerSection
            imageSrc={navigationConfig["documents"].imageSrc}
            breadcrumbs={navigationConfig["documents"].breadcrumbs}
            navItems={navigationConfig["documents"].navItems}
          />
        </div>
        <section className="maincontent">
          <div className="container">
            <h2>Page Not Found</h2>
            <p>The requested page "{key}" could not be found.</p>
            <p>
              Available pages: {Object.keys(documentDetailsPage).join(", ")}
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <div style={{}}>
        <InnerBannerSection
          imageSrc="https://www.dpiit.gov.in/static/uploads/2025/06/9474b41fcf967c101e7d4939b7b03d5e.jpg"
          breadcrumbs={breadcrumbs}
          navItems={navItems}
        />
      </div>

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
