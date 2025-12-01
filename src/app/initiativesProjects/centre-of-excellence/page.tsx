import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["initiativeProjects"].imageSrc}
        breadcrumbs={navigationConfig["initiativeProjects"].breadcrumbs}
        navItems={navigationConfig["initiativeProjects"].navItems}
        pageTilte="Centre of Excellence"
      />
      <h1 className="mt-5">This is Ministry Page</h1>
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
