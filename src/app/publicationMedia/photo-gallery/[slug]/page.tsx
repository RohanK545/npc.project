import PhotoGalleryClient from "../PhotoGalleryClient";
import { albumPhotos } from "@/data/albumPhotos";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const fullSlug = decodeURIComponent(slug);
  const slugParts = fullSlug.split("-");
  slugParts.pop();
  const cleanSlug = slugParts.join("-");

  const pageData = albumPhotos[cleanSlug as keyof typeof albumPhotos];

  return <PhotoGalleryClient pageData={pageData} />;
}

// "use client";
// import InnerBannerSection from "@/components/InnerBannerSection";
// import { albumPhotos } from "@/data/albumPhotos";
// import { navigationConfig } from "@/config/naviagtion";
// import { useState, useEffect } from "react";
// export default function PhotoGallery({ params }: { params: { slug: string } }) {
//   const resolvedParams = params;
//   const fullSlug = decodeURIComponent(resolvedParams.slug); // "blood-donation-camp-QO5QDOtQWa"

//   // Remove trailing code after last hyphen
//   const slugParts = fullSlug.split("-");
//   slugParts.pop(); // remove last part (random code)
//   const cleanSlug = slugParts.join("-"); // "blood-donation-camp"

//   console.log("Clean slug:", cleanSlug);

//   // Now use cleanSlug to get album data
//   const pageData = albumPhotos[cleanSlug as keyof typeof albumPhotos];

//   if (!pageData) {
//     return (
//       <>
//         <div style={{}}>
//           <InnerBannerSection
//             imageSrc={navigationConfig["publicationMedia"].imageSrc}
//             breadcrumbs={navigationConfig["publicationMedia"].breadcrumbs}
//             navItems={navigationConfig["publicationMedia"].navItems}
//             pageTilte="Photo Gallery"
//           />
//         </div>
//         <section className="maincontent">
//           <div className="container">
//             <h2>Page Not Found</h2>
//             <p>Available pages: {Object.keys(albumPhotos).join(", ")}</p>
//           </div>
//         </section>
//       </>
//     );
//   }
//   const [showModal, setShowModal] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const openModal = (index: number) => {
//     setActiveIndex(index);
//     setShowModal(true);
//     document.body.classList.add("modal-open");
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     document.body.classList.remove("modal-open");
//   };

//   const prevSlide = () => {
//     setActiveIndex((prev) =>
//       prev === 0 ? pageData.images.length - 1 : prev - 1
//     );
//   };

//   const nextSlide = () => {
//     setActiveIndex((prev) =>
//       prev === pageData.images.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <>
//       <div style={{}}>
//         <InnerBannerSection
//           imageSrc={navigationConfig["publicationMedia"].imageSrc}
//           breadcrumbs={navigationConfig["publicationMedia"].breadcrumbs}
//           navItems={navigationConfig["publicationMedia"].navItems}
//           pageTilte="Photo Gallery"
//         />
//       </div>

//       <section className="maincontent">
//         <div className="container">
//           <div className="row gallerydetail">
//             {/* DATE */}
//             <small className="ptype" aria-label={pageData.date}>
//               {pageData.date}
//             </small>

//             {/* TITLE */}
//             <p className="h4">{pageData.title}</p>

//             {/* IMAGES */}
//             {pageData.images.map((img, index) => (
//               <div key={index} className="col-md-4 photos-card">
//                 <div className="gallerybox mb-4 position-relative">
//                   <span className="lazy-load-image-background blur lazy-load-image-loaded">
//                     <img
//                       src={img.src}
//                       className="img-fluid w-100 mb-3 pointer"
//                       alt={`${pageData.title} image ${index + 1}`}
//                     />
//                   </span>

