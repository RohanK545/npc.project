"use client";
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import { useState, useEffect } from "react";

export default function AboutUs() {
  const publications = [
    {
      id: 1,
      title: `Post-event Press Release - International workshop on “Unlocking Finance to Support Climate and Clean Air Solutions in India”, 8-9 August 2024`,
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

  // -------------------- STATE --------------------
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOrder, setSortOrder] = useState<string>("");

  // -------------------- HELPERS --------------------
  const parseDate = (value: string | number): number => {
    return typeof value === "number"
      ? new Date(value, 0, 1).getTime()
      : new Date(value).getTime();
  };

  // -------------------- FILTER --------------------
  const filteredOrganizations = publications.filter((proj) =>
    proj.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // -------------------- SORT (BY DATE) --------------------
  const sortedOrganizations = [...filteredOrganizations].sort((a, b) => {
    if (!sortOrder) return 0;

    const dateA = parseDate(a.year);
    const dateB = parseDate(b.year);

    return sortOrder === "DESCY" ? dateB - dateA : dateA - dateB;
  });

  // -------------------- PAGINATION --------------------
  const totalPages = Math.ceil(sortedOrganizations.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = sortedOrganizations.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // -------------------- HANDLERS --------------------
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

  // -------------------- EFFECTS --------------------
  useEffect(() => {
    setCurrentPage(1);
  }, [sortOrder]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

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
          <form className="form-group row align-items-start row-gap-2 filterbox filterBoxResponsive">
            <div className="col-md-12 col-lg-4">
              <div className="input-group searchField">
                <span className="input-group-text">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined bhashini-skip-translation"
                  >
                    {/* <img src="/images/icons/Search_Icon.svg" alt="Search" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24 "
                      viewBox="0 0 64 64"
                      fill="none"
                      // style={{display: flex; justify-content: center}}
                    >
                      <path
                        d="M25.3333 42.6667C20.4889 42.6667 16.3889 40.9889 13.0333 37.6333C9.67778 34.2778 8 30.1778 8 25.3333C8 20.4889 9.67778 16.3889 13.0333 13.0333C16.3889 9.67778 20.4889 8 25.3333 8C30.1778 8 34.2778 9.67778 37.6333 13.0333C40.9889 16.3889 42.6667 20.4889 42.6667 25.3333C42.6667 27.2889 42.3556 29.1333 41.7333 30.8667C41.1111 32.6 40.2667 34.1333 39.2 35.4667L54.1333 50.4C54.6222 50.8889 54.8667 51.5111 54.8667 52.2667C54.8667 53.0222 54.6222 53.6444 54.1333 54.1333C53.6444 54.6222 53.0222 54.8667 52.2667 54.8667C51.5111 54.8667 50.8889 54.6222 50.4 54.1333L35.4667 39.2C34.1333 40.2667 32.6 41.1111 30.8667 41.7333C29.1333 42.3556 27.2889 42.6667 25.3333 42.6667ZM25.3333 37.3333C28.6667 37.3333 31.5 36.1667 33.8333 33.8333C36.1667 31.5 37.3333 28.6667 37.3333 25.3333C37.3333 22 36.1667 19.1667 33.8333 16.8333C31.5 14.5 28.6667 13.3333 25.3333 13.3333C22 13.3333 19.1667 14.5 16.8333 16.8333C14.5 19.1667 13.3333 22 13.3333 25.3333C13.3333 28.6667 14.5 31.5 16.8333 33.8333C19.1667 36.1667 22 37.3333 25.3333 37.3333Z"
                        fill="#5279d7"
                      />
                    </svg>
                  </span>
                </span>

                <input
                  type="search"
                  role="searchbox"
                  name="scheme"
                  aria-label="search"
                  className="form-control"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                <span className="input-group-text filterIconResponsive d-block d-md-none">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined bhashini-skip-translation"
                  >
                    filter_alt
                  </span>
                </span>
              </div>
            </div>

            <div className="col-md-12 col-lg-8 d-none d-md-block filterIconResponsivebox">
              <div className="d-flex align-items-center justify-content-end flex-wrap gap-2">
                {/* Sort*/}
                <div className="input-group sortField" role="combobox">
                  <span className="input-group-text">
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
                          d="M8 48V42.6667H24V48H8ZM8 34.6667V29.3333H40V34.6667H8ZM8 21.3333V16H56V21.3333H8Z"
                          fill="#162F6A"
                        />
                      </svg>
                    </span>
                  </span>

                  <select
                    className="form-select"
                    role="listbox"
                    aria-label="Sort by filter"
                    onChange={(e) => setSortOrder(e.target.value)}
                  >
                    <option value="">Sort by</option>
                    <option value="DESCY">Latest</option>
                    <option value="ASCY">Oldest</option>
                  </select>
                </div>

                {/* Per Page Select */}
                <div className="input-group perPageField" role="combobox">
                  <label htmlFor="pageLimitSelect" className="visually-hidden">
                    Items per page
                  </label>

                  <span className="input-group-text">
                    <span
                      className="material-symbols-outlined bhashini-skip-translation"
                      aria-hidden="true"
                    >
                      {/* <img src="/images/icons/List_Icon.svg" alt="List" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24 "
                        viewBox="0 0 64 64"
                        fill="none"
                      >
                        <path
                          d="M18.1605 50.9548C19.1048 50.9548 19.8957 50.6354 20.5332 49.9967C21.17 49.358 21.4885 48.5664 21.4885 47.6221C21.4885 46.6778 21.1691 45.8869 20.5304 45.2494C19.8916 44.6125 19.1001 44.2941 18.1558 44.2941C17.2115 44.2941 16.4209 44.6135 15.784 45.2522C15.1465 45.891 14.8278 46.6825 14.8278 47.6268C14.8278 48.5711 15.1471 49.3617 15.7859 49.9986C16.4253 50.6361 17.2168 50.9548 18.1605 50.9548ZM18.1605 36.3299C19.1048 36.3299 19.8957 36.0105 20.5332 35.3718C21.17 34.733 21.4885 33.9415 21.4885 32.9972C21.4885 32.0529 21.1691 31.2623 20.5304 30.6254C19.8916 29.9885 19.1001 29.6701 18.1558 29.6701C17.2115 29.6701 16.4209 29.9895 15.784 30.6282C15.1465 31.267 14.8278 32.0585 14.8278 33.0028C14.8278 33.9471 15.1471 34.7377 15.7859 35.3746C16.4253 36.0115 17.2168 36.3299 18.1605 36.3299ZM18.1605 21.7059C19.1048 21.7059 19.8957 21.3865 20.5332 20.7478C21.17 20.109 21.4885 19.3175 21.4885 18.3732C21.4885 17.4289 21.1691 16.6383 20.5304 16.0014C19.8916 15.3639 19.1001 15.0452 18.1558 15.0452C17.2115 15.0452 16.4209 15.3645 15.784 16.0033C15.1465 16.642 14.8278 17.4336 14.8278 18.3779C14.8278 19.3222 15.1471 20.1131 15.7859 20.7506C16.4253 21.3874 17.2168 21.7059 18.1605 21.7059ZM29.5976 50.4475H51.0273V44.8014H29.5976V50.4475ZM29.5976 35.8235H51.0273V30.1765H29.5976V35.8235ZM29.5976 21.1986H51.0273V15.5525H29.5976V21.1986ZM7.80565 65C5.90384 65 4.29412 64.3412 2.97647 63.0235C1.65882 61.7059 1 60.0962 1 58.1944V7.80565C1 5.90384 1.65882 4.29412 2.97647 2.97647C4.29412 1.65882 5.90384 1 7.80565 1H58.1944C60.0962 1 61.7059 1.65882 63.0235 2.97647C64.3412 4.29412 65 5.90384 65 7.80565V58.1944C65 60.0962 64.3412 61.7059 63.0235 63.0235C61.7059 64.3412 60.0962 65 58.1944 65H7.80565ZM7.80565 59.3529H58.1944C58.4842 59.3529 58.7497 59.2322 58.9906 58.9906C59.2322 58.7497 59.3529 58.4842 59.3529 58.1944V7.80565C59.3529 7.51576 59.2322 7.25035 58.9906 7.00941C58.7497 6.76784 58.4842 6.64706 58.1944 6.64706H7.80565C7.51576 6.64706 7.25035 6.76784 7.00941 7.00941C6.76784 7.25035 6.64706 7.51576 6.64706 7.80565V58.1944C6.64706 58.4842 6.76784 58.7497 7.00941 58.9906C7.25035 59.2322 7.51576 59.3529 7.80565 59.3529Z"
                          fill="#5279d7"
                        />
                      </svg>
                    </span>
                  </span>

                  <select
                    className="form-select"
                    id="pageLimitSelect"
                    aria-label="pages"
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1); // reset to page 1 whenever per-page changes
                    }}
                  >
                    <option value="10">10 per page</option>
                    <option value="15">15 per page</option>
                    <option value="20">20 per page</option>
                  </select>
                </div>
                {/* Clear Button */}
                {(itemsPerPage !== 10 || selectedCategory !== "") && (
                  <div className="input-group perPageField">
                    <button
                      className="btn d-flex align-items-center justify-content-center w-100"
                      title="Clear All"
                      type="button"
                      aria-label="Clear all filter"
                      onClick={handleClearAll}
                      style={{
                        padding: "0.85rem 1.2rem",
                        border: "1px solid #5279d7",
                        borderRadius: "0.375rem",
                        backgroundColor: "white",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 66 66"
                        fill="none"
                        className="me-2"
                      >
                        <path
                          d="M5.92308 65L1 60.0769L28.0769 33L1 5.92308L5.92308 1L33 28.0769L60.0769 1L65 5.92308L37.9231 33L65 60.0769L60.0769 65L33 37.9231L5.92308 65Z"
                          fill="#162F6A"
                        />
                      </svg>

                      <span style={{ all: "unset", fontSize: "1.5rem" }}>
                        Clear All
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </form>

          <div role="table" aria-label="Publications data">
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
                <div
                  role="row"
                  className="announcementbox row align-items-center ms-0 me-0"
                >
                  {/* TITLE */}
                  <div className="col-lg-7" role="cell">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined">
                        {item.count! >= 1 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24 "
                            viewBox="0 0 59 68"
                            fill="none"
                          >
                            <path
                              d="M51.3478 53.8095H19.6998C18.1603 53.8095 16.8571 53.2762 15.7905 52.2095C14.7238 51.1429 14.1905 49.8397 14.1905 48.3002V7.50933C14.1905 5.96978 14.7238 4.66667 15.7905 3.6C16.8571 2.53333 18.1603 2 19.6998 2H40.8571L56.8571 18V48.3002C56.8571 49.8397 56.3238 51.1429 55.2571 52.2095C54.1905 53.2762 52.8874 53.8095 51.3478 53.8095ZM38.5714 20.2857V6.57143H19.6998C19.4651 6.57143 19.2503 6.6692 19.0552 6.86476C18.8597 7.05981 18.7619 7.27467 18.7619 7.50933V48.3002C18.7619 48.5349 18.8597 48.7497 19.0552 48.9448C19.2503 49.1403 19.4651 49.2381 19.6998 49.2381H51.3478C51.5825 49.2381 51.7973 49.1403 51.9924 48.9448C52.1879 48.7497 52.2857 48.5349 52.2857 48.3002V20.2857H38.5714ZM7.50933 66C5.96978 66 4.66667 65.4667 3.6 64.4C2.53333 63.3333 2 62.0302 2 60.4907V20.2857H6.57143V60.4907C6.57143 60.7253 6.66921 60.9402 6.86476 61.1352C7.05981 61.3308 7.27467 61.4286 7.50933 61.4286H38.5714V66H7.50933Z"
                              fill="#29136C"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24 "
                            viewBox="0 0 55 68"
                            fill="none"
                          >
                            <path
                              d="M8.08926 66C6.38765 66 4.94737 65.4105 3.76842 64.2316C2.58947 63.0526 2 61.6124 2 59.9107V8.08926C2 6.38765 2.58947 4.94737 3.76842 3.76842C4.94737 2.58947 6.38765 2 8.08926 2H34.8421L52.5263 19.6842V59.9107C52.5263 61.6124 51.9368 63.0526 50.7579 64.2316C49.5789 65.4105 48.1387 66 46.4371 66H8.08926ZM32.3158 22.2105V7.05263H8.08926C7.82989 7.05263 7.59242 7.1607 7.37684 7.37684C7.1607 7.59242 7.05263 7.82989 7.05263 8.08926V59.9107C7.05263 60.1701 7.1607 60.4076 7.37684 60.6232C7.59242 60.8393 7.82989 60.9474 8.08926 60.9474H46.4371C46.6964 60.9474 46.9339 60.8393 47.1495 60.6232C47.3656 60.4076 47.4737 60.1701 47.4737 59.9107V22.2105H32.3158Z"
                              fill="#29136C"
                            />
                          </svg>
                        )}
                      </span>
                      <p className="mb-0">
                        {highlightText(item.title, searchQuery)}
                      </p>

                      {item.count > 0 && (
                        <div className="counter-box">{item.count}</div>
                      )}
                    </div>
                  </div>

                  {/* YEAR */}
                  <div className="col-lg-2" role="cell">
                    <small className="ptype">{item.year}</small>
                  </div>

                  {/* ACTION */}
                  <div className="col-lg-3" role="cell">
                    {/*    justify-content-between   */}
                    <div className="d-flex justify-content-end align-items-center">
                      {" "}
                      {/* LEFT SIDE – FILE SIZE */}
                      {/* {item.size ? (
                        <div className="d-flex align-items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20 "
                            viewBox="0 0 64 64"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.35 44.2395C13.2283 43.151 10.7231 42.7162 8.2625 43.0092H2V61.9366H6.9875V54.7126H9.125C11.3393 54.904 13.5644 54.4472 15.425 53.4193C17.0043 52.2798 17.875 50.5939 17.7875 48.8452C17.9044 47.0693 16.997 45.3548 15.35 44.2395ZM11.3375 51.148C10.3955 51.4968 9.35973 51.6275 8.3375 51.5265H6.875V46.1638H8.3375C9.39948 46.0688 10.4709 46.2447 11.4125 46.6685C12.2895 47.1823 12.7864 48.0423 12.725 48.9398C12.8386 49.8446 12.2902 50.7173 11.3375 51.148ZM28.5125 43.0092H22.2875V61.9366H28.25C31.2887 62.1867 34.3486 61.6938 37.0625 60.517C40.0487 58.6449 41.644 55.5893 41.2625 52.4729C41.486 49.803 40.3552 47.1784 38.15 45.249C35.4261 43.4429 31.9523 42.6356 28.5125 43.0092ZM33.4625 57.6464C31.9002 58.3851 30.1113 58.7146 28.325 58.5927H27.35V46.3531H28.25C31.4 46.3531 32.6375 46.6054 33.875 47.5518C35.3769 48.8672 36.1525 50.6529 36.0125 52.4729C36.2054 54.4426 35.2557 56.3694 33.4625 57.6464ZM46.7375 61.9366H51.8V54.0186H62V50.6748H51.8V46.3531H62V43.0092H46.7375V61.9366ZM43.25 2H2V36.7001H9.5V30.391V27.0787V8.30911H40.1375L54.5 20.3911V27.0787V30.391V36.7001H62V17.7728L43.25 2Z"
                              fill="#162F6A"
                            />
                          </svg>
                          <small className="text-uppercase">{item.size}</small>
                        </div>
                      ) : (
                        <div />
                      )} */}
                      {/* RIGHT SIDE – VIEW BUTTON */}
                      <a
                        href={item.link}
                        target="_blank"
                        className="download-btn d-flex align-items-center"
                        aria-label={`View ${item.title}`}
                      >
                        <span className="material-symbols-outlined">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24 "
                            viewBox="0 0 64 64"
                            fill="none"
                          >
                            <path
                              d="M32 42.6667C35.3334 42.6667 38.1667 41.5 40.5 39.1667C42.8334 36.8333 44 34 44 30.6667C44 27.3333 42.8334 24.5 40.5 22.1667C38.1667 19.8333 35.3334 18.6667 32 18.6667C28.6667 18.6667 25.8334 19.8333 23.5 22.1667C21.1667 24.5 20 27.3333 20 30.6667C20 34 21.1667 36.8333 23.5 39.1667C25.8334 41.5 28.6667 42.6667 32 42.6667ZM32 37.8667C30 37.8667 28.3 37.1667 26.9 35.7667C25.5 34.3667 24.8 32.6667 24.8 30.6667C24.8 28.6667 25.5 26.9667 26.9 25.5667C28.3 24.1667 30 23.4667 32 23.4667C34 23.4667 35.7 24.1667 37.1 25.5667C38.5 26.9667 39.2 28.6667 39.2 30.6667C39.2 32.6667 38.5 34.3667 37.1 35.7667C35.7 37.1667 34 37.8667 32 37.8667ZM32 50.6667C26.0445 50.6667 20.6111 49.0667 15.7 45.8667C10.7889 42.6667 6.91114 38.4444 4.06669 33.2C3.84447 32.8 3.6778 32.3889 3.56669 31.9667C3.45558 31.5444 3.40002 31.1111 3.40002 30.6667C3.40002 30.2222 3.45558 29.7889 3.56669 29.3667C3.6778 28.9444 3.84447 28.5333 4.06669 28.1333C6.91114 22.8889 10.7889 18.6667 15.7 15.4667C20.6111 12.2667 26.0445 10.6667 32 10.6667C37.9556 10.6667 43.3889 12.2667 48.3 15.4667C53.2111 18.6667 57.0889 22.8889 59.9334 28.1333C60.1556 28.5333 60.3223 28.9444 60.4334 29.3667C60.5445 29.7889 60.6 30.2222 60.6 30.6667C60.6 31.1111 60.5445 31.5444 60.4334 31.9667C60.3223 32.3889 60.1556 32.8 59.9334 33.2C57.0889 38.4444 53.2111 42.6667 48.3 45.8667C43.3889 49.0667 37.9556 50.6667 32 50.6667ZM32 45.3333C37.0222 45.3333 41.6334 44.0111 45.8334 41.3667C50.0334 38.7222 53.2445 35.1555 55.4667 30.6667C53.2445 26.1778 50.0334 22.6111 45.8334 19.9667C41.6334 17.3222 37.0222 16 32 16C26.9778 16 22.3667 17.3222 18.1667 19.9667C13.9667 22.6111 10.7556 26.1778 8.53336 30.6667C10.7556 35.1555 13.9667 38.7222 18.1667 41.3667C22.3667 44.0111 26.9778 45.3333 32 45.3333Z"
                              fill="#29136C"
                            />
                          </svg>
                        </span>
                        {item.count! >= 1 ? "View All" : "View"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="row align-items-center mt-5">
              <div className="col-md-4"></div>

              <div className="col-md-4 d-flex justify-content-center">
                <nav aria-label="Page navigation">
                  <ul className="pagination pointer">
                    <li>
                      <button
                        className="button-item previous mb-2"
                        disabled={currentPage === 1}
                        aria-label="Go to previous page"
                        onClick={goPrev}
                      >
                        <img
                          src="/images/icons/Chevron_Left.svg"
                          alt="Previous Page"
                        />
                      </button>
                    </li>

                    {Array.from({ length: totalPages }).map((_, index) => {
                      const page = index + 1;

                      return (
                        <li
                          key={page}
                          className="page-item"
                          role="link"
                          aria-label={`Go to page ${page}`}
                        >
                          <span
                            className={`page-link pointer hover ${
                              currentPage === page ? "active" : ""
                            }`}
                            onClick={() => goToPage(page)}
                          >
                            {page}
                          </span>
                        </li>
                      );
                    })}

                    <li>
                      <button
                        className="button-item next mb-2"
                        disabled={currentPage === totalPages}
                        aria-label="Go to next page"
                        onClick={goNext}
                      >
                        <span className="material-symbols-outlined">
                          <img
                            src="/images/icons/Chevron_Right.svg"
                            alt="Next Page"
                          />
                        </span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
