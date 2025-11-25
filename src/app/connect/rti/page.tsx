import InnerBannerSection from "@/components/InnerBannerSection";

export default function AboutUs() {
  const breadcrumbs = [
    { title: "Home", href: "/" },
    { title: "Connect" },
    { pagetitle: "RTI" },
  ];

  const navItems = [
    { label: "Contact Us", href: "/connect/", active: false },
    { label: "Directory", href: "/connect/directory", active: false },
    { label: "RTI", href: "/connect/rti", active: false },
    { label: "Grievance", href: "/connect/grievance", active: false },
    { label: "Redressal", href: "/connect/redressal", active: false },
    { label: "Citizen Engagement", href: "/connect/engagement", active: false },
    {
      label: "Parliament Questions",
      href: "/connect/parliament",
      active: false,
    },
    { label: "Visitors Pass", href: "/connect/visitor-pass", active: false },
  ];

  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc="https://www.dpiit.gov.in/static/uploads/2025/06/e45a8e1f3769a54d12e3cb5cb7ef2ec2.png"
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
