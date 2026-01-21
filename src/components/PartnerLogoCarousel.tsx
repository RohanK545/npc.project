import React, { useState } from 'react';

const PartnerLogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const logos = [
    { src: "https://www.meity.gov.in/static/uploads/2024/02/8b06743a65b0f1b2e4fc1e108a766f03.png", alt: "" },
    { src: "https://www.meity.gov.in/static/uploads/2024/10/df37a3b3f15435f182e453c420193a4a.svg", alt: "" },
    { src: "https://www.meity.gov.in/static/uploads/2024/02/78df5b77a8fdc505f07b983aae226825.png", alt: "MeitY-ANRF" },
    { src: "https://www.meity.gov.in/static/uploads/2024/02/80f9026164449043d2959a0e456991c0.png", alt: "CVC Integrity Pledge" },
    { src: "https://www.meity.gov.in/static/uploads/2024/02/f4b8c98d4482d1b98ab577c7a19ceb84.png", alt: "IYC Logo" },
    { src: "https://www.meity.gov.in/static/uploads/2024/02/49e6a2f25acc32a4897ab9120e91650e.png", alt: "" },
    { src: "https://www.meity.gov.in/static/uploads/2024/02/0f7305aece1ddf7e4f83dc74f79b942e.png", alt: "" },
    { src: "https://www.meity.gov.in/static/uploads/2024/02/6bf78ff5123eb08272e587f06bc3cd69.png", alt: "" },
    { src: "https://www.meity.gov.in/static/uploads/2024/02/4d38a7c059c026874483cd5cfcbac633.png", alt: "" },
    { src: "https://www.meity.gov.in/static/uploads/2024/02/7c54c94540ce37a1e3e8120b52f72060.png", alt: "" },
    { src: "https://www.meity.gov.in/static/uploads/2024/02/70f274094ea7029132d4361afee97f87.png", alt: "SHe-Box" },
    { src: "https://www.meity.gov.in/static/uploads/2024/02/4fc564cabf33578830242d185d1533ec.png", alt: "STQC Logo" }
  ];

  const cardsToShow = 5;
  const maxIndex = logos.length - cardsToShow;

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(prev => prev === 0 ? maxIndex : prev - 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(prev => prev === maxIndex ? 0 : prev + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="row pt-5 justify-content-center align-items-center"
      style={{ marginLeft: '14%', marginRight: '14%' }}
      role="region"
      aria-label="Footer partner logo carousel">
      <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 mx-auto">
        <div className="position-relative d-flex align-items-center" style={{ gap: '20px' }}>
          {/* Previous Button */}
          <button
            className="position-absolute start-0 top-50 translate-middle-y border-0 bg-transparent"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            style={{
              zIndex: 10,
              cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
              fontSize: '36px',
              color: currentIndex === 0 ? '#ccc' : '#333',
              left: '-40px',
              opacity: currentIndex === 0 ? 0.5 : 1
            }}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 64 64"
              fill="none"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <path
                d="M28.8001 32L39.2001 42.4C39.689 42.8889 39.9335 43.5111 39.9335 44.2666C39.9335 45.0222 39.689 45.6444 39.2001 46.1333C38.7112 46.6222 38.089 46.8666 37.3335 46.8666C36.5779 46.8666 35.9557 46.6222 35.4668 46.1333L23.2001 33.8666C22.9335 33.6 22.7446 33.3111 22.6335 33C22.5224 32.6889 22.4668 32.3555 22.4668 32C22.4668 31.6444 22.5224 31.3111 22.6335 31C22.7446 30.6889 22.9335 30.4 23.2001 30.1333L35.4668 17.8666C35.9557 17.3777 36.5779 17.1333 37.3335 17.1333C38.089 17.1333 38.7112 17.3777 39.2001 17.8666C39.689 18.3555 39.9335 18.9777 39.9335 19.7333C39.9335 20.4889 39.689 21.1111 39.2001 21.6L28.8001 32Z"
                fill={currentIndex === 0 ? '#ccc' : '#162F6A'}
              />
            </svg>
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
            <div
              className="d-flex"
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / cardsToShow)}% - ${currentIndex * 24}px))`,
                transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none',
                gap: '24px'
              }}
            >
              {logos.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0"
                  style={{
                    width: 'calc(20% - 19.2px)',
                    marginBottom: '40px'
                  }}
                >
                  <div
                    className="card d-flex justify-content-center align-items-center"
                    style={{
                      backgroundColor: '#fff',
                      border: '1px solid #e0e0e0',
                      borderRadius: '8px',
                      height: '120px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
                      padding: '10px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.08)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="img-fluid"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '70px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            aria-label="Next slide"
            className="position-absolute end-0 top-50 translate-middle-y border-0 bg-transparent"
            style={{
              zIndex: 10,
              cursor: currentIndex === maxIndex ? 'not-allowed' : 'pointer',
              right: "-40px",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: currentIndex === maxIndex ? 0.5 : 1
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                d="M33.6001 32L23.2001 21.6C22.7112 21.1111 22.4668 20.4889 22.4668 19.7333C22.4668 18.9777 22.7112 18.3555 23.2001 17.8666C23.689 17.3777 24.3112 17.1333 25.0668 17.1333C25.8224 17.1333 26.4446 17.3777 26.9335 17.8666L39.2001 30.1333C39.4668 30.4 39.6557 30.6889 39.7668 31C39.8779 31.3111 39.9335 31.6444 39.9335 32C39.9335 32.3555 39.8779 32.6889 39.7668 33C39.6557 33.3111 39.4668 33.6 39.2001 33.8666L26.9335 46.1333C26.4446 46.6222 25.8224 46.8666 25.0668 46.8666C24.3112 46.8666 23.689 46.6222 23.2001 46.1333C22.7112 45.6444 22.4668 45.0222 22.4668 44.2666C22.4668 43.5111 22.7112 42.8889 23.2001 42.4L33.6001 32Z"
                fill={currentIndex === maxIndex ? '#ccc' : '#29136C'}
              />
            </svg>
          </button>

        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
      `}</style>
    </div>
  );
};

export default PartnerLogoCarousel;