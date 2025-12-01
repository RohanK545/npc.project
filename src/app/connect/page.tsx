import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  const breadcrumbs = [
    { title: "Home", href: "/" },
    { title: "Connect" },
    { pagetitle: "Contact Us" },
  ];

  const navItems = [
    { label: "Contact Us", href: "/ministry/", active: false },
    { label: "Our Team", href: "/ministry/our-team", active: true },
    { label: "Our Division", href: "/ministry/division", active: false },
    {
      label: "Our Organizations",
      href: "/ministry/our-organization",
      active: false,
    },
    { label: "Our Performance", href: "/ministry/performance", active: false },
    { label: "Directory", href: "/ministry/directory", active: false },
  ];
  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["ministry"].imageSrc}
        breadcrumbs={navigationConfig["ministry"].breadcrumbs}
        navItems={navigationConfig["ministry"].navItems}
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
