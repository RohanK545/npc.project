import Image from "next/image";

export default function Footer() {
  const linksColumn1 = [
    { href: "/keyLinks/archive", text: "Archives" },
    { href: "/keyLinks/website-policies", text: "Website Policies" },
    { href: "/keyLinks/sitemap", text: "Site Map" },
    { href: "/keyLinks", text: "Contact Us" }
  ];

  const linksColumn2 = [
    { href: "/keyLinks/feedback", text: "Feedback & Grievance Redressal" },
    { href: "/keyLinks/external-links", text: "External Links" },
    { href: "/admin", text: "Admin Panel" }
  ];

  const ArrowIcon = () => (
    <svg width="8" height="8" viewBox="17 17 28 28" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.6001 32L23.2001 21.6C22.7112 21.1111 22.4668 20.4889 22.4668 19.7333C22.4668 18.9777 22.7112 18.3555 23.2001 17.8666C23.689 17.3777 24.3112 17.1333 25.0668 17.1333C25.8224 17.1333 26.4446 17.3777 26.9335 17.8666L39.2001 30.1333C39.4668 30.4 39.6557 30.6889 39.7668 31C39.8779 31.3111 39.9335 31.6444 39.9335 32C39.9335 32.3555 39.8779 32.6889 39.7668 33C39.6557 33.3111 39.4668 33.6 39.2001 33.8666L26.9335 46.1333C26.4446 46.6222 25.8224 46.8666 25.0668 46.8666C24.3112 46.8666 23.689 46.6222 23.2001 46.1333C22.7112 45.6444 22.4668 45.0222 22.4668 44.2666C22.4668 43.5111 22.7112 42.8889 23.2001 42.4L33.6001 32Z" fill="white"/>
    </svg>
  );

  return (
    <footer>
      <div role="contentinfo" aria-label="footer">
        <div className="footerbox ps-5 pe-5">
          {/* Desktop Layout */}
          <div className="row ps-5 pe-5 d-none d-md-flex">
            <div className="usefullink col-md-8">
              <h4 role="heading">Useful Links</h4>
              <ul className="starlist mt-4">
                {[...linksColumn1, ...linksColumn2].map((link, i) => (
                  <li key={i}>
                    <span className="material-symbols-outlined me-2"><ArrowIcon /></span>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <h4 role="heading">SUBSCRIBE FOR UPDATES</h4>
              <ul className="sociallink d-flex justify-content-end mt-4">
                <li><a className="border-0" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/icons/twitter-icon.png" alt="Twitter" width={24} height={24} />
                </a></li>
                <a className="border-0" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/icons/youtube-icon.png" alt="YouTube" width={24} height={24} />
                </a>
                <li><a className="border-0" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/icons/facebook-icon.png" alt="Facebook" width={24} height={24} />
                </a></li>
                <li><a className="border-0" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/icons/instagram-icon.png" alt="Instagram" width={24} height={24} />
                </a></li>
              </ul>
              <h4 role="heading" className="footer-below-text mt-4">Last Updated On: 23.11.2025</h4>
            </div>
          </div>

          {/* Mobile Layout - Two Column Design */}
          <div className="d-md-none" style={{padding: '25px 20px'}}>
            {/* Useful Links Section */}
            <div className="mb-4">
              <h4 role="heading" style={{fontSize: '1.80rem', fontWeight: '700', marginBottom: '20px', letterSpacing: '0.5px'}}>
                Useful Links
              </h4>
              <div className="row g-0">
                {/* Column 1 */}
                <div className="col-6 pe-3">
                  {linksColumn1.map((link, i) => (
                    <div key={i} style={{marginBottom: '14px'}}>
                      <a href={link.href} className="d-flex align-items-start text-decoration-none" style={{fontSize: '1.60rem', lineHeight: '1.5', color: 'white'}}>
                        <span className="me-2" style={{marginTop: '4px', flexShrink: 0}}><ArrowIcon /></span>
                        <span className="mt-2">{link.text}</span>
                      </a>
                    </div>
                  ))}
                </div>
                {/* Column 2 */}
                <div className="col-6 ps-3">
                  {linksColumn2.map((link, i) => (
                    <div key={i} style={{marginBottom: '14px'}}>
                      <a href={link.href} className="d-flex align-items-start text-decoration-none" style={{fontSize: '1.60rem', lineHeight: '1.5', color: 'white'}}>
                        <span className="me-2" style={{marginTop: '4px', flexShrink: 0}}><ArrowIcon /></span>
                        <span className="mt-2">{link.text}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright Text */}
            <div className="mb-3" style={{borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '18px'}}>
              <p style={{fontSize: '1.50rem', lineHeight: '1.6', margin: 0, opacity: '0.95'}}>
                All rights reserved to Ministry of Skill Development and Entrepreneurship, Government of India
              </p>
            </div>

            {/* Last Updated */}
            <div className="mb-4">
              <p style={{fontSize: '1.50rem', margin: 0, opacity: '0.9'}}>
                Last Updated On: 23.11.2025
              </p>
            </div>

            {/* Social Media Section */}
            <div className="mb-3">
              <h4 role="heading" style={{fontSize: '1.75rem', fontWeight: '700', marginBottom: '15px', letterSpacing: '0.5px'}}>
                Follow Us
              </h4>
              <div className="d-flex gap-3 align-items-center flex-wrap">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Image src="/images/icons/twitter-icon.png" alt="Twitter" width={22} height={22} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Image src="/images/icons/facebook-icon.png" alt="Facebook" width={22} height={22} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Image src="/images/icons/youtube-icon.png" alt="YouTube" width={22} height={22} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Image src="/images/icons/instagram-icon.png" alt="Instagram" width={22} height={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}