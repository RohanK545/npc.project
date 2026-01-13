import React, { useState, useEffect } from "react";

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
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

  const getCardDimensions = () => {
    if (isMobile) return { minWidth: "280px", maxWidth: "100%" };
    if (isTablet) return { minWidth: "300px", maxWidth: "45%" };
    return { minWidth: "320px", maxWidth: "380px" };
  };

  const cardDims = getCardDimensions();

  return (
    <div style={{
      width: "100%",
      background: "#FAFAFA",
      padding: isMobile ? "40px 15px" : isTablet ? "60px 20px" : "80px 20px",
      overflow: "hidden"
    }}>
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
        <div style={{
          textAlign: "center",
          marginBottom: isMobile ? "40px" : "60px"
        }}>
          <div style={{
            display: "inline-block",
            position: "relative"
          }}>
             <span style={{
              fontSize: isMobile ? "11px" : "13px",
              fontWeight: "700",
              letterSpacing: isMobile ? "2px" : "3px",
              textTransform: "uppercase",
              color: "#000",
              display: "block",
              marginBottom: "12px"
            }}>PROFESSIONAL SERVICES</span>
            <div style={{
              height: "3px",
              width: isMobile ? "40px" : "60px",
              background: "#6d28d9",
              margin: "0 auto 15px"
            }} />
          </div>
          <h2 style={{
            fontSize: isMobile ? "28px" : isTablet ? "36px" : "42px",
            fontWeight: "800",
            margin: "0",
            color: "#000",
            letterSpacing: "-0.5px"
          }}>Services</h2>
        </div>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: isMobile ? "20px" : isTablet ? "25px" : "30px",
          alignItems: "stretch"
        }}>
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                flex: isMobile ? "1 1 100%" : isTablet ? "1 1 45%" : "1",
                minWidth: cardDims.minWidth,
                maxWidth: cardDims.maxWidth,
                background: card.gradient,
                borderRadius: isMobile ? "12px" : "16px",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                position: "relative",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.2)";
              }}
            >
              <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }} viewBox="0 0 380 400" preserveAspectRatio="xMidYMid slice">
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
                      {[0,40,80,120,160].map((x, i) => (
                        <circle key={i} cx={x} cy={[80,60,40,20,0][i]} r="6" fill="rgba(0,229,255,0.9)" />
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

              <div style={{
                position: "relative",
                padding: isMobile ? "40px 20px" : isTablet ? "45px 25px" : "50px 30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: isMobile ? "300px" : isTablet ? "330px" : "360px"
              }}>
                <div style={{
                  textAlign: "center",
                  marginBottom: isMobile ? "30px" : "40px",
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center"
                }}>
                  <div style={{
                    color: "#ffffff",
                    fontSize: isMobile ? "22px" : isTablet ? "24px" : "25px",
                    fontWeight: "800",
                    lineHeight: "1.4",
                    textShadow: "0 2px 8px rgba(0,0,0,0.2)"
                  }}>
                    {card.title}
                  </div>
                </div>

                <a
                  href={card.link}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    padding: isMobile ? "12px 24px" : "14px 28px",
                    background: "rgba(255,255,255,0.95)",
                    color: "#000",
                    textDecoration: "none",
                    fontWeight: "700",
                    fontSize: isMobile ? "13px" : "14px",
                    borderRadius: isMobile ? "6px" : "8px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    transition: "all 0.3s ease",
                    minWidth: isMobile ? "120px" : "140px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#ffffff";
                    const arrow = e.currentTarget.querySelector('.arrow') as HTMLElement;
                    if (arrow) arrow.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.95)";
                    const arrow = e.currentTarget.querySelector('.arrow') as HTMLElement;
                    if (arrow) arrow.style.transform = "translateX(0)";
                  }}
                >
                  <span>Read More</span>
                  <span className="arrow" style={{
                    fontSize: isMobile ? "16px" : "18px",
                    transition: "transform 0.3s ease",
                    display: "inline-block"
                  }}>→</span>
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