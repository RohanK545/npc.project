import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

interface TrainingItem {
  id: number;
  title: string;
  location?: string;
  type?: string;
  dateRange: string;
  link: string;
  description?: string;
}
const TrainingInfoTable = ({
  title,
  items,
}: {
  title: string;
  items: TrainingItem[];
}) => {
  return (
    <div
      role="table"
      className="container our-team-list-container mx-auto my-4"
    >
      {/* Title */}
      <div className="our-team-list-header d-flex align-items-center mb-2">
        <span className="material-symbols-outlined bhashini-skip-translation me-2"></span>
        <p className="text-uppercase mb-0">{title}</p>
      </div>

      {/* Header Row */}
      <div role="rowgroup">
        <div className="row row-gap-4 me-0 ms-0 our-team-list-subheader fw-bold">
          <div className="col-lg-1 col-sm-12 ps-1">S.No.</div>
          <div className="col-lg-5 col-sm-12 ps-1">Programme Title</div>
          <div className="col-lg-3 col-sm-12 ps-1">Location</div>
          <div className="col-lg-2 col-sm-12 ps-1">Dates</div>
          <div className="col-lg-1 col-sm-12 ps-1">Link</div>
        </div>
      </div>

      {/* Rows */}
      <div role="rowgroup">
        {items.map((item, idx) => (
          <div
            key={item.id}
            role="row"
            className="row row-gap-4 me-0 ms-0 our-team-list-subheader-list"
          >
            {/* S.No */}
            <div className="col-lg-1 col-md-12">
              <p className="mb-0">{idx + 1}</p>
            </div>

            {/* Title */}
            <div className="col-lg-5 col-md-12">
              <p className="mb-0 fw-semibold">{item.title}</p>
            </div>

            {/* Location */}
            <div className="col-lg-3 col-md-12">
              <p className="mb-0">{item.location}</p>
            </div>

            {/* Dates */}
            <div className="col-lg-2 col-md-12">
              <p className="mb-0">{item.dateRange}</p>
            </div>

            {/* Link */}
            <div className="col-lg-1 col-md-12">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none fw-semibold"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function AboutUs() {
  const nationalTrainings: TrainingItem[] = [
    {
      id: 1,
      title: "NEW LABOUR CODES",
      location: "Sri Vijaya Puram (Port Blair)",
      dateRange: "02-Feb-26 - 06-Feb-26",
      link: "../Uploads/training_head/Headquater/New Labor Codes - Port Blair437221.pdf",
      description:
        "Details about New Labour Codes training at Sri Vijaya Puram (Port Blair).",
    },
    {
      id: 2,
      title: "Finance for Non-Finance Executives",
      location: "Kodaikanal",
      dateRange: "02-Feb-26 - 06-Feb-26",
      link: "../Uploads/training_head/Headquater/Finance for Non Finance Executives 2025-26 (1)145399.pdf",
      description:
        "Training program on finance for non-finance executives at Kodaikanal.",
    },
    {
      id: 3,
      title:
        "Advance Course on Digital Workplace Management – (E-office, PFMS, E-Procurement, & Related GFR)",
      location: "Goa",
      dateRange: "09-Feb-26 - 13-Feb-26",
      link: "../Uploads/training_head/Headquater/Final Brochure - Advance Course on Digital Workplace Management 9-13 February 2026138397.pdf",
      description:
        "Advanced training on digital workplace management including E-office, PFMS, and more.",
    },
    {
      id: 4,
      title:
        "Systematic Problem Solving, Conflict resolution and change Management",
      location: "Goa",
      dateRange: "09-Feb-26 - 13-Feb-26",
      link: "../Uploads/training_head/Headquater/Systematic Problem Solving  Conflict resolution and change Management233109.pdf",
      description:
        "Program focused on systematic problem solving and change management.",
    },
    {
      id: 5,
      title: "Improving Leadership, Managerial and Administrative Skills",
      location: "Sri Vijaya Puram (Port Blair)",
      dateRange: "09-Feb-26 - 13-Feb-26",
      link: "../Uploads/training_head/Headquater/5. Improving leadership, managerial skills and administrative skills396415.pdf",
      description:
        "Training to improve leadership, managerial, and administrative skills.",
    },
    {
      id: 6,
      title: "Preventive Vigilance & Disciplinary Proceedings",
      location: "Goa",
      dateRange: "09-Feb-26 - 13-Feb-26",
      link: "../Uploads/training_head/Headquater/Preventive Vigilance  Disciplinary Proceedings (1)161846.pdf",
      description:
        "Focus on preventive vigilance and disciplinary proceedings.",
    },
    {
      id: 7,
      title: "Leadership Skill Development",
      location: "Goa",
      dateRange: "16-Feb-26 - 20-Feb-26",
      link: "../Uploads/training_head/Headquater/Final Brochure - Training on Leadership Skill Development  16-20 February  2026365410.pdf",
      description: "Program on developing leadership skills.",
    },
    {
      id: 8,
      title: "Fundamentals of Cyber Law & Cyber Security for Public Offices",
      location: "Udaipur",
      dateRange: "16-Feb-26 - 20-Feb-26",
      link: "../Uploads/training_head/Headquater/Brochure_Cyber Security_Feb 2026 (2)61827.pdf",
      description: "Cyber law and security fundamentals for public offices.",
    },
    {
      id: 9,
      title: "Working with Micro Data Analysis Using SPSS",
      location: "Goa",
      dateRange: "16-Feb-26 - 20-Feb-26",
      link: "../Uploads/training_head/Headquater/T2526IEG05339025 Feb 2026426568.pdf",
      description: "Training on micro data analysis using SPSS.",
    },
    {
      id: 10,
      title:
        "Advance Course on Right to Information Act, 2005 and Modern HR Practices",
      location: "Goa",
      dateRange: "23-Feb-26 - 27-Feb-26",
      link: "../Uploads/training_head/Headquater/Trg Prog on RTI  Modern HR Practices (2)269645.pdf",
      description: "Training on RTI Act and modern HR practices.",
    },
    {
      id: 11,
      title: "Personal & Organisational Cyber Security Essentials",
      location: "Shimla",
      dateRange: "23-Feb-26 - 27-Feb-26",
      link: "../Uploads/training_head/Headquater/Personal and Organisational Cyber Security Essentials (2)251722.pdf",
      description:
        "Cyber security essentials for individuals and organizations.",
    },
    {
      id: 12,
      title:
        "Developing Competencies of Executive Secretaries, Personal Assistants and Office Staff for Better Performance",
      location: "Srinagar",
      dateRange: "23-Feb-26 - 27-Feb-26",
      link: "../Uploads/training_head/Headquater/2026 PAsPsT2526IEG03386146.pdf",
      description:
        "Competency development for executive secretaries and assistants.",
    },
    {
      id: 13,
      title: "PROCUREMENT MANAGEMENT & FINANCIAL MANAGEMENT",
      location: "Sri Vijaya Puram (Port Blair)",
      dateRange: "23-Feb-26 - 27-Feb-26",
      link: "../Uploads/training_head/Headquater/Brochure-Feb 26281873.pdf",
      description: "Procurement and financial management training.",
    },
    {
      id: 14,
      title:
        "Advance course on e-Procurement through GeM (Cost Optimization Techniques & Contract Management) based on GFR",
      location: "Goa",
      dateRange: "23-Feb-26 - 27-Feb-26",
      link: "../Uploads/training_head/Headquater/T2526ITS09117365.pdf",
      description: "E-Procurement and contract management training.",
    },
    {
      id: 15,
      title: "Team Building & Leadership",
      location: "Port Blair",
      dateRange: "02-Mar-26 - 06-Mar-26",
      link: "../Uploads/training_head/Headquater/Team Building  Leadership 2025-2691136.pdf",
      description: "Team building and leadership skills training.",
    },
    {
      id: 16,
      title:
        "Administrative Effectiveness, Focus: Preventive Vigilance, Right to Information Act 2005 & POSH",
      location: "Mount Abu",
      dateRange: "09-Mar-26 - 13-Mar-26",
      link: "../Uploads/training_head/Headquater/Brochure_PV _RTI_March 2025497032.pdf",
      description:
        "Administrative effectiveness and preventive vigilance training.",
    },
    {
      id: 17,
      title: "Managerial Leadership & Team Building",
      location: "Jaisalmer",
      dateRange: "09-Mar-26 - 13-Mar-26",
      link: "../Uploads/training_head/Headquater/Managerial Leadership  Team Building (1)381029.pdf",
      description: "Training on managerial leadership and team building.",
    },
    {
      id: 18,
      title: "Preventive Vigilance, E- Procurement and Key to Good Governance",
      location: "Munnar",
      dateRange: "09-Mar-26 - 13-Mar-26",
      link: "../Uploads/training_head/Headquater/T2526ITS10385858.pdf",
      description:
        "Training focusing on preventive vigilance and good governance.",
    },
    {
      id: 19,
      title:
        "Work Life Balance & Stress Management: Focus on Personal Balance Scorecard",
      location: "Manali",
      dateRange: "16-Mar-26 - 20-Mar-26",
      link: "../Uploads/training_head/Headquater/Training Brochure-RD Chandigarh288341.pdf",
      description: "Work-life balance and stress management program.",
    },
    {
      id: 20,
      title: "WORKLIFE BALANCE & STRESS MANAGEMENT",
      location: "Sri Vijaya Puram (Port Blair)",
      dateRange: "16-Mar-26 - 20-Mar-26",
      link: "../Uploads/training_head/Headquater/Worklife Balance  Stress Management73809.pdf",
      description: "Training on worklife balance and stress management.",
    },
    {
      id: 21,
      title: "Transitioning India to Net-Zero: Strategies and Best Practices",
      location: "Gangtok (Sikkim)",
      dateRange: "16-Mar-26 - 20-Mar-26",
      link: "../Uploads/training_head/Headquater/T2526ECA0129825.pdf",
      description: "Training on India's net-zero transition strategies.",
    },
    {
      id: 22,
      title: "Improving Leadership, Managerial and Administrative Skills",
      location: "Sri Vijaya Puram (Port Blair)",
      dateRange: "23-Mar-26 - 27-Mar-26",
      link: "../Uploads/training_head/Headquater/6. Improving leadership, managerial skills and administrative skills462183.pdf",
      description: "Improving leadership and administrative skills.",
    },
    {
      id: 23,
      title: "Conflict Resolution and Strategic Financial Management",
      location: "Gangtok",
      dateRange: "23-Mar-26 - 27-Mar-26",
      link: "../Uploads/training_head/Headquater/Brochure-Mar 2026150398.pdf",
      description: "Training on conflict resolution and financial management.",
    },
  ];

  return (
    <div style={{}}>
      {/* <InnerBannerSection
        imageSrc={navigationConfig["services"].imageSrc}
        breadcrumbs={navigationConfig["services"].breadcrumbs}
        navItems={navigationConfig["services"].navItems}
        pageTilte="International Services"
      /> */}
      <section className="maincontent">
        <div className="conatiner">
          <TrainingInfoTable
            title="Upcoming National Training"
            items={nationalTrainings}
          />
        </div>
      </section>
    </div>
  );
}
