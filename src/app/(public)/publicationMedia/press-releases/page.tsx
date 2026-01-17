"use client";
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import { useState, useEffect } from "react";

export default function AboutUs() {
  const publications = [
    {
      id: 1,
      title: `Post-event Press Release - International workshop on "Unlocking Finance to Support Climate and Clean Air Solutions in India", 8-9 August 2024`,
      year: "2024-08-12",
      count: 0,
      link: "/documents/publications/research-papers-articles-books-authored-by-meity-officials-QNzkTOtQWa",
    },
    {
      id: 2,
      title:
        "Pre-event Press Release - National Workshop on Unlocking Finance to Support Climate and Clean Air Solutions in India Date & venue: 8-9 August 2024, India Habitat Center, New Delhi",
      year: "2024-08-07",
      count: 0,
      link: "/documents/publications/monthly-achievements-meity-gDN3YTMtQWa",
    },
  ];

  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOrder, setSortOrder] = useState<string>("");

  const parseDate = (value: string | number): number => {
    return typeof value === "number"
      ? new Date(value, 0, 1).getTime()
      : new Date(value).getTime();
  };

  const filteredOrganizations = publications.filter((proj) =>
    proj.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedOrganizations = [...filteredOrganizations].sort((a, b) => {
    if (!sortOrder) return 0;
    const dateA = parseDate(a.year);
    const dateB = parseDate(b.year);
    return sortOrder === "DESCY" ? dateB - dateA : dateA - dateB;
  });

  const totalPages = Math.ceil(sortedOrganizations.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedOrganizations.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleClearAll = () => {
    setSelectedCategory("");
    setSearchQuery("");
    setSortOrder("");
    setItemsPerPage(10);
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [sortOrder, searchQuery]);

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["publicationMedia"].imageSrc}
        breadcrumbs={navigationConfig["publicationMedia"].breadcrumbs}
        navItems={navigationConfig["publicationMedia"].navItems}
        pageTilte="Press Releases"
      />
      <section className="maincontent">
        <div className="container">
          {/* Keep your existing filter form exactly as is */}
          <form className="form-group row align-items-start row-gap-2 filterbox filterBoxResponsive">
            {/* ... all your existing filter code ... */}
          </form>

          {/* Desktop Table Layout - Hidden on Mobile */}
          <div role="table" aria-label="Publications data" className="d-none d-lg-block">
            {/* TABLE HEADER */}
            <div role="rowgroup" className="row tableheader ms-0 me-0">
              <div className="row align-items-center" role="row">
                <div className="col-lg-7" role="columnheader">
                  <small>Title</small>
                </div>
                <div className="col-lg-2" role="columnheader">
                  <small>Published Year</small>
                </div>
                <div className="col-lg-3" role="columnheader">
                  <small>Type / Size</small>
                </div>
              </div>
            </div>

            {/* TABLE ROWS */}
            {currentItems.map((item) => (
              <div role="rowgroup" key={item.id}>
                <div role="row" className="announcementbox row align-items-center ms-0 me-0">
                  <div className="col-lg-7" role="cell">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined">
                        {item.count >= 1 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 59 68" fill="none">
                            <path d="M51.3478 53.8095H19.6998C18.1603 53.8095 16.8571 53.2762 15.7905 52.2095C14.7238 51.1429 14.1905 49.8397 14.1905 48.3002V7.50933C14.1905 5.96978 14.7238 4.66667 15.7905 3.6C16.8571 2.53333 18.1603 2 19.6998 2H40.8571L56.8571 18V48.3002C56.8571 49.8397 56.3238 51.1429 55.2571 52.2095C54.1905 53.2762 52.8874 53.8095 51.3478 53.8095ZM38.5714 20.2857V6.57143H19.6998C19.4651 6.57143 19.2503 6.6692 19.0552 6.86476C18.8597 7.05981 18.7619 7.27467 18.7619 7.50933V48.3002C18.7619 48.5349 18.8597 48.7497 19.0552 48.9448C19.2503 49.1403 19.4651 49.2381 19.6998 49.2381H51.3478C51.5825 49.2381 51.7973 49.1403 51.9924 48.9448C52.1879 48.7497 52.2857 48.5349 52.2857 48.3002V20.2857H38.5714ZM7.50933 66C5.96978 66 4.66667 65.4667 3.6 64.4C2.53333 63.3333 2 62.0302 2 60.4907V20.2857H6.57143V60.4907C6.57143 60.7253 6.66921 60.9402 6.86476 61.1352C7.05981 61.3308 7.27467 61.4286 7.50933 61.4286H38.5714V66H7.50933Z" fill="#29136C"/>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 55 68" fill="none">
                            <path d="M8.08926 66C6.38765 66 4.94737 65.4105 3.76842 64.2316C2.58947 63.0526 2 61.6124 2 59.9107V8.08926C2 6.38765 2.58947 4.94737 3.76842 3.76842C4.94737 2.58947 6.38765 2 8.08926 2H34.8421L52.5263 19.6842V59.9107C52.5263 61.6124 51.9368 63.0526 50.7579 64.2316C49.5789 65.4105 48.1387 66 46.4371 66H8.08926ZM32.3158 22.2105V7.05263H8.08926C7.82989 7.05263 7.59242 7.1607 7.37684 7.37684C7.1607 7.59242 7.05263 7.82989 7.05263 8.08926V59.9107C7.05263 60.1701 7.1607 60.4076 7.37684 60.6232C7.59242 60.8393 7.82989 60.9474 8.08926 60.9474H46.4371C46.6964 60.9474 46.9339 60.8393 47.1495 60.6232C47.3656 60.4076 47.4737 60.1701 47.4737 59.9107V22.2105H32.3158Z" fill="#29136C"/>
                          </svg>
                        )}
                      </span>
                      <p className="mb-0">{highlightText(item.title, searchQuery)}</p>
                      {item.count > 0 && <div className="counter-box">{item.count}</div>}
                    </div>
                  </div>
                  <div className="col-lg-2" role="cell">
                    <small className="ptype">{item.year}</small>
                  </div>
                  <div className="col-lg-3" role="cell">
                    <div className="d-flex justify-content-end align-items-center">
                      <a href={item.link} target="_blank" className="download-btn d-flex align-items-center" aria-label={`View ${item.title}`}>
                        <span className="material-symbols-outlined">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64" fill="none">
                            <path d="M32 42.6667C35.3334 42.6667 38.1667 41.5 40.5 39.1667C42.8334 36.8333 44 34 44 30.6667C44 27.3333 42.8334 24.5 40.5 22.1667C38.1667 19.8333 35.3334 18.6667 32 18.6667C28.6667 18.6667 25.8334 19.8333 23.5 22.1667C21.1667 24.5 20 27.3333 20 30.6667C20 34 21.1667 36.8333 23.5 39.1667C25.8334 41.5 28.6667 42.6667 32 42.6667ZM32 37.8667C30 37.8667 28.3 37.1667 26.9 35.7667C25.5 34.3667 24.8 32.6667 24.8 30.6667C24.8 28.6667 25.5 26.9667 26.9 25.5667C28.3 24.1667 30 23.4667 32 23.4667C34 23.4667 35.7 24.1667 37.1 25.5667C38.5 26.9667 39.2 28.6667 39.2 30.6667C39.2 32.6667 38.5 34.3667 37.1 35.7667C35.7 37.1667 34 37.8667 32 37.8667ZM32 50.6667C26.0445 50.6667 20.6111 49.0667 15.7 45.8667C10.7889 42.6667 6.91114 38.4444 4.06669 33.2C3.84447 32.8 3.6778 32.3889 3.56669 31.9667C3.45558 31.5444 3.40002 31.1111 3.40002 30.6667C3.40002 30.2222 3.45558 29.7889 3.56669 29.3667C3.6778 28.9444 3.84447 28.5333 4.06669 28.1333C6.91114 22.8889 10.7889 18.6667 15.7 15.4667C20.6111 12.2667 26.0445 10.6667 32 10.6667C37.9556 10.6667 43.3889 12.2667 48.3 15.4667C53.2111 18.6667 57.0889 22.8889 59.9334 28.1333C60.1556 28.5333 60.3223 28.9444 60.4334 29.3667C60.5445 29.7889 60.6 30.2222 60.6 30.6667C60.6 31.1111 60.5445 31.5444 60.4334 31.9667C60.3223 32.3889 60.1556 32.8 59.9334 33.2C57.0889 38.4444 53.2111 42.6667 48.3 45.8667C43.3889 49.0667 37.9556 50.6667 32 50.6667ZM32 45.3333C37.0222 45.3333 41.6334 44.0111 45.8334 41.3667C50.0334 38.7222 53.2445 35.1555 55.4667 30.6667C53.2445 26.1778 50.0334 22.6111 45.8334 19.9667C41.6334 17.3222 37.0222 16 32 16C26.9778 16 22.3667 17.3222 18.1667 19.9667C13.9667 22.6111 10.7556 26.1778 8.53336 30.6667C10.7556 35.1555 13.9667 38.7222 18.1667 41.3667C22.3667 44.0111 26.9778 45.3333 32 45.3333Z" fill="#29136C"/>
                          </svg>
                        </span>
                        {item.count >= 1 ? "View All" : "View"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Card Layout - Visible only on Mobile */}
          <div className="d-lg-none">
            {currentItems.map((item) => (
              <div key={item.id} className="mobile-publication-card p-3 mb-3" style={{ border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.08)" }}>
                {/* Header with Icon and Count */}
                <div className="d-flex align-items-start gap-2 mb-2">
                  <span className="material-symbols-outlined" style={{ flexShrink: 0, marginTop: "2px" }}>
                    {item.count >= 1 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 59 68" fill="none">
                        <path d="M51.3478 53.8095H19.6998C18.1603 53.8095 16.8571 53.2762 15.7905 52.2095C14.7238 51.1429 14.1905 49.8397 14.1905 48.3002V7.50933C14.1905 5.96978 14.7238 4.66667 15.7905 3.6C16.8571 2.53333 18.1603 2 19.6998 2H40.8571L56.8571 18V48.3002C56.8571 49.8397 56.3238 51.1429 55.2571 52.2095C54.1905 53.2762 52.8874 53.8095 51.3478 53.8095ZM38.5714 20.2857V6.57143H19.6998C19.4651 6.57143 19.2503 6.6692 19.0552 6.86476C18.8597 7.05981 18.7619 7.27467 18.7619 7.50933V48.3002C18.7619 48.5349 18.8597 48.7497 19.0552 48.9448C19.2503 49.1403 19.4651 49.2381 19.6998 49.2381H51.3478C51.5825 49.2381 51.7973 49.1403 51.9924 48.9448C52.1879 48.7497 52.2857 48.5349 52.2857 48.3002V20.2857H38.5714ZM7.50933 66C5.96978 66 4.66667 65.4667 3.6 64.4C2.53333 63.3333 2 62.0302 2 60.4907V20.2857H6.57143V60.4907C6.57143 60.7253 6.66921 60.9402 6.86476 61.1352C7.05981 61.3308 7.27467 61.4286 7.50933 61.4286H38.5714V66H7.50933Z" fill="#29136C"/>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 55 68" fill="none">
                        <path d="M8.08926 66C6.38765 66 4.94737 65.4105 3.76842 64.2316C2.58947 63.0526 2 61.6124 2 59.9107V8.08926C2 6.38765 2.58947 4.94737 3.76842 3.76842C4.94737 2.58947 6.38765 2 8.08926 2H34.8421L52.5263 19.6842V59.9107C52.5263 61.6124 51.9368 63.0526 50.7579 64.2316C49.5789 65.4105 48.1387 66 46.4371 66H8.08926ZM32.3158 22.2105V7.05263H8.08926C7.82989 7.05263 7.59242 7.1607 7.37684 7.37684C7.1607 7.59242 7.05263 7.82989 7.05263 8.08926V59.9107C7.05263 60.1701 7.1607 60.4076 7.37684 60.6232C7.59242 60.8393 7.82989 60.9474 8.08926 60.9474H46.4371C46.6964 60.9474 46.9339 60.8393 47.1495 60.6232C47.3656 60.4076 47.4737 60.1701 47.4737 59.9107V22.2105H32.3158Z" fill="#29136C"/>
                      </svg>
                    )}
                  </span>
                  <div className="flex-grow-1">
                    <p className="mb-2" style={{ fontSize: "14px", lineHeight: "1.5", color: "#333" }}>
                      {highlightText(item.title, searchQuery)}
                    </p>
                    {item.count > 0 && (
                      <span className="badge" style={{ backgroundColor: "#162F6A", fontSize: "12px", padding: "4px 8px" }}>
                        {item.count} items
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer with Date and Action */}
                <div className="d-flex justify-content-between align-items-center pt-2" style={{ borderTop: "1px solid #f0f0f0" }}>
                  <small className="text-muted" style={{ fontSize: "12px" }}>{item.year}</small>
                  <a href={item.link} target="_blank" className="btn btn-sm d-flex align-items-center gap-1" style={{ backgroundColor: "#162F6A", color: "#fff", padding: "6px 12px", borderRadius: "4px", fontSize: "13px", textDecoration: "none" }} aria-label={`View ${item.title}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 64 64" fill="none">
                      <path d="M32 42.6667C35.3334 42.6667 38.1667 41.5 40.5 39.1667C42.8334 36.8333 44 34 44 30.6667C44 27.3333 42.8334 24.5 40.5 22.1667C38.1667 19.8333 35.3334 18.6667 32 18.6667C28.6667 18.6667 25.8334 19.8333 23.5 22.1667C21.1667 24.5 20 27.3333 20 30.6667C20 34 21.1667 36.8333 23.5 39.1667C25.8334 41.5 28.6667 42.6667 32 42.6667ZM32 37.8667C30 37.8667 28.3 37.1667 26.9 35.7667C25.5 34.3667 24.8 32.6667 24.8 30.6667C24.8 28.6667 25.5 26.9667 26.9 25.5667C28.3 24.1667 30 23.4667 32 23.4667C34 23.4667 35.7 24.1667 37.1 25.5667C38.5 26.9667 39.2 28.6667 39.2 30.6667C39.2 32.6667 38.5 34.3667 37.1 35.7667C35.7 37.1667 34 37.8667 32 37.8667ZM32 50.6667C26.0445 50.6667 20.6111 49.0667 15.7 45.8667C10.7889 42.6667 6.91114 38.4444 4.06669 33.2C3.84447 32.8 3.6778 32.3889 3.56669 31.9667C3.45558 31.5444 3.40002 31.1111 3.40002 30.6667C3.40002 30.2222 3.45558 29.7889 3.56669 29.3667C3.6778 28.9444 3.84447 28.5333 4.06669 28.1333C6.91114 22.8889 10.7889 18.6667 15.7 15.4667C20.6111 12.2667 26.0445 10.6667 32 10.6667C37.9556 10.6667 43.3889 12.2667 48.3 15.4667C53.2111 18.6667 57.0889 22.8889 59.9334 28.1333C60.1556 28.5333 60.3223 28.9444 60.4334 29.3667C60.5445 29.7889 60.6 30.2222 60.6 30.6667C60.6 31.1111 60.5445 31.5444 60.4334 31.9667C60.3223 32.3889 60.1556 32.8 59.9334 33.2C57.0889 38.4444 53.2111 42.6667 48.3 45.8667C43.3889 49.0667 37.9556 50.6667 32 50.6667ZM32 45.3333C37.0222 45.3333 41.6334 44.0111 45.8334 41.3667C50.0334 38.7222 53.2445 35.1555 55.4667 30.6667C53.2445 26.1778 50.0334 22.6111 45.8334 19.9667C41.6334 17.3222 37.0222 16 32 16C26.9778 16 22.3667 17.3222 18.1667 19.9667C13.9667 22.6111 10.7556 26.1778 8.53336 30.6667C10.7556 35.1555 13.9667 38.7222 18.1667 41.3667C22.3667 44.0111 26.9778 45.3333 32 45.3333Z" fill="#fff"/>
                    </svg>
                    {item.count >= 1 ? "View All" : "View"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}