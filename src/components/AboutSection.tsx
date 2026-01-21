import React from "react";

export default function AboutSection() {
  return (
    <div className="container-fluid px-120 py-80 layoutshift-about">
      <div className="row g-5 me-0 ms-0 about-section-layout-3">
        <h2 className="about-section-heading col-12">
          <a className="d-flex align-items-center" href="/ministry">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="me-2 headingclr"
            >
              <path
                d="M27.52 32.1094H20.4745C19.334 32.1094 18.4062 33.0373 18.4062 34.1777V39.8141C18.4062 40.9546 19.3341 41.8824 20.4745 41.8824H27.52C28.6605 41.8824 29.5883 40.9545 29.5883 39.8141V34.1777C29.5883 33.0373 28.6604 32.1094 27.52 32.1094ZM28.2699 39.8142C28.2699 40.2277 27.9335 40.5641 27.52 40.5641H20.4745C20.061 40.5641 19.7246 40.2276 19.7246 39.8142V34.1777C19.7246 33.7642 20.0611 33.4278 20.4745 33.4278H27.52C27.9336 33.4278 28.2699 33.7643 28.2699 34.1777V39.8142Z"
                fill="#13406C"
              />
              <path
                d="M39.4993 23.6562H29.6358C29.2717 23.6562 28.9766 23.9514 28.9766 24.3154C28.9766 24.6795 29.2717 24.9746 29.6358 24.9746H39.4993C39.9128 24.9746 40.2492 25.3111 40.2492 25.7245V29.9519C40.2492 30.3159 40.5443 30.6111 40.9083 30.6111C41.2724 30.6111 41.5675 30.3159 41.5675 29.9519V25.7245C41.5675 24.584 40.6397 23.6562 39.4993 23.6562Z"
                fill="#13406C"
              />
              <path
                d="M29.5892 12.3411C29.5892 9.25817 27.0811 6.75 23.9982 6.75C20.9153 6.75 18.4071 9.25817 18.4071 12.3411C18.4071 15.2009 20.5658 17.5646 23.339 17.892V23.6593H8.49796C7.35748 23.6593 6.42969 24.5872 6.42969 25.7276V29.9549C6.42969 30.319 6.72483 30.6141 7.08888 30.6141C7.45293 30.6141 7.74807 30.319 7.74807 29.9549V25.7276C7.74807 25.314 8.08452 24.9777 8.49796 24.9777H23.339V29.9549C23.339 30.319 23.6341 30.6141 23.9982 30.6141C24.3622 30.6141 24.6574 30.319 24.6574 29.9549V24.9777H26.8163C27.1804 24.9777 27.4755 24.6825 27.4755 24.3185C27.4755 23.9544 27.1804 23.6593 26.8163 23.6593H24.6574V17.892C27.4305 17.5646 29.5892 15.2009 29.5892 12.3411ZM23.9982 16.6138C21.6422 16.6138 19.7255 14.697 19.7255 12.3411C19.7255 9.98513 21.6422 8.06838 23.9982 8.06838C26.3541 8.06838 28.2709 9.98513 28.2709 12.3411C28.2709 14.6971 26.3541 16.6138 23.9982 16.6138Z"
                fill="#13406C"
              />
              <path
                d="M44.4341 32.1094H37.3886C36.2481 32.1094 35.3203 33.0373 35.3203 34.1777V39.8141C35.3203 40.9546 36.2482 41.8824 37.3886 41.8824H44.4341C45.5746 41.8824 46.5024 40.9545 46.5024 39.8141V34.1777C46.5024 33.0373 45.5745 32.1094 44.4341 32.1094ZM45.184 39.8142C45.184 40.2277 44.8475 40.5641 44.4341 40.5641H37.3886C36.9751 40.5641 36.6387 40.2276 36.6387 39.8142V34.1777C36.6387 33.7642 36.9751 33.4278 37.3886 33.4278H44.4341C44.8476 33.4278 45.184 33.7643 45.184 34.1777V39.8142Z"
                fill="#13406C"
              />
              <path
                d="M10.6138 32.1094H3.56828C2.42788 32.1094 1.5 33.0373 1.5 34.1777V39.8142C1.5 40.9547 2.42788 41.8824 3.56828 41.8824H4.27282C4.63687 41.8824 4.93201 41.5873 4.93201 41.2233C4.93201 40.8592 4.63687 40.5641 4.27282 40.5641H3.56828C3.15474 40.5641 2.81838 40.2276 2.81838 39.8142V34.1777C2.81838 33.7642 3.15483 33.4278 3.56828 33.4278H10.6138C11.0273 33.4278 11.3637 33.7643 11.3637 34.1777V39.8142C11.3637 40.2277 11.0272 40.5641 10.6138 40.5641H7.09099C6.72694 40.5641 6.4318 40.8592 6.4318 41.2233C6.4318 41.5873 6.72694 41.8824 7.09099 41.8824H10.6138C11.7543 41.8824 12.6821 40.9546 12.6821 39.8142V34.1777C12.6822 33.0373 11.7543 32.1094 10.6138 32.1094Z"
                fill="#13406C"
              />
            </svg>
            About Us
          </a>
        </h2>

        {/* LEFT CONTENT */}
        <div className="col-xl-8 col-lg-12 col-md-12 mb-auto aboutHeadingSpacing">
          <div className="d-flex flex-column justify-content-between about-section-left">
            <div className="container px-3 px-md-0">
              {" "}
              {/* Add this container */}
              <div className=" text-justify">
                National Productivity Council of India (NPC), established in the
                year 1958, is an autonomous organization under Department for
                Promotion of Industry & Internal Trade, Ministry of Commerce and
                Industry, Government of India. Besides undertaking research in
                the area of productivity, NPC has been providing consultancy and
                training services in areas of Industrial Engineering,
                Agri-Business, Economic Services, Quality Management, Human
                Resources Management, Information Technology, Technology
                Management, Energy Management, Environmental Management etc., to
                the Government and Public & Private sector organizations. NPC is
                a constituent of the Tokyo-based Asian Productivity Organisation
                (APO), an Inter-Governmental Body of which the Government of
                India is a founding member.
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="col-xl-4 col-lg-12 col-md-12 mb-auto our-team-section-right">
          <div className="d-flex justify-content-center flex-wrap flex-lg-nowrap about-section-right gap-4">
            {/* MINISTER 1 */}
            <div className="card d-flex align-items-center border-0 bg-transparent justify-content-center h-100 about-section-right flex-grow-1">
              <span
                className="lazy-load-image-background blur lazy-load-image-loaded"
                style={{ color: "transparent", display: "inline-block" }}
              >
                <img
                  src="https://www.meity.gov.in/static/uploads/2024/02/c2d2716758c356c9137b4db8ffa9ac50.png"
                  alt="Shri Ashwini Vaishnaw"
                  className="card-img-top img-fluid about-section-img"
                  width={300}
                  height={300}
                />
              </span>
              <div className="card-body h-100 p-0">
                <p className="h3 minister-name text-center my-3">
                  Shri Ashwini Vaishnaw
                </p>
                <p className="minister-desg text-center mb-0">
                  HONBLE MINISTER
                </p>
              </div>
            </div>

            {/* MINISTER 2 */}
            <div className="card d-flex align-items-center border-0 bg-transparent justify-content-center h-100 about-section-right flex-grow-1">
              <span
                className="lazy-load-image-background blur lazy-load-image-loaded"
                style={{ color: "transparent", display: "inline-block" }}
              >
                <img
                  src="https://www.meity.gov.in/static/uploads/2024/06/a0c681e6f425566b66d4fecfe80f9380.png"
                  alt="Shri Jitin Prasada"
                  className="card-img-top img-fluid about-section-img"
                  width={300}
                  height={300}
                />
              </span>
              <div className="card-body h-100 p-0">
                <p className="h3 minister-name text-center my-3">
                  Shri Jitin Prasada
                </p>
                <p className="minister-desg text-center mb-0">
                  HONBLE MINISTER OF STATE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
