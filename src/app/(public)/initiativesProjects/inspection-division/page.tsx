import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["initiativeProjects"].imageSrc}
        breadcrumbs={navigationConfig["initiativeProjects"].breadcrumbs}
        navItems={navigationConfig["initiativeProjects"].navItems}
        pageTilte="Inspection Division"
      />
      <section className="maincontent">
        <div className="container">
          <div
            className="announcementbox row row-gap-2 align-items-center ms-0 me-0"
            role="row"
          >
            <div className="col-sm-12 col-md-12 col-lg-8" role="cell">
              <div className="d-flex align-items-center gap-2">
                <div className="mb-0">
                  <p>Accreditation Certificate</p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-2" role="cell">
              <div className="d-flex align-items-center gap-2">
                <small className="col-4 d-lg-none d-block text-uppercase table-column">
                  Type/Size:
                </small>
                <div className="d-flex gap-4 align-items-center type-size">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 68 68"
                    fill="none"
                    role="img"
                    aria-label="PDF icon"
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
                    aria-label="PDF size 8.20 MB"
                    title="PDF size 8.20 MB"
                  >
                    1.03 MB
                  </small>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-2" role="cell">
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <small className="col-4 d-lg-none d-block text-uppercase table-column">
                  Link:
                </small>
                <a
                  id="btn-suslr6"
                  className="download-btn d-flex align-items-center text-uppercase pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit Delegation of Powers"
                  aria-label="Visit Delegation of Powers"
                  href="https://www.meity.gov.in/static/uploads/2024/10/840f63d4986e11a4f970d24db162d1d5.pdf"
                >
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined bhashini-skip-translation"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 64 64"
                      fill="none"
                    >
                      <path
                        d="M32 42.6667C35.3334 42.6667 38.1667 41.5 40.5 39.1667C42.8334 36.8333 44 34 44 30.6667C44 27.3333 42.8334 24.5 40.5 22.1667C38.1667 19.8333 35.3334 18.6667 32 18.6667C28.6667 18.6667 25.8334 19.8333 23.5 22.1667C21.1667 24.5 20 27.3333 20 30.6667C20 34 21.1667 36.8333 23.5 39.1667C25.8334 41.5 28.6667 42.6667 32 42.6667ZM32 37.8667C30 37.8667 28.3 37.1667 26.9 35.7667C25.5 34.3667 24.8 32.6667 24.8 30.6667C24.8 28.6667 25.5 26.9667 26.9 25.5667C28.3 24.1667 30 23.4667 32 23.4667C34 23.4667 35.7 24.1667 37.1 25.5667C38.5 26.9667 39.2 28.6667 39.2 30.6667C39.2 32.6667 38.5 34.3667 37.1 35.7667C35.7 37.1667 34 37.8667 32 37.8667ZM32 50.6667C26.0445 50.6667 20.6111 49.0667 15.7 45.8667C10.7889 42.6667 6.91114 38.4444 4.06669 33.2C3.84447 32.8 3.6778 32.3889 3.56669 31.9667C3.45558 31.5444 3.40002 31.1111 3.40002 30.6667C3.40002 30.2222 3.45558 29.7889 3.56669 29.3667C3.6778 28.9444 3.84447 28.5333 4.06669 28.1333C6.91114 22.8889 10.7889 18.6667 15.7 15.4667C20.6111 12.2667 26.0445 10.6667 32 10.6667C37.9556 10.6667 43.3889 12.2667 48.3 15.4667C53.2111 18.6667 57.0889 22.8889 59.9334 28.1333C60.1556 28.5333 60.3223 28.9444 60.4334 29.3667C60.5445 29.7889 60.6 30.2222 60.6 30.6667C60.6 31.1111 60.5445 31.5444 60.4334 31.9667C60.3223 32.3889 60.1556 32.8 59.9334 33.2C57.0889 38.4444 53.2111 42.6667 48.3 45.8667C43.3889 49.0667 37.9556 50.6667 32 50.6667ZM32 45.3333C37.0222 45.3333 41.6334 44.0111 45.8334 41.3667C50.0334 38.7222 53.2445 35.1555 55.4667 30.6667C53.2445 26.1778 50.0334 22.6111 45.8334 19.9667C41.6334 17.3222 37.0222 16 32 16C26.9778 16 22.3667 17.3222 18.1667 19.9667C13.9667 22.6111 10.7556 26.1778 8.53336 30.6667C10.7556 35.1555 13.9667 38.7222 18.1667 41.3667C22.3667 44.0111 26.9778 45.3333 32 45.3333Z"
                        fill="#29136C"
                      />
                    </svg>
                  </span>
                  View
                </a>
              </div>
            </div>
          </div>

          <p className="text-justify">
            National Productivity Council (NPC) has been granted accreditation
            conforming to ISO 17020:2012 by National Accreditation Board for
            Certification Body (NABCB) as Type A Inspection Body for undertaking
            inspection and audit work in the area of Food Safety Audit and
            Scientific Storage of Agricultural Products. This accreditation is
            valid for a period of three years starting from 14th October 2020 to
            13th October 2023.
          </p>

          <p className="text-justify">
            A separate vertical namely “Inspection Division (ID)” at NPC HQ
            along with its Regional Directorates and Empanelled Food safety
            Auditors undertake Independent Third Party Audits of Food Business
            Operators (FBOs) as per Food Safety and Standards (Food Safety
            Auditing) Regulations, 2018 of Food Safety and Standards Authority
            of India (FSSAI) for Dairy sector, Food Storage/Warehouse/ Cold
            Storage and Food Transportation and Inspections of Warehouses as per
            Warehousing Development and Regulatory Authority (WDRA) Rules, 2017.
          </p>
          <p className="text-justify">
            Inspection Division also conducts training and webinars in the area
            of Food Safety, Food Standards, Food Laws, Food Quality, Food
            standards, Food Processing, etc., and other subjects related to Food
            Safety scenario in the country. NPC is also a Training Partner of
            Food Safety Training and Certification (FoSTaC) for FSSAI.
          </p>
          <p className="text-justify">
            Inspection Division comprises of specialists from the fields of Food
            Technology, Dairy Technology, Fisheries, Oil Technology,
            Biotechnology, Agriculture, Agricultural Engineering, Veterinary
            Sciences, Bio-chemistry, Microbiology, Chemistry, Hotel management,
            Catering Technology etc.
          </p>
        </div>
      </section>
    </div>
  );
}
