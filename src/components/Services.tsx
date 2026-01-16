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
            <span style={{
              fontSize: isMobile ? "11px" : isTablet ? "12px" : "13px",
              fontWeight: "700",
              letterSpacing: isMobile ? "2px" : "3px",
              textTransform: "uppercase",
              color: "#000",
              display: "block",
              marginBottom: "12px"
            }}>
              PROFESSIONAL SERVICES
            </span>
            <div style={{
              height: "3px",
              width: isMobile ? "40px" : "60px",
              background: "#6d28d9",
              margin: "0 auto 15px"
            }} />
          </div>
          <h2 style={{
            fontSize: getTitleFontSize(),
            fontWeight: "800",
            margin: "0",
            color: "#000",
            letterSpacing: isMobile ? "-0.3px" : "-0.5px",
            lineHeight: "1.2",
            padding: isMobile ? "0 10px" : "0"
          }}>
            Services
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
                viewBox="0 0 380 400"
                preserveAspectRatio="xMidYMid slice"
              >
                {index === 0 && (
                  <>
                    {[...Array(40)].map((_, i) => (
                      <circle key={i} cx={Math.random() * 380} cy={Math.random() * 400} r="1.5" fill="rgba(255,255,255,0.3)" />
                    ))}
                    <g transform="translate(100, 120)">
                      <circle cx="0" cy="-10" r="30" fill="rgba(255,213,79,0.7)" />
                      <rect x="-12" y="22" width="24" height="8" fill="rgba(255,255,255,0.5)" rx="2" />
                      <rect x="-8" y="32" width="16" height="4" fill="rgba(255,255,255,0.4)" rx="1" />
                    </g>
                    <g transform="translate(250, 280)">
                      <circle cx="0" cy="0" r="15" fill="rgba(100,181,246,0.7)" />
                      <circle cx="40" cy="0" r="15" fill="rgba(102,187,106,0.7)" />
                      <circle cx="80" cy="0" r="15" fill="rgba(255,107,157,0.7)" />
                    </g>
                  </>
                )}
                {index === 1 && (
                  <>
                    <g transform="translate(80, 250)">
                      <polyline points="0,80 40,60 80,40 120,20 160,0" fill="none" stroke="rgba(0,229,255,0.8)" strokeWidth="4" />
                      {[0, 40, 80, 120, 160].map((x, i) => (
                        <circle key={i} cx={x} cy={[80, 60, 40, 20, 0][i]} r="6" fill="rgba(0,229,255,0.9)" />
                      ))}
                    </g>
                    <g transform="translate(280, 120)">
                      <circle cx="0" cy="0" r="35" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                      <circle cx="0" cy="0" r="25" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                      <circle cx="0" cy="0" r="15" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
                      <circle cx="0" cy="0" r="6" fill="rgba(255,213,79,0.9)" />
                    </g>
                  </>
                )}
                {index === 2 && (
                  <>
                    {[...Array(50)].map((_, i) => (
                      <circle key={i} cx={Math.random() * 380} cy={Math.random() * 400} r="1" fill="rgba(255,255,255,0.2)" />
                    ))}
                    <g transform="translate(190, 150)">
                      <path d="M 0,-30 L -50,-15 L -50,0 L 0,15 L 50,0 L 50,-15 Z" fill="rgba(171,71,188,0.7)" />
                      <path d="M 0,-30 L 50,-15 L 0,0 L -50,-15 Z" fill="rgba(156,39,176,0.8)" />
                      <rect x="-5" y="0" width="10" height="40" fill="rgba(171,71,188,0.6)" />
                      <circle cx="0" cy="45" r="8" fill="rgba(255,213,79,0.9)" />
                    </g>
                    <g transform="translate(80, 280)">
                      <rect x="0" y="0" width="40" height="50" fill="rgba(102,187,106,0.6)" rx="2" />
                      <rect x="45" y="-10" width="40" height="50" fill="rgba(77,182,172,0.6)" rx="2" />
                      <rect x="90" y="5" width="40" height="50" fill="rgba(100,181,246,0.6)" rx="2" />
                    </g>
                  </>
                )}
                {index === 3 && (
                  <>
                    {[...Array(60)].map((_, i) => (
                      <circle key={i} cx={Math.random() * 380} cy={Math.random() * 400} r="1.5" fill="rgba(255,255,255,0.25)" />
                    ))}
                    <g transform="translate(190, 180)">
                      <circle cx="0" cy="0" r="60" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                      <ellipse cx="0" cy="-30" rx="58" ry="15" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                      <ellipse cx="0" cy="0" rx="60" ry="20" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                      <ellipse cx="0" cy="30" rx="58" ry="15" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                      <ellipse cx="0" cy="0" rx="20" ry="60" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                      <ellipse cx="0" cy="0" rx="40" ry="60" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                    </g>
                    <g transform="translate(120, 140)">
                      <path d="M 0,-15 Q -8,-15 -8,-7 Q -8,0 0,8 Q 8,0 8,-7 Q 8,-15 0,-15 Z" fill="rgba(0,229,255,0.8)" />
                      <circle cx="0" cy="-7" r="3" fill="#fff" />
                    </g>
                  </>
                )}
              </svg>

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