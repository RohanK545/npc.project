import InnerBannerSection from "@/components/InnerBannerSection";

export default function AboutUs() {
  interface PhotoCard {
    id: string; // optional, for key
    title: string;
    imgSrc: string;
    imgAlt: string;
    link: string;
    linkTitle: string;
    linkLabel: string;
    date?: string; // optional, since one card doesn't have date
  }
  const breadcrumbs = [
    { title: "Home", href: "/" },
    { title: "Ministry" },
    { pagetitle: "Our Performance" },
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

  const photoCards: PhotoCard[] = [
    {
      id: "btn-4h2vpk",
      title: "Meity Performance Smartboard",
      imgSrc:
        "https://www.meity.gov.in/static/uploads/2024/03/263aa4d06f2f23d471f76624141e6527.png",
      imgAlt: "Meity Performance Smartboard picture",
      link: "https://meity.dashboard.nic.in/",
      linkTitle: "Visit Meity Performance Smartboard",
      linkLabel: "Visit Meity Performance Smartboard",
    },
    {
      id: "btn-fysg8n",
      title: "Cyber Security Grand Challenge 2.0",
      imgSrc:
        "https://www.meity.gov.in/static/uploads/2024/11/4a6a88576d97fa1b867b1eefa47ce16b.png",
      imgAlt: "4a6a88576d97fa1b867b1eefa47ce16b",
      link: "https://innovateindia.mygov.in/cyber-security-grand-challenge/",
      linkTitle: "Visit",
      linkLabel: "Visit",
      date: "09.02.2025",
    },
    {
      id: "btn-kt80cv",
      title: "Digital India Internship Scheme-2025",
      imgSrc:
        "https://www.meity.gov.in/static/uploads/2025/04/a8eb75b0572bd91b3b995d39584be7da.jpg",
      imgAlt: "Digital India Internship Scheme-2025",
      link: "https://intern.meity.gov.in/login",
      linkTitle: "Visit",
      linkLabel: "Visit",
      date: "17.04.2025",
    },
  ];

  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc="https://www.dpiit.gov.in/static/uploads/2025/06/9474b41fcf967c101e7d4939b7b03d5e.jpg"
        breadcrumbs={breadcrumbs}
        navItems={navItems}
      />
      <section className="maincontent" role="main">
        <div className="container my-5">
          <p className="performance-title h3" role="heading" aria-level={2}>
            View Performance Dashboards
          </p>

          <div className="row photos-row-gap">
            {photoCards.map(
              ({
                id,
                title,
                imgSrc,
                imgAlt,
                link,
                linkTitle,
                linkLabel,
                date,
              }) => (
                <div key={id} className="col-sm-12 col-md-6 col-lg-3">
                  <div className="photos-card h-100 justify-content-start me-2 mb-2">
                    <div className="img-fluid position-relative">
                      <img
                        className="photos-img img-fluid performimg"
                        src={imgSrc}
                        alt={imgAlt}
                        width={100}
                        height={100}
                      />
                      <div className="position-absolute photos-btn pointer bg-transparent me-2 mb-2">
                        <a
                          id={id}
                          className="link-btn d-flex align-items-center text-uppercase pointer"
                          target="_blank"
                          rel="noreferrer"
                          title={linkTitle}
                          aria-label={linkLabel}
                          href={link}
                        >
                          <span
                            aria-hidden="true"
                            className="material-symbols-outlined bhashini-skip-translation"
                          >
                            <img
                              src="/images/icons/Open_In_New.svg"
                              alt="Open In New"
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="photos-card-body mt-4">
                      <p role="heading" aria-level={3} className="h3">
                        {title}
                      </p>
                    </div>
                    <div className="photos-card-footer d-flex  align-items-center text-uppercase">
                      <small className="ptype">{date}</small>
                    </div>
                  </div>
                </div>
              )
            )}
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
