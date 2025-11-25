import InnerBannerSection from "@/components/InnerBannerSection";

export default function AboutUs() {
  const breadcrumbs = [
    { title: "Home", href: "/" },
    { title: "Media" },
    { pagetitle: "Photos" },
  ];

  const navItems = [
    { label: "Photos", href: "/media/", active: false },
    { label: "Videos", href: "/media/videos", active: false },
    { label: "Brochures", href: "/media/brochures", active: false },
    { label: "Presentations", href: "/media/presentations", active: false },
  ];

  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc="https://www.dpiit.gov.in/static/uploads/2025/07/8b54c11ddcb82678812725f58a046454.png"
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
