import InnerBannerSection from "@/components/InnerBannerSection";
import { ministryDetailPages } from "@/data/ministryDetails";

export default function AboutUs({ params }: { params: { slug: string } }) {
  const breadcrumbs = [
    { title: "Home", href: "/" },
    { title: "Ministry" },
    { title: "About Us" },
  ];

  const navItems = [
    { label: "About Us", href: "/ministry/", active: false },
    { label: "Our Team", href: "/ministry/our-team", active: false },
    { label: "Our Division", href: "/ministry/division", active: false },
    {
      label: "Our Organization",
      href: "/ministry/organization",
      active: false,
    },
    { label: "Our Performance", href: "/ministry/performance", active: false },
    { label: "Directory", href: "/ministry/directory", active: false },
  ];
  const slug = params.slug as keyof typeof ministryDetailPages;
  console.log(slug);
  const pageData = ministryDetailPages[slug];
  if (!pageData) {
    return <h2>Page Not Found</h2>;
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

          {/* Render HTML content */}
          <div
            className="content-box help-editor"
            dangerouslySetInnerHTML={{ __html: pageData.content }}
          ></div>
        </div>
      </section>
    </>
  );
}
