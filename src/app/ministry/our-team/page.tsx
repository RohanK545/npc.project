import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  interface Contact {
    type: "call" | "print" | "mail";
    value: string;
  }

  interface Member {
    name: string;
    designation: string;
    contacts: Contact[];
    address?: string;
  }
  const breadcrumbs = [
    { title: "Home", href: "/" },
    { title: "Ministry" },
    { pagetitle: "Our Team" },
  ];

  const navItems = [
    { label: "About Us", href: "/ministry/", active: false },
    { label: "Our Team", href: "/ministry/our-team", active: false },
    {
      label: "Our Organizations",
      href: "/ministry/organization",
      active: false,
    },
    { label: "Our Performance", href: "/ministry/performance", active: false },
    { label: "Our Groups", href: "/ministry/groups", active: false },
    { label: "Directory", href: "/ministry/directory", active: false },
  ];

  const members: Member[] = [
    {
      name: "Shri Magesh Ethirajan",
      designation: "Director General, (C-DAC)",
      contacts: [
        { type: "call", value: "+91-020-25868080, +91-020-25503200" },
        { type: "mail", value: "dg@cdac.in" },
      ],
    },
    {
      name: "Dr. R. Ratheesh",
      designation: "Director General, (C-MET)",
      contacts: [
        { type: "call", value: "+91-020-25898141" },
        { type: "print", value: "+91-020-25898180" },
        { type: "mail", value: "dg-cmet@cmet.gov.in" },
      ],
    },
    {
      name: "Ms. Preeti Nath",
      designation: "Director General (Additional Charge), (ERNET)",
      contacts: [
        { type: "call", value: "+91-11-22170586" },
        { type: "mail", value: "dg@eis.ernet.in" },
      ],
    },
    {
      name: "Dr. Madan Mohan Tripathi",
      designation: "Director General, (NIELIT)",
      contacts: [
        { type: "call", value: "+91-11-25308302" },
        { type: "mail", value: "dg@nielit.gov.in" },
      ],
    },
    {
      name: "Dr. P. Hanumantha Rao",
      designation: "Director General, (SAMEER)",
      contacts: [
        { type: "call", value: "+91-022-25721333" },
        { type: "print", value: "+91-022-25723470" },
        { type: "mail", value: "dg@sameer.gov.in" },
      ],
    },
    {
      name: "Shri Arvind Kumar",
      designation: "Director General, (STPI)",
      contacts: [
        { type: "call", value: "+91-11-24628081" },
        { type: "print", value: "+91-11-20815076" },
      ],
    },
    {
      name: "Shri T.P. Singh",
      designation: "Director General, [BISAG(N)]",
      contacts: [
        { type: "call", value: "+91-79-23213091" },
        { type: "mail", value: "info@bisag.gujarat.gov.in" },
      ],
    },
    {
      name: "Dr. Kamaljeet Singh",
      designation: "Director, Semi-Conductor Laboratory (SCL)",
      contacts: [
        { type: "call", value: "+91-172-2236383" },
        {
          type: "mail",
          value: "director@scl.gov.in, directoroffice@scl.gov.in",
        },
      ],
    },
  ];
  return (
    <div style={{}}>
      <section className="maincontent">
        <div className="card-wrapper p-2 py-4 p-md-4">
          <div className="card-wrapper p-2 py-4 p-md-4">
            <div className="d-flex justify-content-center align-content-center align-items-center flex-column">
              <div className="reactFamilyTree d-flex align-content-center justify-content-center w-100">
                <div
                  style={{
                    position: "relative",
                    width: "344px",
                    height: "652.5px",
                  }}
                >
                  <div>
                    <i
                      style={{
                        position: "absolute",
                        width: "1px",
                        height: "176px",
                        background: "rgb(153, 153, 153)",
                        transform: "translate(172px, 175px)",
                        pointerEvents: "none",
                      }}
                    ></i>
                    <i
                      style={{
                        position: "absolute",
                        width: "1px",
                        height: "176px",
                        background: "rgb(153, 153, 153)",
                        transform: "translate(172px, 350px)",
                        pointerEvents: "none",
                      }}
                    ></i>
                  </div>

                  {/* HON’BLE MINISTER */}
                  <div
                    className="FamilyNode_root__LylyV"
                    style={{
                      width: "344px",
                      transform: "translate(0px, 0px)",
                      height: "350px",
                      paddingInline: "12px",
                    }}
                  >
                    <div style={{ width: "100%" }}>
                      <div className="d-flex justify-content-center mx-auto">
                        <div
                          className="profile-card pointer position-relative"
                          tabIndex={0}
                          aria-label="View Profile HON’BLE MINISTER"
                          role="link"
                        >
                          <div className="position-absolute top-0 start-50 translate-middle">
                            <span
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                src="https://www.meity.gov.in/static/uploads/2024/02/c2d2716758c356c9137b4db8ffa9ac50.png"
                                alt="profile picture Shri Ashwini Vaishnaw"
                                className="img-fluid profile-img object-fit-cover bg-white"
                              />
                            </span>
                          </div>
                          <small className="text-uppercase">
                            HON’BLE MINISTER
                          </small>
                          <p className="h4">Shri Ashwini Vaishnaw</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* HON’BLE MINISTER OF STATE */}
                  <div
                    className="FamilyNode_root__LylyV"
                    style={{
                      width: "344px",
                      transform: "translate(0px, 100px)",
                      height: "350px",
                      paddingInline: "12px",
                    }}
                  >
                    <div style={{ width: "100%" }}>
                      <div className="d-flex justify-content-center mx-auto">
                        <div
                          className="profile-card pointer position-relative"
                          tabIndex={0}
                          aria-label="View Profile HON’BLE MINISTER OF STATE"
                          role="link"
                        >
                          <div className="position-absolute top-0 start-50 translate-middle">
                            <span
                              style={{
                                color: "transparent",
                                display: "inline-block",
                              }}
                            >
                              <img
                                src="https://www.meity.gov.in/static/uploads/2024/06/a0c681e6f425566b66d4fecfe80f9380.png"
                                alt="profile picture Shri Jitin Prasada"
                                className="img-fluid profile-img object-fit-cover bg-white"
                              />
                            </span>
                          </div>
                          <small className="text-uppercase">
                            HON’BLE MINISTER OF STATE
                          </small>
                          <p className="h4">Shri Jitin Prasada</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr style={{ width: "100%" }} />

              {/* PDF Links */}
              <div className="d-flex flex-wrap justify-content-start gap-2">
                {[
                  {
                    title: "Former Ministers",
                    href: "https://www.meity.gov.in/static/uploads/2024/03/Former-Ministers.pdf",
                    size: "66.37 KB",
                  },
                  {
                    title: "List of Council of Ministers",
                    href: "https://www.meity.gov.in/static/uploads/2024/06/6283a888427e8a72919476d50982d09a.pdf",
                    size: "3.30 MB",
                  },
                  {
                    title: "List of Officers/Staff",
                    href: "https://www.meity.gov.in/static/uploads/2025/05/ddc5d5c3d50f686a16fbe238c37dc0b7.pdf",
                    size: "461.13 KB",
                  },
                  {
                    title: "Foreign Deputation JS Level and Above",
                    href: "https://www.meity.gov.in/static/uploads/2024/07/2cda2f40953c1c89b6d316afbd597e69.pdf",
                    size: "365.60 KB",
                  },
                ].map((link, index) => (
                  <a
                    key={index}
                    className="detailsBtn pointer d-flex align-items-center text-uppercase"
                    title={link.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link.href}
                  >
                    <span>{link.title}</span>
                    <span>|</span>
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
                      ></path>
                    </svg>
                    <span>{link.size}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Hon'ble Minister (E&amp;IT)
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>
              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Ashwini Vaishnaw</p>
                    <p className="designation mb-0">
                      Hon'ble Minister of Railways; Information and
                      Broadcasting; and Electronics and Information Technology
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">
                        +91-11-24369191 (Office), +91-11-24362626 (Office),
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        print
                      </span>
                      <p className="contact mb-0">+91-11-24366070</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">moeit[at]gov[dot]in</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    1st Floor, Electronics Niketan, 6, CGO Complex, Lodhi Road,
                    New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Office of Minister (E&amp;IT)
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>
              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Abhas Katra Singh</p>
                    <p className="designation mb-0">OSD</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">
                        +91-11-24369191(Office), +91-11-24362626(Office)
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        print
                      </span>
                      <p className="contact mb-0">+91-11-24366070(Fax)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        moeit[at]gov[dot]in, abhas[dot]24[at]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    Electronics Niketan, 6, CGO Complex, Lodhi Road, New Delhi:
                    110003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Hon'ble Minister of State (E&amp;IT)
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>
              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Jitin Prasada</p>
                    <p className="designation mb-0">
                      Hon'ble Minister of State in the Ministry of Commerce and
                      lndustry; and Electronics and Information Technology
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">
                        +91-11-24368757 (Office), +91-11-24368758 (Office),
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        print
                      </span>
                      <p className="contact mb-0">+91-11-24360958</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        mos-eit[at]gov[dot]in, test[at]nic[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    1st Floor, Electronics Niketan, 6, CGO Complex, Lodhi Road,
                    New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Office of Minister of State(E&amp;IT)
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>
              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            {/* Row 1 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Neeraj Kumar Singh</p>
                    <p className="designation mb-0">PS to MoS</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">
                        +91-11-24368757 (Office), +91-11-24368758 (Office)
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        print
                      </span>
                      <p className="contact mb-0">+91-11-24360958</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">mos-eit[at]gov[dot]in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    1st Floor, Electronics Niketan, 6, CGO Complex, Lodhi Road,
                    New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Sandeep Ahuja</p>
                    <p className="designation mb-0">OSD to MoS</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">
                        +91-11-24368757 (Office), +91-11-24368758 (Office)
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        print
                      </span>
                      <p className="contact mb-0">+91-11-24360958</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">mos-eit[at]gov[dot]in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    1st Floor, Electronics Niketan, 6, CGO Complex, Lodhi Road,
                    New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Kunal Pratap Singh</p>
                    <p className="designation mb-0">Additional PS to MoS</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">
                        +91-11-24368757 (Office), +91-11-24368758 (Office)
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        print
                      </span>
                      <p className="contact mb-0">+91-11-24360958</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">mos-eit[at]gov[dot]in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    1st Floor, Electronics Niketan, 6, CGO Complex, Lodhi Road,
                    New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Kumar Sourabh</p>
                    <p className="designation mb-0">Additional PS to MoS</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">
                        +91-11-24368757 (Office), +91-11-24368758 (Office)
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        print
                      </span>
                      <p className="contact mb-0">+91-11-24360958</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">mos-eit[at]gov[dot]in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    1st Floor, Electronics Niketan, 6, CGO Complex, Lodhi Road,
                    New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Secretary (E&amp;IT)
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>
              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri S. Krishnan</p>
                    <p className="designation mb-0">Secretary</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24364041</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        print
                      </span>
                      <p className="contact mb-0">+91-11-24363134</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        secretary[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    1st Floor, Electronics Niketan, 6, CGO Complex, Lodhi Road,
                    New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Staff of Secretary's Office
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>
              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            {/* Row 1 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Sanjay Kumar Vyas</p>
                    <p className="designation mb-0">
                      Officer on Special Duty/ Scientist F
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24364753(Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        print
                      </span>
                      <p className="contact mb-0">+91-11-24363134</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        s[dot]vyas[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Vikash Chourasia</p>
                    <p className="designation mb-0">
                      Staff Officer to Secretary/ Scientist D
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24364753(Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        print
                      </span>
                      <p className="contact mb-0">+91-11-24363134</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        vikash[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Rajesh Mehta</p>
                    <p className="designation mb-0">PPS to Secretary</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24364041(Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        print
                      </span>
                      <p className="contact mb-0">+91-11-24363134</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        mehta[dot]rajesh[at]nic[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Anand Sagar Negi</p>
                    <p className="designation mb-0">
                      Principal Private Secretary
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24364041(Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        print
                      </span>
                      <p className="contact mb-0">+91-11-24363134</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        as[dot]negi[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 5 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Sanjay Kumar Gupta</p>
                    <p className="designation mb-0">
                      Principal Private Secretary
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24301114(Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        print
                      </span>
                      <p className="contact mb-0">+91-11-24363134</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        sanjay[dot]kg[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Additional Secretary (E&amp;IT)
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>
              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            {/* Row 1 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Abhishek Singh</p>
                    <p className="designation mb-0">Additional Secretary</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24369222 (Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">as[at]meity[dot]gov[dot]in</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    Room No. 4013, Electronics Niketan, 6, CGO Complex, Lodhi
                    Road, New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Amitesh Kumar Sinha</p>
                    <p className="designation mb-0">Additional Secretary</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24361055 (Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        amitesh[dot]iras[at]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    Room No. 4007, Electronics Niketan, 6, CGO Complex, Lodhi
                    Road, New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Staff of Additional Secretary Shri Abhishek Singh Office
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>
              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            {/* Row 1 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Ram Avtar Dhawan</p>
                    <p className="designation mb-0">
                      Principal Private Secretary
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24369222(Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        r[dot]dhawan[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Pradeep Sharma</p>
                    <p className="designation mb-0">PS</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24369222(Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        pradeepk[dot]sharma[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Staff of Additional Secretary Shri Amitesh Kumar Sinha Office
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>
              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            {/* Row 1 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri K. Mukundan</p>
                    <p className="designation mb-0">
                      Principal Private Secretary
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">
                        +91-11-24361055 (Office), +91-11-24301907(Office)
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        k[dot]mukundan[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Sanjay Joshi</p>
                    <p className="designation mb-0">PS</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">
                        +91-11-24361055 (Office), +91-11-24301907(Office)
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        sanjay[dot]joshi[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Economic Adviser &nbsp;(E&amp;IT)
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>
              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            {/* Row */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Ms. Preeti Nath</p>
                    <p className="designation mb-0">Economic Adviser</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24364777 (Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        eco-adv[at]meity[dot]gov[dot]in, pnath[at]nic[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    Room No. 4058, Electronics Niketan, 6, CGO Complex, Lodhi
                    Road, New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Joint Secretary (E&amp;IT)
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>
              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            {/* Row 1 */}
            <div
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
              role="row"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri K. K. Singh</p>
                    <p className="designation mb-0">Joint Secretary</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24361951 (Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        js[dot]kksingh[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    Room No. 4002, Electronics Niketan, 6, CGO Complex, Lodhi
                    Road, New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
              role="row"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Rajesh Singh</p>
                    <p className="designation mb-0">
                      Joint Secretary &amp; Financial Adviser
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24363097 (Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        faoffice[dot]deity[at]nic[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    Room No. 4069, Electronics Niketan, 6, CGO Complex, Lodhi
                    Road, New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
              role="row"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Sushil Pal</p>
                    <p className="designation mb-0">Joint Secretary</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24363071 (Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        spal[dot]1999[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    Room No. 4003, Electronics Niketan, 6, CGO Complex, Lodhi
                    Road, New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
              role="row"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Ajit Kumar</p>
                    <p className="designation mb-0">Joint Secretary</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24364751 (Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        js-akumar[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    Room No. 4015, Electronics Niketan, 6, CGO Complex, Lodhi
                    Road, New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>

            {/* Row 5 */}
            <div
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
              role="row"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Sudeep Shrivastava</p>
                    <p className="designation mb-0">Joint Secretary</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">s[dot]sudeep[at]gov[dot]in</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    Electronics Niketan, 6, CGO Complex, Lodhi Road, New Delhi:
                    110003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Staff of Joint Secretary Shri K. K. Singh&nbsp;Office
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>

              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>

              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              {/* Column 1 */}
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Ravindra Bisht</p>
                    <p className="designation mb-0">
                      Principal Private Secretary
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24361951(Office)</p>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        ravi[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Staff of Joint Secretary Shri Rajesh Singh Office
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>

              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>

              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            {/* Row 1 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Raj Kumar</p>
                    <p className="designation mb-0">
                      Principal Private Secretary
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24363097(Office)</p>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        rajkumar[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Alakh Prasad</p>
                    <p className="designation mb-0">PS</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24363097(Office)</p>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        alakh[dot]prasad[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Staff of Joint Secretary Shri Sushil Pal Office
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>

              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>

              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Jitender Saini</p>
                    <p className="designation mb-0">PS</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24363071(Office)</p>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        jitender[dot]saini[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Staff of Joint Secretary Shri Ajit Kumar Office
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>

              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>

              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            {/* Row 1 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri D.C. Verma</p>
                    <p className="designation mb-0">Private Secretary</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">
                        +91-11-24364751(Office), +91-11-24301915(Office)
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        dc[dot]verma[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Rajesh Kumar</p>
                    <p className="designation mb-0">Stenographer</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">
                        +91-11-24364751(Office), +91-11-24301915(Office)
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        rajesh[dot]kmr04[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Staff of Joint Secretary Shri Sudeep Shrivastava
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>

              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>

              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            {/* Row 1 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Pradeep Kumar Shami</p>
                    <p className="designation mb-0">
                      Principal Private Secretary
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0"> +91-11-24363114(Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        pks[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Kumar Ankur</p>
                    <p className="designation mb-0">Stenographer</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0"> +91-11-24363114(Office)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Group Heads
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>

              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>

              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            {/* Row 1 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Smt. Savita Utreja</p>
                    <p className="designation mb-0">
                      Scientist G and Group Coordinator
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24368146(Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        sutreja[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    Room No. 4056, Electronics Niketan, 6, CGO Complex, Lodhi
                    Road, New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Smt. Asha Nangia</p>
                    <p className="designation mb-0">
                      Scientist G and Group Coordinator
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0"> +91-11-24369904(Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        anangia[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    Room No. 4065, Electronics Niketan, 6, CGO Complex, Lodhi
                    Road, New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Smt. Sunita Verma</p>
                    <p className="designation mb-0">
                      Scientist G and Group Coordinator
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24364810 (Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        sunita[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    Room No. 4064, Electronics Niketan, 6, CGO Complex, Lodhi
                    Road, New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Ms. Tulika Pandey</p>
                    <p className="designation mb-0">
                      Scientist G and Group Coordinator
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24364739(Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        tulikapandey[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    Room No. 4012, Electronics Niketan, 6, CGO Complex, Lodhi
                    Road, New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>

            {/* Row 5 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Smt. Kavita Bhatia</p>
                    <p className="designation mb-0">
                      Scientist G and Group Coordinator
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0"> +91-11-24364729(Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        kbhatia[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    Room No. 4011, Electronics Niketan, 6, CGO Complex, Lodhi
                    Road, New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>

            {/* Row 6 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Deepak Goel</p>
                    <p className="designation mb-0">
                      Scientist G and Group Coordinator
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24363094(Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        gccyberlaw[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    Room No. 4068, Electronics Niketan, 6, CGO Complex, Lodhi
                    Road, New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Office of Chief Controller of Accounts
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>

              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>

              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            {/* Row 1 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Ms. Sanchita Shukla</p>
                    <p className="designation mb-0">
                      Chief Controller of Accounts
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">
                        91-11-24301404 (Office), 91-11-24622029 (Office-INA)
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        cca[dot]meity[at]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Vikas Singh</p>
                    <p className="designation mb-0">
                      Deputy Controller of Accounts
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">91-11-24301899 (Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        vikas[dot]singh20[at]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Jitender Kumar</p>
                    <p className="designation mb-0">
                      Assistant Controller of Accounts
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">91-11-24301166 (Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        kumar[dot]jitender[at]nic[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Rajendra Singh Yaduvanshi</p>
                    <p className="designation mb-0">Senior Accounts Officer</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24301164(Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        yadu[dot]rajendra[at]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 5 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Anil Kumar Rai</p>
                    <p className="designation mb-0">Senior Accounts Officer</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24301164(Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">anilkrai-cwc[at]gov[dot]in</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 6 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Kulvir Singh</p>
                    <p className="designation mb-0">Senior Accounts Officer</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24305546(Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        kulvirsingh[dot]17[at]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 7 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Smt. Urvashi Rana</p>
                    <p className="designation mb-0">Senior Accounts Officer</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">91-11-24301165 (Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        urvashi[dot]rana1[at]nic[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Attached Offices of MeitY
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>

              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>

              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            {/* Row 1 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Abhishek Singh</p>
                    <p className="designation mb-0">Director General, NIC</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24361504 (Office)</p>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        print
                      </span>
                      <p className="contact mb-0">+91-11-24364873</p>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">dg[at]nic[dot]in</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri M. Vellaipandi</p>
                    <p className="designation mb-0">Director General, (STQC)</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24364754 (Office)</p>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        print
                      </span>
                      <p className="contact mb-0">+91-11-24363089</p>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        dgstqc[at]meity[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Statutory Organizations of MeitY
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>

              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>

              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            {/* Row 1 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Arvind Kumar</p>
                    <p className="designation mb-0">
                      Controller of Certifying Authorities
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">cca[at]cca[dot]gov[dot]in</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    Room No. 4006, Electronics Niketan, 6, CGO Complex, Lodhi
                    Road, New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Dr. Sanjay Bahl</p>
                    <p className="designation mb-0">
                      Director General, (CERT-In)
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24368572 (Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        sanjay[dot]bahl[at]nic[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    Room No. 4067, Electronics Niketan, 6, CGO Complex, Lodhi
                    Road, New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div
              role="row"
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Bhuvnesh Kumar</p>
                    <p className="designation mb-0">CEO, (UIDAI)</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-23746211 (Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        ceo[at]uidai[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="table"
          aria-labelledby="table-caption"
          className="container our-team-list-container mx-auto"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined bhashini-skip-translation">
              apartment
            </span>
            <p className="text-uppercase mb-0" id="table-caption">
              Section 8 Companies of MeitY
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>
              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            {/* Row 1 */}
            <div
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
              role="row"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Akhil Kumar</p>
                    <p className="designation mb-0">
                      Managing Director &amp; CEO, (DIC)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">
                        +91-11-24369903/24301815 (Office)
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        ceo[at]digitalindia[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
              role="row"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Amitesh Kumar Sinha</p>
                    <p className="designation mb-0">
                      CEO, India Semiconductor Mission (ISM)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-24363071</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">ceo[at]ism[dot]gov[dot]in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
              role="row"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Nand Kumarum</p>
                    <p className="designation mb-0">
                      President &amp; CEO (NeGD)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">
                        +91-11-24363078, 24301916 (Office)
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">
                        ceo-negd[at]digitalindia[dot]gov[dot]in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0">
                    Room No. 4016, Electronics Niketan, 6, CGO Complex, Lodhi
                    Road, New Delhi: 110003
                  </p>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
              role="row"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Ajit Kumar</p>
                    <p className="designation mb-0">CEO, MyGov</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">
                        +91-11-24369903/24301815 (Office)
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">ceo[at]mygov[dot]in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 5 */}
            <div
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
              role="row"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Shri Devesh Tyagi</p>
                    <p className="designation mb-0">CEO, (NIXI)</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-48202000 (Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        print
                      </span>
                      <p className="contact mb-0">+91-11-48202013</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">ceo[at]nixi[dot]in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>

            {/* Row 6 */}
            <div
              className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
              role="row"
            >
              <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Name and Designation:
                  </small>
                  <div className="d-flex flex-column">
                    <p className="name mb-0">Dr. Rajesh Kumar Mishra</p>
                    <p className="designation mb-0">
                      Managing Director, (NICSI)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Contact:
                  </small>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        call
                      </span>
                      <p className="contact mb-0">+91-11-26105291 (Office)</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        print
                      </span>
                      <p className="contact mb-0">+91-11-26105212</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        mail
                      </span>
                      <p className="contact mb-0">mdnicsi[at]nic[dot]in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                <div className="d-flex gap-2 align-items-center">
                  <small className="col-4 d-lg-none d-block text-uppercase table-column">
                    Address:
                  </small>
                  <p className="address mb-0"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container our-team-list-container mx-auto"
          role="table"
          aria-labelledby="table-caption"
        >
          <div className="our-team-list-header d-flex align-items-center">
            <span className="material-symbols-outlined">apartment</span>
            <p className="text-uppercase mb-0" id="table-caption">
              Autonomous Societies of MeitY
            </p>
          </div>

          <div role="rowgroup">
            <div
              className="row row-gap-4 me-0 ms-0 our-team-list-subheader"
              role="row"
            >
              <div
                className="col-lg-4 col-sm-12 col-md-12 ps-1"
                role="columnheader"
              >
                <small className="mb-0">Name and Designation</small>
              </div>
              <div className="col-lg-5 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Contact</small>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-12" role="columnheader">
                <small className="mb-0">Address</small>
              </div>
            </div>
          </div>

          <div role="rowgroup">
            {members.map((member, idx) => (
              <div
                className="row row-gap-4 me-0 s-0 our-team-list-subheader-list"
                role="row"
                key={idx}
              >
                <div className="col-lg-4 col-md-12 col-sm-12" role="cell">
                  <div className="d-flex gap-2 align-items-center">
                    <small className="col-4 d-lg-none d-block text-uppercase table-column">
                      Name and Designation:
                    </small>
                    <div className="d-flex flex-column">
                      <p className="name mb-0">{member.name}</p>
                      <p className="designation mb-0">{member.designation}</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12 col-sm-12" role="cell">
                  <div className="d-flex gap-2 align-items-center">
                    <small className="col-4 d-lg-none d-block text-uppercase table-column">
                      Contact:
                    </small>
                    <div className="d-flex flex-column">
                      {member.contacts.map((contact, i) => (
                        <div
                          className="d-flex align-items-center gap-2"
                          key={i}
                        >
                          <span className="material-symbols-outlined">
                            {contact.type === "call"
                              ? "call"
                              : contact.type === "print"
                              ? "print"
                              : "mail"}
                          </span>
                          <p className="contact mb-0">{contact.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-12 col-sm-12" role="cell">
                  <div className="d-flex gap-2 align-items-center">
                    <small className="col-4 d-lg-none d-block text-uppercase table-column">
                      Address:
                    </small>
                    <p className="address mb-0">{member.address || ""}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
