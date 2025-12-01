import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["publicationMedia"].imageSrc}
        breadcrumbs={navigationConfig["publicationMedia"].breadcrumbs}
        navItems={navigationConfig["publicationMedia"].navItems}
        pageTilte="Photo Gallery"
      />
      <section className="mainContent">
        <div className="container mt-5">
          <form className="form-group row align-items-start row-gap-2 filterbox filterBoxResponsive">
            <div className="col-md-12 col-lg-4">
              <div className="input-group searchField">
                <span className="input-group-text">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined bhashini-skip-translation"
                  >
                    search
                  </span>
                </span>
                {/* <input
                  type="search"
                  role="searchbox"
                  name="scheme"
                  aria-label="search"
                  className="form-control"
                  placeholder="Search..."
                  defaultValue=""
                /> */}
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
                      sort
                    </span>
                  </span>
                  <select
                    className="form-select"
                    role="listbox"
                    aria-label="select"
                  >
                    <option value="">Sort by</option>
                    <option value="DESCY">Latest</option>
                    <option value="ASCY">Oldest</option>
                  </select>
                </div>
              </div>
            </div>
          </form>

          <div className="row photos-row-gap">
            {[
              {
                src: "https://www.meity.gov.in/static/uploads/2024/02/WhatsApp-Image-2022-10-28-at-3.10.46-PM-768x512.jpeg",
                alt: "Special Campaign Image having Minister of MEITY",
                title: "Special Campaign",
                date: "16.03.2024",
                items: 6,
              },
              {
                src: "https://www.meity.gov.in/static/uploads/2024/02/WhatsApp-Image-2022-10-4-768x512.jpeg",
                alt: "FIT India Freedom Run 2.0",
                title: "FIT India Freedom Run 2.0",
                date: "03.11.2022",
                items: 6,
              },
              {
                src: "https://www.meity.gov.in/static/uploads/2024/02/WhatsApp-Image-2022-10-29--768x432.jpeg",
                alt: "Fire Hydrant Check",
                title: "Fire Hydrant Check",
                date: "01.11.2022",
                items: 10,
              },
              {
                src: "https://www.meity.gov.in/static/uploads/2024/02/ba2f00d153a139202836b88804bc7ab9-768x432.jpeg",
                alt: "Dengue Smoke Fogging",
                title: "Dengue Smoke Fogging",
                date: "01.11.2022",
                items: 4,
              },
              {
                src: "https://www.meity.gov.in/static/uploads/2024/02/WhatsApp-Image-2022-10-28-at-5.3-768x512.jpeg",
                alt: "Blood Donation Camp",
                title: "Blood Donation Camp",
                date: "01.11.2022",
                items: 5,
              },
            ].map((photo, idx) => (
              <div className="col-sm-12 col-md-6 col-lg-4" key={idx}>
                <div className="photos-card h-100">
                  <div className="img-fluid position-relative">
                    <img
                      src={photo.src}
                      className="photos-img img-fluid"
                      alt={photo.alt}
                      width={100}
                      height={100}
                    />
                    <button
                      className="position-absolute photos-btn pointer"
                      aria-label={`View More of ${photo.title}`}
                    >
                      <span className="material-symbols-outlined bhashini-skip-translation">
                        arrow_right_alt
                      </span>
                    </button>
                  </div>
                  <div className="photos-card-body">
                    <p className="photos-card-title h4">{photo.title}</p>
                  </div>
                  <div className="photos-card-footer d-flex justify-content-between align-items-center text-uppercase">
                    <small className="ptype" aria-label={photo.date}>
                      {photo.date}
                    </small>
                    <small className="ptype">{photo.items} Items</small>
                  </div>
                </div>
              </div>
            ))}
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
