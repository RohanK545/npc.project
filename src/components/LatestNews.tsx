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
    description:
      "This comprehensive residential training programme focuses on the crucial aspects of preventive vigilance and the implementation of e-procurement systems to enhance transparency and efficiency in governance. Participants will explore strategies for identifying potential risks and establishing robust mechanisms for sustainable good governance practices.",
  },
  {
    id: 2,
    title:
      "Work Life Balance & Stress Management: Focus on Personal Balance Scorecard",
    location: "Manali",
    dateRange: "16-Mar-26 - 20-Mar-26",
    link: "#",
    description:
      "Designed for modern professionals, this programme introduces the 'Personal Balance Scorecard' concept. It provides practical tools and techniques to manage work-related stress, achieve a healthy work-life integration, and improve overall personal well-being while maintaining high productivity levels.",
  },
  {
    id: 3,
    title: "WORKLIFE BALANCE & STRESS MANAGEMENT",
    location: "Sri Vijaya Puram (Port Blair)",
    dateRange: "16-Mar-26 - 20-Mar-26",
    link: "#",
    description:
      "Set in the scenic environment of Port Blair, this intensive workshop focuses on psychological and organizational aspects of stress. Participants will learn effective coping mechanisms, time management strategies, and mindful practices to maintain professional excellence without compromising personal life.",
  },
  {
    id: 4,
    title: "Transitioning India to Net-Zero: Strategies and Best Practices",
    location: "Gangtok (Sikkim)",
    dateRange: "16-Mar-26 - 20-Mar-26",
    link: "#",
    description:
      "This pioneering programme discusses India's path toward Net-Zero emissions. It covers sustainable industrial practices, climate change mitigation strategies, and the role of innovation in achieving carbon neutrality. A MUST for environmental managers and policy makers.",
  },
  {
    id: 5,
    title: "Improving Leadership, Managerial and Administrative Skills",
    location: "Sri Vijaya Puram (Port Blair)",
    dateRange: "23-Mar-26 - 27-Mar-26",
    link: "#",
    description:
      "A leadership development initiative aimed at senior administrators and managers. The curriculum includes advanced decision-making modules, team dynamics management, and strategic administrative planning to navigate complex organizational challenges effectively.",
  },
  {
    id: 6,
    title: "Advanced Project Management for Government Officials",
    location: "Shimla",
    dateRange: "30-Mar-26 - 03-Apr-26",
    link: "#",
    description:
      "This programme equips government officials with modern project management methodologies including Agile and PRINCE2. Participants will learn resource allocation, risk management, and stakeholder engagement techniques specific to public sector projects.",
  },
  {
    id: 7,
    title: "Digital Transformation in Public Administration",
    location: "Bangalore",
    dateRange: "06-Apr-26 - 10-Apr-26",
    link: "#",
    description:
      "Explore the latest digital technologies transforming public service delivery. Topics include AI in governance, blockchain for transparency, cloud computing, and cybersecurity essentials for government systems.",
  },
  {
    id: 8,
    title: "Financial Management and Budget Planning",
    location: "Jaipur",
    dateRange: "13-Apr-26 - 17-Apr-26",
    link: "#",
    description:
      "A comprehensive course on financial planning, budget preparation, and fiscal management for public sector organizations. Learn about treasury operations, audit compliance, and financial reporting standards.",
  },
  {
    id: 9,
    title: "Effective Communication Skills for Leaders",
    location: "Guwahati",
    dateRange: "20-Apr-26 - 24-Apr-26",
    link: "#",
    description:
      "Develop advanced communication skills essential for leadership roles. This programme covers public speaking, crisis communication, media relations, and interpersonal communication strategies for organizational success.",
  },
  {
    id: 10,
    title: "Sustainable Development Goals Implementation",
    location: "Dehradun",
    dateRange: "27-Apr-26 - 01-May-26",
    link: "#",
    description:
      "Learn how to align organizational strategies with UN Sustainable Development Goals. This training covers SDG framework, monitoring mechanisms, and best practices for integrating sustainability into policy-making and operations.",
  },
];

