'use client';
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import { useState, useEffect, useMemo } from "react";

// Mock data - replace with your actual data source
const initialData = [
    { id: 1, title: "2-Day Workshop On Advance Excel From 18-19 January, 2020.", details: "", uploadedDate: "20.08.2025", lastDate: "21.08.2025" },
    { id: 2, title: "2 Days Integrated Workshop on Cyber Security & Women's Safety from 01-02 February, 2020", details: "", uploadedDate: "22.08.2025", lastDate: "23.08.2025" },
    { id: 3, title: "2 Days Workshop on Enhancing Productivity of Entrepreneurs from 18-19 Jan., 2020", details: "", uploadedDate: "25.08.2025", lastDate: "26.08.2025" },
    { id: 4, title: "2 Days Workshop on Commercial Contract Drafting & Negotiation from 01-02 February, 2020", details: "", uploadedDate: "28.08.2025", lastDate: "29.08.2025" },
    { id: 5, title: "Result - Central Boiler Board Examinations -2020", details: "", uploadedDate: "01.09.2025", lastDate: "02.09.2025" },
    { id: 6, title: "2 Days Workshop on How to Start your Business 29th Feb 2020 - 1st Mar 2020 at New Delhi", details: "", uploadedDate: "04.09.2025", lastDate: "05.09.2025" },
    { id: 7, title: "2-days Technical Workshop on Intellectual Property Rights", details: "", uploadedDate: "07.09.2025", lastDate: "26.08.2025" },
    { id: 8, title: "Viva-Voce Result - Sixth Examination for Recognition of Competent Persons for Inspection and Certification of Boilers 2019-20", details: "", uploadedDate: "10.09.2025", lastDate: "12.09.2025" },
    { id: 9, title: "Webinar: Delivering Industry Growth: The 4-M Way on 6th April, 2020 at 3:00 PM", details: "", uploadedDate: "14.09.2025", lastDate: "16.09.2025" },
    { id: 10, title: "Webinar on Best Practices for Preventive Maintenance on 01st May, 2020 at 3:00 PM", details: "", uploadedDate: "20.09.2025", lastDate: "22.09.2025" },
    { id: 11, title: "NPC organises 2 Days webinar on Cloud Computing On 14th &15th May 2020 at 11 AM", details: "", uploadedDate: "23.09.2025", lastDate: "24.08.2025" },
    { id: 12, title: "Press Release: Online Review Meeting of National Productivity Council", details: "Press Information Bureau | 02.06.2020", uploadedDate: "25.09.2025", lastDate: "26.09.2025" },
];

