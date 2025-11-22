// import React from "react";
// import Link from "next/link";
// import "../../styles/SCSS.scss";
// import "../../styles/CSS.css";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer>
      <div className="footerbox row" role="contentinfo" aria-label="footer">
        {/* Useful Links */}
        <div className="usefullink col-6">
          <h4 role="heading">Useful Links</h4>
          <ul className="starlist">
            <li>
              <i className="bi bi-chevron-right"></i> Archives
            </li>
            <li>
              <i className="bi bi-chevron-right"></i> Site Map
            </li>
            <li>
              <i className="bi bi-chevron-right"></i> Help
            </li>
            <li>
              <i className="bi bi-chevron-right"></i> Website Policies
            </li>
            <li>
              <i className="bi bi-chevron-right"></i> Related Links
            </li>
          </ul>
        </div>

        {/* Subscribe / Last Updated */}
        <div className="col-6 text-end">
          <h4>SUBSCRIBE FOR UPDATES</h4>
          <h4>Last Updated On: 2024.04.09</h4>
          <ul className="sociallink list-unstyled d-flex justify-content-end gap-3">
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-x fs-4"></i>
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-youtube fs-4"></i>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
            </li>
          </ul>
        </div>

        <p className="footer-below-text">
          All rights reserved to Ministry of Skill Development and
          Entrepreneurship, Government of India
        </p>
      </div>
    </footer>
  );
}
