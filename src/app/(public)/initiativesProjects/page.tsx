import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["initiativeProjects"].imageSrc}
        breadcrumbs={navigationConfig["initiativeProjects"].breadcrumbs}
        navItems={navigationConfig["initiativeProjects"].navItems}
        pageTilte="5S-Certification"
      />
     
    </div>
  );
}
