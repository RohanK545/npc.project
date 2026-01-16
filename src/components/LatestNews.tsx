"use client";

import React, { useState } from "react";
import Link from "next/link";

interface TrainingItem {
  id: number;
  title: string;
  location?: string;
  type?: string;
  dateRange: string;
  link: string;
  description?: string;
}

const nationalTrainings: TrainingItem[] = [
  {
    id: 1,
    title: "Preventive Vigilance, E- Procurement and Key to Good Governance",
    location: "Munnar",
    dateRange: "09-Mar-26 - 13-Mar-26",
    link: "#",
    description: "This comprehensive residential training programme focuses on the crucial aspects of preventive vigilance and the implementation of e-procurement systems to enhance transparency and efficiency in governance. Participants will explore strategies for identifying potential risks and establishing robust mechanisms for sustainable good governance practices.",
  },
  {
    id: 2,
    title: "Work Life Balance & Stress Management: Focus on Personal Balance Scorecard",
    location: "Manali",
    dateRange: "16-Mar-26 - 20-Mar-26",
    link: "#",
    description: "Designed for modern professionals, this programme introduces the 'Personal Balance Scorecard' concept. It provides practical tools and techniques to manage work-related stress, achieve a healthy work-life integration, and improve overall personal well-being while maintaining high productivity levels.",
  },
  {
    id: 3,
    title: "WORKLIFE BALANCE & STRESS MANAGEMENT",
    location: "Sri Vijaya Puram (Port Blair)",
    dateRange: "16-Mar-26 - 20-Mar-26",
    link: "#",
    description: "Set in the scenic environment of Port Blair, this intensive workshop focuses on psychological and organizational aspects of stress. Participants will learn effective coping mechanisms, time management strategies, and mindful practices to maintain professional excellence without compromising personal life.",
  },
  {
    id: 4,
    title: "Transitioning India to Net-Zero: Strategies and Best Practices",
    location: "Gangtok (Sikkim)",
    dateRange: "16-Mar-26 - 20-Mar-26",
    link: "#",
    description: "This pioneering programme discusses India's path toward Net-Zero emissions. It covers sustainable industrial practices, climate change mitigation strategies, and the role of innovation in achieving carbon neutrality. A MUST for environmental managers and policy makers.",
  },
  {
    id: 5,
    title: "Improving Leadership, Managerial and Administrative Skills",
    location: "Sri Vijaya Puram (Port Blair)",
    dateRange: "23-Mar-26 - 27-Mar-26",
    link: "#",
    description: "A leadership development initiative aimed at senior administrators and managers. The curriculum includes advanced decision-making modules, team dynamics management, and strategic administrative planning to navigate complex organizational challenges effectively.",
  },
  {
    id: 6,
    title: "Advanced Project Management for Government Officials",
    location: "Shimla",
    dateRange: "30-Mar-26 - 03-Apr-26",
    link: "#",
    description: "This programme equips government officials with modern project management methodologies including Agile and PRINCE2. Participants will learn resource allocation, risk management, and stakeholder engagement techniques specific to public sector projects.",
  },
  {
    id: 7,
    title: "Digital Transformation in Public Administration",
    location: "Bangalore",
    dateRange: "06-Apr-26 - 10-Apr-26",
    link: "#",
    description: "Explore the latest digital technologies transforming public service delivery. Topics include AI in governance, blockchain for transparency, cloud computing, and cybersecurity essentials for government systems.",
  },
  {
    id: 8,
    title: "Financial Management and Budget Planning",
    location: "Jaipur",
    dateRange: "13-Apr-26 - 17-Apr-26",
    link: "#",
    description: "A comprehensive course on financial planning, budget preparation, and fiscal management for public sector organizations. Learn about treasury operations, audit compliance, and financial reporting standards.",
  },
  {
    id: 9,
    title: "Effective Communication Skills for Leaders",
    location: "Guwahati",
    dateRange: "20-Apr-26 - 24-Apr-26",
    link: "#",
    description: "Develop advanced communication skills essential for leadership roles. This programme covers public speaking, crisis communication, media relations, and interpersonal communication strategies for organizational success.",
  },
  {
    id: 10,
    title: "Sustainable Development Goals Implementation",
    location: "Dehradun",
    dateRange: "27-Apr-26 - 01-May-26",
    link: "#",
    description: "Learn how to align organizational strategies with UN Sustainable Development Goals. This training covers SDG framework, monitoring mechanisms, and best practices for integrating sustainability into policy-making and operations.",
  },
];