//                   <button
//                     type="button"
//                     className="position-absolute photos-btn pointer internal-photos-btn"
//                     aria-label="expand image"
//                   >
//                     <span
//                       aria-hidden="true"
//                       className="material-symbols-outlined bhashini-skip-translation"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24 "
//                         viewBox="0 0 64 64"
//                         fill="none"
//                       >
//                         <path
//                           d="M13.3333 50.6667H18.6667C19.4222 50.6667 20.0556 50.9222 20.5667 51.4333C21.0778 51.9444 21.3333 52.5778 21.3333 53.3333C21.3333 54.0889 21.0778 54.7222 20.5667 55.2333C20.0556 55.7444 19.4222 56 18.6667 56H10.6667C9.91111 56 9.27778 55.7444 8.76667 55.2333C8.25556 54.7222 8 54.0889 8 53.3333V45.3333C8 44.5778 8.25556 43.9444 8.76667 43.4333C9.27778 42.9222 9.91111 42.6667 10.6667 42.6667C11.4222 42.6667 12.0556 42.9222 12.5667 43.4333C13.0778 43.9444 13.3333 44.5778 13.3333 45.3333V50.6667ZM50.6667 50.6667V45.3333C50.6667 44.5778 50.9222 43.9444 51.4333 43.4333C51.9444 42.9222 52.5778 42.6667 53.3333 42.6667C54.0889 42.6667 54.7222 42.9222 55.2333 43.4333C55.7444 43.9444 56 44.5778 56 45.3333V53.3333C56 54.0889 55.7444 54.7222 55.2333 55.2333C54.7222 55.7444 54.0889 56 53.3333 56H45.3333C44.5778 56 43.9444 55.7444 43.4333 55.2333C42.9222 54.7222 42.6667 54.0889 42.6667 53.3333C42.6667 52.5778 42.9222 51.9444 43.4333 51.4333C43.9444 50.9222 44.5778 50.6667 45.3333 50.6667H50.6667ZM13.3333 13.3333V18.6667C13.3333 19.4222 13.0778 20.0556 12.5667 20.5667C12.0556 21.0778 11.4222 21.3333 10.6667 21.3333C9.91111 21.3333 9.27778 21.0778 8.76667 20.5667C8.25556 20.0556 8 19.4222 8 18.6667V10.6667C8 9.91111 8.25556 9.27778 8.76667 8.76667C9.27778 8.25556 9.91111 8 10.6667 8H18.6667C19.4222 8 20.0556 8.25556 20.5667 8.76667C21.0778 9.27778 21.3333 9.91111 21.3333 10.6667C21.3333 11.4222 21.0778 12.0556 20.5667 12.5667C20.0556 13.0778 19.4222 13.3333 18.6667 13.3333H13.3333ZM50.6667 13.3333H45.3333C44.5778 13.3333 43.9444 13.0778 43.4333 12.5667C42.9222 12.0556 42.6667 11.4222 42.6667 10.6667C42.6667 9.91111 42.9222 9.27778 43.4333 8.76667C43.9444 8.25556 44.5778 8 45.3333 8H53.3333C54.0889 8 54.7222 8.25556 55.2333 8.76667C55.7444 9.27778 56 9.91111 56 10.6667V18.6667C56 19.4222 55.7444 20.0556 55.2333 20.5667C54.7222 21.0778 54.0889 21.3333 53.3333 21.3333C52.5778 21.3333 51.9444 21.0778 51.4333 20.5667C50.9222 20.0556 50.6667 19.4222 50.6667 18.6667V13.3333Z"
//                           fill="#ffffffff"
//                         />
//                       </svg>
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {showModal && (
//           <>
//             <div className="modal fade show" role="dialog" aria-modal="true">
//               <div className="modal-dialog modal-lg modal-dialog-centered">
//                 <div className="modal-content">
//                   <div className="carousel-body p-0 modal-body">
//                     <div className="carousel-container">
//                       <div className="carousel-box">
//                         {pageData.images.map((img, idx) => (
//                           <div
//                             key={idx}
//                             className={`slide ${
//                               idx === activeIndex ? "activeImg" : ""
//                             }`}
//                           >
//                             <span className="lazy-load-image-background blur lazy-load-image-loaded">
//                               <img
//                                 src={img.src}
//                                 className="img-fluid object-fit-cover w-100 h-100 position-relative"
//                                 alt={`${pageData.title} ${idx + 1}`}
//                               />
//                             </span>

//                             {idx === activeIndex && (
//                               <span
//                                 role="button"
//                                 tabIndex={0}
//                                 aria-label="Close gallery popup"
//                                 className="material-symbols-outlined bhashini-skip-translation position-absolute close-btn pointer"
//                                 onClick={closeModal}
//                               >
//                                 close
//                               </span>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="carousel-footer d-flex justify-content-between align-items-center modal-footer">
//                     <button
//                       className={`carousel-button ${
//                         activeIndex === 0 ? "disabled" : ""
//                       }`}
//                       aria-label="previous slide"
//                       onClick={prevSlide}
//                       disabled={activeIndex === 0}
//                     >
//                       <span className="material-symbols-outlined bhashini-skip-translation">
//                         arrow_circle_left
//                       </span>
//                     </button>

//                     <p className="carousel-title text-center h3">
//                       {pageData.title}
//                     </p>

//                     <button
//                       className="carousel-button"
//                       aria-label="next slide"
//                       onClick={nextSlide}
//                     >
//                       <span className="material-symbols-outlined bhashini-skip-translation">
//                         arrow_circle_right
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* backdrop */}
//             <div className="modal-backdrop fade show"></div>
//           </>
//         )}
//       </section>
//     </>
//   );
// }
