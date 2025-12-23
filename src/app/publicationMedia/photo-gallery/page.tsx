"use client";
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import { useState, useEffect } from "react";
export default function AboutUs() {
  const images = [
    {
      src: "https://www.meity.gov.in/static/uploads/2024/02/WhatsApp-Image-2022-10-28-at-3.10.46-PM-768x512.jpeg",
      alt: "Special Campaign Image having Minister of MEITY",
      title: "Special Campaign",
      date: "16.03.2024",
      items: 6,
    },
    {
      src: "https://www.meity.gov.in/static/uploads/2024/02/WhatsApp-Image-2022-10-4-768x512.jpeg",
      alt: "FIT India Freedom Run 2.0",
      title: "FIT India Freedom Run 2.0",
      date: "03.11.2022",
      items: 6,
    },
    {
      src: "https://www.meity.gov.in/static/uploads/2024/02/WhatsApp-Image-2022-10-29--768x432.jpeg",
      alt: "Fire Hydrant Check",
      title: "Fire Hydrant Check",
      date: "01.11.2022",
      items: 10,
    },
    {
      src: "https://www.meity.gov.in/static/uploads/2024/02/ba2f00d153a139202836b88804bc7ab9-768x432.jpeg",
      alt: "Dengue Smoke Fogging",
      title: "Dengue Smoke Fogging",
      date: "01.11.2022",
      items: 4,
    },
    {
      src: "https://www.meity.gov.in/static/uploads/2024/02/WhatsApp-Image-2022-10-28-at-5.3-768x512.jpeg",
      alt: "Blood Donation Camp",
      title: "Blood Donation Camp",
      date: "01.11.2022",
      items: 5,
    },
  ];
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOrder, setSortOrder] = useState<string>("");

  // -------------------- HELPERS --------------------
  const parseDate = (value: string | number): number => {
    if (typeof value === "number") {
      return new Date(value, 0, 1).getTime();
    }

    const [day, month, year] = value.split(".");
    return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
  };

  // -------------------- FILTER --------------------
  const filteredOrganizations = images.filter((img) =>
    img.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // -------------------- SORT (BY DATE) --------------------
  const sortedOrganizations = [...filteredOrganizations].sort((a, b) => {
    if (!sortOrder) return 0;

    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);

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
        pageTilte="Photo Gallery"
      />
      <section className="mainContent">
        <div className="container mt-5">
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
                <div className="input-group sortField">
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
                    aria-label="select"
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

          <div className="row photos-row-gap">
            {currentItems.map((photo, idx) => (
              <div className="col-sm-12 col-md-6 col-lg-4" key={idx}>
                <div className="photos-card h-100">
                  <div className="img-fluid position-relative">
                    <img
                      src={photo.src}
                      className="photos-img img-fluid"
                      alt={photo.alt}
                      width={100}
                      height={100}
                    />
                    <button
                      className="position-absolute photos-btn pointer"
                      aria-label={`View More of ${photo.title}`}
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
                            d="M43.1337 34.6667H13.3337C12.5781 34.6667 11.9448 34.4112 11.4337 33.9C10.9225 33.3889 10.667 32.7556 10.667 32C10.667 31.2445 10.9225 30.6112 11.4337 30.1C11.9448 29.5889 12.5781 29.3334 13.3337 29.3334H43.1337L30.067 16.2667C29.5337 15.7334 29.2781 15.1112 29.3003 14.4C29.3225 13.6889 29.6003 13.0667 30.1337 12.5334C30.667 12.0445 31.2892 11.7889 32.0003 11.7667C32.7114 11.7445 33.3337 12 33.867 12.5334L51.467 30.1334C51.7337 30.4 51.9225 30.6889 52.0337 31C52.1448 31.3112 52.2003 31.6445 52.2003 32C52.2003 32.3556 52.1448 32.6889 52.0337 33C51.9225 33.3112 51.7337 33.6 51.467 33.8667L33.867 51.4667C33.3781 51.9556 32.767 52.2001 32.0337 52.2001C31.3003 52.2001 30.667 51.9556 30.1337 51.4667C29.6003 50.9334 29.3337 50.3001 29.3337 49.5667C29.3337 48.8334 29.6003 48.2001 30.1337 47.6667L43.1337 34.6667Z"
                            fill="#ffffffff"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="photos-card-body">
                    <p className="photos-card-title h4">
                      {" "}
                      {highlightText(photo.title, searchQuery)}
                    </p>
                  </div>
                  <div className="photos-card-footer d-flex justify-content-between align-items-center text-uppercase">
                    <small className="ptype" aria-label={photo.date}>
                      {photo.date}
                    </small>
                    <small className="ptype">{photo.items} Items</small>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
      </section>
    </div>
  );
}
