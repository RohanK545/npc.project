import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["services"].imageSrc}
        breadcrumbs={navigationConfig["services"].breadcrumbs}
        navItems={navigationConfig["services"].navItems}
        pageTilte="Training"
      />
      <section className="maincontent">
        <div>
          <div className="container ">
            {" "}
            {/* <h1 className="text-blue">Capacity Building & Training</h1> */}
            <br />
            <br />
            <p>
              NPC offers a wide range of training programmes, seminars,
              workshops and conferences for officials of all levels from state
              and central Governments, Public Sector Units, Financial
              Institutions and/or Academic Institutions to improve people’s
              behavioral, managerial and technical competencies especially aim
              at making people realize their full potential.
            </p>
            <br />
            <p>
              This is achieved by improving their attitudes and developing in
              them the capability to succeed in constantly changing situations
              through flexibility in thinking and approach. Also by helping them
              become more self directed, developing ability to set and achieve
              goals and enhancing key leadership skills. We specialize in
              courses for individuals and groups Training capsules designed on
              different subjects like IT HRM, PM, AGRI, TM etc.
            </p>
            <br />
            <p>
              We also customize training according to the needs of the client.
            </p>
            <br />
          </div>
        </div>
      </section>
    </div>
  );
}
