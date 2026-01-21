"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
interface Link {
  path: string;
}

interface Item {
  path?: string;
  links?: Link[];
}

export default function Header() {
  // const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  // const [openIndexSidebar, setOpenIndexSidebar] = useState(null);

  const toggleSubMenu = (index: number) => {
    -setOpenIndex(openIndex === index ? null : index); // toggle open/close
  };

  const router = useRouter();
  const pathname = usePathname();
  const navItems = [
    {
      title: "Home",
      path: "/",
      links: [],
    },
    {
      title: "About Us",
      path: "/aboutUs",
      links: [
        { label: "About NPC", path: "/aboutUs/" },
        {
          label: "Organization Structure",
          path: "/aboutUs/organization-structure",
        },
        {
          label: "Offices",
          path: "/aboutUs/offices",
        },
        {
          label: "All Offices ",
          path: "/aboutUs/all-offices",
        },
      ],
    },
    {
      title: "Services",
      path: "/services",
      links: [
        { label: "Consultancy", path: "/services/" },
        {
          label: "Productivity Promotion",
          path: "/services/productivity-promottion",
        },
        { label: "Training", path: "/services/training" },
        {
          label: "International Services",
          path: "/services/international-services",
        },
      ],
    },
    {
      title: "Training Programmes",
      path: "/trainingProgrammes",
      links: [
        {
          label: "Annual Training Calendar (Financial Year Wise)",
          path: "/trainingProgrammes/",
        },
        { label: "E-Learning", path: "/trainingProgrammes/e-learning" },
        {
          label: "Online Training",
          path: "/trainingProgrammes/online-training",
        },
      ],
    },
    {
      title: "Domain Expertise",
      path: "/domainExpertise",
      links: [
        { label: " Agri Business Group", path: "/domainExpertise/" },
        {
          label: "Economic Services & Productivity Promotion",
          path: "/domainExpertise/economic-service",
        },
        {
          label: "Energy Management",
          path: "/domainExpertise/energy-management",
        },
        {
          label: "Environment and Climate Action Group",
          path: "/domainExpertise/environment-climate",
        },
        {
          label: "Information Technology",
          path: "/domainExpertise/information-technology",
        },
        {
          label: "Industrial Engineering",
          path: "/domainExpertise/industrial-engineering",
        },
        {
          label: "Human Resource Management",
          path: "/domainExpertise/human-resource-management",
        },
      ],
    },
    {
      title: "Facilities",
      path: "/facilities",
      links: [
        { label: "Conference Hall", path: "/facilities/" },
        { label: "Library", path: "/facilities/library" },
        {
          label: "Hostel & Training Facility",
          path: "/facilities/hostel-training-facility",
        },
      ],
    },
    {
      title: "Publications & Media",
      path: "/publicationMedia",
      links: [
        { label: "Publications", path: "/publicationMedia/" },
        { label: "Press Releases", path: "/publicationMedia/press-releases" },
        {
          label: "News & Updates",
          path: "/publicationMedia/news-updates",
        },
        { label: "Photo Gallery", path: "/publicationMedia/photo-gallery" },
      ],
    },
    // {
    //   title: "Initiatives & Projects",
    //   path: "/initiativesProjects",
    //   links: [
    //     {
    //       label: "5S-Certification",
    //       path: "https://www.npcindia.gov.in/NPC/Uploads/domestic%20services/NPC%205S%20certification%20Guidelines%2023443727.pdf",
    //     },
    //     {
    //       label: "Inspection Division",
    //       path: "/initiativesProjects/inspection-division",
    //     },
    //     {
    //       label: "Water Audit",
    //       path: "/initiativesProjects/water-audit",
    //     },
    //     {
    //       label: "Centre of Excellence",
    //       path: "/initiativesProjects/centre-of-excellence",
    //     },
    //     {
    //       label: "Plastic Free River",
    //       path: "/initiativesProjects/plastic-free-river",
    //     },
    //   ],
    // },
    // {
    //   title: "Tenders & Careers",
    //   path: "/tendersCareers",
    //   links: [
    //     { label: "Tender Notices", path: "/tendersCareers/" },
    //     {
    //       label: " Career Opportunities",
    //       path: "/tendersCareers/career-opportunities",
    //     },
    //   ],
    // },
    {
      title: "Notices",
      path: "/notices",
      links: [
        { label: "Latest News", path: "/notices/" },
        { label: "Notices", path: "/notices/notices" },
        { label: "Empanelment", path: "/notices/empanelment" },
      ],
    },
    {
      title: "Local Productivity Councils",
      path: "/localProductivityCouncils",
      links: [
        { label: "LPC List", path: "/localProductivityCouncils/" },
        {
          label: "LPC Notices",
          path: "/localProductivityCouncils/LPC-notices",
        },
      ],
    },
    // {
    //   title: "Key Links",
    //   path: "/keyLinks",
    //   links: [
    //     { label: "Contact Us", path: "/keyLinks/" },
    //     {
    //       label: "Feedback & Grievance Redressal",
    //       path: "/keyLinks/feedback",
    //     },
    //     { label: "Sitemap", path: "/keyLinks/sitemap" },
    //     { label: "External Links", path: "/keyLinks/external-links" },
    //     { label: "Website Policies", path: "/keyLinks/website-policies" },
    //     { label: "Archive", path: "/keyLinks/archive" },
    //   ],
    // },
  ];

  const normalize = (p: string) => p?.replace(/\/+$/, "");

  const isActive = (item: Item) => {
    const current = normalize(pathname);
    const itemPath = normalize(item.path ?? "");

    // 🔥 Special condition: Home should only be active on "/"
    if (itemPath === "" || itemPath === "/") {
      return current === "";
    }

    // Normal items:
    if (item.path) {
      return current === itemPath || current.startsWith(itemPath + "/");
    }

    if (item.links && item.links.length > 0) {
      return item.links.some((link: Link) => {
        const linkPath = normalize(link.path);
        return current === linkPath || current.startsWith(linkPath + "/");
      });
    }

    return false;
  };

  return (
    <>
      {/* QUICK LINKS BAR */}
      <div className="container ">
        <div className="header container-fluid border-bottom ">
          <div className="row">
            <div className="col-12">
              <div
                className="
          d-flex
          justify-content-between
          align-items-center
          px-2 px-lg-4
          py-1
          small
        "
              >
                {/* LEFT: Skip Links */}
                <div className="d-flex gap-3"></div>

                {/* RIGHT: Language + Accessibility */}
                <div className="d-flex align-items-center gap-3">
                  {/* Language */}
                  <ul className="menutop list-unstyled d-flex align-items-center gap-3 mb-0">
                    <li className="border-start ps-3 ">
                      <a
                        tabIndex={0}
                        role="link"
                        title="Skip to main Content"
                        className="skipcontent"
                      >
                        <svg
                          width="32"
                          height="32"
                          aria-label="Skip to main Content icon"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.0335 5.69397H8.61686C8.04223 5.69397 7.49113 5.92224 7.0848 6.32857C6.67847 6.7349 6.4502 7.286 6.4502 7.86064V12.194H8.08324V7.19397H27.7002V23.694H8.06142V18.694H6.4502V23.0273C6.4502 23.6019 6.67847 24.153 7.0848 24.5594C7.49113 24.9657 8.04223 25.194 8.61686 25.194H27.0335C27.6082 25.194 28.1593 24.9657 28.5656 24.5594C28.9719 24.153 29.2002 23.6019 29.2002 23.0273V7.86064C29.2002 7.286 28.9719 6.7349 28.5656 6.32857C28.1593 5.92224 27.6082 5.69397 27.0335 5.69397ZM10.7835 18.694V16.5754H3.2002V14.694H10.7835V12.194L14.5 15.5L10.7835 18.694ZM24.8669 16H17.2835V14.3606H24.8669V16ZM24.8669 12.194H17.2835V10.694H24.8669V12.194ZM21.6169 20.194H17.2835V18.694H21.6169V20.194Z"
                            fill="#1D0A69"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li className="border-start ps-3 ">
                      <div>
                        <div className="bhashini-plugin-container">
                          <div
                            className="dont-translate bhashini-skip-translation bhashini-dropdown"
                            id="bhashini-translation"
                            title="Translate this page!"
                          >
                            {/* <button
                            aria-label="Translate this page!"
                            className="bhashini-dropdown-btn"
                          > */}
                            <div>
                              <div className="bhashini-dropdown-btn-icon">
                                <svg
                                  width="32"
                                  height="32"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.125 3.735V12H12.91V3.735H11.815V2.67H15.685V3.735H14.125ZM8.47 2.52C9.25 2.52 9.845 2.715 10.255 3.105C10.675 3.495 10.885 3.985 10.885 4.575C10.885 5.005 10.77 5.395 10.54 5.745C10.32 6.085 9.99 6.355 9.55 6.555C9.11 6.755 8.56 6.865 7.9 6.885L7.825 5.835C8.505 5.815 8.985 5.695 9.265 5.475C9.555 5.255 9.7 4.96 9.7 4.59C9.7 4.23 9.58 3.97 9.34 3.81C9.11 3.65 8.84 3.57 8.53 3.57C8.16 3.57 7.825 3.62 7.525 3.72C7.225 3.82 6.905 3.955 6.565 4.125L6.19 3.09C6.45 2.95 6.77 2.82 7.15 2.7C7.54 2.58 7.98 2.52 8.47 2.52ZM11.05 8.73C11.05 9.19 10.945 9.575 10.735 9.885C10.525 10.195 10.24 10.425 9.88 10.575C9.53 10.725 9.13 10.8 8.68 10.8C8.11 10.8 7.58 10.66 7.09 10.38C6.61 10.1 6.15 9.655 5.71 9.045C5.28 8.435 4.855 7.64 4.435 6.66L5.5 6.27C5.79 6.98 6.09 7.595 6.4 8.115C6.72 8.625 7.06 9.02 7.42 9.3C7.78 9.57 8.165 9.705 8.575 9.705C8.955 9.705 9.265 9.62 9.505 9.45C9.745 9.27 9.865 8.985 9.865 8.595C9.865 8.115 9.7 7.7 9.37 7.35C9.04 7 8.64 6.68 8.17 6.39L9.055 6.345L9.7 6.21C9.84 6.33 9.995 6.475 10.165 6.645C10.335 6.815 10.47 6.985 10.57 7.155L10.645 7.44C10.775 7.63 10.875 7.83 10.945 8.04C11.015 8.25 11.05 8.48 11.05 8.73ZM11.29 6.75C11.77 6.75 12.185 6.715 12.535 6.645C12.885 6.565 13.295 6.44 13.765 6.27V7.35C13.335 7.54 12.945 7.665 12.595 7.725C12.255 7.785 11.88 7.815 11.47 7.815C11.32 7.815 11.145 7.805 10.945 7.785C10.745 7.755 10.555 7.725 10.375 7.695C10.205 7.655 10.08 7.62 10 7.59L9.295 6.75L9.385 6.525C9.675 6.595 9.98 6.65 10.3 6.69C10.62 6.73 10.95 6.75 11.29 6.75Z"
                                    fill="#162F6A"
                                  ></path>
                                  <path
                                    d="M19.63 22L18.426 18.906H14.464L13.274 22H12L15.906 11.962H17.04L20.932 22H19.63ZM18.048 17.786L16.928 14.762C16.9 14.6873 16.8533 14.552 16.788 14.356C16.7227 14.16 16.6573 13.9593 16.592 13.754C16.536 13.5393 16.4893 13.376 16.452 13.264C16.3773 13.5533 16.298 13.838 16.214 14.118C16.1393 14.3887 16.074 14.6033 16.018 14.762L14.884 17.786H18.048Z"
                                    fill="#162F6A"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            {/* </button> */}
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="border-start ps-3 ">
                      <button
                        aria-label="Accessibility panel"
                        title="Accessibility panel"
                        aria-haspopup="dialog"
                        className="jsx-1785232235 accessibility-btn pointer "
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-label="Accessibility panal icon"
                          xmlns="http://www.w3.org/2000/svg"
                          className="jsx-1785232235"
                        >
                          <path
                            d="M9.10943 11.1626C8.04754 11.1626 7.02744 11.1644 6.00735 11.1608C5.80813 11.1608 5.60625 11.1537 5.41059 11.1217C4.5817 10.9865 3.99295 10.2771 4.00006 9.43694C4.00718 8.61724 4.63684 7.89088 5.44883 7.77442C5.62403 7.74953 5.80279 7.74241 5.98067 7.74241C9.981 7.74064 13.9813 7.73886 17.9817 7.74508C18.2449 7.74508 18.5197 7.76642 18.7688 7.84377C19.5114 8.07403 19.9721 8.78171 19.9223 9.55963C19.8742 10.3118 19.2944 10.9794 18.5446 11.1101C18.2734 11.1572 17.9923 11.1581 17.7158 11.1599C16.7633 11.1652 15.8099 11.1617 14.7613 11.1617C14.82 12.0783 14.7666 12.9816 14.9543 13.8315C15.3945 15.823 15.9548 17.7878 16.4555 19.7659C16.6912 20.6985 16.1994 21.6044 15.3207 21.9032C14.3264 22.241 13.2796 21.6667 13.0279 20.6194C12.6864 19.196 12.368 17.7664 12.039 16.3404C12.0256 16.2817 12.0061 16.2248 11.9243 16.1652C11.7597 16.8818 11.5943 17.5993 11.4289 18.3159C11.2546 19.0724 11.0918 19.8317 10.9033 20.5847C10.6516 21.5867 9.71508 22.1485 8.73768 21.9058C7.79585 21.6711 7.22933 20.7127 7.47746 19.7303C7.92747 17.9451 8.35614 16.1537 8.86397 14.3845C9.16635 13.331 9.08898 12.2774 9.10854 11.1626H9.10943ZM11.9972 8.88306C10.0077 8.88306 8.01819 8.88306 6.0278 8.88306C5.8944 8.88306 5.75921 8.88039 5.62937 8.90173C5.33766 8.94796 5.14556 9.172 5.14289 9.4485C5.14022 9.73032 5.32165 9.94992 5.61692 10.0024C5.73609 10.0237 5.8606 10.0219 5.98244 10.0219C7.01588 10.0237 8.0502 10.0166 9.08364 10.0255C9.68307 10.0308 10.198 10.4051 10.2176 10.9394C10.2505 11.8587 10.3207 12.8011 10.1615 13.6955C9.91074 15.1002 9.48385 16.4737 9.12988 17.8607C8.94846 18.5701 8.75547 19.276 8.58026 19.9873C8.47976 20.3944 8.67898 20.7216 9.05162 20.8087C9.39669 20.8896 9.70708 20.6772 9.81469 20.2851C9.82359 20.2531 9.82625 20.2193 9.83337 20.1873C10.2336 18.435 10.632 16.6827 11.0393 14.9321C11.0865 14.7303 11.1514 14.5178 11.2661 14.3507C11.4636 14.0644 11.7659 13.948 12.1137 14.0129C12.5166 14.0884 12.7522 14.3418 12.8438 14.7392C13.2574 16.5449 13.6736 18.3505 14.089 20.1562C14.0961 20.1882 14.0978 20.2229 14.1058 20.2549C14.2108 20.6709 14.5221 20.895 14.876 20.8114C15.2602 20.7207 15.4479 20.3864 15.3394 19.957C15.0744 18.9142 14.804 17.8722 14.5319 16.8311C14.0578 15.0184 13.5002 13.2252 13.6656 11.3048C13.7385 10.4522 14.1085 10.0237 14.9739 10.021C15.9628 10.0184 16.9527 10.021 17.9417 10.0202C18.0528 10.0202 18.1649 10.0219 18.2734 10.0033C18.5989 9.94814 18.7999 9.70543 18.7821 9.40493C18.7643 9.11244 18.5589 8.91507 18.2334 8.88662C18.1231 8.87684 18.011 8.88039 17.8999 8.88039C15.9326 8.88039 13.9653 8.88039 11.9972 8.88039V8.88306Z"
                            fill="#1D0A69"
                            className="jsx-1785232235"
                          ></path>
                          <path
                            d="M11.8704 6.62963C10.5698 6.62692 9.54923 5.59711 9.55557 4.29402C9.56192 3.02713 10.6133 1.9928 11.8876 2.00004C13.1583 2.00818 14.1879 3.05065 14.1852 4.3275C14.1824 5.60707 13.1519 6.63144 11.8704 6.62872V6.62963ZM13.026 4.31031C13.0214 3.67415 12.4867 3.1502 11.8522 3.15925C11.2296 3.16829 10.7157 3.68953 10.7148 4.31121C10.713 4.96185 11.2205 5.46861 11.8713 5.46771C12.5238 5.4668 13.0314 4.95733 13.026 4.3094V4.31031Z"
                            fill="#1D0A69"
                            className="jsx-1785232235"
                          ></path>
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row  logobox align-items-center header-section-div">
          <div className="col-lg-4 col-md-12 col-xs-12 d-flex align-items-center justify-content-center">
            <a
              href="#"
              className=" d-flex align-items-center text-black text-decoration-none"
            >
              {/* Logo - stays on the LEFT */}
              <Image
                src="/images/logos/npc_logo.png"
                alt="National Productivity Council Logo"
                width={100}
                height={100}
                className="img-fluid flex-shrink-0 me-3"
                priority
              />

              {/* Text - stays on the RIGHT */}
              <div className="logotext">
                {/* <p className="mb-1 govtext h2">Government of India</p> */}

                <h1 className="me-3 h2 text-break bold ministry-name-45 mb-0">
                  National Productivity Council
                </h1>
                <h5>
                  Under Department for Promotion of Industry & Internal Trade,
                  Ministry of Commerce & Industry (GOI)
                </h5>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-12 mt-3 col-xs-12 d-flex align-items-center justify-content-center header">
            <div className=" searchposition">
              <div className="">
                <div className="input-group">
                  <input
                    type="search"
                    aria-label="search"
                    className="form-control border-0 shadow-none"
                    placeholder="Search..."
                  />

                  <button
                    // type="button"
                    className="search-icon-btn skip"
                    title="Search"
                  >
                    <span
                      className="material-symbols-outlined bhashini-skip-translation ms-3"
                      data-anuvadak-no-localization="true"
                    >
                      search
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12  d-none d-md-flex align-items-center justify-content-center">
            <div className="row">
              <div className="col-5 d-flex align-items-center">
                <a href="#" className=" text-black text-decoration-none">
                  {/* Logo - stays on the LEFT */}
                  <Image
                    src="/images/emblems/Swachh_Bharat.svg"
                    alt="Swachh Bharat Logo"
                    width={90}
                    height={90}
                    className="img-fluid"
                    style={{ maxWidth: "150px", minWidth: "100px" }}
                    priority
                  />
                </a>
              </div>
              <div className="col-7">
                <a
                  href="#"
                  className=" d-flex align-items-center text-black text-decoration-none"
                >
                  {/* Logo - stays on the LEFT */}
                  <Image
                    src="/images/emblems/National_Emblem.svg"
                    alt="National Productivity Council Logo"
                    width={50}
                    height={50}
                    className="img-fluid flex-shrink-0 me-3"
                    priority
                  />

                  {/* Text - stays on the RIGHT */}
                  <div className="logotext">
                    <p className="mb-1 govtext h5 h4-md h3-lg h2-xl">
                      Government of India
                    </p>

                    <h1 className="h4 h3-md h2-lg h1-xl mb-0 text-break ministry-name-45">
                      Department for Promotion of Industry and Internal Trade
                    </h1>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <header className="header">
          <div className="d-block header-section-div">
            <div className="row align-items-center mb-flex">
              <div className="col-lg-8 pe-0">
                <div className="d-flex justify-content-start align-items-end mobilescr">
                  {/* RIGHT SIDE IMAGES – DESKTOP ONLY */}
                </div>
              </div>
            </div>
          </div>
          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 1040,
                transition: "opacity 1s ease",
                opacity: isOpen ? 1 : 0,
              }}
            />
          )}
        </header>
      </div>
      <ul
        className="nav  navigation-menu-container sticky-top  mt-3 bg-white border-top"
        style={{ margin: 0, padding: 0, borderBottom: "2px solid #162f6a" }}
      >
        {navItems.map((item, index) => {
          const active = isActive(item);
          return (
            <li
              key={index}
              className={`nav-item position-relative d-flex justify-content-center align-items-center text-center ${
                active ? "borderbottom-active" : ""
              }`}
              style={{
                width: "",
                // height: "65px",
                padding: "1rem 2rem",
                height: "6rem",
                // flex: "1",
                minWidth: "120px",
                cursor: "pointer",
              }}
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
              onClick={(e) => {
                e.stopPropagation();
                if (item.links.length === 0 && item.path) {
                  router.push(item.path);
                }
              }}
            >
              <span
                className={`fw-bold fs-3 ${active ? "navigation-text" : ""}`}
                tabIndex={0}
              >
                {item.title}

                {/* Show expand icon for all except Home */}
                {item.title !== "Home" && (
                  <svg
                    width="3rem"
                    height="3rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.293 9.293a1 1 0 0 1 1.414 0L12 12.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                      fill="#162f6a"
                    />
                  </svg>
                )}
              </span>

              {openIndex === index && item.links.length > 0 && (
                <ul
                  className="innernav list-unstyled"
                  style={{
                    display: "block", // Override CSS to show it
                    width: "100%",
                  }}
                >
                  {item.links.map((link, idx) => (
                    <li key={idx} style={{ minWidth: "10rem" }}>
                      {link.path.startsWith("http") ? (
                        // ✅ External link (PDF)
                        <a
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nav-link d-flex justify-content-center align-items-center text-center"
                          style={{
                            padding: "0.8rem 1.2rem",
                            height: "auto",
                            whiteSpace: "normal",
                            wordBreak: "break-word",
                            textAlign: "left",
                          }}
                        >
                          {link.label}
                        </a>
                      ) : (
                        // ✅ Internal route
                        <Link
                          href={link.path}
                          className="nav-link d-flex justify-content-center align-items-center text-center"
                          style={{
                            padding: "0.8rem 1.2rem",
                            height: "auto",
                            whiteSpace: "normal",
                            wordBreak: "break-word",
                            textAlign: "left",
                          }}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <div
        className={`offcanvas offcanvas-end ${isOpen ? "show" : ""}`}
        tabIndex={-1}
        style={{
          visibility: isOpen ? "visible" : "hidden",
        }}
        onClick={() => setIsOpen(false)}
      >
        <div className="offcanvas-header" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            className="btn-close"
            onClick={() => setIsOpen(false)}
          ></button>
        </div>

        <div className="offcanvas-body" onClick={(e) => e.stopPropagation()}>
          <div role="menu" className=" flex-column">
            {navItems.map((link, index) => (
              <div className="mb-3" key={index}>
                <button
                  className="d-flex fs-5 align-items-center justify-content-between text-decoration-none btn btn-link text-start"
                  aria-expanded={openIndex === index}
                  aria-controls={`submenu-${index}`}
                  onClick={() => toggleSubMenu(index)}
                  style={{ cursor: "pointer", width: "fit-content" }}
                >
                  <h5 className="fs-5 text-capitalize mb-0 text-decoration-none text-dark ">
                    {link.title}
                  </h5>

                  {index !== 0 &&
                    (openIndex === index ? (
                      <span
                        aria-label="Close submenu"
                        className="material-icons ms-3 justify-content-between"
                        style={{ fontSize: "1.5rem", userSelect: "none" }}
                      >
                        &#x2715;
                      </span>
                    ) : (
                      <span
                        className="material-icons justify-content-between"
                        style={{ fontSize: "1.5rem", userSelect: "none" }}
                      >
                        <Image
                          src="/images/icons/expand_more-.svg"
                          width={30}
                          height={30}
                          alt="expand"
                        />
                      </span>
                    ))}
                </button>

                {/* Submenu */}
                {openIndex === index && link.links.length > 0 && (
                  <div
                    id={`submenu-${index}`}
                    role="menu"
                    className="ps-3 mt-2"
                  >
                    {link.links.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.path}
                        className="d-block py-1 text-decoration-none text-dark"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
