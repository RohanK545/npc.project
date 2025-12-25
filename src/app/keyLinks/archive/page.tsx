import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["keyLinks"].imageSrc}
        breadcrumbs={navigationConfig["keyLinks"].breadcrumbs}
        navItems={navigationConfig["keyLinks"].navItems}
        pageTilte="Archive"
      />

      <div className="container my-4">
        <div className="content-box mt-4 help-editor">
          {[
            {
              title: "Latest News",
              href: "/keyLinks/archive/latestNews",
              id: "Background_1",
            },
            {
              title: "Carrerrs",
              href: "/keyLinks/archive/careers",
              id: "Official Language Policy of the Union_1",
            },
            {
              title: "Productivity e-Newsletter",
              href: "/keyLinks/archive/productivity-e-Newsletter",
              id: "Official Language Act_1",
            },
            {
              title: "Tenders",
              href: "/keyLinks/archive/tenders",
              id: "Official Language Act_2",
            },
            {
              title: "Notices",
              href: "/keyLinks/archive/notices",
              id: "The Official Languages (Use for Official Purpose of the Union)_1",
            },
          ].map((doc) => (
            <div
              key={doc.id}
              className="box row align-items-center ms-0 me-0 py-2"

            >
              <div className="col-lg-6 col-md-12 col-sm-12">
                <p className="mb-0 d-flex">
                  <span className="material-symbols-outlined bhashini-skip-translation"></span>
                  {doc.title}
                </p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="d-flex justify-content-end">
                  <a
                    id={doc.id}
                    className="link-btn d-flex align-items-center text-uppercase pointer"
                    // target="_blank"
                    rel="noopener noreferrer"
                    title={`Know More about ${doc.title}`}
                    aria-label={`Know More about ${doc.title}`}
                    href={doc.href}
                  >
                    <span className="material-symbols-outlined bhashini-skip-translation">
                      <img
                        src="/images/icons/Arrow_Forward.svg"
                        alt="Twitter"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
