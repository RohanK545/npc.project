"use client";
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import { useState, useMemo } from "react";
import React, { useEffect } from "react";
import axios from "axios";
interface Members {
  srNo: number;
  projectTitle: string;
  typeOfStudy: string;
  clientName: string;
  clientType: string;
  yearOfStudy: string;
  nameOfGroup: string;
  area: string;
  Scope: string;
}

interface Row {
  srNo: number;
  projectTitle: string;
  typeOfStudy: string;
  clientName: string;
  clientType: string;
  yearOfStudy: string;
  nameOfGroup: string;
  area: string;
  Scope: string;
}

interface Table {
  title: string;
  members: Members[];
}
interface InfoTableProps {
  members: Members[];
  search: string;
  highlightText: (text: string, search: string) => React.ReactNode;
}

const InfoTable = ({ members, search, highlightText }: InfoTableProps) => {
  return (
    <div role="table" className="our-team-list-container mx-auto my-4">
      {/* Hardcoded Title */}
      <div className="our-team-list-header d-flex align-items-center mt-0 mb-2">
        <p className="text-uppercase mb-0">CONSULTANCY PROJECTS</p>
      </div>

      {/* Header Row */}
      <div role="rowgroup">
        <div className="row row-gap-4 me-0 ms-0 our-team-list-subheader fw-bold">
          <div className="col-lg-1 col-sm-12">Sr.No.</div>
          <div className="col-lg-2 col-sm-12 ps-1">Project Title</div>
          <div className="col-lg-1 col-sm-12 ps-1">Type of Study</div>
          <div className="col-lg-2 col-sm-12 ps-1">Client Name</div>
          <div className="col-lg-1 col-sm-12 ps-1">Client Type</div>
          <div className="col-lg-1 col-sm-12 ps-1">Year of Study</div>
          <div className="col-lg-1 col-sm-12">Name of Group/RD</div>
          <div className="col-lg-2 col-sm-12">Area</div>
          <div className="col-lg-1 col-sm-12">Scope of Study</div>
        </div>
      </div>

      {/* Members */}
      <div role="rowgroup">
        {members.length === 0 ? (
          <div className="text-center py-3">No data found</div>
        ) : (
          members.map((m, idx) => (
            <div
              key={idx}
              role="row"
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader-list"
            >
              <div className="col-lg-1 col-md-12">
                <p className="mb-0">{m.srNo}</p>
              </div>
              <div className="col-lg-2 col-md-12">
                <p className="name mb-0">
                  {highlightText(m.projectTitle, search)}
                </p>
              </div>
              <div className="col-lg-1 col-md-12">
                <p className="mb-0">{highlightText(m.typeOfStudy, search)}</p>
              </div>
              <div className="col-lg-2 col-md-12">
                <p className="mb-0">{highlightText(m.clientName, search)}</p>
              </div>
              <div className="col-lg-1 col-md-12">
                <p className="mb-0">{highlightText(m.clientType, search)}</p>
              </div>
              <div className="col-lg-1 col-md-12">
                <p className="mb-0">{highlightText(m.yearOfStudy, search)}</p>
              </div>
              <div className="col-lg-1 col-md-12">
                <p className="mb-0">{highlightText(m.nameOfGroup, search)}</p>
              </div>
              <div className="col-lg-2 col-md-12">
                <p className="mb-0">{highlightText(m.area, search)}</p>
              </div>
              <div className="col-lg-1 col-md-12">
                <p className="mb-0">{highlightText(m.Scope, search)}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default function AboutUs() {
  const [tableData, setTableData] = useState<Table[]>([]);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    let isMounted = true;

    const fetchConsultancyProjects = async () => {
      try {
        const response = await axios.get(
          "/api/Service/getConsultancyProjects",
          {
            params: {
              search,
              page,
              pageSize: perPage,
            },
          }
        );

        if (!isMounted) return;

        setTableData(response.data.data);
        setTotalCount(response.data.totalCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchConsultancyProjects();

    return () => {
      isMounted = false;
    };
  }, [search, page, perPage]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearch(e.target.value);
    setPage(1); // reset page
  };

  const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(e.target.value));
    setPage(1);
  };
  const highlightText = (text: string | undefined, query: string) => {
    if (!query) return text || "";

    const safeText = text || "";

    const regex = new RegExp(`(${query})`, "gi");
    const parts = safeText.split(regex);

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

  const nextPage = () => page < totalPages && setPage(page + 1);
  const prevPage = () => page > 1 && setPage(page - 1);
  const totalPages = Math.ceil(totalCount / perPage);

  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["services"].imageSrc}
        breadcrumbs={navigationConfig["services"].breadcrumbs}
        navItems={navigationConfig["services"].navItems}
        pageTilte="Consultancy"
      />

      <section className="maincontent">
        <div className="">
          <div style={{}}>
            <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
              <ul className="nav nav-pills tabfont mlf-5 mt-4"></ul>
            </div>

            <div
              style={{
                marginBottom: "15px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  color: "#000",
                }}
              >
                Professional consultancy services are provided by NPC covering
                major sectors of Indian economy with emphasis on improvement of
                productivity, quality, profitability, and growth at entire
                organizational level. NPC’s consultancy services rely on problem
                solving and total solutions; a participative and holistic
                approach; developmental attitude, with Identifying frontier
                areas in the field of productivity and quality, catalysing work
                on them suiting to the local needs and promoting new
                institutions where needed apart from providing inputs to policy
                making.
              </p>
            </div>

            <div
              style={{
                marginBottom: "15px",
              }}
            >
              <h5
                style={{
                  fontSize: "16px",
                  // fontWeight: "bold",
                  margin: "0 0 5px 0",
                  color: "#000",
                }}
              >
                <b>NPC offers consultancy services in the areas of:</b>
              </h5>
              <h5
                style={{
                  fontSize: "14px",
                  margin: "0",
                  color: "#0066cc",
                }}
              ></h5>
              <div className="row listclass g-0">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 p-0">
                  <ul className="outside pl-3 m-0">
                    <li>Process Management, Strategic Productivity,</li>
                    <li>Energy Management,</li>
                    <li>Human Resources Management,</li>
                    <li>Environment Management,</li>
                    <li>Pollution Control,</li>
                    <li>Information Technology,</li>
                  </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 p-0">
                  <ul className="outside pl-3 m-0">
                    <li>Economic Services,</li>
                    <li>Agri-Business,</li>
                    <li>Total Quality Management (TQM),</li>
                    <li>Benchmarking,</li>
                    <li>ISO 9001/140001/50001 and OHSAS 18001 Standards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <form className="form-group row align-items-start row-gap-2 mb-0 filterbox filterBoxResponsive">
            {/* Search Field */}
            <div className="col-md-12 col-lg-4">
              <div className="input-group searchField">
                <span className="input-group-text">
                  <span aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 64 64"
                      fill="none"
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
                  className="form-control"
                  placeholder="Search..."
                  value={search}
                  onChange={() => handleSearchChange}
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

            {/* Desktop Filter Section */}
            <div className="col-md-12 col-lg-8 d-none d-md-block filterIconResponsivebox">
              <div className="d-flex align-items-center justify-content-end flex-wrap gap-2">
                {/* Per Page Select */}
                <div className="input-group perPageField" role="combobox">
                  <label htmlFor="pageLimitSelect" className="visually-hidden">
                    Items per page
                  </label>

                  <span className="input-group-text">
                    <span aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 66 66"
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
                    id="pageLimitSelect"
                    className="form-select"
                    value={perPage}
                    onChange={handlePerPageChange}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>

        {tableData.map((tbl, idx) => (
          <InfoTable
            key={idx}
            members={tbl.members}
            search={search}
            highlightText={highlightText}
          />
        ))}

        <div className="row align-items-center mt-5">
          <div className="col-md-4"></div>

          <div className="col-md-4 d-flex justify-content-center">
            <nav aria-label="Page navigation">
              <ul className="pagination pointer">
                {/* Previous Button */}
                <li>
                  <button
                    className="button-item previous"
                    onClick={prevPage}
                    disabled={page === 1}
                    aria-label="Go to previous page"
                  >
                    {/* Left Arrow SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 64 64"
                      fill="none"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <path
                        d="M28.8001 32L39.2001 42.4C39.689 42.8889 39.9335 43.5111 39.9335 44.2666C39.9335 45.0222 39.689 45.6444 39.2001 46.1333C38.7112 46.6222 38.089 46.8666 37.3335 46.8666C36.5779 46.8666 35.9557 46.6222 35.4668 46.1333L23.2001 33.8666C22.9335 33.6 22.7446 33.3111 22.6335 33C22.5224 32.6889 22.4668 32.3555 22.4668 32C22.4668 31.6444 22.5224 31.3111 22.6335 31C22.7446 30.6889 22.9335 30.4 23.2001 30.1333L35.4668 17.8666C35.9557 17.3777 36.5779 17.1333 37.3335 17.1333C38.089 17.1333 38.7112 17.3777 39.2001 17.8666C39.689 18.3555 39.9335 18.9777 39.9335 19.7333C39.9335 20.4889 39.689 21.1111 39.2001 21.6L28.8001 32Z"
                        fill="#162F6A"
                      />
                    </svg>
                  </button>
                </li>

                {/* Dynamic Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (num) => (
                    <li
                      key={num}
                      className="page-item"
                      tabIndex={0}
                      role="link"
                      aria-label={`Go to page ${num}`}
                      onClick={() => setPage(num)}
                    >
                      <span
                        className={`${
                          page === num ? "active" : "false"
                        } page-link pointer hover`}
                      >
                        {num}
                      </span>
                    </li>
                  )
                )}

                {/* Next Button */}
                <li>
                  <button
                    className="button-item next"
                    title="Next"
                    aria-disabled={page === totalPages}
                    disabled={page === totalPages}
                    aria-label="Go to Next page"
                    onClick={nextPage}
                  >
                    {/* Right Arrow SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 64 64"
                      fill="none"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <path
                        d="M33.6001 32L23.2001 21.6C22.7112 21.1111 22.4668 20.4889 22.4668 19.7333C22.4668 18.9777 22.7112 18.3555 23.2001 17.8666C23.689 17.3777 24.3112 17.1333 25.0668 17.1333C25.8224 17.1333 26.4446 17.3777 26.9335 17.8666L39.2001 30.1333C39.4668 30.4 39.6557 30.6889 39.7668 31C39.8779 31.3111 39.9335 31.6444 39.9335 32C39.9335 32.3555 39.8779 32.6889 39.7668 33C39.6557 33.3111 39.4668 33.6 39.2001 33.8666L26.9335 46.1333C26.4446 46.6222 25.8224 46.8666 25.0668 46.8666C24.3112 46.8666 23.689 46.6222 23.2001 46.1333C22.7112 45.6444 22.4668 45.0222 22.4668 44.2666C22.4668 43.5111 22.7112 42.8889 23.2001 42.4L33.6001 32Z"
                        fill="#29136C"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
