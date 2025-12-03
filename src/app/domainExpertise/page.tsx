import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["domainExpertise"].imageSrc}
        breadcrumbs={navigationConfig["domainExpertise"].breadcrumbs}
        navItems={navigationConfig["domainExpertise"].navItems}
        pageTilte="Agri Business Group"
      />
      <h1 className="mt-5">This is Ministry Page</h1>
       <div className="card-wrapper p-2 py-4 p-md-4">
          <div className="card-wrapper p-2 py-4 p-md-4">
            <div className="d-flex justify-content-center align-content-center align-items-center flex-column">
              <div className="reactFamilyTree d-flex align-content-center justify-content-center w-100">
                <div
                  style={{
                    position: "relative",
                    width: "344px",
                    height: "900px",
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
                    <i
                      style={{
                        position: "absolute",
                        width: "1px",
                        height: "176px",
                        background: "rgb(153, 153, 153)",
                        transform: "translate(172px, 525px)",
                        pointerEvents: "none",
                      }}
                    ></i>
                  </div>
                  <div
                    className="d-grid"
                    style={{
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(300px, 1fr))",
                      gap: "40px",
                      justifyItems: "center",
                    }}
                  >
                    {/* HON’BLE Minister of Commerce and Industry & President */}
                    <div className="FamilyNode_root__LylyV">
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
                                  src="/images/faculty.png"
                                  alt="profile picture Sh. Piyush Goyal"
                                  className="img-fluid profile-img object-fit-cover bg-white"
                                />
                              </span>
                            </div>
                            <small className="text-uppercase">
                              Evaluation & Monitoring of Development programs and schemes
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* HON’BLE Secretary DPIIT & Chairman */}
                    <div className="FamilyNode_root__LylyV">
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
                                  src="/images/presentation.jpg"
                                  alt="profile picture Sh. Amardeep Singh Bhatia"
                                  className="img-fluid profile-img object-fit-cover bg-white"
                                  
                                />
                              </span>
                            </div>
                            <small className="text-uppercase">
                              Policy Formulation and Strategic Development Plans
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* HON’BLE Director General */}
                    <div className="FamilyNode_root__LylyV">
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
                                  src="/images/fruit.webp"
                                  alt="profile picture Smt. Neerja Sekhar"
                                  className="img-fluid profile-img object-fit-cover bg-white"
                                />
                              </span>
                            </div>
                            <small className="text-uppercase">
                              Quality Audit/Inspection of Food Business Operators under Food Safety & Standards Act 2006
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
