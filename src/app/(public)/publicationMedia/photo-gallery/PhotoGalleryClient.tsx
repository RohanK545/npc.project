"use client";

import { useState } from "react";
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import Image from "next/image";
interface GalleryImage {
  src: string;
}

interface GalleryPageData {
  title: string;
  date: string;
  images: GalleryImage[];
}

interface PhotoGalleryClientProps {
  pageData: GalleryPageData;
}
export default function PhotoGalleryClient({
  pageData,
}: PhotoGalleryClientProps) {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const prevSlide = () => {
    if (activeIndex === 0) return;
    setActiveIndex(activeIndex - 1);
  };

  const nextSlide = () => {
    if (activeIndex === pageData.images.length - 1) return;
    setActiveIndex(activeIndex + 1);
  };
  return (
    <>
      <InnerBannerSection
        imageSrc={navigationConfig["publicationMedia"].imageSrc}
        breadcrumbs={navigationConfig["publicationMedia"].breadcrumbs}
        navItems={navigationConfig["publicationMedia"].navItems}
        pageTilte="Photo Gallery"
      />
      <section className="maincontent">
        <div className="container">
          <div className="row gallerydetail">
            {/* DATE */}
            <small className="ptype">{pageData.date}</small>

            {/* TITLE */}
            <p className="h4">{pageData.title}</p>

            {/* IMAGES GRID */}
            {pageData.images.map((img, index) => (
              <div key={index} className="col-md-4 photos-card">
                <div className="gallerybox mb-4 position-relative">
                  <Image
                    src={img.src}
                    className="img-fluid w-100 mb-3 pointer"
                    alt={`${pageData.title} image ${index + 1}`}
                    onClick={() => openModal(index)}
                  />

                  <button
                    type="button"
                    className="position-absolute photos-btn pointer internal-photos-btn"
                    aria-label="expand image"
                    onClick={() => openModal(index)}
                  >
                    ⛶
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {showModal && (
          <div
            className="modal-backdrop-custom"
            onClick={closeModal} // click outside closes modal
          >
            <div
              className="modal-dialog modal-lg modal-dialog-centered border border-black rounded rounded-3 overflow-hidden"
              onClick={(e) => e.stopPropagation()} // prevent close on modal click
            >
              <div className="modal-content rounded rounded-3">
                <div className="modal-body p-0 position-relative ">
                  {/* IMAGE */}
                  <img
                    src={pageData.images[activeIndex].src}
                    className="img-fluid w-100"
                    alt={`${pageData.title} image ${activeIndex + 1}`}
                  />

                  {/* CLOSE BUTTON */}
                  <button
                    className="position-absolute close-btn"
                    onClick={closeModal}
                  >
                    ✕
                  </button>

                  {/* FOOTER */}
                  <div className="carousel-footer d-flex justify-content-between align-items-center p-3">
                    <button
                      disabled={activeIndex === 0}
                      onClick={prevSlide}
                      className={`carousel-button ${
                        activeIndex === 0 ? "disabled" : ""
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24 "
                        viewBox="0 0 64 64"
                        fill="none"
                      >
                        {" "}
                        <path
                          d="M28.8001 32L39.2001 42.4C39.689 42.8889 39.9335 43.5111 39.9335 44.2666C39.9335 45.0222 39.689 45.6444 39.2001 46.1333C38.7112 46.6222 38.089 46.8666 37.3335 46.8666C36.5779 46.8666 35.9557 46.6222 35.4668 46.1333L23.2001 33.8666C22.9335 33.6 22.7446 33.3111 22.6335 33C22.5224 32.6889 22.4668 32.3555 22.4668 32C22.4668 31.6444 22.5224 31.3111 22.6335 31C22.7446 30.6889 22.9335 30.4 23.2001 30.1333L35.4668 17.8666C35.9557 17.3777 36.5779 17.1333 37.3335 17.1333C38.089 17.1333 38.7112 17.3777 39.2001 17.8666C39.689 18.3555 39.9335 18.9777 39.9335 19.7333C39.9335 20.4889 39.689 21.1111 39.2001 21.6L28.8001 32Z"
                          fill="#ffffff"
                        />{" "}
                      </svg>
                    </button>

                    <p className="text-white m-0">{pageData.title}</p>

                    <button
                      title="Next"
                      disabled={activeIndex === pageData.images.length - 1}
                      onClick={nextSlide}
                      className={`carousel-button ${
                        activeIndex === pageData.images.length - 1
                          ? "disabled"
                          : ""
                      }`}
                    >
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24 "
                          viewBox="0 0 64 64"
                          fill="none"
                        >
                          {" "}
                          <path
                            d="M33.6001 32L23.2001 21.6C22.7112 21.1111 22.4668 20.4889 22.4668 19.7333C22.4668 18.9777 22.7112 18.3555 23.2001 17.8666C23.689 17.3777 24.3112 17.1333 25.0668 17.1333C25.8224 17.1333 26.4446 17.3777 26.9335 17.8666L39.2001 30.1333C39.4668 30.4 39.6557 30.6889 39.7668 31C39.8779 31.3111 39.9335 31.6444 39.9335 32C39.9335 32.3555 39.8779 32.6889 39.7668 33C39.6557 33.3111 39.4668 33.6 39.2001 33.8666L26.9335 46.1333C26.4446 46.6222 25.8224 46.8666 25.0668 46.8666C24.3112 46.8666 23.689 46.6222 23.2001 46.1333C22.7112 45.6444 22.4668 45.0222 22.4668 44.2666C22.4668 43.5111 22.7112 42.8889 23.2001 42.4L33.6001 32Z"
                            fill="#ffffffff"
                          />{" "}
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