const internationalTrainings: TrainingItem[] = [
  {
    id: 1,
    title: "Conference on Role of Green Productivity in Transition to Cleaner Energy",
    type: "Online",
    dateRange: "15 December 2025 - 15 December 2025",
    link: "#",
    description: "An international online forum bringing together global experts to discuss how 'Green Productivity' (GP) can drive the transition to sustainable energy sources. Focus areas include circular economy, energy-efficient manufacturing, and renewable energy integration.",
  },
  {
    id: 2,
    title: "Training Course on Upskilling and Reskilling the Public-sector Workforce",
    type: "Face to Face",
    location: "India, Chennai",
    dateRange: "2 February 2026 - 6 February 2026",
    link: "#",
    description: "This APO-sponsored course addresses the evolving needs of the public sector. It focuses on identifying skill gaps, implementing digital literacy programmes, and establishing a culture of continuous learning to future-proof the public workforce.",
  },
  {
    id: 3,
    title: "Workshop on Human Capital Management in SMEs",
    type: "Face to Face",
    location: "Pakistan, Karachi",
    dateRange: "27 January 2026 - 30 January 2026",
    link: "#",
    description: "Specifically tailored for Small and Medium Enterprises (SMEs), this workshop provides insights into effective talent recruitment, retention strategies, and performance management systems that are scalable and cost-effective for smaller businesses.",
  },
  {
    id: 4,
    title: "Multicountry Observational Study Mission on Productivity Gainsharing in Agriculture",
    type: "F2F",
    location: "Nepal",
    dateRange: "07 Jan 2026 - 09 Jan 2026",
    link: "#",
    description: "A collaborative mission to study successful agricultural productivity models in Nepal. Participants will examine community-based gainsharing, modern farming techniques, and cooperative structures that empower local farmers and increase yield.",
  },
  {
    id: 5,
    title: "APO Multicountry Mission on Agricultural Innovation",
    type: "F2F",
    location: "Nepal",
    dateRange: "07 Jan 2026 - 09 Jan 2026",
    link: "#",
    description: "Focused on the intersection of technology and farming, this mission explores innovations like precision agriculture, AI in crop monitoring, and sustainable water management practices across participating Asian nations.",
  },
  {
    id: 6,
    title: "International Workshop on Industry 4.0 and Smart Manufacturing",
    type: "Face to Face",
    location: "Singapore",
    dateRange: "15 February 2026 - 19 February 2026",
    link: "#",
    description: "Explore the future of manufacturing with Industry 4.0 technologies. This workshop covers IoT integration, robotics, additive manufacturing, and data analytics for optimizing production processes in the digital age.",
  },
  {
    id: 7,
    title: "Global Conference on Circular Economy Practices",
    type: "Online",
    dateRange: "25 February 2026 - 26 February 2026",
    link: "#",
    description: "Join international experts in discussing circular economy models that minimize waste and maximize resource efficiency. Topics include sustainable supply chains, product lifecycle management, and waste-to-value innovations.",
  },
  {
    id: 8,
    title: "Training on Quality Management Systems and ISO Standards",
    type: "Face to Face",
    location: "Malaysia, Kuala Lumpur",
    dateRange: "10 March 2026 - 14 March 2026",
    link: "#",
    description: "Comprehensive training on implementing and maintaining ISO 9001, ISO 14001, and other international quality standards. Learn audit techniques, documentation requirements, and continuous improvement methodologies.",
  },
  {
    id: 9,
    title: "Workshop on Digital Marketing for Export Promotion",
    type: "Face to Face",
    location: "Thailand, Bangkok",
    dateRange: "20 March 2026 - 24 March 2026",
    link: "#",
    description: "Master digital marketing strategies for international trade. This workshop covers e-commerce platforms, social media marketing, SEO for global markets, and data-driven customer acquisition techniques for exporters.",
  },
  {
    id: 10,
    title: "International Seminar on Public-Private Partnerships",
    type: "Face to Face",
    location: "Japan, Tokyo",
    dateRange: "05 April 2026 - 09 April 2026",
    link: "#",
    description: "Learn best practices in structuring and managing PPP projects. This seminar covers risk allocation, contract management, financing models, and case studies from successful infrastructure and service delivery partnerships worldwide.",
  },
];

