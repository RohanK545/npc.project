import React, { useState, useEffect } from "react";

const DomainExpertise = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [windowWidth, setWindowWidth] = useState(1200); // Default for SSR

    const services = [
        {
            title: "Agri Business Group",
            icon: (
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="50" r="25" fill="#E8F5E9" />
                    <path d="M60 30 Q50 35 50 45 L50 60" stroke="#4CAF50" strokeWidth="3" fill="none" />
                    <path d="M60 30 Q70 35 70 45 L70 60" stroke="#66BB6A" strokeWidth="3" fill="none" />
                    <ellipse cx="50" cy="45" rx="8" ry="12" fill="#81C784" />
                    <ellipse cx="70" cy="45" rx="8" ry="12" fill="#81C784" />
                    <circle cx="60" cy="35" r="6" fill="#FDD835" />
                    <rect x="58" y="60" width="4" height="20" fill="#8D6E63" rx="1" />
                    <path d="M35 80 Q45 75 60 80 Q75 75 85 80" stroke="#795548" strokeWidth="2" fill="none" />
                    <g opacity="0.4">
                        <circle cx="40" cy="45" r="2" fill="#AED581" />
                        <circle cx="80" cy="50" r="2" fill="#AED581" />
                        <circle cx="45" cy="65" r="1.5" fill="#C5E1A5" />
                    </g>
                </svg>
            ),
            link: "domainExpertise"
        },
        {
            title: "Economic Services & Productivity Promotion",
            icon: (
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <rect x="35" y="40" width="50" height="45" fill="#E3F2FD" rx="3" />
                    <path d="M45 70 L50 60 L55 65 L60 50 L65 55 L70 45 L75 50" stroke="#2196F3" strokeWidth="3" fill="none" />
                    <circle cx="50" cy="60" r="3" fill="#1976D2" />
                    <circle cx="60" cy="50" r="3" fill="#1976D2" />
                    <circle cx="70" cy="45" r="3" fill="#1976D2" />
                    <path d="M50 35 L60 25 L70 35" fill="none" stroke="#4CAF50" strokeWidth="3" />
                    <circle cx="60" cy="28" r="4" fill="#66BB6A" />
                    <rect x="48" y="75" width="24" height="3" fill="#FFD54F" rx="1.5" />
                    <g opacity="0.3">
                        <circle cx="40" cy="50" r="2" fill="#64B5F6" />
                        <circle cx="80" cy="55" r="2" fill="#64B5F6" />
                        <rect x="38" cy="70" width="3" height="3" fill="#90CAF9" />
                    </g>
                </svg>
            ),
            link: "domainExpertise/economic-service"
        },
        {
            title: "Energy Management",
            icon: (
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="55" r="22" fill="#FFF9C4" />
                    <path d="M60 35 L55 50 L65 50 L60 65" fill="#FFA726" stroke="#F57C00" strokeWidth="2" />
                    <g opacity="0.5">
                        <circle cx="60" cy="55" r="28" fill="none" stroke="#FFD54F" strokeWidth="2" />
                        <circle cx="60" cy="55" r="33" fill="none" stroke="#FFE082" strokeWidth="1.5" />
                    </g>
                    <rect x="40" y="75" width="8" height="3" fill="#4CAF50" rx="1.5" />
                    <rect x="52" y="75" width="16" height="3" fill="#66BB6A" rx="1.5" />
                    <rect x="72" y="75" width="8" height="3" fill="#81C784" rx="1.5" />
                    <circle cx="35" cy="40" r="2" fill="#8BC34A" />
                    <circle cx="85" cy="45" r="2" fill="#8BC34A" />
                    <g opacity="0.3">
                        <circle cx="45" cy="30" r="1.5" fill="#FFEB3B" />
                        <circle cx="75" cy="32" r="1.5" fill="#FFEB3B" />
                    </g>
                </svg>
            ),
            link: "domainExpertise/energy-management"
        },
        {
            title: "Environment and Climate Action Group",
            icon: (
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="55" r="25" fill="#E8F5E9" />
                    <circle cx="60" cy="55" r="20" fill="#4CAF50" opacity="0.3" />
                    <path d="M45 55 Q45 40 60 35 Q75 40 75 55" fill="#81C784" />
                    <ellipse cx="50" cy="50" rx="6" ry="10" fill="#66BB6A" />
                    <ellipse cx="70" cy="50" rx="6" ry="10" fill="#66BB6A" />
                    <ellipse cx="60" cy="48" rx="5" ry="8" fill="#AED581" />
                    <rect x="58" y="60" width="4" height="15" fill="#795548" rx="1" />
                    <path d="M40 75 Q50 72 60 75 Q70 72 80 75" stroke="#8D6E63" strokeWidth="2" fill="none" />
                    <circle cx="35" cy="40" r="8" fill="#81D4FA" opacity="0.6" />
                    <circle cx="85" cy="45" r="6" fill="#81D4FA" opacity="0.6" />
                    <g opacity="0.4">
                        <path d="M30 42 L32 38 L34 42" stroke="#64B5F6" strokeWidth="1.5" fill="none" />
                        <path d="M82 47 L84 43 L86 47" stroke="#64B5F6" strokeWidth="1.5" fill="none" />
                    </g>
                </svg>
            ),
            link: "domainExpertise/environment-climate"
        },
        {
            title: "Information Technology",
            icon: (
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <rect x="35" y="35" width="50" height="40" fill="#E3F2FD" rx="3" stroke="#2196F3" strokeWidth="2" />
                    <circle cx="45" cy="50" r="3" fill="#1976D2" />
                    <circle cx="60" cy="50" r="3" fill="#1976D2" />
                    <circle cx="75" cy="50" r="3" fill="#1976D2" />
                    <line x1="45" y1="50" x2="60" y2="50" stroke="#64B5F6" strokeWidth="2" />
                    <line x1="60" y1="50" x2="75" y2="50" stroke="#64B5F6" strokeWidth="2" />
                    <circle cx="60" cy="62" r="4" fill="#FFA726" />
                    <line x1="60" y1="50" x2="60" y2="62" stroke="#64B5F6" strokeWidth="2" />
                    <rect x="40" y="43" width="8" height="3" fill="#90CAF9" rx="1" />
                    <rect x="70" y="43" width="8" height="3" fill="#90CAF9" rx="1" />
                    <rect x="50" y="75" width="20" height="3" fill="#9E9E9E" rx="1.5" />
                    <path d="M45 78 L60 83 L75 78" fill="#BDBDBD" />
                    <g opacity="0.3">
                        <circle cx="30" cy="45" r="2" fill="#42A5F5" />
                        <circle cx="90" cy="50" r="2" fill="#42A5F5" />
                    </g>
                </svg>
            ),
            link: "domainExpertise/information-technology"
        },
        {
            title: "Industrial Engineering",
            icon: (
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <rect x="35" y="40" width="50" height="35" fill="#FFE0B2" rx="3" stroke="#FF9800" strokeWidth="2" />
                    <path d="M40 55 L80 55" stroke="#F57C00" strokeWidth="2" />
                    <path d="M40 62 L70 62" stroke="#F57C00" strokeWidth="2" />
                    <circle cx="45" cy="30" r="6" fill="#FFB74D" />
                    <circle cx="60" cy="30" r="6" fill="#FFB74D" />
                    <circle cx="75" cy="30" r="6" fill="#FFB74D" />
                    <rect x="45" y="78" width="30" height="4" fill="#4CAF50" rx="2" />
                </svg>
            ),
            link: "domainExpertise/industrial-engineering"
        },
        {
            title: "Human Resource Management",
            icon: (
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="45" cy="40" r="8" fill="#BA68C8" />
                    <circle cx="75" cy="40" r="8" fill="#BA68C8" />
                    <circle cx="60" cy="30" r="6" fill="#CE93D8" />
                    <rect x="40" y="50" width="40" height="25" rx="4" fill="#E1BEE7" />
                    <circle cx="60" cy="58" r="6" fill="#FFF9C4" />
                    <path d="M56 58 L59 61 L65 54" stroke="#9C27B0" strokeWidth="2" fill="none" />
                    <rect x="45" y="80" width="30" height="4" fill="#81C784" rx="2" />
                </svg>
            ),
            link: "domainExpertise/human-resource-management"
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
            if (width < 640) {
                setItemsPerPage(1); // Mobile
            } else if (width < 1024) {
                setItemsPerPage(2); // Tablet
            } else if (width < 1440) {
                setItemsPerPage(3); // Desktop
            } else {
                setItemsPerPage(4); // Large Desktop
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    };

    const getVisibleServices = () => {
        const items = [];
        for (let i = 0; i < itemsPerPage; i++) {
            const index = (currentIndex + i) % services.length;
            items.push(services[index]);
        }
        return items;
    };

    const visibleServices = getVisibleServices();

    return (
        <div style={{
            width: "100%",
            background: "#FAFAFA",
            padding: windowWidth < 640 ? "40px 15px 80px" : windowWidth < 1024 ? "60px 20px 100px" : "80px 20px 120px",
            overflow: "hidden",
            position: "relative"
        }}>
            <div style={{
                maxWidth: "1400px",
                margin: "0 auto"
            }}>
                {/* Heading */}
                <div style={{
                    textAlign: "center",
                    marginBottom: window.innerWidth < 640 ? "40px" : "60px"
                }}>
                    <span style={{
                        fontSize: window.innerWidth < 640 ? "11px" : "13px",
                        fontWeight: "700",
                        letterSpacing: window.innerWidth < 640 ? "2px" : "3px",
                        textTransform: "uppercase",
                        color: "#000",
                        display: "block",
                        marginBottom: "12px"
                    }}>AREAS OF EXPERTISE</span>
                    <div style={{
                        height: "3px",
                        width: window.innerWidth < 640 ? "40px" : "60px",
                        background: "#6d28d9",
                        margin: "0 auto 15px"
                    }} />
                    <h2 style={{
                        fontSize: window.innerWidth < 640 ? "28px" : window.innerWidth < 1024 ? "36px" : "42px",
                        fontWeight: "800",
                        margin: "0",
                        color: "#000",
                        letterSpacing: "-0.5px"
                    }}>Domain Expertise</h2>
                </div>

                {/* Services Container with Purple Background */}
                <div style={{
                    position: "relative"
                }}>
                    {/* Purple Background */}
                    <div style={{
                        position: "absolute",
                        bottom: "0px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: window.innerWidth < 640 ? "95%" : window.innerWidth < 1024 ? "90%" : "75vw",
                        height: window.innerWidth < 640 ? "280px" : "215px",
                        background: "#4729a3",
                        borderRadius: window.innerWidth < 640 ? "15px" : "20px",
                        zIndex: 1
                    }} />

                    {/* Cards Container */}
                    <div style={{
                        position: "relative",
                        zIndex: 2,
                        display: "flex",
                        justifyContent: "center",
                        gap: window.innerWidth < 640 ? "15px" : window.innerWidth < 1024 ? "20px" : "25px",
                        paddingBottom: window.innerWidth < 640 ? "100px" : "80px",
                        transition: "transform 0.5s ease",
                        flexWrap: window.innerWidth < 640 ? "wrap" : "nowrap"
                    }}>
                        {visibleServices.map((service, index) => (
                            <a
                                key={`${currentIndex}-${index}`}
                                href={service.link}
                                style={{
                                    flex: window.innerWidth < 640 ? "0 0 calc(100% - 30px)" : window.innerWidth < 1024 ? "0 0 calc(50% - 10px)" : window.innerWidth < 1440 ? "0 0 280px" : "0 0 280px",
                                    maxWidth: window.innerWidth < 640 ? "320px" : "none",
                                    margin: window.innerWidth < 640 ? "0 auto" : "0",
                                    background: "#ffffff",
                                    borderRadius: window.innerWidth < 640 ? "10px" : "12px",
                                    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                                    padding: window.innerWidth < 640 ? "30px 15px 25px" : "40px 20px 30px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textDecoration: "none",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    cursor: "pointer"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-10px)";
                                    e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.2)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
                                }}
                            >
                                {/* Icon */}
                                <div style={{
                                    marginBottom: "20px",
                                    transform: window.innerWidth < 640 ? "scale(0.85)" : "scale(1)"
                                }}>
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 style={{
                                    fontSize: window.innerWidth < 640 ? "16px" : "18px",
                                    fontWeight: "700",
                                    color: "#5b21b6",
                                    textAlign: "center",
                                    margin: "0",
                                    lineHeight: "1.4",
                                    minHeight: window.innerWidth < 640 ? "auto" : "50px",
                                    display: "flex",
                                    alignItems: "center"
                                }}>
                                    {service.title}
                                </h3>
                            </a>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <div style={{
                        position: "absolute",
                        bottom: window.innerWidth < 640 ? "35px" : "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: window.innerWidth < 640 ? "12px" : "15px",
                        zIndex: 3
                    }}>
                        <button
                            onClick={handlePrev}
                            style={{
                                width: window.innerWidth < 640 ? "40px" : "45px",
                                height: window.innerWidth < 640 ? "40px" : "45px",
                                borderRadius: "50%",
                                background: "#ffffff",
                                border: "none",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.3s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#f3f4f6";
                                e.currentTarget.style.transform = "scale(1.1)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "#ffffff";
                                e.currentTarget.style.transform = "scale(1)";
                            }}
                        >
                            <span style={{
                                fontSize: window.innerWidth < 640 ? "18px" : "20px",
                                color: "#6d28d9",
                                fontWeight: "bold"
                            }}>‹</span>
                        </button>

                        <button
                            onClick={handleNext}
                            style={{
                                width: window.innerWidth < 640 ? "40px" : "45px",
                                height: window.innerWidth < 640 ? "40px" : "45px",
                                borderRadius: "50%",
                                background: "#ffffff",
                                border: "none",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.3s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#f3f4f6";
                                e.currentTarget.style.transform = "scale(1.1)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "#ffffff";
                                e.currentTarget.style.transform = "scale(1)";
                            }}
                        >
                            <span style={{
                                fontSize: window.innerWidth < 640 ? "18px" : "20px",
                                color: "#6d28d9",
                                fontWeight: "bold"
                            }}>›</span>
                        </button>
                    </div>

                    {/* Progress Dots */}
                    <div style={{
                        position: "absolute",
                        bottom: window.innerWidth < 640 ? "-10px" : "-15px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: window.innerWidth < 640 ? "6px" : "8px",
                        zIndex: 3
                    }}>
                        {services.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                style={{
                                    width: window.innerWidth < 640 ? "8px" : "10px",
                                    height: window.innerWidth < 640 ? "8px" : "10px",
                                    borderRadius: "50%",
                                    background: currentIndex === index ? "#6d28d9" : "#d1d5db",
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    padding: 0
                                }}
                                onMouseEnter={(e) => {
                                    if (currentIndex !== index) {
                                        e.currentTarget.style.background = "#9ca3af";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (currentIndex !== index) {
                                        e.currentTarget.style.background = "#d1d5db";
                                    }
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DomainExpertise;