"use client";

import InnerBannerSection from "@/components/InnerBannerSection";
import { useState } from "react";

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

  // Table data array
  const tableData = [
    {
      id: 1,
      title: "Integrated Finances",
      icon: "file_copy",
      year: "2025",
      type: "archive",
      count: 18,
      size: null,
      href: "/documents/reports/archive-integrated-finances-QzMxATMtQWa?pageTitle=Integrated-Finances",
    },
    {
      id: 2,
      title: "Detailed Demands for Grants 2025-2026",
      icon: null,
      year: "2025",
      type: "pdf",
      size: "3.17 MB",
      href: "https://www.meity.gov.in/static/uploads/2024/12/857bb1b813b980c7768d10e78a5f6d48.pdf",
    },
    {
      id: 3,
      title: "Major achievement of MeitY for the month of September 2024",
      icon: "draft",
      year: "2024",
      type: "pdf",
      size: "77.63 KB",
      href: "https://www.meity.gov.in/static/uploads/2024/10/b7cc14868215134748edbaecbf98630e.pdf",
    },
    {
      id: 4,
      title: "Scheme-wise Release of Grants-in-Aid to Grantee Organizations",
      icon: "draft",
      year: "2022",
      type: "pdf",
      size: "800.71 KB",
      href: "https://www.meity.gov.in/static/uploads/2024/02/35ab.pdf",
    },
    {
      id: 5,
      title: "NSDC Report on Electronics and IT Hardware Sector",
      icon: "draft",
      year: "2022",
      type: "pdf",
      size: "466.31 KB",
      href: "https://www.meity.gov.in/static/uploads/2024/02/Electronics_IT_Hardware_NSDC_Report_1732011-1.pdf",
    },
    {
      id: 6,
      title: "Artificial Intelligence Committees Reports (2019)",
      icon: "file_copy",
      year: "2019",
      type: "archive",
      count: 4,
      size: null,
      href: "/documents/reports/report-of-committee-gN0YTNtQWa?pageTitle=Artificial-Intelligence-Committees-Reports-(2019)",
    },
    {
      id: 7,
      title: "Outcome Budget (2015)",
      icon: "file_copy",
      year: "2015",
      type: "archive",
      count: 9,
      size: null,
      href: "/documents/reports/outcome-budget-2015-16-ETMwATMtQWa?pageTitle=Outcome-Budget-(2015)",
    },
    {
      id: 8,
      title: "Outcome Budget (2014)",
      icon: "file_copy",
      year: "2014",
      type: "archive",
      count: 10,
      size: null,
      href: "/documents/reports/outcome-budget-2014-15-IjMwATMtQWa?pageTitle=Outcome-Budget-(2014)",
    },
    {
      id: 9,
      title: "Outcome Budget (2012)",
      icon: "file_copy",
      year: "2012",
      type: "archive",
      count: 10,
      size: null,
      href: "/documents/reports/outcome-budget-2012-13-QDNwATMtQWa?pageTitle=Outcome-Budget-(2012)",
    },
    {
      id: 10,
      title: "Outcome Budget (2011)",
      icon: "file_copy",
      year: "2011",
      type: "archive",
      count: 10,
      size: null,
      href: "/documents/reports/outcome-budget-2011-12-UTNwATMtQWa?pageTitle=Outcome-Budget-(2011)",
    },
    {
      id: 11,
      title: "Annual Action Plan 2012-13",
      icon: "draft",
      year: "2011",
      type: "pdf",
      size: "11.73 MB",
      href: "https://www.meity.gov.in/static/uploads/2024/05/Annual_Action_Plan_2012-13_of_DeitY.pdf",
    },
    {
      id: 12,
      title: "Task Force Reports - Study on Semiconductor Design, Embedded Software and Services Industry",
      icon: "draft",
      year: "2011",
      type: "pdf",
      size: "17.49 MB",
      href: "https://www.meity.gov.in/static/uploads/2024/03/Semiconductor06April11_020511.pdf",
    },
  ];

  // State for pagination
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Calculate paginated data
  const totalItems = tableData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  // Get current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = tableData.slice(startIndex, endIndex);

  // Handle items per page change
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3; // Show only 3 pages as in your example
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than or equal to maxVisiblePages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      // Show pages around current page
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if at the beginning
      if (currentPage <= 2) {
        start = 2;
        end = Math.min(totalPages - 1, 3);
      }
      
      // Adjust if at the end
      if (currentPage >= totalPages - 1) {
        start = Math.max(2, totalPages - 2);
        end = totalPages - 1;
      }
      
      // Add ellipsis if needed
      if (start > 2) {
        pages.push('...');
      }
      
      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pages.push('...');
      }
      
      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  // Render individual table row
  const renderTableRow = (item: {
    id: number;
    title: string;
    icon: string | null;
    year: string;
    type: string;
    count?: number;
    size?: string | null;
    href: string;
  }) => {
    const isArchive = item.type === "archive";

    return (
      <div
        key={item.id}
        role="row"
        className="announcementbox row row-gap-2 align-items-center ms-0 me-0"
      >
        {/* Title Section */}
        <div className="col-sm-12 col-md-12 col-lg-7" role="cell">
          <div className="d-flex align-items-center gap-2">
            <small className="col-4 d-lg-none d-block text-uppercase table-column">
              Title:
            </small>

            {item.icon && (
              <span className="material-symbols-outlined bhashini-skip-translation">
                {item.icon}
              </span>
            )}

            <p className="mb-0">{item.title}</p>

            {isArchive && item.count && (
              <div className="counter-box d-flex justify-content-center align-items-center">
                {item.count}
              </div>
            )}
          </div>
        </div>

        {/* Published Year */}
        <div className="col-sm-12 col-md-12 col-lg-2" role="cell">
          <div className="d-flex align-items-center gap-2">
            <small className="col-4 d-lg-none d-block text-uppercase table-column">
              Published Year:
            </small>
            <small className="ptype mb-0">{item.year}</small>
          </div>
        </div>

        {/* Type/Size + Action Button */}
        <div className="col-sm-12 col-md-12 col-lg-3" role="cell">
          <div className="d-flex align-items-center gap-2">
            <small className="col-4 d-lg-none d-block text-uppercase table-column">
              Type/Size:
            </small>

            <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between w-100">
              {/* PDF icon + size or empty space for archives */}
              <div className="d-flex gap-4 align-items-center type-size">
                {!isArchive && item.size && (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 68 68"
                      fill="none"
                      aria-label="PDF file"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.13 47.8714C12.7254 46.6379 9.88617 46.145 7.0975 46.4771H0V67.9281H5.6525V59.741H8.075C10.5846 59.9579 13.1063 59.4402 15.215 58.2752C17.0049 56.9837 17.9917 55.0731 17.8925 53.0912C18.025 51.0785 16.9966 49.1354 15.13 47.8714ZM10.5825 55.701C9.51486 56.0964 8.34103 56.2445 7.1825 56.1301H5.525V50.0523H7.1825C8.38607 49.9447 9.6003 50.144 10.6675 50.6243C11.6614 51.2066 12.2246 52.1813 12.155 53.1984C12.2838 54.2239 11.6623 55.213 10.5825 55.701ZM30.0475 46.4771H22.9925V67.9281H29.75C33.1938 68.2116 36.6618 67.653 39.7375 66.3193C43.1218 64.1975 44.9299 60.7346 44.4975 57.2026C44.7508 54.1767 43.4692 51.2021 40.97 49.0155C37.8829 46.9686 33.9459 46.0537 30.0475 46.4771ZM35.6575 63.0659C33.8869 63.9031 31.8595 64.2766 29.835 64.1384H28.73V50.2668H29.75C33.32 50.2668 34.7225 50.5528 36.125 51.6254C37.8271 53.1161 38.7062 55.1399 38.5475 57.2026C38.7661 59.4349 37.6898 61.6187 35.6575 63.0659ZM50.7025 67.9281H56.44V58.9544H68V55.1648H56.44V50.2668H68V46.4771H50.7025V67.9281ZM46.75 0H0V39.3268H8.5V32.1765V28.4226V7.15033H43.2225L59.5 20.8432V28.4226V32.1765V39.3268H68V17.8758L46.75 0Z"
                        fill="#085858"
                      />
                    </svg>

                    <small
                      className="text-uppercase mb-0"
                      aria-label={`PDF size ${item.size}`}
                    >
                      {item.size}
                    </small>
                  </>
                )}
              </div>

              {/* Action Button */}
              <div className="d-flex justify-content-end">
                <a
                  id={`btn-${item.id}`}
                  className="download-btn d-flex align-items-center text-uppercase pointer"
                  href={item.href}
                  target={isArchive ? "_self" : "_blank"}
                  rel={!isArchive ? "noopener noreferrer" : undefined}
                  title={`${isArchive ? 'View' : 'View'} ${item.title}`}
                  aria-label={`${isArchive ? 'View' : 'View'} ${item.title}`}
                >
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined bhashini-skip-translation"
                  >
                    visibility
                  </span>
                  {isArchive ? "View All" : "View"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
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
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                  >
                    {/* <option value="5">5 per page</option> */}
                    <option value="10">10 per page</option>
                    <option value="15">15 per page</option>
                    <option value="20">20 per page</option>
                  </select>
                </div>
              </div>
            </div>
          </form>

          {/* Results count */}
          <div className="mb-3">
            <small className="text-muted">
              Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of {totalItems} entries
            </small>
          </div>

          {/* TABLE */}
          <div role="table" aria-label="Reports data">
            {/* Table Header */}
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

            {/* Table Rows */}
            {currentItems.map(renderTableRow)}
          </div>

          {/* Pagination Controls - Your Style */}
          {totalPages > 1 && (
            <div className="row mt-4">
              <div className="col-md-4 d-flex justify-content-center mx-auto">
                <nav aria-label="Page navigation">
                  <ul className="pagination pointer mb-0">

                    {/* Previous Button */}
                    <li>
                      <button
                        className="button-item previous"
                        title="Previous"
                        aria-disabled={currentPage === 1}
                        aria-label="Go to previous page"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <span
                          className="material-symbols-outlined bhashini-skip-translation"
                          aria-label="Previous page"
                          aria-hidden="true"
                        >
                          chevron_left
                        </span>
                      </button>
                    </li>

                    {/* Page Numbers */}
                    {getPageNumbers().map((pageNum, index) => {
                      if (pageNum === '...') {
                        return (
                          <li key={`ellipsis-${index}`} className="page-item disabled">
                            <span className="page-link">...</span>
                          </li>
                        );
                      }
                      
                      const page = pageNum as number;
                      const isActive = currentPage === page;
                      
                      return (
                        <li
                          key={page}
                          className="page-item"
                          tabIndex={0}
                          role="button"
                          aria-label={`Go to page ${page}${isActive ? ' (Current Page)' : ''}`}
                          onClick={() => handlePageChange(page)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              handlePageChange(page);
                            }
                          }}
                        >
                          <span 
                            className={`page-link pointer hover ${isActive ? 'active' : ''}`}
                          >
                            {page}
                          </span>
                        </li>
                      );
                    })}

                    {/* Next Button */}
                    <li>
                      <button
                        className="button-item next"
                        title="Next"
                        aria-disabled={currentPage === totalPages}
                        aria-label="Go to Next page"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        <span
                          className="material-symbols-outlined bhashini-skip-translation"
                          aria-label="Next"
                          aria-hidden="true"
                        >
                          chevron_right
                        </span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}