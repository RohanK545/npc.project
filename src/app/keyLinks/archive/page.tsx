import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["keyLinks"].imageSrc}
        breadcrumbs={navigationConfig["keyLinks"].breadcrumbs}
        navItems={navigationConfig["keyLinks"].navItems}
        pageTilte="Archive"
      />
      
    </div>
  );
}
