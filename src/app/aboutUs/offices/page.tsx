import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  return (
    <>
      <div style={{}}>
        <InnerBannerSection
          imageSrc={navigationConfig["aboutUs"].imageSrc}
          breadcrumbs={navigationConfig["aboutUs"].breadcrumbs}
          navItems={navigationConfig["aboutUs"].navItems}
          pageTilte="All Offices"
        />
        <h1 className="mt-5">This is Offices Page</h1>
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
    </>
  );
}
