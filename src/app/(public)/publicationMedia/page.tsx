import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function PublicationsPage() {
//   const photos = [
//   {
//     id: "1",
//     title: "Training Manual",
//     description: "Meity Performance Smartboard",
//     slug: "album-1",
//   },
// ];


  return (
    <div>
      <InnerBannerSection
        imageSrc={navigationConfig["publicationMedia"].imageSrc}
        breadcrumbs={navigationConfig["publicationMedia"].breadcrumbs}
        navItems={navigationConfig["publicationMedia"].navItems}
        pageTilte="Publications"
      />

      {/* <section className="maincontent">
        <div className="container">
          <h2 className="text-blue">Good Practices Manual</h2>

          <div className="row g-4">
            {photos.map(({ id, title, description, slug }) => (
              <div key={id} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="publication-card d-flex flex-column justify-content-between h-100 w-100">
                  <div className="publication-card-title d-flex justify-content-between align-items-center">
                    <p className="h3 mb-0"></p>
                    <span aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                      >
                        <path
                          d="M60.837 14.0583H56.8827V12.7092C56.904 12.1752 56.5585 11.6953 56.0454 11.5461C53.3082 10.8289 50.4896 10.4692 47.66 10.4762C43.0079 10.4762 36.6695 11.5229 31.9826 16.2913C27.3305 11.4764 20.9455 10.4762 16.3051 10.4762C13.4755 10.4692 10.6569 10.8289 7.91975 11.5461C7.40657 11.6953 7.06116 12.1752 7.08238 12.7092V14.0466H3.16302C2.52074 14.0466 2 14.5674 2 15.2096V52.3564C2 52.9987 2.52074 53.5194 3.16302 53.5194H60.837C61.4794 53.5194 62 52.9987 62 52.3564V15.2213C62 14.579 61.4794 14.0583 60.837 14.0583Z"
                          fill="#162f6a"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="publication-description">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>

                  <div className="d-flex justify-content-end">
                    <a
                      className="link-btn d-flex align-items-center text-uppercase pointer"
                      href={`/publicationMedia/photo-gallery/${slug}-photos`}
                    >
                      Know More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
