import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  const photos = [
    {
      id: "1",
      title:
        'Training Manual on "Capacity Building of CPCB/SPCB officials on Montreal Protocol Implementation"',
      description: "Meity Performance Smartboard",
      link: "/images/energyManagement/CementSector.png",
    },
    {
      id: "2",
      title: "eConnect",
      description: "eConnect",
      link: "/images/energyManagement/CementSector.png",
    },
    {
      id: "3",
      title: `National Conference on ESG for Industry Transformation "Environmental - Social - Governance for Aatmanirbhar Bharat"`,
      description:
        "Proceedings of National Conference on ESG for Industry Transformation",
      link: "/images/energyManagement/CementSector.png",
    },
    {
      id: "4",
      title: `NPC Lecture Report on "Food Security - Perspectives from India and Japan"`,
      description: "NPC Lecture Series held on 23-11-2022",
      link: "/images/energyManagement/CementSector.png",
    },
    {
      id: "5",
      title: "ESG End To End Solutions",
      description: "ESG End To End Solutions Brochure",
      link: "/images/energyManagement/CementSector.png",
    },
    {
      id: "6",
      title: "ESG FOR INDUSTRY TRANSFORMATION",
      description: "CONFERENCE PROCEEDINGS",
      link: "/images/energyManagement/CementSector.png",
    },
    {
      id: "7",
      title: `Proceedings of Conference of Local "Productivity Councils Rejuvenating Productivity Movement Towards Atmanirbhar Bharat"`,
      description: "Meity Performance Smartboard",
      link: "/images/energyManagement/CementSector.png",
    },
    {
      id: "8",
      title:
        "Proceedings of the APO conference on Productivity and Green Growth: New InterlockingÂ Paradigms",
      description: "Meity Performance Smartboard",
      link: "/images/energyManagement/CementSector.png",
    },
    {
      id: "9",
      title:
        "Proceedings of National Conference On Navmantra: Innovations for Higher Productivity Rejuvenating Productivity Movement in India",
      description: "Meity Performance Smartboard",
      link: "/images/energyManagement/CementSector.png",
    },
    {
      id: "10",
      title: "Proceedings of National Workshop on ESG for Future ready CPSEs",
      description:
        "Proceedings of National Workshop on ESG for Future ready CPSEs",
      link: "/images/energyManagement/CementSector.png",
    },
    {
      id: "11",
      title: "NPC KPMG Report",
      description: "Leveraging Defence Shipbuilding to Catalyse Indian",
      link: "/images/energyManagement/CementSector.png",
    },
    {
      id: "12",
      title: "Other Publication",
      description: "Other Publication",
      link: "/images/energyManagement/CementSector.png",
    },
    {
      id: "13",
      title: "Productivity Journal",
      description: "Quarterly journal of the National Productivity Council",
      link: "/images/energyManagement/CementSector.png",
    },
    {
      id: "14",
      title: "Productivity E-Newsletter",
      description: "Volume-2 No.-1",
      link: "/images/energyManagement/CementSector.png",
    },
    {
      id: "15",
      title: "Annual Report",
      description: "Annual Report",
      link: "/images/energyManagement/CementSector.png",
    },
    {
      id: "16",
      title: "Annual Productivity Report",
      description: "Annual Productivity Report 2017-18",
      link: "/images/energyManagement/CementSector.png",
    },
  ];
  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["publicationMedia"].imageSrc}
        breadcrumbs={navigationConfig["publicationMedia"].breadcrumbs}
        navItems={navigationConfig["publicationMedia"].navItems}
        pageTilte="Publications"
      />
      <section className="maincontent">
        <div className="container">
          <h2 className="text-blue">Good Practices Manual</h2>
          <div className="row g-4">
            {photos.map(({ id, title, description, link }) => (
              <div className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="publication-card d-flex flex-column justify-content-between h-100 w-100">
                  <div className="publication-card-title d-flex justify-content-between align-items-center">
                    <p
                      role="heading"
                      aria-level={2}
                      aria-label="Office of the Salt Commissioner, Jaipur"
                      className="h3"
                    ></p>
                    <span
                      className="lazy-load-image-background blur lazy-load-image-loaded"
                      style={{ color: "transparent", display: "inline-block" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64 "
                        viewBox="0 0 64 64"
                        fill="none"
                      >
                        <path
                          d="M60.837 14.0583C60.8331 14.0583 60.8291 14.0583 60.8254 14.0583H56.8827V12.7092C56.904 12.1752 56.5585 11.6953 56.0454 11.5461C53.3082 10.8289 50.4896 10.4692 47.66 10.4762C43.0079 10.4762 36.6695 11.5229 31.9826 16.2913C27.3305 11.4764 20.9455 10.4762 16.3051 10.4762C13.4755 10.4692 10.6569 10.8289 7.91975 11.5461C7.40657 11.6953 7.06116 12.1752 7.08238 12.7092V14.0466H3.16302C2.52074 14.0466 2 14.5674 2 15.2096V52.3564C2 52.9987 2.52074 53.5194 3.16302 53.5194C3.36276 53.5188 3.55902 53.4668 3.73289 53.3682C3.8492 53.3101 15.4794 46.9484 31.7151 51.0422H31.8895H31.9942C32.0869 51.0534 32.1806 51.0534 32.2733 51.0422C48.5555 46.9135 60.1857 53.2635 60.2555 53.3682C60.6153 53.576 61.0587 53.576 61.4185 53.3682C61.7761 53.1618 61.9975 52.781 62 52.368V15.2213C62 14.579 61.4794 14.0583 60.837 14.0583ZM4.32603 50.5072V16.3843H7.10564V45.5527C7.09837 46.195 7.61315 46.7216 8.25543 46.7288C8.31823 46.7296 8.38103 46.7252 8.44311 46.7158C10.8491 46.3484 13.2782 46.154 15.712 46.1343C19.0833 46.0758 22.4404 46.5829 25.6441 47.6345C18.4094 46.7597 11.0711 47.7485 4.32603 50.5072ZM15.712 43.8198C13.5966 43.8246 11.4837 43.9606 9.38515 44.2269V13.6279C11.6495 13.1235 13.9619 12.866 16.2818 12.8604C20.6315 12.8604 26.6327 13.8606 30.7963 18.5591L30.8312 47.5299C28.4121 45.9482 23.6903 43.8198 15.712 43.8198ZM33.1572 18.5591C37.3208 13.9071 43.322 12.8604 47.6716 12.8604C49.9914 12.8672 52.3038 13.1245 54.5683 13.6279V44.2269C52.4816 43.9581 50.3803 43.8183 48.2764 43.8082C40.3446 43.8082 35.6112 45.9365 33.1572 47.5182V18.5591ZM59.6623 50.5072C52.9029 47.741 45.5477 46.752 38.2977 47.6345C41.5165 46.5791 44.8897 46.0719 48.2764 46.1343C50.7254 46.1479 53.1702 46.3384 55.5918 46.7041C56.2268 46.8005 56.8198 46.3638 56.9162 45.7288C56.9256 45.6667 56.93 45.6039 56.9292 45.5411V16.3843H59.7089L59.6623 50.5072Z"
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
                      id="btn-rdegsl"
                      className="link-btn d-flex align-items-center text-uppercase pointer"
                      title="Know more about Office of the Salt Commissioner, Jaipur"
                      aria-label="Know more about Office of the Salt Commissioner, Jaipur"
                      href={link}
                    >
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined bhashini-skip-translation"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24 "
                          viewBox="0 0 64 64"
                          fill="none"
                        >
                          <path
                            d="M43.1337 34.6667H13.3337C12.5781 34.6667 11.9448 34.4112 11.4337 33.9C10.9225 33.3889 10.667 32.7556 10.667 32C10.667 31.2445 10.9225 30.6112 11.4337 30.1C11.9448 29.5889 12.5781 29.3334 13.3337 29.3334H43.1337L30.067 16.2667C29.5337 15.7334 29.2781 15.1112 29.3003 14.4C29.3225 13.6889 29.6003 13.0667 30.1337 12.5334C30.667 12.0445 31.2892 11.7889 32.0003 11.7667C32.7114 11.7445 33.3337 12 33.867 12.5334L51.467 30.1334C51.7337 30.4 51.9225 30.6889 52.0337 31C52.1448 31.3112 52.2003 31.6445 52.2003 32C52.2003 32.3556 52.1448 32.6889 52.0337 33C51.9225 33.3112 51.7337 33.6 51.467 33.8667L33.867 51.4667C33.3781 51.9556 32.767 52.2001 32.0337 52.2001C31.3003 52.2001 30.667 51.9556 30.1337 51.4667C29.6003 50.9334 29.3337 50.3001 29.3337 49.5667C29.3337 48.8334 29.6003 48.2001 30.1337 47.6667L43.1337 34.6667Z"
                            fill="#162f6a"
                          />
                        </svg>
                      </span>
                    </a>
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
