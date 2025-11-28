import InnerBannerSection from "@/components/InnerBannerSection";

export default function AboutUs() {
  const breadcrumbs = [
    { title: "Home", href: "/" },
    { title: "Documents" },
    { pagetitle: "Reports" },
  ];

  const navItems = [
    { label: "Reports", href: "/documents/", active: false },
    {
      label: "Acts And Policies",
      href: "/documents/acts-policies",
      active: false,
    },
    {
      label: "Orders And Notices",
      href: "/documents/orders-notices",
      active: false,
    },
    { label: "Publications", href: "/documents/publications", active: false },
    { label: "Press Release", href: "/documents/press-release", active: false },
    {
      label: "Gazettes Notifications",
      href: "/documents/gazettes",
      active: false,
    },
    { label: "Guidelines", href: "/documents/guidelines", active: false },
  ];

  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc="https://www.dpiit.gov.in/static/uploads/2025/06/09de3fbb2b470481678cdc656ea93d64.png"
        breadcrumbs={breadcrumbs}
        navItems={navItems}
      />
      <section className="maincontent" role="main">
        <div className="container mt-5">

          {/* FILTER FORM */}
          <form className="form-group row align-items-start row-gap-2 filterbox filterBoxResponsive">
            <div className="col-md-12 col-lg-4">
              <div className="input-group searchField">
                <span className="input-group-text">
                  <span className="material-symbols-outlined">search</span>
                </span>
                <input
                  type="search"
                  role="searchbox"
                  name="scheme"
                  aria-label="search"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="input-group-text filterIconResponsive d-block d-md-none">
                  <span className="material-symbols-outlined">filter_alt</span>
                </span>
              </div>
            </div>

            {/* RIGHT FILTERS */}
            <div className="col-md-12 col-lg-8 d-none d-md-block filterIconResponsivebox">
              <div className="d-flex align-items-center justify-content-end flex-wrap gap-2">

                {/* Sort */}
                <div className="input-group sortField">
                  <span className="input-group-text">
                    <span className="material-symbols-outlined">sort</span>
                  </span>
                  <select className="form-select" aria-label="select">
                    <option value="">Sort by</option>
                    <option value="DESCY">Latest</option>
                    <option value="ASCY">Oldest</option>
                  </select>
                </div>

                {/* Category */}
                <div className="input-group sortField">
                  <label htmlFor="categorySelect" className="visually-hidden">
                    Filter by Category
                  </label>
                  <span className="input-group-text">
                    <span className="material-symbols-outlined">sort</span>
                  </span>
                  <select
                    id="categorySelect"
                    className="form-select"
                    aria-label="Filter by Category"
                  >
                    <option value="">Category</option>
                    <option value="General">General</option>
                  </select>
                </div>

                {/* Per page */}
                <div className="input-group perPageField">
                  <label htmlFor="pageLimitSelect" className="visually-hidden">
                    Items per page
                  </label>
                  <span className="input-group-text">
                    <span className="material-symbols-outlined">list_alt</span>
                  </span>
                  <select
                    id="pageLimitSelect"
                    className="form-select"
                    aria-label="pages"
                  >
                    <option value="10">10 per page</option>
                    <option value="15">15 per page</option>
                    <option value="20">20 per page</option>
                  </select>
                </div>
              </div>
            </div>
          </form>

          {/* TABLE */}
          <div role="table" aria-label="Reports data">
            <div role="rowgroup" className="row row-gap-2 align-items-center tableheader ms-0 me-0">
              <div className="row align-items-center" role="row">
                <div className="col-sm-12 col-md-12 col-lg-7" role="columnheader">
                  <small className="text-uppercase">Title</small>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-2" role="columnheader">
                  <small className="text-uppercase">Published Year</small>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-2" role="columnheader">
                  <small className="text-uppercase">Type/Size</small>
                </div>
              </div>
            </div>

            {/* ---- SAMPLE ROWS (ALL YOUR HTML ROWS BELOW) ---- */}

            {/* Row 1 */}
            <div
              role="row"
              className="announcementbox row row-gap-2 align-items-center ms-0 me-0"
            >
              <div className="col-sm-12 col-md-12 col-lg-7" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Title:
                  </small>

                  <span className="material-symbols-outlined bhashini-skip-translation">
                    file_copy
                  </span>

                  <p className="mb-0">Integrated Finances</p>

                  <div className="counter-box d-flex justify-content-center align-items-center">
                    18
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-2" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Published Year:
                  </small>

                  <small className="ptype mb-0">2025</small>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-3" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Type/Size:
                  </small>

                  <div className="d-flex justify-content-end w-100">
                    <a
                      id="btn-zwj294"
                      className="download-btn d-flex align-items-center text-uppercase pointer"
                      title="View 18 Integrated Finances"
                      aria-label="View 18 Integrated Finances"
                      href="/documents/reports/archive-integrated-finances-QzMxATMtQWa?pageTitle=Integrated-Finances"
                    >
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        visibility
                      </span>
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="row"
              className="announcementbox row row-gap-2 align-items-center ms-0 me-0"
            >
              <div className="col-sm-12 col-md-12 col-lg-7" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Title:
                  </small>

                  <p className="mb-0">Detailed Demands for Grants 2025-2026</p>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-2" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Published Year:
                  </small>

                  <small className="ptype mb-0">2025</small>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-3" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Type/Size:
                  </small>

                  <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between w-100">
                    <div className="d-flex gap-4 align-items-center type-size">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 68 68"
                        fill="none"
                      // title="PDF icon"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.13 47.8714C12.7254 46.6379 9.88617 46.145 7.0975 46.4771H0V67.9281H5.6525V59.741H8.075C10.5846 59.9579 13.1063 59.4402 15.215 58.2752C17.0049 56.9837 17.9917 55.0731 17.8925 53.0912C18.025 51.0785 16.9966 49.1354 15.13 47.8714ZM10.5825 55.701C9.51486 56.0964 8.34103 56.2445 7.1825 56.1301H5.525V50.0523H7.1825C8.38607 49.9447 9.6003 50.144 10.6675 50.6243C11.6614 51.2066 12.2246 52.1813 12.155 53.1984C12.2838 54.2239 11.6623 55.213 10.5825 55.701ZM30.0475 46.4771H22.9925V67.9281H29.75C33.1938 68.2116 36.6618 67.653 39.7375 66.3193C43.1218 64.1975 44.9299 60.7346 44.4975 57.2026C44.7508 54.1767 43.4692 51.2021 40.97 49.0155C37.8829 46.9686 33.9459 46.0537 30.0475 46.4771ZM35.6575 63.0659C33.8869 63.9031 31.8595 64.2766 29.835 64.1384H28.73V50.2668H29.75C33.32 50.2668 34.7225 50.5528 36.125 51.6254C37.8271 53.1161 38.7062 55.1399 38.5475 57.2026C38.7661 59.4349 37.6898 61.6187 35.6575 63.0659ZM50.7025 67.9281H56.44V58.9544H68V55.1648H56.44V50.2668H68V46.4771H50.7025V67.9281ZM46.75 0H0V39.3268H8.5V32.1765V28.4226V7.15033H43.2225L59.5 20.8432V28.4226V32.1765V39.3268H68V17.8758L46.75 0Z"
                          fill="#085858"
                        />
                      </svg>

                      <small className="text-uppercase mb-0" aria-label="PDF size 3.17 MB">
                        3.17 MB
                      </small>
                    </div>

                    <div className="d-flex justify-content-end">
                      <a
                        id="btn-9ef49m"
                        type="pdf"
                        className="download-btn d-flex align-items-center text-uppercase pointer"
                        target="_blank"
                        href="https://www.meity.gov.in/static/uploads/2024/12/857bb1b813b980c7768d10e78a5f6d48.pdf"
                      >
                        <span
                          aria-hidden="true"
                          className="material-symbols-outlined bhashini-skip-translation"
                        >
                          visibility
                        </span>
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="row"
              className="announcementbox row row-gap-2 align-items-center ms-0 me-0"
            >
              <div className="col-sm-12 col-md-12 col-lg-7" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Title:
                  </small>

                  <span className="material-symbols-outlined bhashini-skip-translation">
                    draft
                  </span>

                  <p className="mb-0">
                    Major achievement of MeitY for the month of September 2024
                  </p>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-2" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Published Year:
                  </small>

                  <small className="ptype mb-0">2024</small>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-3" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Type/Size:
                  </small>

                  <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between w-100">
                    <div className="d-flex gap-4 align-items-center type-size">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 68 68"
                        fill="none"

                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.13 47.8714C12.7254 46.6379 9.88617 46.145 7.0975 46.4771H0V67.9281H5.6525V59.741H8.075C10.5846 59.9579 13.1063 59.4402 15.215 58.2752C17.0049 56.9837 17.9917 55.0731 17.8925 53.0912C18.025 51.0785 16.9966 49.1354 15.13 47.8714ZM10.5825 55.701C9.51486 56.0964 8.34103 56.2445 7.1825 56.1301H5.525V50.0523H7.1825C8.38607 49.9447 9.6003 50.144 10.6675 50.6243C11.6614 51.2066 12.2246 52.1813 12.155 53.1984C12.2838 54.2239 11.6623 55.213 10.5825 55.701ZM30.0475 46.4771H22.9925V67.9281H29.75C33.1938 68.2116 36.6618 67.653 39.7375 66.3193C43.1218 64.1975 44.9299 60.7346 44.4975 57.2026C44.7508 54.1767 43.4692 51.2021 40.97 49.0155C37.8829 46.9686 33.9459 46.0537 30.0475 46.4771ZM35.6575 63.0659C33.8869 63.9031 31.8595 64.2766 29.835 64.1384H28.73V50.2668H29.75C33.32 50.2668 34.7225 50.5528 36.125 51.6254C37.8271 53.1161 38.7062 55.1399 38.5475 57.2026C38.7661 59.4349 37.6898 61.6187 35.6575 63.0659ZM50.7025 67.9281H56.44V58.9544H68V55.1648H56.44V50.2668H68V46.4771H50.7025V67.9281ZM46.75 0H0V39.3268H8.5V32.1765V28.4226V7.15033H43.2225L59.5 20.8432V28.4226V32.1765V39.3268H68V17.8758L46.75 0Z"
                          fill="#085858"
                        />
                      </svg>

                      <small className="text-uppercase mb-0" aria-label="PDF size 77.63 KB">
                        77.63 KB
                      </small>
                    </div>

                    <div className="d-flex justify-content-end gap-4 flex-column">
                      <a
                        id="btn-r8u6y3"
                        type="pdf"
                        className="download-btn d-flex align-items-center text-uppercase pointer"
                        target="_blank"
                        title="View Major achievement of MeitY for the month of September 2024"
                        aria-label="View Major achievement of MeitY for the month of September 2024"
                        href="https://www.meity.gov.in/static/uploads/2024/10/b7cc14868215134748edbaecbf98630e.pdf"
                      >
                        <span
                          aria-hidden="true"
                          className="material-symbols-outlined bhashini-skip-translation"
                        >
                          visibility
                        </span>
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              role="row"
              className="announcementbox row row-gap-2 align-items-center ms-0 me-0"
            >
              {/* Title Section */}
              <div className="col-sm-12 col-md-12 col-lg-7" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Title:
                  </small>

                  <span className="material-symbols-outlined bhashini-skip-translation">
                    draft
                  </span>

                  <p className="mb-0">
                    Scheme-wise Release of Grants-in-Aid to Grantee Organizations
                  </p>
                </div>
              </div>

              {/* Published Year */}
              <div className="col-sm-12 col-md-12 col-lg-2" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Published Year:
                  </small>

                  <small className="ptype mb-0">2022</small>
                </div>
              </div>

              {/* Type / Size + PDF View */}
              <div className="col-sm-12 col-md-12 col-lg-3" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Type/Size:
                  </small>

                  <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between w-100">
                    {/* PDF icon + size */}
                    <div className="d-flex gap-4 align-items-center type-size">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 68 68"
                        fill="none"
                      //title="PDF icon"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.13 47.8714C12.7254 46.6379 9.88617 46.145 7.0975 46.4771H0V67.9281H5.6525V59.741H8.075C10.5846 59.9579 13.1063 59.4402 15.215 58.2752C17.0049 56.9837 17.9917 55.0731 17.8925 53.0912C18.025 51.0785 16.9966 49.1354 15.13 47.8714ZM10.5825 55.701C9.51486 56.0964 8.34103 56.2445 7.1825 56.1301H5.525V50.0523H7.1825C8.38607 49.9447 9.6003 50.144 10.6675 50.6243C11.6614 51.2066 12.2246 52.1813 12.155 53.1984C12.2838 54.2239 11.6623 55.213 10.5825 55.701ZM30.0475 46.4771H22.9925V67.9281H29.75C33.1938 68.2116 36.6618 67.653 39.7375 66.3193C43.1218 64.1975 44.9299 60.7346 44.4975 57.2026C44.7508 54.1767 43.4692 51.2021 40.97 49.0155C37.8829 46.9686 33.9459 46.0537 30.0475 46.4771ZM35.6575 63.0659C33.8869 63.9031 31.8595 64.2766 29.835 64.1384H28.73V50.2668H29.75C33.32 50.2668 34.7225 50.5528 36.125 51.6254C37.8271 53.1161 38.7062 55.1399 38.5475 57.2026C38.7661 59.4349 37.6898 61.6187 35.6575 63.0659ZM50.7025 67.9281H56.44V58.9544H68V55.1648H56.44V50.2668H68V46.4771H50.7025V67.9281ZM46.75 0H0V39.3268H8.5V32.1765V28.4226V7.15033H43.2225L59.5 20.8432V28.4226V32.1765V39.3268H68V17.8758L46.75 0Z"
                          fill="#085858"
                        />
                      </svg>

                      <small className="text-uppercase mb-0" aria-label="PDF size 800.71 KB">
                        800.71 KB
                      </small>
                    </div>

                    {/* View button */}
                    <div>
                      <div className="d-flex justify-content-end gap-4 flex-column">
                        <a
                          id="btn-3t6ono"
                          type="pdf"
                          className="download-btn d-flex align-items-center text-uppercase pointer"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View Financial Year 2021-22"
                          aria-label="View Financial Year 2021-22"
                          href="https://www.meity.gov.in/static/uploads/2024/02/35ab.pdf"
                        >
                          <span
                            aria-hidden="true"
                            className="material-symbols-outlined bhashini-skip-translation"
                          >
                            visibility
                          </span>
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="row"
              className="announcementbox row row-gap-2 align-items-center ms-0 me-0"
            >
              {/* Title Section */}
              <div className="col-sm-12 col-md-12 col-lg-7" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Title:
                  </small>

                  <span className="material-symbols-outlined bhashini-skip-translation">
                    draft
                  </span>

                  <p className="mb-0">
                    NSDC Report on Electronics and IT Hardware Sector
                  </p>
                </div>
              </div>

              {/* Published Year */}
              <div className="col-sm-12 col-md-12 col-lg-2" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Published Year:
                  </small>

                  <small className="ptype mb-0">2022</small>
                </div>
              </div>

              {/* Type/Size + PDF View */}
              <div className="col-sm-12 col-md-12 col-lg-3" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Type/Size:
                  </small>

                  <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between w-100">
                    {/* PDF Icon + Size */}
                    <div className="d-flex gap-4 align-items-center type-size">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 68 68"
                        fill="none"
                      //title="PDF icon"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.13 47.8714C12.7254 46.6379 9.88617 46.145 7.0975 46.4771H0V67.9281H5.6525V59.741H8.075C10.5846 59.9579 13.1063 59.4402 15.215 58.2752C17.0049 56.9837 17.9917 55.0731 17.8925 53.0912C18.025 51.0785 16.9966 49.1354 15.13 47.8714ZM10.5825 55.701C9.51486 56.0964 8.34103 56.2445 7.1825 56.1301H5.525V50.0523H7.1825C8.38607 49.9447 9.6003 50.144 10.6675 50.6243C11.6614 51.2066 12.2246 52.1813 12.155 53.1984C12.2838 54.2239 11.6623 55.213 10.5825 55.701ZM30.0475 46.4771H22.9925V67.9281H29.75C33.1938 68.2116 36.6618 67.653 39.7375 66.3193C43.1218 64.1975 44.9299 60.7346 44.4975 57.2026C44.7508 54.1767 43.4692 51.2021 40.97 49.0155C37.8829 46.9686 33.9459 46.0537 30.0475 46.4771ZM35.6575 63.0659C33.8869 63.9031 31.8595 64.2766 29.835 64.1384H28.73V50.2668H29.75C33.32 50.2668 34.7225 50.5528 36.125 51.6254C37.8271 53.1161 38.7062 55.1399 38.5475 57.2026C38.7661 59.4349 37.6898 61.6187 35.6575 63.0659ZM50.7025 67.9281H56.44V58.9544H68V55.1648H56.44V50.2668H68V46.4771H50.7025V67.9281ZM46.75 0H0V39.3268H8.5V32.1765V28.4226V7.15033H43.2225L59.5 20.8432V28.4226V32.1765V39.3268H68V17.8758L46.75 0Z"
                          fill="#085858"
                        />
                      </svg>

                      <small className="text-uppercase mb-0" aria-label="PDF size 466.31 KB">
                        466.31 KB
                      </small>
                    </div>

                    {/* View button */}
                    <div>
                      <div className="d-flex justify-content-end gap-4 flex-column">
                        <a
                          id="btn-wf3m13"
                          type="pdf"
                          className="download-btn d-flex align-items-center text-uppercase pointer"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View NSDC Report on Electronics and IT Hardware Sector"
                          aria-label="View NSDC Report on Electronics and IT Hardware Sector"
                          href="https://www.meity.gov.in/static/uploads/2024/02/Electronics_IT_Hardware_NSDC_Report_1732011-1.pdf"
                        >
                          <span
                            aria-hidden="true"
                            className="material-symbols-outlined bhashini-skip-translation"
                          >
                            visibility
                          </span>
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="row"
              className="announcementbox row row-gap-2 align-items-center ms-0 me-0"
            >
              {/* Title Section */}
              <div className="col-sm-12 col-md-12 col-lg-7" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Title:
                  </small>

                  <span className="material-symbols-outlined bhashini-skip-translation">
                    file_copy
                  </span>

                  <p className="mb-0">Artificial Intelligence Committees Reports (2019)</p>

                  <div className="counter-box d-flex justify-content-center align-items-center">
                    4
                  </div>
                </div>
              </div>

              {/* Published Year */}
              <div className="col-sm-12 col-md-12 col-lg-2" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Published Year:
                  </small>
                  <small className="ptype mb-0">2019</small>
                </div>
              </div>

              {/* Type/Size + View All */}
              <div className="col-sm-12 col-md-12 col-lg-3" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Type/Size:
                  </small>
                  <div className="d-flex justify-content-end w-100">
                    <a
                      id="btn-rbwi1q"
                      className="download-btn d-flex align-items-center text-uppercase pointer"
                      title="View 4 Artificial Intelligence Committees Reports"
                      aria-label="View 4 Artificial Intelligence Committees Reports"
                      href="/documents/reports/report-of-committee-gN0YTNtQWa?pageTitle=Artificial-Intelligence-Committees-Reports-(2019)"
                    >
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined bhashini-skip-translation"
                      >
                        visibility
                      </span>
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="row"
              className="announcementbox row row-gap-2 align-items-center ms-0 me-0"
            >
              {/* Title Section */}
              <div className="col-sm-12 col-md-12 col-lg-7" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Title:
                  </small>

                  <span className="material-symbols-outlined bhashini-skip-translation">
                    file_copy
                  </span>

                  <p className="mb-0">Outcome Budget (2015)</p>

                  <div className="counter-box d-flex justify-content-center align-items-center">
                    9
                  </div>
                </div>
              </div>

              {/* Published Year */}
              <div className="col-sm-12 col-md-12 col-lg-2" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Published Year:
                  </small>
                  <small className="ptype mb-0">2015</small>
                </div>
              </div>

              {/* Type/Size + View All */}
              <div className="col-sm-12 col-md-12 col-lg-3" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Type/Size:
                  </small>
                  <div className="d-flex justify-content-end w-100">
                    <a
                      id="btn-2353t4"
                      className="download-btn d-flex align-items-center text-uppercase pointer"
                      title="View 9 Outcome Budget"
                      aria-label="View 9 Outcome Budget"
                      href="/documents/reports/outcome-budget-2015-16-ETMwATMtQWa?pageTitle=Outcome-Budget-(2015)"
                    >
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined bhashini-skip-translation"
                      >
                        visibility
                      </span>
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="row"
              className="announcementbox row row-gap-2 align-items-center ms-0 me-0"
            >
              {/* Title Section */}
              <div className="col-sm-12 col-md-12 col-lg-7" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Title:
                  </small>

                  <span className="material-symbols-outlined bhashini-skip-translation">
                    file_copy
                  </span>

                  <p className="mb-0">Outcome Budget (2014)</p>

                  <div className="counter-box d-flex justify-content-center align-items-center">
                    10
                  </div>
                </div>
              </div>

              {/* Published Year */}
              <div className="col-sm-12 col-md-12 col-lg-2" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Published Year:
                  </small>
                  <small className="ptype mb-0">2014</small>
                </div>
              </div>

              {/* Type/Size + View All */}
              <div className="col-sm-12 col-md-12 col-lg-3" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Type/Size:
                  </small>
                  <div className="d-flex justify-content-end w-100">
                    <a
                      id="btn-60chdb"
                      className="download-btn d-flex align-items-center text-uppercase pointer"
                      title="View 10 Outcome Budget"
                      aria-label="View 10 Outcome Budget"
                      href="/documents/reports/outcome-budget-2014-15-IjMwATMtQWa?pageTitle=Outcome-Budget-(2014)"
                    >
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined bhashini-skip-translation"
                      >
                        visibility
                      </span>
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              role="row"
              className="announcementbox row row-gap-2 align-items-center ms-0 me-0"
            >
              {/* Title Section */}
              <div className="col-sm-12 col-md-12 col-lg-7" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Title:
                  </small>

                  <span className="material-symbols-outlined bhashini-skip-translation">
                    file_copy
                  </span>

                  <p className="mb-0">Outcome Budget (2012)</p>

                  <div className="counter-box d-flex justify-content-center align-items-center">
                    10
                  </div>
                </div>
              </div>

              {/* Published Year */}
              <div className="col-sm-12 col-md-12 col-lg-2" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Published Year:
                  </small>
                  <small className="ptype mb-0">2012</small>
                </div>
              </div>
              {/* Type/Size + View All */}
              <div className="col-sm-12 col-md-12 col-lg-3" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Type/Size:
                  </small>
                  <div className="d-flex justify-content-end w-100">
                    <a
                      id="btn-nh0nnm"
                      className="download-btn d-flex align-items-center text-uppercase pointer"
                      title="View 10 Outcome Budget"
                      aria-label="View 10 Outcome Budget"
                      href="/documents/reports/outcome-budget-2012-13-QDNwATMtQWa?pageTitle=Outcome-Budget-(2012)"
                    >
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined bhashini-skip-translation"
                      >
                        visibility
                      </span>
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="row"
              className="announcementbox row row-gap-2 align-items-center ms-0 me-0"
            >
              {/* Title Section */}
              <div className="col-sm-12 col-md-12 col-lg-7" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Title:
                  </small>

                  <span className="material-symbols-outlined bhashini-skip-translation">
                    file_copy
                  </span>

                  <p className="mb-0">Outcome Budget (2011)</p>

                  <div className="counter-box d-flex justify-content-center align-items-center">
                    10
                  </div>
                </div>
              </div>

              {/* Published Year */}
              <div className="col-sm-12 col-md-12 col-lg-2" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Published Year:
                  </small>
                  <small className="ptype mb-0">2011</small>
                </div>
              </div>

              {/* Type/Size + View All */}
              <div className="col-sm-12 col-md-12 col-lg-3" role="cell">
                <div className="d-flex align-items-center gap-2">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Type/Size:
                  </small>
                  <div className="d-flex justify-content-end w-100">
                    <a
                      id="btn-arcsyj"
                      className="download-btn d-flex align-items-center text-uppercase pointer"
                      title="View 10 Outcome Budget"
                      aria-label="View 10 Outcome Budget"
                      href="/documents/reports/outcome-budget-2011-12-UTNwATMtQWa?pageTitle=Outcome-Budget-(2011)"
                    >
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined bhashini-skip-translation"
                      >
                          
                      </span>
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
