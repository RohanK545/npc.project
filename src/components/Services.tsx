import React, { useState, useEffect } from "react";

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isNestHubMax, setIsNestHubMax] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLargeDesktop, setIsLargeDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Mobile
      setIsMobile(width < 640);

      // Tablet (640px to 1023px)
      setIsTablet(width >= 640 && width < 1024);

      // Nest Hub Max detection (1280x800 resolution - specific handling)
      // We check for both width and aspect ratio
      const isNestHubMaxWidth = width >= 1024 && width < 1280;
      const aspectRatio = width / height;
      // Nest Hub Max has 1280x800 resolution (1.6 aspect ratio)
      setIsNestHubMax(isNestHubMaxWidth && aspectRatio > 1.5 && aspectRatio < 1.7);

      // Desktop (1024px to 1439px, but not Nest Hub Max)
      setIsDesktop(width >= 1024 && width < 1440 && !(isNestHubMaxWidth && aspectRatio > 1.5 && aspectRatio < 1.7));

      // Large Desktop (1440px and above)
      setIsLargeDesktop(width >= 1440);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cards = [
    {
      title: "Consultancy",
      gradient: "linear-gradient(135deg, #4a5fc1 0%, #3b4a9e 100%)",
      link: "services"
    },
    {
      title: "Productivity Promotion",
      gradient: "linear-gradient(135deg, #d8136d 0%, #a01050 100%)",
      link: "services/productivity-promottion"
    },
    {
      title: "Training",
      gradient: "linear-gradient(135deg, #7b2c9a 0%, #5a1d75 100%)",
      link: "services/training"
    },
    {
      title: "International Services",
      gradient: "linear-gradient(135deg, #e67e22 0%, #d35400 100%)",
      link: "services/international-services"
    }
  ];

  // Enhanced responsive dimensions with specific Nest Hub Max handling
  const getCardDimensions = () => {
    if (isMobile) return {
      minWidth: "280px",
      maxWidth: "100%",
      flexBasis: "100%",
      cardsPerRow: 1
    };

    if (isTablet) return {
      minWidth: "280px",
      maxWidth: "calc(50% - 15px)",
      flexBasis: "calc(50% - 15px)",
      cardsPerRow: 2
    };

    // Specific handling for Nest Hub Max - Always show 2 cards per row
    if (isNestHubMax) return {
      minWidth: "280px",
      maxWidth: "calc(50% - 20px)",
      flexBasis: "calc(50% - 20px)",
      cardsPerRow: 2
    };

    if (isDesktop) return {
      minWidth: "300px",
      maxWidth: "calc(50% - 25px)",
      flexBasis: "calc(50% - 25px)",
      cardsPerRow: 2
    };

    // Large desktop: 4 cards in one row
    return {
      minWidth: "280px",
      maxWidth: "calc(25% - 25px)",
      flexBasis: "calc(25% - 25px)",
      cardsPerRow: 4
    };
  };

  const getContainerPadding = () => {
    if (isMobile) return "40px 16px";
    if (isTablet) return "60px 24px";
    if (isNestHubMax) return "60px 32px"; // Special padding for Nest Hub Max
    if (isDesktop) return "80px 32px";
    return "100px 40px";
  };

  const getTitleFontSize = () => {
    if (isMobile) return "24px";
    if (isTablet) return "32px";
    if (isNestHubMax) return "34px"; // Slightly larger for Nest Hub Max
    if (isDesktop) return "38px";
    return "42px";
  };

  const getCardPadding = () => {
    if (isMobile) return "30px 20px";
    if (isTablet) return "35px 25px";
    if (isNestHubMax) return "35px 20px"; // Adjusted for Nest Hub Max
    return "40px 30px";
  };

  const getCardHeight = () => {
    if (isMobile) return "280px";
    if (isTablet) return "320px";
    if (isNestHubMax) return "300px"; // Slightly shorter for Nest Hub Max
    if (isDesktop) return "340px";
    return "360px";
  };

  const getGapSize = () => {
    if (isMobile) return "20px";
    if (isTablet) return "25px";
    if (isNestHubMax) return "20px"; // Smaller gap for Nest Hub Max
    if (isDesktop) return "30px";
    return "30px";
  };

  const cardDims = getCardDimensions();
  const gapSize = getGapSize();

  return (
    <div style={{
      width: "100%",
      background: "#FAFAFA",
      padding: getContainerPadding(),
      overflow: "hidden",
      boxSizing: "border-box",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        width: "100%"
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: "center",
          marginBottom: isMobile ? "40px" : isNestHubMax ? "50px" : "60px",
          padding: isMobile ? "0 10px" : "0"
        }}>
          <div style={{
            display: "inline-block",
            position: "relative",
            marginBottom: "20px"
          }}>
            <span
              style={{
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 700,
                fontSize: "inherit",
                textAlign: "center",
                boxSizing: "border-box",
                whiteSpace: "normal",
                border: 0,
                fontStyle: "inherit",
                padding: 0,
                verticalAlign: "baseline",
                textDecoration: "none",
                outline: "none",
                margin: "0 0 25px",
                color: "#29136C",
                textTransform: "uppercase",
                display: "block",
                position: "relative"
              }}
            >
              Core Services
            </span>
            <div style={{
              height: "3px",
              width: isMobile ? "40px" : "60px",
              background: "#6d28d9",
              margin: "0 auto 15px"
            }} />
          </div>
          <h2
            style={{
              fontFamily: "'Noto Sans', sans-serif",
              fontSize: "2em",
              fontWeight: 600,
              textAlign: "center",
              margin: "0 0 12px",
              color: "#150202",
              whiteSpace: "normal",
              boxSizing: "border-box",
              lineHeight: "1.2",
              padding: isMobile ? "0 10px" : "0",
              letterSpacing: isMobile ? "-0.3px" : "-0.5px"
            }}
          >
            Training Programs
          </h2>
        </div>
        {/* Cards Grid */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: gapSize,
          alignItems: "stretch",
          width: "100%"
        }}>
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                flex: `1 1 ${cardDims.flexBasis}`,
                minWidth: cardDims.minWidth,
                maxWidth: cardDims.maxWidth,
                background: card.gradient,
                borderRadius: isMobile ? "12px" : "16px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                position: "relative",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                height: getCardHeight(),
                display: "flex",
                flexDirection: "column"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
              }}
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.location.href = card.link;
                }
              }}
            >
              {/* Background SVG Graphics */}
              <svg
                width="100%"
                height="100%"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  pointerEvents: 'none'
                }}
                viewBox="0 0 380 340"
                preserveAspectRatio="xMidYMid slice"
              >
                {index === 0 && (
                  <>
                    {/* Dotted grid pattern */}
                    {[...Array(80)].map((_, i) => (
                      <circle key={i} cx={(i % 10) * 40 + 20} cy={Math.floor(i / 10) * 35 + 20} r="1.5" fill="rgba(255,255,255,0.3)" />
                    ))}
                    {/* Light bulb icon */}
                    <g transform="translate(100, 90)">
                      <circle cx="0" cy="-10" r="35" fill="rgba(255,213,79,0.8)" />
                      <rect x="-14" y="28" width="28" height="10" fill="rgba(255,255,255,0.6)" rx="2" />
                      <rect x="-10" y="40" width="20" height="6" fill="rgba(255,255,255,0.5)" rx="1" />
                      <line x1="-40" y1="-10" x2="-50" y2="-10" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                      <line x1="40" y1="-10" x2="50" y2="-10" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                      <line x1="0" y1="-50" x2="0" y2="-60" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                    </g>
                    {/* Documents/papers stack */}
                    <g transform="translate(260, 120)">
                      <rect x="0" y="0" width="60" height="70" fill="rgba(255,255,255,0.3)" rx="3" />
                      <rect x="5" y="5" width="60" height="70" fill="rgba(255,255,255,0.4)" rx="3" />
                      <rect x="10" y="10" width="60" height="70" fill="rgba(255,255,255,0.5)" rx="3" />
                      <line x1="20" y1="25" x2="55" y2="25" stroke="rgba(74,95,193,0.5)" strokeWidth="2" />
                      <line x1="20" y1="35" x2="50" y2="35" stroke="rgba(74,95,193,0.5)" strokeWidth="2" />
                      <line x1="20" y1="45" x2="60" y2="45" stroke="rgba(74,95,193,0.5)" strokeWidth="2" />
                    </g>
                  </>
                )}
                {index === 1 && (
                  <>
                    {/* Diagonal lines pattern */}
                    {[...Array(15)].map((_, i) => (
                      <line key={i} x1={i * 30} y1="0" x2={i * 30 + 150} y2="340" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    ))}
                    {/* Growth chart */}
                    <g transform="translate(90, 200)">
                      <polyline points="0,80 40,55 80,35 120,18 160,0" fill="none" stroke="rgba(0,229,255,0.9)" strokeWidth="5" />
                      {[0, 40, 80, 120, 160].map((x, i) => (
                        <circle key={i} cx={x} cy={[80, 55, 35, 18, 0][i]} r="8" fill="rgba(255,213,79,0.95)" />
                      ))}
                      <line x1="0" y1="85" x2="160" y2="85" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                      <line x1="0" y1="0" x2="0" y2="85" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    </g>
                    {/* Target icon */}
                    <g transform="translate(300, 100)">
                      <circle cx="0" cy="0" r="40" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
                      <circle cx="0" cy="0" r="28" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="3" />
                      <circle cx="0" cy="0" r="16" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="3" />
                      <circle cx="0" cy="0" r="8" fill="rgba(255,213,79,0.95)" />
                    </g>
                  </>
                )}
                {index === 2 && (
                  <>
                    {/* Stars/sparkles */}
                    {[...Array(60)].map((_, i) => (
                      <circle key={i} cx={Math.random() * 380} cy={Math.random() * 280} r="1.5" fill="rgba(255,255,255,0.25)" />
                    ))}
                    {/* Graduation cap */}
                    <g transform="translate(190, 130)">
                      <path d="M 0,-35 L -60,-20 L -60,-5 L 0,10 L 60,-5 L 60,-20 Z" fill="rgba(171,71,188,0.8)" />
                      <path d="M 0,-35 L 60,-20 L 0,-5 L -60,-20 Z" fill="rgba(123,44,154,0.9)" />
                      <rect x="-6" y="-5" width="12" height="50" fill="rgba(171,71,188,0.7)" />
                      <circle cx="0" cy="50" r="10" fill="rgba(255,213,79,0.95)" />
                    </g>
                    {/* Book stack */}
                    <g transform="translate(80, 240)">
                      <rect x="0" y="0" width="45" height="55" fill="rgba(102,187,106,0.7)" rx="2" />
                      <rect x="50" y="-12" width="45" height="55" fill="rgba(77,182,172,0.7)" rx="2" />
                      <rect x="100" y="6" width="45" height="55" fill="rgba(100,181,246,0.7)" rx="2" />
                      <line x1="10" y1="10" x2="35" y2="10" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                      <line x1="60" y1="-2" x2="85" y2="-2" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                      <line x1="110" y1="16" x2="135" y2="16" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                    </g>
                  </>
                )}
                {index === 3 && (
                  <>
                    {/* Grid dots */}
                    {[...Array(100)].map((_, i) => (
                      <circle key={i} cx={(i % 12) * 32 + 20} cy={Math.floor(i / 12) * 30 + 20} r="1.5" fill="rgba(255,255,255,0.3)" />
                    ))}
                    {/* Globe */}
                    <g transform="translate(190, 140)">
                      <circle cx="0" cy="0" r="65" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" />
                      <ellipse cx="0" cy="-35" rx="63" ry="18" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                      <ellipse cx="0" cy="0" rx="65" ry="22" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                      <ellipse cx="0" cy="35" rx="63" ry="18" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                      <ellipse cx="0" cy="0" rx="22" ry="65" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                      <ellipse cx="0" cy="0" rx="45" ry="65" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    </g>
                    {/* Airplane */}
                    <g transform="translate(120, 100)">
                      <path d="M 0,-20 Q -12,-20 -12,-10 Q -12,-2 0,10 Q 12,-2 12,-10 Q 12,-20 0,-20 Z" fill="rgba(0,229,255,0.9)" />
                      <circle cx="0" cy="-10" r="4" fill="#fff" />
                      <path d="M -20,-5 L -8,-8 L -8,0 L -20,3 Z" fill="rgba(0,229,255,0.7)" />
                      <path d="M 20,-5 L 8,-8 L 8,0 L 20,3 Z" fill="rgba(0,229,255,0.7)" />
                    </g>
                  </>
                )}
              </svg>

              {/* White Content Box at Bottom */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "#ffffff",
                borderRadius: isMobile ? "0 0 12px 12px" : "0 0 16px 16px",
                padding: isMobile ? "20px 16px" : isNestHubMax ? "20px 18px" : "24px 20px",
                boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                zIndex: 2
              }}>
                {/* Title */}
                <div style={{
                  color: "#1a1a1a",
                  fontSize: isMobile ? "16px" : isTablet ? "17px" : isNestHubMax ? "17px" : "18px",
                  fontWeight: "700",
                  lineHeight: "1.3",
                  flex: 1
                }}>
                  {card.title}
                </div>

                {/* Arrow Button */}
                <div
                  style={{
                    width: isMobile ? "36px" : "40px",
                    height: isMobile ? "36px" : "40px",
                    borderRadius: "50%",
                    background: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#e0e0e0";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#f5f5f5";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <span style={{
                    fontSize: isMobile ? "18px" : "20px",
                    color: "#1a1a1a",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    →
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div style={{
                position: "relative",
                padding: getCardPadding(),
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100%",
                zIndex: 1
              }}>
                {/* Title */}
                <div style={{
                  textAlign: "center",
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <div style={{
                    color: "#ffffff",
                    fontSize: isMobile ? "20px" : isTablet ? "22px" : isNestHubMax ? "22px" : "24px",
                    fontWeight: "800",
                    lineHeight: "1.3",
                    textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                    padding: isMobile ? "10px 0" : "20px 0"
                  }}>
                    {card.title}
                  </div>
                </div>

                {/* Button */}
                <a
                  href={card.link}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: isMobile ? "12px 24px" : isNestHubMax ? "12px 20px" : "14px 28px",
                    background: "rgba(255,255,255,0.95)",
                    color: "#000",
                    textDecoration: "none",
                    fontWeight: "700",
                    fontSize: isMobile ? "13px" : isNestHubMax ? "13px" : "14px",
                    borderRadius: isMobile ? "6px" : "8px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    transition: "all 0.3s ease",
                    minWidth: isMobile ? "120px" : isNestHubMax ? "120px" : "140px",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    zIndex: 2
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.transform = "scale(1.05)";
                    const arrow = e.currentTarget.querySelector('.arrow');
                    // if (arrow) arrow.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.95)";
                    e.currentTarget.style.transform = "scale(1)";
                    const arrow = e.currentTarget.querySelector('.arrow');
                    // if (arrow) arrow.style.transform = "translateX(0)";
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Read More</span>
                  <span className="arrow" style={{
                    fontSize: isMobile ? "16px" : isNestHubMax ? "16px" : "18px",
                    transition: "transform 0.3s ease",
                    display: "inline-block"
                  }}>
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;