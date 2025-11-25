import InnerBannerSection from "@/components/InnerBannerSection";

export default function AboutUs() {
  const breadcrumbs = [
    { title: "Home", href: "/" },
    { title: "Offerings" },
    { pagetitle: "Schemes And Services" },
  ];

  const navItems = [
    { label: "Schemes and Services", href: "/offerings/", active: false },
    { label: "Tenders", href: "/offerings/tenders", active: false },
    { label: "For Investors", href: "/offerings/investors", active: false },
    {
      label: "Engagement and Recognition",
      href: "/offerings/engagement",
      active: false,
    },
    { label: "Initiative", href: "/offerings/initiative", active: false },
  ];

  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc="https://www.dpiit.gov.in/static/uploads/2025/06/9b3eaee6c86383232d03dd247ad6fb2c.png"
        breadcrumbs={breadcrumbs}
        navItems={navItems}
      />
      <h1 className="mt-5">This is Ministry Page</h1>
      {/* <p>
        Welcome to the official website. The header should be visible above this
        content.
      </p> */}

      {/* Test content to see if skip link works */}

      <div style={{ marginTop: "2rem" }}>
        <h2>Test Content</h2>
        <p>If the header is working correctly, you should see:</p>
        <ul>
          <li>Government of India branding</li>
          <li>Ministry name</li>
          <li>Skill India logo</li>
          <li>Navigation menu</li>
          <li>Search bar</li>
        </ul>
      </div>
    </div>
  );
}
