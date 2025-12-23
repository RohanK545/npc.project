import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  const objectives = [
    { id: 1, text: "Manpower Planning & Rationalisation." },
    { id: 2, text: "Organization Re-design Studies" },
    { id: 3, text: "HR Policy and Manual Review study." },
    { id: 4, text: "Competency/Skills Mapping/Assessment." },
    { id: 5, text: "Training Needs Assessment & Analysis." },
    { id: 6, text: "Counselling & Re-training for Redeployment." },
    { id: 7, text: "Job/Employee/Customer Satisfaction Surveys" },
    { id: 8, text: "Impact Evaluation Studies" },
    { id: 9, text: "Performance Management System" },
    { id: 10, text: "Complete Offline Recruitment Solutions." },
    { id: 11, text: "Job Description / Specification Review & Designing" },
    {
      id: 12,
      text: "Team Management, Transformational Leadership & Self-Motivation",
    },
    { id: 13, text: "Communication & Presentation Skills." },
    { id: 14, text: "Problem Solving & Decision Making." },
    { id: 15, text: "Stress, Time & Knowledge Management." },
    { id: 16, text: "Attitudinal Change Work Culture & Office Management." },
    { id: 17, text: "RTI Act Programmes" },
    { id: 18, text: "Programmes on Office Procedures." },
  ];

  const ObjectiveCards = () => {
    return (
      <div className="aboutcontent row g-4">
        {objectives.map(({ id, text }) => (
          <div key={id} className="col-md-4">
            <div className="objectivebox">
              <h3>{id}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["domainExpertise"].imageSrc}
        breadcrumbs={navigationConfig["domainExpertise"].breadcrumbs}
        navItems={navigationConfig["domainExpertise"].navItems}
        pageTilte="Human Resource Management"
      />
      <section className="maincontent">
        <div className="container">
          <h3 className="py-3">
            {" "}
            The HRM Group focuses on continuous development and growth of Human
            Resources to enhance competitiveness of the organisations.
            Consultancy and Training Services are provided in the following
            areas:
          </h3>
          <ObjectiveCards />
        </div>
      </section>
    </div>
  );
}
