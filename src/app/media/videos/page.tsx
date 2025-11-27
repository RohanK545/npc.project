import InnerBannerSection from "@/components/InnerBannerSection";

export default function AboutUs() {
  const breadcrumbs = [
    { title: "Home", href: "/" },
    { title: "Media" },
    { pagetitle: "Videos" },
  ];

  const navItems = [
    { label: "Photos", href: "/media/", active: false },
    { label: "Videos", href: "/media/videos", active: false },
    { label: "Brochures", href: "/media/brochures", active: false },
    { label: "Presentations", href: "/media/presentations", active: false },
  ];

  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc="https://www.dpiit.gov.in/static/uploads/2025/07/8b54c11ddcb82678812725f58a046454.png"
        breadcrumbs={breadcrumbs}
        navItems={navItems}
      />
           <section className="maincontent" role="main">
      <div className="container mt-5">
        <form className="form-group row align-items-start row-gap-2 filterbox filterBoxResponsive">
          <div className="col-md-12 col-lg-4"></div>

          <div className="col-md-12 col-lg-8 d-none d-md-block filterIconResponsivebox">
            <div className="d-flex align-items-center justify-content-end flex-wrap gap-2">
              <div className="input-group sortField">
                <span className="input-group-text">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined bhashini-skip-translation"
                  >
                    sort
                  </span>
                </span>
                <select className="form-select" role="listbox" aria-label="select">
                  <option value="">Sort by</option>
                  <option value="DESCY">Latest</option>
                  <option value="ASCY">Oldest</option>
                </select>
              </div>
            </div>
          </div>
        </form>

        <div className="row photos-row-gap">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="photos-card h-100">
              <iframe
                src="https://www.youtube.com/embed/kAKsKu_cy2k?si=yaeqa7nIVJGYp9rH?rel=0"
                className="img-fluid w-100 videos-img bhashini-skip-translatio"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                tabIndex={0}
              ></iframe>

              <div className="photos-card-body">
                <p className="photos-card-title h4">
                  <span>Kaushal Deekshant Samaroh</span>
                </p>
              </div>

              <div className="photos-card-footer d-flex justify-content-between align-items-center text-uppercase">
                <small className="ptype" aria-label="12.10.2023">
                  12.10.2023
                </small>
                <small className="ptype" aria-label="video duration 1H 30Mins">
                  1H 30Mins
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4 d-flex justify-content-center"></div>
        </div>
      </div>
    </section> 
    </div>
  );
}
