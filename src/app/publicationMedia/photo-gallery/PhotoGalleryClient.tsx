"use client";

import { useState } from "react";
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function PhotoGalleryClient({ pageData }: any) {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setShowModal(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove("modal-open");
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? pageData.images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === pageData.images.length - 1 ? 0 : prev + 1
    );
  };
  console.log(pageData.images);

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

            {/* IMAGES */}
            {pageData.images.map((img: any, index: any) => (
              <div key={index} className="col-md-4 photos-card">
                <div className="gallerybox mb-4 position-relative">
                  <span className="lazy-load-image-background blur lazy-load-image-loaded">
                    <img
                      src={img.src}
                      className="img-fluid w-100 mb-3 pointer"
                      alt={`${pageData.title} image ${index + 1}`}
                    />
                  </span>

                  <button
                    type="button"
                    className="position-absolute photos-btn pointer internal-photos-btn"
                    aria-label="expand image"
                    onClick={() => openModal(index)}
                  >
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined bhashini-skip-translation"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24 "
                        viewBox="0 0 64 64"
                        fill="none"
                      >
                        <path
                          d="M13.3333 50.6667H18.6667C19.4222 50.6667 20.0556 50.9222 20.5667 51.4333C21.0778 51.9444 21.3333 52.5778 21.3333 53.3333C21.3333 54.0889 21.0778 54.7222 20.5667 55.2333C20.0556 55.7444 19.4222 56 18.6667 56H10.6667C9.91111 56 9.27778 55.7444 8.76667 55.2333C8.25556 54.7222 8 54.0889 8 53.3333V45.3333C8 44.5778 8.25556 43.9444 8.76667 43.4333C9.27778 42.9222 9.91111 42.6667 10.6667 42.6667C11.4222 42.6667 12.0556 42.9222 12.5667 43.4333C13.0778 43.9444 13.3333 44.5778 13.3333 45.3333V50.6667ZM50.6667 50.6667V45.3333C50.6667 44.5778 50.9222 43.9444 51.4333 43.4333C51.9444 42.9222 52.5778 42.6667 53.3333 42.6667C54.0889 42.6667 54.7222 42.9222 55.2333 43.4333C55.7444 43.9444 56 44.5778 56 45.3333V53.3333C56 54.0889 55.7444 54.7222 55.2333 55.2333C54.7222 55.7444 54.0889 56 53.3333 56H45.3333C44.5778 56 43.9444 55.7444 43.4333 55.2333C42.9222 54.7222 42.6667 54.0889 42.6667 53.3333C42.6667 52.5778 42.9222 51.9444 43.4333 51.4333C43.9444 50.9222 44.5778 50.6667 45.3333 50.6667H50.6667ZM13.3333 13.3333V18.6667C13.3333 19.4222 13.0778 20.0556 12.5667 20.5667C12.0556 21.0778 11.4222 21.3333 10.6667 21.3333C9.91111 21.3333 9.27778 21.0778 8.76667 20.5667C8.25556 20.0556 8 19.4222 8 18.6667V10.6667C8 9.91111 8.25556 9.27778 8.76667 8.76667C9.27778 8.25556 9.91111 8 10.6667 8H18.6667C19.4222 8 20.0556 8.25556 20.5667 8.76667C21.0778 9.27778 21.3333 9.91111 21.3333 10.6667C21.3333 11.4222 21.0778 12.0556 20.5667 12.5667C20.0556 13.0778 19.4222 13.3333 18.6667 13.3333H13.3333ZM50.6667 13.3333H45.3333C44.5778 13.3333 43.9444 13.0778 43.4333 12.5667C42.9222 12.0556 42.6667 11.4222 42.6667 10.6667C42.6667 9.91111 42.9222 9.27778 43.4333 8.76667C43.9444 8.25556 44.5778 8 45.3333 8H53.3333C54.0889 8 54.7222 8.25556 55.2333 8.76667C55.7444 9.27778 56 9.91111 56 10.6667V18.6667C56 19.4222 55.7444 20.0556 55.2333 20.5667C54.7222 21.0778 54.0889 21.3333 53.3333 21.3333C52.5778 21.3333 51.9444 21.0778 51.4333 20.5667C50.9222 20.0556 50.6667 19.4222 50.6667 18.6667V13.3333Z"
                          fill="#ffffffff"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {showModal && (
          <div
            role="dialog"
            aria-modal="true"
            className="fade modal show"
            tabIndex={-1}
            style={{ display: "block", paddingRight: "15px" }}
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="carousel-body p-0 modal-body">
                  <div className="carousel-container">
                    <div className="carousel-box">
                      {pageData.images.map((img: any, idx: number) => (
                        <div
                          key={idx}
                          className={`slide ${
                            idx === activeIndex ? "activeImg" : ""
                          }`}
                          style={{
                            display: idx === activeIndex ? "block" : "none",
                          }} // Show only active slide
                        >
                          <span
                            className="lazy-load-image-background blur lazy-load-image-loaded"
                            style={{
                              color: "transparent",
                              //   display: "inline-block",
                            }}
                          >
                            <img
                              src={img.src}
                              alt={
                                img.alt || `${pageData.title} image ${idx + 1}`
                              }
                              className="img-fluid object-fit-cover w-100 h-100 position-relative"
                            />
                          </span>

                          <span
                            aria-hidden="true"
                            className="material-symbols-outlined bhashini-skip-translation position-absolute close-btn pointer"
                            title="Close"
                            tabIndex={idx === activeIndex ? 0 : -1}
                            role="button"
                            aria-label="Close gallery popup"
                            onClick={closeModal}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18 "
                              viewBox="0 0 66 66"
                              fill="none"
                              className="ms-1"
                            >
                              <path
                                d="M5.92308 65L1 60.0769L28.0769 33L1 5.92308L5.92308 1L33 28.0769L60.0769 1L65 5.92308L37.9231 33L65 60.0769L60.0769 65L33 37.9231L5.92308 65Z"
                                fill="#ffffffff"
                              />
                            </svg>
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="carousel-footer d-flex justify-content-between align-items-center flex-nowrap gap-2 modal-footer">
                      <button
                        title="Previous"
                        className={`carousel-button ${
                          activeIndex === 0 ? "disabled" : ""
                        }`}
                        disabled={activeIndex === 0}
                        aria-label="previous slide"
                        onClick={() =>
                          setActiveIndex((i) => Math.max(i - 1, 0))
                        }
                      >
                        <span className="material-symbols-outlined bhashini-skip-translation">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24 "
                            viewBox="0 0 64 64"
                            fill="none"
                          >
                            <path
                              d="M28.8001 32L39.2001 42.4C39.689 42.8889 39.9335 43.5111 39.9335 44.2666C39.9335 45.0222 39.689 45.6444 39.2001 46.1333C38.7112 46.6222 38.089 46.8666 37.3335 46.8666C36.5779 46.8666 35.9557 46.6222 35.4668 46.1333L23.2001 33.8666C22.9335 33.6 22.7446 33.3111 22.6335 33C22.5224 32.6889 22.4668 32.3555 22.4668 32C22.4668 31.6444 22.5224 31.3111 22.6335 31C22.7446 30.6889 22.9335 30.4 23.2001 30.1333L35.4668 17.8666C35.9557 17.3777 36.5779 17.1333 37.3335 17.1333C38.089 17.1333 38.7112 17.3777 39.2001 17.8666C39.689 18.3555 39.9335 18.9777 39.9335 19.7333C39.9335 20.4889 39.689 21.1111 39.2001 21.6L28.8001 32Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </span>
                      </button>

                      <p
                        role="heading"
                        className="carousel-title text-center h3 text-white"
                      >
                        {pageData.title}
                      </p>

                      <button
                        title="Next"
                        className={`carousel-button ${
                          activeIndex === pageData.images.length - 1
                            ? "disabled"
                            : ""
                        }`}
                        disabled={activeIndex === pageData.images.length - 1}
                        aria-label="next slide"
                        onClick={() =>
                          setActiveIndex((i) =>
                            Math.min(i + 1, pageData.images.length - 1)
                          )
                        }
                      >
                        <span className="material-symbols-outlined bhashini-skip-translation">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24 "
                            viewBox="0 0 64 64"
                            fill="none"
                          >
                            <path
                              d="M33.6001 32L23.2001 21.6C22.7112 21.1111 22.4668 20.4889 22.4668 19.7333C22.4668 18.9777 22.7112 18.3555 23.2001 17.8666C23.689 17.3777 24.3112 17.1333 25.0668 17.1333C25.8224 17.1333 26.4446 17.3777 26.9335 17.8666L39.2001 30.1333C39.4668 30.4 39.6557 30.6889 39.7668 31C39.8779 31.3111 39.9335 31.6444 39.9335 32C39.9335 32.3555 39.8779 32.6889 39.7668 33C39.6557 33.3111 39.4668 33.6 39.2001 33.8666L26.9335 46.1333C26.4446 46.6222 25.8224 46.8666 25.0668 46.8666C24.3112 46.8666 23.689 46.6222 23.2001 46.1333C22.7112 45.6444 22.4668 45.0222 22.4668 44.2666C22.4668 43.5111 22.7112 42.8889 23.2001 42.4L33.6001 32Z"
                              fill="#ffffffff"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
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
