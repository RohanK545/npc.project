import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  const breadcrumbs = [
    { title: "Home", href: "/" },
    { title: "Documents" },
    { pagetitle: "Gazettes Notifications" },
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

  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["documents"].imageSrc}
        breadcrumbs={navigationConfig["documents"].breadcrumbs}
        navItems={navigationConfig["documents"].navItems}
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
