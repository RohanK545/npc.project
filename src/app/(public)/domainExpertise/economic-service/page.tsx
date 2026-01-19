import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  const studiesItems = [
    {
      id: 1,
      title: "Sectoral Studies",
      description: "Sectoral / Industry / Product Profile Studies",
      image: "/images/faculty.png"
    },
    {
      id: 2,
      title: "Productivity Data-Base",
      description: "Productivity Data-Base Development",
      image: "/images/presentation.jpg"
    },
    {
      id: 3,
      title: "Market Potential",
      description: "Market Potential Assessment",
      image: "/images/fruit.webp"
    },
    {
      id: 4,
      title: "Productivity Studies",
      description: "Productivity & Competitiveness Studies",
      image: "/images/Accreditation.webp"
    },
    {
      id: 5,
      title: "Socio-economic Studies",
      description: "Socio-economic Impact Studies",
      image: "/images/Promotion.webp"
    },
    {
      id: 6,
      title: "Monitoring & Evaluation",
      description: "Monitoring & Evaluation of Government Schemes",
      image: "/images/Productivity.webp"
    },
    {
      id: 7,
      title: "Policy Studies",
      description: "Policy Focus / Impact Studies",
      image: "/images/faculty.png"
    },
    {
      id: 8,
      title: "Marketing Studies",
      description: "Marketing and Product Promotion Studies",
      image: "/images/presentation.jpg"
    }
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <InnerBannerSection
        imageSrc={navigationConfig["domainExpertise"].imageSrc}
        breadcrumbs={navigationConfig["domainExpertise"].breadcrumbs}
        navItems={navigationConfig["domainExpertise"].navItems}
        pageTilte="Agri Business Group"
      />
     
      <div className="card-wrapper p-2 py-4 p-md-4">
        <div className="card-wrapper p-2 py-4 p-md-4">
          <div className="d-flex justify-content-center align-content-center align-items-center flex-column">
            
            {/* Desktop Layout - Hidden on Mobile */}
            <div className="reactFamilyTree d-none d-md-flex align-content-center justify-content-center w-100">
              <div className="d-flex flex-wrap justify-content-center" style={{ gap: "80px", maxWidth: "100%" }}>
                {/* First Column */}
                <div style={{ position: "relative", width: "344px", minHeight: "auto" }}>
                  <div className="d-grid" style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "40px",
                    justifyItems: "center",
                  }}>
                    {/* Item 1 - Sectoral Studies */}
                    <div className="FamilyNode_root__LylyV" style={{ minHeight: "200px" }}>
                      <div style={{ width: "100%" }}>
                        <div className="d-flex justify-content-center mx-auto">
                          <div className="profile-card pointer position-relative" tabIndex={0} aria-label="Sectoral Studies" role="link" style={{ paddingTop: "90px" }}>
                            <div className="position-absolute top-0 start-50 translate-middle">
                              <span style={{ color: "transparent", display: "inline-block" }}>
                                <img src="/images/faculty.png" alt="Sectoral Studies" className="img-fluid profile-img object-fit-cover bg-white rounded-circle" style={{ width: "140px", height: "140px", border: "3px solid #ddd" }} />
                              </span>
                            </div>
                            <small className="text-uppercase">Sectoral / Industry / Product Profile Studies</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Item 2 - Productivity Data-Base */}
                    <div className="FamilyNode_root__LylyV" style={{ minHeight: "200px" }}>
                      <div style={{ width: "100%" }}>
                        <div className="d-flex justify-content-center mx-auto">
                          <div className="profile-card pointer position-relative" tabIndex={0} aria-label="Productivity Data-Base" role="link" style={{ paddingTop: "90px" }}>
                            <div className="position-absolute top-0 start-50 translate-middle">
                              <span style={{ color: "transparent", display: "inline-block" }}>
                                <img src="/images/presentation.jpg" alt="Productivity Data-Base" className="img-fluid profile-img object-fit-cover bg-white rounded-circle" style={{ width: "140px", height: "140px", border: "3px solid #ddd" }} />
                              </span>
                            </div>
                            <small className="text-uppercase">Productivity Data-Base Development</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Item 3 - Market Potential */}
                    <div className="FamilyNode_root__LylyV" style={{ minHeight: "200px" }}>
                      <div style={{ width: "100%" }}>
                        <div className="d-flex justify-content-center mx-auto">
                          <div className="profile-card pointer position-relative" tabIndex={0} aria-label="Market Potential" role="link" style={{ paddingTop: "90px" }}>
                            <div className="position-absolute top-0 start-50 translate-middle">
                              <span style={{ color: "transparent", display: "inline-block" }}>
                                <img src="/images/fruit.webp" alt="Market Potential" className="img-fluid profile-img object-fit-cover bg-white rounded-circle" style={{ width: "140px", height: "140px", border: "3px solid #ddd" }} />
                              </span>
                            </div>
                            <small className="text-uppercase">Market Potential Assessment</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Item 4 - Productivity Studies */}
                    <div className="FamilyNode_root__LylyV" style={{ minHeight: "200px" }}>
                      <div style={{ width: "100%" }}>
                        <div className="d-flex justify-content-center mx-auto">
                          <div className="profile-card pointer position-relative" tabIndex={0} aria-label="Productivity Studies" role="link" style={{ paddingTop: "90px" }}>
                            <div className="position-absolute top-0 start-50 translate-middle">
                              <span style={{ color: "transparent", display: "inline-block" }}>
                                <img src="/images/Accreditation.webp" alt="Productivity Studies" className="img-fluid profile-img object-fit-cover bg-white rounded-circle" style={{ width: "140px", height: "140px", border: "3px solid #ddd" }} />
                              </span>
                            </div>
                            <small className="text-uppercase">Productivity & Competitiveness Studies</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Column */}
                <div style={{ position: "relative", width: "344px", minHeight: "auto" }}>
                  <div className="d-grid" style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "40px",
                    justifyItems: "center",
                  }}>
                    {/* Item 5 - Socio-economic Studies */}
                    <div className="FamilyNode_root__LylyV" style={{ minHeight: "200px" }}>
                      <div style={{ width: "100%" }}>
                        <div className="d-flex justify-content-center mx-auto">
                          <div className="profile-card pointer position-relative" tabIndex={0} aria-label="Socio-economic Studies" role="link" style={{ paddingTop: "90px" }}>
                            <div className="position-absolute top-0 start-50 translate-middle">
                              <span style={{ color: "transparent", display: "inline-block" }}>
                                <img src="/images/Promotion.webp" alt="Socio-economic Studies" className="img-fluid profile-img object-fit-cover bg-white rounded-circle" style={{ width: "140px", height: "140px", border: "3px solid #ddd" }} />
                              </span>
                            </div>
                            <small className="text-uppercase">Socio-economic Impact Studies</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Item 6 - Monitoring & Evaluation */}
                    <div className="FamilyNode_root__LylyV" style={{ minHeight: "200px" }}>
                      <div style={{ width: "100%" }}>
                        <div className="d-flex justify-content-center mx-auto">
                          <div className="profile-card pointer position-relative" tabIndex={0} aria-label="Monitoring & Evaluation" role="link" style={{ paddingTop: "90px" }}>
                            <div className="position-absolute top-0 start-50 translate-middle">
                              <span style={{ color: "transparent", display: "inline-block" }}>
                                <img src="/images/Productivity.webp" alt="Monitoring & Evaluation" className="img-fluid profile-img object-fit-cover bg-white rounded-circle" style={{ width: "140px", height: "140px", border: "3px solid #ddd" }} />
                              </span>
                            </div>
                            <small className="text-uppercase">Monitoring & Evaluation of Government Schemes</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Item 7 - Policy Studies */}
                    <div className="FamilyNode_root__LylyV" style={{ minHeight: "200px" }}>
                      <div style={{ width: "100%" }}>
                        <div className="d-flex justify-content-center mx-auto">
                          <div className="profile-card pointer position-relative" tabIndex={0} aria-label="Policy Studies" role="link" style={{ paddingTop: "90px" }}>
                            <div className="position-absolute top-0 start-50 translate-middle">
                              <span style={{ color: "transparent", display: "inline-block" }}>
                                <img src="/images/faculty.png" alt="Policy Studies" className="img-fluid profile-img object-fit-cover bg-white rounded-circle" style={{ width: "140px", height: "140px", border: "3px solid #ddd" }} />
                              </span>
                            </div>
                            <small className="text-uppercase">Policy Focus / Impact Studies</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Item 8 - Marketing Studies */}
                    <div className="FamilyNode_root__LylyV" style={{ minHeight: "200px" }}>
                      <div style={{ width: "100%" }}>
                        <div className="d-flex justify-content-center mx-auto">
                          <div className="profile-card pointer position-relative" tabIndex={0} aria-label="Marketing Studies" role="link" style={{ paddingTop: "90px" }}>
                            <div className="position-absolute top-0 start-50 translate-middle">
                              <span style={{ color: "transparent", display: "inline-block" }}>
                                <img src="/images/presentation.jpg" alt="Marketing Studies" className="img-fluid profile-img object-fit-cover bg-white rounded-circle" style={{ width: "140px", height: "140px", border: "3px solid #ddd" }} />
                              </span>
                            </div>
                            <small className="text-uppercase">Marketing and Product Promotion Studies</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout - Visible only on Mobile */}
            <div className="d-md-none w-100">
              <div className="d-flex flex-column align-items-center" style={{ gap: "30px" }}>
                {studiesItems.map((item) => (
                  <div key={item.id} className="FamilyNode_root__LylyV" style={{ width: "100%", maxWidth: "344px", minHeight: "200px" }}>
                    <div style={{ width: "100%" }}>
                      <div className="d-flex justify-content-center mx-auto">
                        <div 
                          className="profile-card pointer position-relative" 
                          tabIndex={0} 
                          aria-label={item.title} 
                          role="link" 
                          style={{ paddingTop: "90px", width: "100%" }}
                        >
                          <div className="position-absolute top-0 start-50 translate-middle">
                            <span style={{ color: "transparent", display: "inline-block" }}>
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="img-fluid profile-img object-fit-cover bg-white rounded-circle" 
                                style={{ width: "140px", height: "140px", border: "3px solid #ddd" }} 
                              />
                            </span>
                          </div>
                          <small className="text-uppercase">{item.description}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}