const internationalTrainings: TrainingItem[] = [
  {
    id: 1,
    title:
      "Conference on Role of Green Productivity in Transition to Cleaner Energy",
    type: "Online",
    dateRange: "15 December 2025 - 15 December 2025",
    link: "#",
    description:
      "An international online forum bringing together global experts to discuss how 'Green Productivity' (GP) can drive the transition to sustainable energy sources. Focus areas include circular economy, energy-efficient manufacturing, and renewable energy integration.",
  },
  {
    id: 2,
    title:
      "Training Course on Upskilling and Reskilling the Public-sector Workforce",
    type: "Face to Face",
    location: "India, Chennai",
    dateRange: "2 February 2026 - 6 February 2026",
    link: "#",
    description:
      "This APO-sponsored course addresses the evolving needs of the public sector. It focuses on identifying skill gaps, implementing digital literacy programmes, and establishing a culture of continuous learning to future-proof the public workforce.",
  },
  {
    id: 3,
    title: "Workshop on Human Capital Management in SMEs",
    type: "Face to Face",
    location: "Pakistan, Karachi",
    dateRange: "27 January 2026 - 30 January 2026",
    link: "#",
    description:
      "Specifically tailored for Small and Medium Enterprises (SMEs), this workshop provides insights into effective talent recruitment, retention strategies, and performance management systems that are scalable and cost-effective for smaller businesses.",
  },
  {
    id: 4,
    title:
      "Multicountry Observational Study Mission on Productivity Gainsharing in Agriculture",
    type: "F2F",
    location: "Nepal",
    dateRange: "07 Jan 2026 - 09 Jan 2026",
    link: "#",
    description:
      "A collaborative mission to study successful agricultural productivity models in Nepal. Participants will examine community-based gainsharing, modern farming techniques, and cooperative structures that empower local farmers and increase yield.",
  },
  {
    id: 5,
    title: "APO Multicountry Mission on Agricultural Innovation",
    type: "F2F",
    location: "Nepal",
    dateRange: "07 Jan 2026 - 09 Jan 2026",
    link: "#",
    description:
      "Focused on the intersection of technology and farming, this mission explores innovations like precision agriculture, AI in crop monitoring, and sustainable water management practices across participating Asian nations.",
  },
  {
    id: 6,
    title: "International Workshop on Industry 4.0 and Smart Manufacturing",
    type: "Face to Face",
    location: "Singapore",
    dateRange: "15 February 2026 - 19 February 2026",
    link: "#",
    description:
      "Explore the future of manufacturing with Industry 4.0 technologies. This workshop covers IoT integration, robotics, additive manufacturing, and data analytics for optimizing production processes in the digital age.",
  },
  {
    id: 7,
    title: "Global Conference on Circular Economy Practices",
    type: "Online",
    dateRange: "25 February 2026 - 26 February 2026",
    link: "#",
    description:
      "Join international experts in discussing circular economy models that minimize waste and maximize resource efficiency. Topics include sustainable supply chains, product lifecycle management, and waste-to-value innovations.",
  },
  {
    id: 8,
    title: "Training on Quality Management Systems and ISO Standards",
    type: "Face to Face",
    location: "Malaysia, Kuala Lumpur",
    dateRange: "10 March 2026 - 14 March 2026",
    link: "#",
    description:
      "Comprehensive training on implementing and maintaining ISO 9001, ISO 14001, and other international quality standards. Learn audit techniques, documentation requirements, and continuous improvement methodologies.",
  },
  {
    id: 9,
    title: "Workshop on Digital Marketing for Export Promotion",
    type: "Face to Face",
    location: "Thailand, Bangkok",
    dateRange: "20 March 2026 - 24 March 2026",
    link: "#",
    description:
      "Master digital marketing strategies for international trade. This workshop covers e-commerce platforms, social media marketing, SEO for global markets, and data-driven customer acquisition techniques for exporters.",
  },
  {
    id: 10,
    title: "International Seminar on Public-Private Partnerships",
    type: "Face to Face",
    location: "Japan, Tokyo",
    dateRange: "05 April 2026 - 09 April 2026",
    link: "#",
    description:
      "Learn best practices in structuring and managing PPP projects. This seminar covers risk allocation, contract management, financing models, and case studies from successful infrastructure and service delivery partnerships worldwide.",
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
        <div className="row">
          <div className="col-12">
            <h2 className="ms-4" style={{ color: "#162f6a" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                className="me-4"
              >
                <path
                  d="M30.4991 1.58594C30.6718 1.71622 30.8628 1.82814 31.0144 1.97949C34.3904 5.3485 37.7591 8.72483 41.1393 12.0896C41.4635 12.4123 41.6101 12.7518 41.6081 13.2111C41.5947 16.2547 41.6083 19.2984 41.5938 22.342C41.5918 22.7784 41.6615 23.0104 42.1749 22.9861C42.4552 22.9729 42.7604 23.0929 43.0251 23.216C43.7497 23.5533 44.462 23.9179 45.1734 24.2829C46.1312 24.7743 46.5132 25.7191 46.1614 26.7339C46.0643 27.0139 45.9358 27.2848 45.8032 27.5506C44.5084 30.1461 43.1982 32.7341 41.924 35.3398C41.7329 35.7306 41.6238 36.1996 41.6157 36.635C41.5819 38.4386 41.6042 40.2432 41.6006 42.0475C41.5959 44.3845 39.8564 46.2783 37.5258 46.4894C37.4634 46.495 37.4004 46.4949 37.3377 46.4947C36.9665 46.4936 36.6599 46.3615 36.6452 45.9548C36.6305 45.5477 36.9226 45.3972 37.297 45.3723C38.23 45.3102 39.0207 44.9408 39.6564 44.253C40.1758 43.691 40.4702 43.0337 40.4706 42.2586C40.4713 41.1918 40.4719 40.1249 40.4698 39.0581C40.4695 38.9085 40.4542 38.7589 40.345 38.5782C40.2282 38.8069 40.108 39.0338 39.9954 39.2645C39.6004 40.0739 38.9775 40.4876 38.0537 40.4834C37.1307 40.4793 36.2062 40.5198 35.2844 40.5742C34.3952 40.6267 33.7874 40.2168 33.3509 39.49C32.2785 37.7042 31.2095 35.9164 30.141 34.1282C29.8358 33.6175 29.5104 33.1164 29.2412 32.5871C28.6772 31.4782 29.0007 30.4466 30.0694 29.8156C30.6628 29.4653 31.2495 29.1037 31.8404 28.749C33.0694 28.0114 34.1738 28.2962 34.913 29.5342C35.377 30.3111 35.8487 31.0834 36.3664 31.9397C36.482 31.7423 36.5627 31.6206 36.6277 31.491C37.8432 29.0661 39.0623 26.643 40.2629 24.2108C40.3892 23.9549 40.4605 23.6441 40.4618 23.3584C40.4757 20.2521 40.4717 17.1456 40.4698 14.0392C40.4694 13.3844 40.4467 13.3639 39.7656 13.3631C37.93 13.361 36.0944 13.364 34.2588 13.3616C31.6736 13.3583 29.7473 11.4308 29.7408 8.83779C29.7362 6.97082 29.7305 5.10376 29.7455 3.2369C29.749 2.79898 29.6094 2.6238 29.152 2.62438C21.6213 2.63389 14.0906 2.62449 6.55993 2.6368C4.85705 2.63959 3.38296 4.1492 3.38245 5.84747C3.37887 17.9123 3.37876 29.977 3.38228 42.0418C3.38283 43.9255 4.84022 45.3676 6.73455 45.3682C15.7557 45.371 24.7768 45.3694 33.7979 45.3698C34.0176 45.3698 34.2376 45.3663 34.4567 45.3781C34.8143 45.3973 35.0802 45.5641 35.0737 45.9446C35.0671 46.3254 34.7926 46.4766 34.4372 46.4937C34.3276 46.499 34.2177 46.4994 34.1079 46.4994C25.0083 46.4996 15.9087 46.5036 6.80914 46.497C4.19858 46.4951 2.25225 44.5457 2.25172 41.952C2.24927 29.9813 2.24964 18.0107 2.25159 6.04002C2.25193 3.9186 3.63563 2.11671 5.60862 1.65629C5.77472 1.61753 5.94852 1.61179 6.19538 1.60203C6.50434 1.63837 6.73666 1.68515 6.96901 1.68527C14.5503 1.6891 22.1316 1.68948 29.7129 1.68415C29.975 1.68396 30.237 1.62011 30.4991 1.58594ZM39.6311 12.0893C39.5586 11.9262 39.5254 11.724 39.4078 11.6057C36.7758 8.95876 34.1368 6.31875 31.4878 3.68883C31.365 3.56691 31.1369 3.55099 30.9177 3.55141C30.9049 3.61249 30.881 3.67355 30.8809 3.73465C30.8777 5.59803 30.8032 7.4652 30.8987 9.32363C30.9769 10.8484 32.4068 12.2427 33.9947 12.2336C35.6702 12.224 37.3458 12.2343 39.0214 12.2276C39.2197 12.2268 39.4179 12.1733 39.6311 12.0893ZM31.541 34.2964C32.4426 35.8002 33.3453 37.3033 34.245 38.8083C34.541 39.3035 34.9264 39.5909 35.549 39.5367C36.2961 39.4716 37.0484 39.463 37.7987 39.4388C38.3594 39.4207 38.7615 39.2174 39.0281 38.6748C41.0048 34.6528 43.0036 30.6418 44.9927 26.6259C45.3239 25.9573 45.1937 25.5413 44.534 25.1905C43.9807 24.8963 43.4154 24.6245 42.8539 24.3458C41.957 23.9005 41.5866 24.0234 41.137 24.9306C39.7873 27.6542 38.4493 30.3836 37.0812 33.0979C36.9586 33.3411 36.6647 33.6201 36.4258 33.6448C36.2275 33.6653 35.9267 33.3774 35.7858 33.1539C35.1099 32.0817 34.4823 30.9792 33.8177 29.8996C33.5356 29.4415 33.0885 29.3214 32.6446 29.5768C31.9256 29.9903 31.2155 30.4207 30.5168 30.8677C30.0761 31.1497 29.9678 31.6058 30.2217 32.051C30.6406 32.7851 31.08 33.5075 31.541 34.2964Z"
                  fill="#162f6a"
                ></path>
                <path
                  d="M27.1948 25.5037C29.8447 25.5038 32.4476 25.5037 35.0504 25.504C35.2072 25.504 35.364 25.506 35.5207 25.5088C35.8422 25.5145 36.0785 25.6524 36.1143 25.9867C36.1531 26.3484 35.9276 26.5343 35.5967 26.5945C35.4285 26.6251 35.2537 26.6288 35.082 26.6288C26.317 26.6304 17.552 26.6308 8.78705 26.627C8.57105 26.6269 8.31652 26.6408 8.14951 26.5367C7.96899 26.4241 7.73347 26.1465 7.76927 26.0023C7.81757 25.8076 8.07987 25.6235 8.29218 25.5256C8.4611 25.4478 8.69276 25.504 8.89656 25.504C14.9803 25.5037 21.064 25.5037 27.1948 25.5037Z"
                  fill="#162f6a"
                ></path>
                <path
                  d="M30.3978 16.1863C32.0138 16.1864 33.5827 16.1852 35.1516 16.1885C35.3388 16.1889 35.5686 16.1515 35.7025 16.243C35.883 16.3662 36.119 16.6172 36.0946 16.7775C36.065 16.973 35.8132 17.1694 35.6125 17.2917C35.4851 17.3694 35.276 17.3163 35.1035 17.3163C27.8866 17.3168 20.6696 17.3168 13.4527 17.3163C13.2802 17.3163 13.0709 17.3694 12.9437 17.2916C12.7433 17.1689 12.492 16.9719 12.4627 16.7764C12.4386 16.6161 12.6706 16.3436 12.8553 16.2464C13.0443 16.1468 13.3137 16.1882 13.5479 16.1881C19.1488 16.1859 24.7498 16.1864 30.3978 16.1863Z"
                  fill="#162f6a"
                ></path>
                <path
                  d="M16.6548 34.7289C20.2792 34.729 23.8566 34.7285 27.4339 34.7303C27.6373 34.7304 27.8775 34.6845 28.0345 34.7749C28.2242 34.8841 28.4604 35.1158 28.4604 35.2945C28.4605 35.4729 28.2199 35.6905 28.0342 35.8159C27.9116 35.8987 27.6996 35.8576 27.5276 35.8576C21.2516 35.859 14.9755 35.8592 8.69945 35.8582C8.0201 35.8581 7.734 35.6869 7.73438 35.294C7.73475 34.9038 8.02563 34.7302 8.69991 34.7299C11.3358 34.7283 13.9718 34.729 16.6548 34.7289Z"
                  fill="#162f6a"
                ></path>
                <path
                  d="M26.6345 21.9278C23.3248 21.9278 20.0621 21.9279 16.7994 21.9275C16.6269 21.9275 16.4283 21.9759 16.2884 21.9072C16.108 21.8186 15.847 21.6302 15.8516 21.4924C15.8581 21.2978 16.0472 21.077 16.2145 20.9327C16.3087 20.8516 16.516 20.8938 16.6723 20.8938C22.8683 20.8924 29.0643 20.8926 35.2602 20.8929C35.37 20.8929 35.48 20.894 35.5895 20.9003C35.9201 20.9194 36.1298 21.0801 36.1222 21.4259C36.1146 21.7656 35.9221 21.9273 35.5755 21.9264C34.2423 21.9227 32.909 21.9272 31.5757 21.9277C29.9443 21.9283 28.313 21.9278 26.6345 21.9278Z"
                  fill="#162f6a"
                ></path>
                <path
                  d="M14.0189 30.1176C15.7917 30.1176 17.5175 30.1174 19.2433 30.1182C19.4001 30.1183 19.5943 30.0683 19.7054 30.1414C19.9033 30.2715 20.157 30.4622 20.1863 30.6576C20.2102 30.8178 19.9735 31.0681 19.7928 31.1909C19.6585 31.2822 19.4289 31.2449 19.2417 31.2451C15.7274 31.2474 12.2132 31.2475 8.69887 31.2462C8.01766 31.2459 7.73363 31.076 7.73438 30.6818C7.73511 30.2926 8.0269 30.1192 8.7004 30.1185C10.4575 30.1166 12.2147 30.1177 14.0189 30.1176Z"
                  fill="#162f6a"
                ></path>
                <path
                  d="M19.4803 6.48453C21.5477 6.48469 23.5682 6.48355 25.5886 6.48577C26.2227 6.48646 26.5076 6.65973 26.518 7.0366C26.5288 7.43074 26.235 7.61322 25.5682 7.61369C23.1405 7.61538 20.7129 7.61452 18.2852 7.61378C18.1601 7.61375 17.9959 7.65483 17.9175 7.59215C17.7307 7.44274 17.4919 7.26439 17.4433 7.05794C17.3696 6.74436 17.6034 6.51918 17.9302 6.50166C18.4301 6.47488 18.9321 6.48822 19.4803 6.48453Z"
                  fill="#162f6a"
                ></path>
                <path
                  d="M12.1391 20.8906C12.6712 20.8918 13.1563 20.8951 13.6414 20.8934C13.9968 20.8921 14.2073 21.0337 14.2028 21.4191C14.1987 21.7779 14.0038 21.9221 13.6675 21.922C11.8838 21.9215 10.1 21.9234 8.31623 21.9188C7.99683 21.9179 7.74162 21.7688 7.75021 21.4288C7.75871 21.0923 7.97431 20.8945 8.33677 20.8946C9.58854 20.8951 10.8403 20.8922 12.1391 20.8906Z"
                  fill="#162f6a"
                ></path>
                <path
                  d="M9.78376 40.6641C10.6761 40.6647 11.5214 40.6664 12.3667 40.6655C12.7267 40.6651 13.0617 40.7365 13.0529 41.1778C13.0445 41.5995 12.7268 41.6989 12.3603 41.6983C11.0454 41.6962 9.7304 41.6926 8.41552 41.7001C8.02418 41.7023 7.74572 41.5436 7.75005 41.1483C7.7544 40.7513 8.07745 40.6642 8.42179 40.6656C8.86009 40.6674 9.2984 40.6648 9.78376 40.6641Z"
                  fill="#162f6a"
                ></path>
                <path
                  d="M30.4642 1.5655C30.2364 1.61936 29.9744 1.68321 29.7123 1.68339C22.131 1.68872 14.5497 1.68835 6.96841 1.68452C6.73606 1.6844 6.50374 1.63762 6.23438 1.59915C6.41165 1.55703 6.62595 1.50341 6.84028 1.50329C14.517 1.49901 22.1937 1.4994 29.8704 1.50167C30.0569 1.50172 30.2435 1.53046 30.4642 1.5655Z"
                  fill="#162f6a"
                ></path>
                <path
                  d="M39.6247 12.1131C38.9246 11.4588 38.2273 10.7817 37.5402 10.0944C35.3561 7.90952 33.1758 5.7208 30.9766 3.50781C31.1381 3.54736 31.3661 3.56328 31.4889 3.6852C34.1379 6.31512 36.777 8.95513 39.409 11.6021C39.5266 11.7203 39.5597 11.9225 39.6247 12.1131Z"
                  fill="#162f6a"
                ></path>
              </svg>
              {/* Core Services */}
            </h2>
          </div>
        </div>
        <div className="row g-5">
          {/* National Training Column */}
          <div className="col-lg-6">
            <div className="training-container h-100">
              <div
                className="training-header text-center py-3 mb-4 rounded-1"
                style={{
                  backgroundColor: "#162f6a",
                  color: "#fff",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <h2 className="h3 mb-0 fw-semibold text-white">
                  Upcoming National Training
                </h2>
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
                      style={{
                        borderBottom: "1.5px solid #162f6a !important",
                        cursor: "pointer",
                      }}
                    >
                      <div className="d-flex flex-column gap-1">
                        <span className="fw-bold">
                          {item.id}. {item.title}
                        </span>
                        <span>
                          {item.location} ({item.dateRange})
                        </span>
                        <div
                          className="mt-2"
                          style={{
                            height: "1.5px",
                            width: "100%",
                            backgroundColor: "#162f6a",
                            opacity: 0.8,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View All Button */}
                {nationalTrainings.length > 5 && (
                  <div className="text-center mt-3">
                    <button
                      onClick={() => setShowAllNational(!showAllNational)}
                      className="btn  px-4 py-2"
                      style={{ borderColor: "#162f6a", color: "#162f6a" }}
                    >
                      {showAllNational ? (
                        <>
                          <i className="bi bi-chevron-up me-2"></i>
                          <h4>Show Less</h4>
                        </>
                      ) : (
                        <>
                          <i className="bi bi-chevron-down "></i>
                          <h4>View All ({nationalTrainings.length})</h4>
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
                style={{
                  backgroundColor: "#162f6a",
                  color: "#fff",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <h2 className="h3 mb-0 fw-semibold text-white">
                  Upcoming International Training
                </h2>
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
                          {item.type}{" "}
                          {item.location ? `(${item.location})` : ""} (
                          {item.dateRange})
                        </span>
                        <div
                          className="mt-2"
                          style={{
                            height: "1.5px",
                            width: "100%",
                            backgroundColor: "#162f6a",
                            opacity: 0.8,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View All Button */}
                {internationalTrainings.length > 5 && (
                  <div className="text-center mt-3">
                    <button
                      onClick={() =>
                        setShowAllInternational(!showAllInternational)
                      }
                      className="btn  px-4 py-2"
                      style={{ borderColor: "#162f6a", color: "#162f6a" }}
                    >
                      {showAllInternational ? (
                        <>
                          <i className="bi bi-chevron-up me-2"></i>
                          <h4>Show Less</h4>
                        </>
                      ) : (
                        <>
                          <i className="bi bi-chevron-down"></i>
                          <h4>View All ({internationalTrainings.length})</h4>
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
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(4px)",
          }}
          onClick={closeModal}
        >
          <div
            className="training-modal-content bg-white p-0 rounded-3 shadow-lg overflow-hidden position-relative"
            style={{
              maxWidth: "600px",
              width: "90%",
              animation: "modalOpen 0.3s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className="px-4 py-3 d-flex justify-content-between align-items-center"
              style={{ backgroundColor: "#162f6a", color: "#fff" }}
            >
              <h3 className=" mb-0 ">Training Details</h3>
              <button
                onClick={closeModal}
                className="btn-close btn-close-white"
                aria-label="Close"
              ></button>
            </div>

            {/* Modal Body */}
            <div className="p-4">
              <div className="mb-4">
                <span
                  className="badge  mb-3"
                  style={{ backgroundColor: "#e7f1ff", color: "#162f6a" }}
                >
                  <i className="bi bi-calendar-event"></i>
                  <h5>{selectedItem.dateRange}</h5>
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
                <h4
                  className=" fw-bold text-uppercase text-muted mb-2 ls-1"
                  // style={{ fontSize: "0.8rem" }}
                >
                  Description
                </h4>
                <p className="text-dark mb-4" style={{ lineHeight: "1.7" }}>
                  {selectedItem.description ||
                    "Detailed description for this training programme will be available shortly. Please check back for updates regarding curriculum and faculty."}
                </p>

                <h4
                  className="  fw-bold text-uppercase text-muted mb-2 ls-1"
                  // style={{ fontSize: "0.8rem" }}
                >
                  Reference Links
                </h4>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-link-45deg  text-primary"></i>
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
                <button
                  onClick={closeModal}
                  className="btn text-white px-5 py-2"
                  style={{ backgroundColor: "#162f6a" }}
                >
                  <h4>Close</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .ls-1 {
          letter-spacing: 1px;
        }
        .training-hover-item {
          transition:
            transform 0.2s ease,
            background-color 0.2s ease;
        }
        .training-hover-item:hover {
          background-color: #f8faff !important;
          transform: translateX(5px);
        }
        .list-group-item {
          background: transparent;
        }
        @keyframes modalOpen {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default LatestNews;
