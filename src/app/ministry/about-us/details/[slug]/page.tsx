import InnerBannerSection from "@/components/InnerBannerSection";
import { ministryDetailPages } from "@/data/ministryDetails";
import { navigationConfig } from "@/config/naviagtion";

export default async function AboutUs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const breadcrumbs = [
    { title: "Home", href: "/" },
    { title: "Ministry" },
    { title: "About Us" },
  ];

  const navItems = [
    { label: "About Us", href: "/ministry/", active: false },
    { label: "Our Team", href: "/ministry/our-team", active: false },
    {
      label: "Our Organizations",
      href: "/ministry/organization",
      active: false,
    },
    { label: "Our Performance", href: "/ministry/performance", active: false },
    { label: "Our Groups", href: "/ministry/groups", active: false },
    { label: "Directory", href: "/ministry/directory", active: false },
  ];
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug);

  console.log("DECODED SLUG:", decodedSlug);

  const key = extractKeyFromSlug(decodedSlug);
  const pageData = ministryDetailPages[key as keyof typeof ministryDetailPages];
  console.log(pageData);
  if (!pageData) return <h2>Page Not Found</h2>;

  function extractKeyFromSlug(slug: string) {
    const match = slug.match(/Title=([^]+)-[A-Za-z0-9]+$/);
    return match ? match[1] : "";
  }

  return (
    <>
      <div style={{}}>
        <InnerBannerSection
          imageSrc={navigationConfig["ministry"].imageSrc}
          breadcrumbs={navigationConfig["ministry"].breadcrumbs}
          navItems={navigationConfig["ministry"].navItems}
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
