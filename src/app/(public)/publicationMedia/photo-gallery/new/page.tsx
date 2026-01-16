
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["publicationMedia"].imageSrc}
        breadcrumbs={navigationConfig["publicationMedia"].breadcrumbs}
        navItems={navigationConfig["publicationMedia"].navItems}
        pageTilte="publication Media"
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
// import PhotoGalleryClient from "../PhotoGalleryClient";
// import { albumPhotos } from "@/data/albumPhotos";

// /* REQUIRED for static export */
// export async function generateStaticParams() {
//   return Object.keys(albumPhotos).map((key) => ({
//     slug: `${key}-photos`
//   }));
// }

// export default function Page({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const rawSlug = decodeURIComponent(params.slug);

//   // Remove the fixed suffix
//   const cleanSlug = rawSlug.replace(/-photos$/, "");

//   const pageData = albumPhotos[cleanSlug as keyof typeof albumPhotos];

//   if (!pageData) {
//     throw new Error(`Album not found: ${cleanSlug}`);
//   }

//   return <PhotoGalleryClient pageData={pageData} />;
// }
