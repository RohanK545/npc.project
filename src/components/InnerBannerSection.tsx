"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Breadcrumb {
  title?: string;
  href?: string;
  pagetitle?: string;
}

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface InnerBannerProps {
  imageSrc: string;
  breadcrumbs: Breadcrumb[];
  navItems?: NavItem[];
}

export default function InnerBannerSection({
  imageSrc,
  breadcrumbs,
  navItems = [],
}: InnerBannerProps) {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    console.log(navItems[0].label);

    console.log(breadcrumbs);

    console.log(navItems[0].label === breadcrumbs[0].pagetitle);
    const handleScroll = () => {
      if (!containerRef.current) return;
      setShowLeft(containerRef.current.scrollLeft > 0);
      setShowRight(
        containerRef.current.scrollLeft <
          containerRef.current.scrollWidth - containerRef.current.clientWidth
      );
    };

    containerRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      containerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollRight = () => {
    if (containerRef.current) containerRef.current.scrollLeft += 50;
  };

  const scrollLeft = () => {
    if (containerRef.current) containerRef.current.scrollLeft -= 50;
  };

  const pageTitle = breadcrumbs.find((crumb) => crumb.pagetitle)?.pagetitle;

  return (
    <>
      <div className="Innerbanner position-relative">
        <div
          className="position-relative w-100"
          style={{ height: "250px", borderTop: "2px solid #162f6a" }}
        >
          {/* Image */}
          <img
            src={imageSrc}
            className="img-fluid w-100 h-100"
            alt="Banner"
            style={{ objectFit: "cover" }}
          />

          {/* Gradient overlay */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "linear-gradient(to right, #162f6a 0%, #1e3568ff 20% , rgba(0,0,0,0) 75%)",
              pointerEvents: "none", // so overlay doesn't block clicks
            }}
          ></div>
        </div>

        <div
          className="Innerbox container position-absolute top-50 start-0 translate-middle-y text-start text-white ms-5 ps-5"
          style={{ zIndex: 2 }}
        >
          <div className="innerbox ms-5 ps-5" style={{ zIndex: 2 }}>
            <nav aria-label="Breadcrumb ">
              <ol className="breadcrumb bg-transparent">
                {breadcrumbs.map((crumb) =>
                  crumb.title ? (
                    <li
                      key={crumb.title}
                      className="breadcrumb-item text-white top-50 start-0"
                    >
                      {crumb.href ? (
                        <Link
                          className="text-white fs-3  text-decoration-none"
                          href={crumb.href}
                        >
                          {crumb.title}
                        </Link>
                      ) : (
                        <span className="text-decoration-underline">
                          {crumb.title}
                        </span>
                      )}
                    </li>
                  ) : null
                )}
              </ol>
            </nav>

            {breadcrumbs.map((crumb, index) =>
              crumb.pagetitle ? (
                <h1 key={index} className="pagename fs-1 fw-bold">
                  {crumb.pagetitle}
                </h1>
              ) : null
            )}
          </div>
        </div>
      </div>

      {navItems.length > 0 && (
        <section>
          <div
            className="container px-0 justify-content-center rounded-sm p-2 w-75 mx-auto"
            style={{
              backgroundColor: "#162f6a",
              width: "400px",
              borderRadius: "1.3rem",
              marginTop: "-35px",
              zIndex: 5,
              position: "relative",
            }}
          >
            <div className=" ">
              {/* {showLeft && (
                <button className="scroll-btn leftside" onClick={scrollLeft}>
                  &lt;
                </button>
              )} */}
              <ul className="nav fs-2 p-3 ms-5 mx-auto" ref={containerRef}>
                {navItems.map((item, index) => {
                  return (
                    <li key={index} className="">
                      {/* {isSelected && (
                        <img
                          src="/images/icons/bannerDots.png" 
                          alt="selected"
                          className="indicator-img mt-1"
                          style={{ width: "24px", height: "auto" }} // adjust size
                        />
                      )} */}
                      <Link
                        href={item.href}
                        className={`nav-link text-white me-4 ms-4 ${
                          item.active ? "active" : ""
                        } ${item.label === pageTitle ? "fw-bold " : ""}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {/* {showRight && (
                <button className="scroll-btn" onClick={scrollRight}>
                  &gt;
                </button>
              )} */}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