export default function AboutUs() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState(initialData);

    // Filter and sort data
    const filteredAndSortedData = useMemo(() => {
        let result = [...data];

        // Apply search filter
        if (searchTerm.trim()) {
            result = result.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (item.details && item.details.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        // Apply sorting
        if (sortOrder === "DESCY") {
            result.sort((a, b) => {
                const dateA = new Date(b.uploadedDate.split('.').reverse().join('-')).getTime();
                const dateB = new Date(a.uploadedDate.split('.').reverse().join('-')).getTime();
                return dateA - dateB;
            });
        } else if (sortOrder === "ASCY") {
            result.sort((a, b) => {
                const dateA = new Date(a.uploadedDate.split('.').reverse().join('-')).getTime();
                const dateB = new Date(b.uploadedDate.split('.').reverse().join('-')).getTime();
                return dateA - dateB;
            });
        }

        return result;
    }, [data, searchTerm, sortOrder]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredAndSortedData.slice(startIndex, endIndex);

    // Reset to first page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, sortOrder, itemsPerPage]);

    // Handle search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // Handle sort change
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(e.target.value);
    };

    // Handle items per page change
    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(parseInt(e.target.value));
    };

    // Handle page change
    const handlePageChange = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    // Generate pagination buttons
    const renderPaginationButtons = () => {
        const buttons = [];
        const maxVisibleButtons = 6;

        // Previous button
        buttons.push(
            <li key="prev">
                <button
                    className="button-item previous mb-2"
                    aria-disabled={currentPage === 1}
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    aria-label="Go to previous page"
                >
                    <span className="material-symbols-outlined">
                        <img
                            src="/images/icons/Chevron_Left.svg"
                            alt="Previous Page"
                        />
                    </span>
                </button>
            </li>
        );

        // Page buttons
        let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
        let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

        if (endPage - startPage + 1 < maxVisibleButtons) {
            startPage = Math.max(1, endPage - maxVisibleButtons + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <li
                    key={i}
                    className="page-item"
                    tabIndex={0}
                    role="link"
                    aria-current={i === currentPage ? "page" : undefined}
                    aria-label={`Go to page ${i}`}
                    onClick={() => handlePageChange(i)}
                >
                    <span className={`page-link pointer hover ${i === currentPage ? 'active' : 'false'}`}>
                        {i}
                    </span>
                </li>
            );
        }

        // Next button
        buttons.push(
            <li key="next">
                <button
                    className="button-item next mb-2"
                    title="Next"
                    aria-disabled={currentPage === totalPages}
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    aria-label="Go to Next page"
                >
                    <span className="material-symbols-outlined">
                        <img
                            src="/images/icons/Chevron_Right.svg"
                            alt="Next Page"
                        />
                    </span>
                </button>
            </li>
        );

        return buttons;
    };

    return (
        <div style={{}}>
            <InnerBannerSection
                imageSrc={navigationConfig["keyLinks"].imageSrc}
                breadcrumbs={navigationConfig["keyLinks"].breadcrumbs}
                navItems={navigationConfig["keyLinks"].navItems}
                pageTilte="Archive/latest News"
            />
            <section className="maincontent" role="main">
                <div className="container mt-5">
                    <form className="form-group row align-items-start row-gap-2 filterbox filterBoxResponsive">
                        <div className="col-md-12 col-lg-4">
                            <div className="input-group searchField">
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
                                    value={searchTerm}
                                    onChange={handleSearchChange}
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
                                                    fill="#5279d7"
                                                />
                                            </svg>
                                        </span>
                                    </span>
                                    <select
                                        className="form-select"
                                        role="listbox"
                                        aria-label="select"
                                        value={sortOrder}
                                        onChange={handleSortChange}
                                    >
                                        <option value="">Sort by</option>
                                        <option value="DESCY">Latest</option>
                                        <option value="ASCY">Oldest</option>
                                    </select>
                                </div>

                                <div className="input-group perPageField" role="combobox">
                                    <label htmlFor="pageLimitSelect" className="visually-hidden">
                                        Items per page
                                    </label>
                                    <span className="input-group-text">
                                        <span
                                            className="material-symbols-outlined bhashini-skip-translation"
                                            aria-hidden="true"
                                        >
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
                                        role="combobox"
                                        aria-label="pages"
                                        value={itemsPerPage}
                                        onChange={handleItemsPerPageChange}
                                    >
                                        <option value="5">5 per page</option>
                                        <option value="10">10 per page</option>
                                        <option value="15">15 per page</option>
                                        <option value="20">20 per page</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* Show results count */}
                    <div className="mb-3">
                        <small className="text-muted">
                            Showing {Math.min(startIndex + 1, filteredAndSortedData.length)} to {Math.min(endIndex, filteredAndSortedData.length)} of {filteredAndSortedData.length} results
                        </small>
                    </div>

                    {/* ---------- TABLE HEADER ---------- */}
                    <div role="table" aria-label="Tender data">
                        <div
                            role="rowgroup"
                            className="row row-gap-2 align-items-center tableheader ms-0 me-0"
                            style={{ backgroundColor: "#a3bbf3" }}
                        >
                            <div className="row align-items-center" role="row">
                                <div className="col-sm-12 col-md-12 col-lg-1" role="columnheader">
                                    <small className="text-uppercase">S.No.</small>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-4" role="columnheader">
                                    <small className="text-uppercase">Title</small>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-2" role="columnheader">
                                    <small className="text-uppercase">Details</small>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-2" role="columnheader">
                                    <small className="text-uppercase">Uploaded Date</small>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-2" role="columnheader">
                                    <small className="text-uppercase">Last Date</small>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-1" role="columnheader">
                                    <small className="text-uppercase">Downloads</small>
                                </div>
                            </div>
                        </div>

                        <div role="rowgroup">
                            {currentData.length > 0 ? (
                                currentData.map((item, index) => (
                                    <div
                                        key={item.id}
                                        role="row"
                                        className="announcementbox row row-gap-3 align-items-center ms-0 me-0"
                                    >
                                        <div className="col-sm-12 col-md-12 col-lg-1" role="cell">
                                            <div className="d-flex gap-2 align-items-center">
                                                <small className="ptype mb-0 text-break">
                                                    {startIndex + index + 1}
                                                </small>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-12 col-lg-4" role="cell">
                                            <div className="d-flex gap-2 align-items-center">
                                                <p className="mb-0">
                                                    {item.title}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-12 col-lg-2" role="cell">
                                            <div className="d-flex gap-2 align-items-center">
                                                <p>
                                                    {item.details}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-2" role="cell">
                                            <div className="d-flex gap-2 align-items-center">
                                                <small className="ptype mb-0" aria-label={item.uploadedDate}>
                                                    {item.uploadedDate}
                                                </small>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-2" role="cell">
                                            <div className="d-flex gap-2 align-items-center">
                                                <small className="ptype mb-0" aria-label={item.lastDate}>
                                                    {item.lastDate}
                                                </small>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-12 col-lg-1" role="cell">
                                            <div className="d-flex flex-wrap gap-2 align-items-center">
                                                <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between w-100">
                                                    <div>
                                                        <a
                                                            className="download-btn d-flex align-items-center text-uppercase pointer"
                                                            style={{ backgroundColor: "#a3bbf3" }}
                                                            target="_blank"
                                                            href="https://www.npcindia.gov.in/NPC/Uploads/image/International%20Services/Corrienngdum%20No%202%20for%20Tender%20to%20%20recruitment%20engage%20agencies%20on%20rate%20contract_0001465173.pdf"
                                                        >
                                                            <span
                                                                aria-hidden="true"
                                                                className="material-symbols-outlined bhashini-skip-translation"
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24 "
                                                                    viewBox="0 0 64 64"
                                                                    fill="none">
                                                                    <path d="M32 42.6667C35.3334 42.6667 38.1667 41.5 40.5 39.1667C42.8334 36.8333 44 34 44 30.6667C44 27.3333 42.8334 24.5 40.5 22.1667C38.1667 19.8333 35.3334 18.6667 32 18.6667C28.6667 18.6667 25.8334 19.8333 23.5 22.1667C21.1667 24.5 20 27.3333 20 30.6667C20 34 21.1667 36.8333 23.5 39.1667C25.8334 41.5 28.6667 42.6667 32 42.6667ZM32 37.8667C30 37.8667 28.3 37.1667 26.9 35.7667C25.5 34.3667 24.8 32.6667 24.8 30.6667C24.8 28.6667 25.5 26.9667 26.9 25.5667C28.3 24.1667 30 23.4667 32 23.4667C34 23.4667 35.7 24.1667 37.1 25.5667C38.5 26.9667 39.2 28.6667 39.2 30.6667C39.2 32.6667 38.5 34.3667 37.1 35.7667C35.7 37.1667 34 37.8667 32 37.8667ZM32 50.6667C26.0445 50.6667 20.6111 49.0667 15.7 45.8667C10.7889 42.6667 6.91114 38.4444 4.06669 33.2C3.84447 32.8 3.6778 32.3889 3.56669 31.9667C3.45558 31.5444 3.40002 31.1111 3.40002 30.6667C3.40002 30.2222 3.45558 29.7889 3.56669 29.3667C3.6778 28.9444 3.84447 28.5333 4.06669 28.1333C6.91114 22.8889 10.7889 18.6667 15.7 15.4667C20.6111 12.2667 26.0445 10.6667 32 10.6667C37.9556 10.6667 43.3889 12.2667 48.3 15.4667C53.2111 18.6667 57.0889 22.8889 59.9334 28.1333C60.1556 28.5333 60.3223 28.9444 60.4334 29.3667C60.5445 29.7889 60.6 30.2222 60.6 30.6667C60.6 31.1111 60.5445 31.5444 60.4334 31.9667C60.3223 32.3889 60.1556 32.8 59.9334 33.2C57.0889 38.4444 53.2111 42.6667 48.3 45.8667C43.3889 49.0667 37.9556 50.6667 32 50.6667ZM32 45.3333C37.0222 45.3333 41.6334 44.0111 45.8334 41.3667C50.0334 38.7222 53.2445 35.1555 55.4667 30.6667C53.2445 26.1778 50.0334 22.6111 45.8334 19.9667C41.6334 17.3222 37.0222 16 32 16C26.9778 16 22.3667 17.3222 18.1667 19.9667C13.9667 22.6111 10.7556 26.1778 8.53336 30.6667C10.7556 35.1555 13.9667 38.7222 18.1667 41.3667C22.3667 44.0111 26.9778 45.3333 32 45.3333Z"
                                                                        fill="#00000fff" />
                                                                </svg>
                                                            </span>
                                                            View
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-5">
                                    <p>No results found</p>
                                </div>
                            )}
                        </div>

                        {totalPages > 1 && (
                            <div className="row align-items-center d-flex justify-content-center mt-5">
                                <div className="col-md-4 d-flex justify-content-center">
                                    <nav aria-label="pagination">
                                        <ul className="pagination pointer">
                                            {renderPaginationButtons()}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}