const LatestNews = () => {
  const [selectedItem, setSelectedItem] = useState<TrainingItem | null>(null);
  const [showAllNational, setShowAllNational] = useState(false);
  const [showAllInternational, setShowAllInternational] = useState(false);

  const openModal = (item: TrainingItem) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  // Get visible trainings based on state
  const visibleNationalTrainings = showAllNational
    ? nationalTrainings
    : nationalTrainings.slice(0, 5);

  const visibleInternationalTrainings = showAllInternational
    ? internationalTrainings
    : internationalTrainings.slice(0, 5);

  return (
    <section className="latest-news-section py-5 bg-white position-relative">
      <div className="container">
        <div className="row g-5">
          {/* National Training Column */}
          <div className="col-lg-6">
            <div className="training-container h-100">
              <div
                className="training-header text-center py-3 mb-4 rounded-1"
                style={{ backgroundColor: "#2b62cc", color: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
              >
                <h2 className="h3 mb-0 fw-semibold text-white">Upcoming National Training</h2>
              </div>

              <div
                className="training-list-wrapper bg-white p-4 shadow-sm border rounded-1"
                style={{ borderColor: "#eee" }}
              >
                <div className="list-group list-group-flush">
                  {visibleNationalTrainings.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => openModal(item)}
                      className="list-group-item list-group-item-action border-0 px-0 py-3 training-hover-item pointer"
                      style={{ borderBottom: "1.5px solid #2b62cc !important", cursor: "pointer" }}
                    >
                      <div className="d-flex flex-column gap-1">
                        <span className="fw-bold">
                          {item.id}. {item.title}
                        </span>
                        <span>
                          {item.location} ({item.dateRange})
                        </span>
                        <div className="mt-2" style={{ height: "1.5px", width: "100%", backgroundColor: "#2b62cc", opacity: 0.8 }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View All Button */}
                {nationalTrainings.length > 5 && (
                  <div className="text-center mt-3">
                    <button
                      onClick={() => setShowAllNational(!showAllNational)}
                      className="btn btn-outline-primary px-4 py-2"
                      style={{ borderColor: "#2b62cc", color: "#2b62cc" }}
                    >
                      {showAllNational ? (
                        <>
                          <i className="bi bi-chevron-up me-2"></i>
                          Show Less
                        </>
                      ) : (
                        <>
                          <i className="bi bi-chevron-down me-2"></i>
                          View All ({nationalTrainings.length})
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* International Training Column */}
          <div className="col-lg-6">
            <div className="training-container h-100">
              <div
                className="training-header text-center py-3 mb-4 rounded-1"
                style={{ backgroundColor: "#2b62cc", color: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
              >
                <h2 className="h3 mb-0 fw-semibold text-white">Upcoming International Training</h2>
              </div>

              <div
                className="training-list-wrapper bg-white p-4 shadow-sm border rounded-1"
                style={{ borderColor: "#eee" }}
              >
                <div className="list-group list-group-flush">
                  {visibleInternationalTrainings.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => openModal(item)}
                      className="list-group-item list-group-item-action border-0 px-0 py-3 training-hover-item pointer"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="d-flex flex-column gap-1">
                        <span className="fw-bold">
                          {item.id}. {item.title}
                        </span>
                        <span>
                          {item.type} {item.location ? `(${item.location})` : ""} ({item.dateRange})
                        </span>
                        <div className="mt-2" style={{ height: "1.5px", width: "100%", backgroundColor: "#2b62cc", opacity: 0.8 }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View All Button */}
                {internationalTrainings.length > 5 && (
                  <div className="text-center mt-3">
                    <button
                      onClick={() => setShowAllInternational(!showAllInternational)}
                      className="btn btn-outline-primary px-4 py-2"
                      style={{ borderColor: "#2b62cc", color: "#2b62cc" }}
                    >
                      {showAllInternational ? (
                        <>
                          <i className="bi bi-chevron-up me-2"></i>
                          Show Less
                        </>
                      ) : (
                        <>
                          <i className="bi bi-chevron-down me-2"></i>
                          View All ({internationalTrainings.length})
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Training Detail Modal */}
      {selectedItem && (
        <div
          className="training-modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center z-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(4px)" }}
          onClick={closeModal}
        >
          <div
            className="training-modal-content bg-white p-0 rounded-3 shadow-lg overflow-hidden position-relative"
            style={{ maxWidth: "600px", width: "90%", animation: "modalOpen 0.3s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-4 py-3 d-flex justify-content-between align-items-center" style={{ backgroundColor: "#2b62cc", color: "#fff" }}>
              <h3 className="h5 mb-0 fw-bold">Training Details</h3>
              <button
                onClick={closeModal}
                className="btn-close btn-close-white"
                aria-label="Close"
              ></button>
            </div>

            {/* Modal Body */}
            <div className="p-4">
              <div className="mb-4">
                <span className="badge mb-2 px-3 py-2 fs-6" style={{ backgroundColor: "#e7f1ff", color: "#0d6efd" }}>
                  <i className="bi bi-calendar-event me-2"></i>{selectedItem.dateRange}
                </span>
                <h2 className="h4 fw-bold mt-2" style={{ color: "#162f6a" }}>
                  {selectedItem.id}. {selectedItem.title}
                </h2>
                <p className="text-secondary fw-medium mb-0">
                  <i className="bi bi-geo-alt me-2"></i>
                  {selectedItem.location || selectedItem.type}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="h6 fw-bold text-uppercase text-muted mb-2 ls-1" style={{ fontSize: "0.8rem" }}>Description</h4>
                <p className="text-dark mb-4" style={{ lineHeight: "1.7" }}>
                  {selectedItem.description || "Detailed description for this training programme will be available shortly. Please check back for updates regarding curriculum and faculty."}
                </p>

                <h4 className="h6 fw-bold text-uppercase text-muted mb-2 ls-1" style={{ fontSize: "0.8rem" }}>Reference Links</h4>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-link-45deg fs-5 text-primary"></i>
                  <a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-underline fw-medium text-primary"
                  >
                    View Official Document / External Link
                  </a>
                </div>
              </div>

              {/* Action Links */}
              <div className="d-flex gap-3 pt-3 border-top justify-content-end">
                <button onClick={closeModal} className="btn btn-primary px-5 py-2" style={{ backgroundColor: "#2b62cc" }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .ls-1 { letter-spacing: 1px; }
        .training-hover-item {
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .training-hover-item:hover {
          background-color: #f8faff !important;
          transform: translateX(5px);
        }
        .list-group-item {
          background: transparent;
        }
        @keyframes modalOpen {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default LatestNews;
