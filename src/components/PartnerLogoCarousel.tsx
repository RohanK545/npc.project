import React, { useState } from 'react';

const PartnerLogoCarousel = () => {
  const [translateX, setTranslateX] = useState(0);
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

  // Create triple logos array for infinite scroll effect
  const tripleLogos = [...logos, ...logos, ...logos];
  const itemWidth = 20; // percentage width of each item (5 items visible)

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTranslateX((prev) => prev + itemWidth);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTranslateX((prev) => prev - itemWidth);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Reset position when reaching boundaries for infinite effect
  React.useEffect(() => {
    if (translateX >= 0) {
      setTimeout(() => {
        setTranslateX(-logos.length * itemWidth);
      }, 500);
    } else if (translateX <= -(logos.length * 2 * itemWidth)) {
      setTimeout(() => {
        setTranslateX(-logos.length * itemWidth);
      }, 500);
    }
  }, [translateX]);

  return (
    <div className="row pt-5 justify-content-center align-items-center" 
        style={{ marginLeft: '14%', marginRight: '14%' }}
         role="region" 
         aria-label="Footer partner logo carousel">
      <div className="col-12 col-sm-11 col-md-10 col-lg-8 col-xl-7 mx-auto">
        <div className="position-relative">
          {/* Previous Button */}
          <button
            className="position-absolute start-0 top-50 translate-middle-y border-0 bg-transparent"
            onClick={handlePrev}
            style={{ 
              zIndex: 10, 
              cursor: 'pointer',
              fontSize: '36px',
              color: '#333',
              left: '-40px',
            }}
            aria-label="Previous slide"
          >
            <span style={{ fontFamily: 'Material Symbols Outlined' }}>‹</span>
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden" style={{ paddingLeft: '60px', paddingRight: '60px' }}>
            <div 
              className="d-flex"
              style={{
                transform: `translateX(calc(${translateX}% - ${translateX * 0.8}px))`,
                transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none',
                gap: '24px'
              }}
            >
              {tripleLogos.map((logo, idx) => (
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
                      padding: '30px'
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
            className="position-absolute end-0 top-50 translate-middle-y border-0 bg-transparent"
            onClick={handleNext}
            style={{ 
              zIndex: 10, 
              cursor: 'pointer',
              fontSize: '36px',
              color: '#333',
              right: '-40px'
            }}
            aria-label="Next slide"
          >
            <span style={{ fontFamily: 'Material Symbols Outlined' }}>›</span>
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