// import React from "react";
// import Link from "next/link";
// import "../../styles/SCSS.scss";
// import "../../styles/CSS.css";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    // <footer>
    //   <div className="footerbox row" role="contentinfo" aria-label="footer">
    //     {/* Useful Links */}
    //     <div className="usefullink col-6">
    //       <h4 role="heading">Useful Links</h4>
    //       <ul className="starlist">
    //         <li>
    //           <i className="bi bi-chevron-right"></i> Archives
    //         </li>
    //         <li>
    //           <i className="bi bi-chevron-right"></i> Site Map
    //         </li>
    //         <li>
    //           <i className="bi bi-chevron-right"></i> Help
    //         </li>
    //         <li>
    //           <i className="bi bi-chevron-right"></i> Website Policies
    //         </li>
    //         <li>
    //           <i className="bi bi-chevron-right"></i> Related Links
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Subscribe / Last Updated */}
    //     <div className="col-6 text-end">
    //       <h4>SUBSCRIBE FOR UPDATES</h4>
    //       <h4>Last Updated On: 2024.04.09</h4>
    //       <ul className="sociallink list-unstyled d-flex justify-content-end gap-3">
    //         <li>
    //           <a
    //             href="https://twitter.com"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <i className="bi bi-x fs-4"></i>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="https://youtube.com"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <i className="bi bi-youtube fs-4"></i>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="https://facebook.com"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <i className="bi bi-facebook fs-4"></i>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="https://instagram.com"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <i className="bi bi-instagram fs-4"></i>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>

    //     <p className="footer-below-text">
    //       All rights reserved to Ministry of Skill Development and
    //       Entrepreneurship, Government of India
    //     </p>
    //   </div>
    // </footer>
    <footer>
      <div role="contentinfo" aria-label="footer">
        <div className="footerbox ps-5 pe-5">
          <div className="row ps-5 pe-5">
            <div className="usefullink col-md-8">
              <div>
                <h4 role="heading">Useful Links</h4>

                <ul className="starlist mt-4">
                  <li>
                    <span className="material-symbols-outlined me-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="17 17 28 28"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.6001 32L23.2001 21.6C22.7112 21.1111 22.4668 20.4889 22.4668 19.7333C22.4668 18.9777 22.7112 18.3555 23.2001 17.8666C23.689 17.3777 24.3112 17.1333 25.0668 17.1333C25.8224 17.1333 26.4446 17.3777 26.9335 17.8666L39.2001 30.1333C39.4668 30.4 39.6557 30.6889 39.7668 31C39.8779 31.3111 39.9335 31.6444 39.9335 32C39.9335 32.3555 39.8779 32.6889 39.7668 33C39.6557 33.3111 39.4668 33.6 39.2001 33.8666L26.9335 46.1333C26.4446 46.6222 25.8224 46.8666 25.0668 46.8666C24.3112 46.8666 23.689 46.6222 23.2001 46.1333C22.7112 45.6444 22.4668 45.0222 22.4668 44.2666C22.4668 43.5111 22.7112 42.8889 23.2001 42.4L33.6001 32Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    Archives
                  </li>
                  <li>
                    <span className="material-symbols-outlined me-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="17 17 28 28"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.6001 32L23.2001 21.6C22.7112 21.1111 22.4668 20.4889 22.4668 19.7333C22.4668 18.9777 22.7112 18.3555 23.2001 17.8666C23.689 17.3777 24.3112 17.1333 25.0668 17.1333C25.8224 17.1333 26.4446 17.3777 26.9335 17.8666L39.2001 30.1333C39.4668 30.4 39.6557 30.6889 39.7668 31C39.8779 31.3111 39.9335 31.6444 39.9335 32C39.9335 32.3555 39.8779 32.6889 39.7668 33C39.6557 33.3111 39.4668 33.6 39.2001 33.8666L26.9335 46.1333C26.4446 46.6222 25.8224 46.8666 25.0668 46.8666C24.3112 46.8666 23.689 46.6222 23.2001 46.1333C22.7112 45.6444 22.4668 45.0222 22.4668 44.2666C22.4668 43.5111 22.7112 42.8889 23.2001 42.4L33.6001 32Z"
                          fill="white"
                        />
                      </svg>
                    </span>{" "}
                    Website Policies
                  </li>
                  <li>
                    <span className="material-symbols-outlined me-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="17 17 28 28"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.6001 32L23.2001 21.6C22.7112 21.1111 22.4668 20.4889 22.4668 19.7333C22.4668 18.9777 22.7112 18.3555 23.2001 17.8666C23.689 17.3777 24.3112 17.1333 25.0668 17.1333C25.8224 17.1333 26.4446 17.3777 26.9335 17.8666L39.2001 30.1333C39.4668 30.4 39.6557 30.6889 39.7668 31C39.8779 31.3111 39.9335 31.6444 39.9335 32C39.9335 32.3555 39.8779 32.6889 39.7668 33C39.6557 33.3111 39.4668 33.6 39.2001 33.8666L26.9335 46.1333C26.4446 46.6222 25.8224 46.8666 25.0668 46.8666C24.3112 46.8666 23.689 46.6222 23.2001 46.1333C22.7112 45.6444 22.4668 45.0222 22.4668 44.2666C22.4668 43.5111 22.7112 42.8889 23.2001 42.4L33.6001 32Z"
                          fill="white"
                        />
                      </svg>
                    </span>{" "}
                    Related Links
                  </li>
                  <li>
                    <span className="material-symbols-outlined me-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="17 17 28 28"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.6001 32L23.2001 21.6C22.7112 21.1111 22.4668 20.4889 22.4668 19.7333C22.4668 18.9777 22.7112 18.3555 23.2001 17.8666C23.689 17.3777 24.3112 17.1333 25.0668 17.1333C25.8224 17.1333 26.4446 17.3777 26.9335 17.8666L39.2001 30.1333C39.4668 30.4 39.6557 30.6889 39.7668 31C39.8779 31.3111 39.9335 31.6444 39.9335 32C39.9335 32.3555 39.8779 32.6889 39.7668 33C39.6557 33.3111 39.4668 33.6 39.2001 33.8666L26.9335 46.1333C26.4446 46.6222 25.8224 46.8666 25.0668 46.8666C24.3112 46.8666 23.689 46.6222 23.2001 46.1333C22.7112 45.6444 22.4668 45.0222 22.4668 44.2666C22.4668 43.5111 22.7112 42.8889 23.2001 42.4L33.6001 32Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    Site Map
                  </li>

                  <li>
                    <span className="material-symbols-outlined me-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="17 17 28 28"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.6001 32L23.2001 21.6C22.7112 21.1111 22.4668 20.4889 22.4668 19.7333C22.4668 18.9777 22.7112 18.3555 23.2001 17.8666C23.689 17.3777 24.3112 17.1333 25.0668 17.1333C25.8224 17.1333 26.4446 17.3777 26.9335 17.8666L39.2001 30.1333C39.4668 30.4 39.6557 30.6889 39.7668 31C39.8779 31.3111 39.9335 31.6444 39.9335 32C39.9335 32.3555 39.8779 32.6889 39.7668 33C39.6557 33.3111 39.4668 33.6 39.2001 33.8666L26.9335 46.1333C26.4446 46.6222 25.8224 46.8666 25.0668 46.8666C24.3112 46.8666 23.689 46.6222 23.2001 46.1333C22.7112 45.6444 22.4668 45.0222 22.4668 44.2666C22.4668 43.5111 22.7112 42.8889 23.2001 42.4L33.6001 32Z"
                          fill="white"
                        />
                      </svg>
                    </span>{" "}
                    Help
                  </li>

                  <li>
                    <span className="material-symbols-outlined me-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="17 17 28 28"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.6001 32L23.2001 21.6C22.7112 21.1111 22.4668 20.4889 22.4668 19.7333C22.4668 18.9777 22.7112 18.3555 23.2001 17.8666C23.689 17.3777 24.3112 17.1333 25.0668 17.1333C25.8224 17.1333 26.4446 17.3777 26.9335 17.8666L39.2001 30.1333C39.4668 30.4 39.6557 30.6889 39.7668 31C39.8779 31.3111 39.9335 31.6444 39.9335 32C39.9335 32.3555 39.8779 32.6889 39.7668 33C39.6557 33.3111 39.4668 33.6 39.2001 33.8666L26.9335 46.1333C26.4446 46.6222 25.8224 46.8666 25.0668 46.8666C24.3112 46.8666 23.689 46.6222 23.2001 46.1333C22.7112 45.6444 22.4668 45.0222 22.4668 44.2666C22.4668 43.5111 22.7112 42.8889 23.2001 42.4L33.6001 32Z"
                          fill="white"
                        />
                      </svg>
                    </span>{" "}
                    Contact Us
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <div>
                <div>
                  <div>
                    <h4 role="heading">SUBSCRIBE FOR UPDATES</h4>
                  </div>

                  <ul className="sociallink d-flex justify-content-end mt-4">
                    <li>
                      <a
                        className="border-0"
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/images/icons/twitter-icon.png"
                          alt="Twitter"
                        />
                      </a>
                    </li>

                    <a
                      className="border-0"
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/images/icons/youtube-icon.png" alt="YouTube" />
                    </a>

                    <li>
                      <a
                        className="border-0"
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/images/icons/facebook-icon.png"
                          alt="Facebook"
                        />
                      </a>
                    </li>

                    <li>
                      <a
                        className="border-0"
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/images/icons/instagram-icon.png"
                          alt="Instagram"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 role="heading" className=" footer-below-text mt-4">
                  Last Updated On: 23.11.2025{" "}
                </h4>
              </div>
            </div>
          </div>
          <p role="contentinfo" className="footer-below-text mt-4">
            All rights reserved to Ministry of Skill Development and
            Entrepreneurship, Government of India
          </p>
        </div>
      </div>
    </footer>
  );
}
