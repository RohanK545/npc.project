"use client";
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import PageRenderer from "@/components/PageRenderer";
import { useEffect, useState } from "react";
import axios from "axios";

import Image from "next/image";

export default function OrganizationStructure() {
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/page-content/about-us");
                setContent(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div style={{}}>
                <InnerBannerSection
                    imageSrc={navigationConfig["aboutUs"].imageSrc}
                    breadcrumbs={navigationConfig["aboutUs"].breadcrumbs}
                    navItems={navigationConfig["aboutUs"].navItems}
                    pageTilte="Organization Structure"
                />
            </div>
            <section className="maincontent">

                <div className="container maincontent">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-12 px-3 d-flex justify-content-center">
                            <div className="aboutcontent text-justify">
                                {content && <PageRenderer data={content} />}



                                <div
                                    className="card-wrapper p-2 py-4 p-md-4 d-flex justify-content-center"
                                    style={{
                                        position: "relative",
                                        maxWidth: "1300px",
                                        width: "100%",
                                        minHeight: "1400px",
                                    }}

                                >
                                    <div className="w-100">
                                        <h1 className="text-center">Organization Structure</h1>
                                        <div className="">
                                            <h2 className="text-center">ORGANOGRAM</h2>
                                            <div className="reactFamilyTree d-flex justify-content-center w-100">
                                                <div
                                                    style={{
                                                        position: "relative",
                                                        width: "344px",
                                                        height: "400px",
                                                    }}
                                                >
                                                    <div>
                                                        <i
                                                            style={{
                                                                position: "absolute",
                                                                width: "1px",
                                                                height: "450px",
                                                                background: "rgb(153, 153, 153)",
                                                                transform: "translate(172px, 100px)",
                                                                pointerEvents: "none",
                                                            }}
                                                        ></i>
                                                        <i
                                                            style={{
                                                                position: "absolute",
                                                                width: "1px", // thin vertical line width
                                                                height: "40px", // vertical length
                                                                background: "rgb(153, 153, 153)",
                                                                transform: "translate(-200px, 370px)", // x = 100px (same as horizontal start), y = bottom of horizontal line
                                                                pointerEvents: "none",
                                                            }}
                                                        ></i>
                                                        <i
                                                            style={{
                                                                position: "absolute",
                                                                width: "1px", // thin vertical line width
                                                                height: "40px", // vertical length
                                                                background: "rgb(153, 153, 153)",
                                                                transform: "translate(550px, 370px)", // x = 100px (same as horizontal start), y = bottom of horizontal line
                                                                pointerEvents: "none",
                                                            }}
                                                        ></i>

                                                        <i
                                                            style={{
                                                                position: "absolute",
                                                                width: "750px", // length of the horizontal line
                                                                height: "1px", // thin line height
                                                                background: "rgb(153, 153, 153)",
                                                                transform: "translate(-200px, 370px)", // adjust X and Y position accordingly
                                                                pointerEvents: "none",
                                                            }}
                                                        ></i>
                                                        <i
                                                            style={{
                                                                position: "absolute",
                                                                width: "750px", // length of the horizontal line
                                                                height: "1px", // thin line height
                                                                background: "rgb(153, 153, 153)",
                                                                transform: "translate(-200px, 550px)", // adjust X and Y position accordingly
                                                                pointerEvents: "none",
                                                            }}
                                                        ></i>
                                                        {/* Second small vertical line */}

                                                        <i
                                                            style={{
                                                                position: "absolute",
                                                                width: "1px", // thin vertical line width
                                                                height: "40px", // vertical length
                                                                background: "rgb(153, 153, 153)",
                                                                transform: "translate(-200px, 550px)", // x = 100px (same as horizontal start), y = bottom of horizontal line
                                                                pointerEvents: "none",
                                                            }}
                                                        ></i>
                                                        <i
                                                            style={{
                                                                position: "absolute",
                                                                width: "1px", // thin vertical line width
                                                                height: "40px", // vertical length
                                                                background: "rgb(153, 153, 153)",
                                                                transform: "translate(550px, 550px)", // x = 100px (same as horizontal start), y = bottom of horizontal line
                                                                pointerEvents: "none",
                                                            }}
                                                        ></i>
                                                        {/* Third small veritcal line */}
                                                        <i
                                                            style={{
                                                                position: "absolute",
                                                                width: "1px", // thin vertical line width
                                                                height: "40px", // vertical length
                                                                background: "rgb(153, 153, 153)",
                                                                transform: "translate(-200px, 688px)", // x = 100px (same as horizontal start), y = bottom of horizontal line
                                                                pointerEvents: "none",
                                                            }}
                                                        ></i>
                                                        <i
                                                            style={{
                                                                position: "absolute",
                                                                width: "1px", // thin vertical line width
                                                                height: "490px", // vertical length
                                                                background: "rgb(153, 153, 153)",
                                                                transform: "translate(250px, 640px)", // x = 100px (same as horizontal start), y = bottom of horizontal line
                                                                pointerEvents: "none",
                                                            }}
                                                        ></i>
                                                        <i
                                                            style={{
                                                                position: "absolute",
                                                                width: "140px", // length of the horizontal line
                                                                height: "1px", // thin line height
                                                                background: "rgb(153, 153, 153)",
                                                                transform: "translate(250px, 640px)", // adjust X and Y position accordingly
                                                                pointerEvents: "none",
                                                            }}
                                                        ></i>
                                                        <i
                                                            style={{
                                                                position: "absolute",
                                                                width: "140px", // length of the horizontal line
                                                                height: "1px", // thin line height
                                                                background: "rgb(153, 153, 153)",
                                                                transform: "translate(250px, 870px)", // adjust X and Y position accordingly
                                                                pointerEvents: "none",
                                                            }}
                                                        ></i>
                                                        <i
                                                            style={{
                                                                position: "absolute",
                                                                width: "140px", // length of the horizontal line
                                                                height: "1px", // thin line height
                                                                background: "rgb(153, 153, 153)",
                                                                transform: "translate(250px, 1130px)", // adjust X and Y position accordingly
                                                                pointerEvents: "none",
                                                            }}
                                                        ></i>
                                                    </div>

                                                    {/* HON’BLE Minister of Commerce and Industry & President */}
                                                    <div
                                                        className="FamilyNode_root__LylyV"
                                                        style={{
                                                            width: "344px",
                                                            transform: "translate(0px, 0px)",
                                                            height: "350px",
                                                            paddingInline: "12px",
                                                        }}
                                                    >
                                                        <div style={{ width: "100%" }}>
                                                            <div className="d-flex justify-content-center mx-auto">
                                                                <div
                                                                    className="organogram-card pointer position-relative"
                                                                    // tabIndex={0}
                                                                    aria-label="View Profile HON’BLE MINISTER"
                                                                    role="link"
                                                                >
                                                                    <h3>PRESIDENT</h3>
                                                                    <small className="text-uppercase">
                                                                        (Minister of commerce & industry)
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="FamilyNode_root__LylyV"
                                                        style={{
                                                            width: "344px",
                                                            transform: "translate(0px, 0px)",
                                                            height: "350px",
                                                            paddingInline: "12px",
                                                        }}
                                                    >
                                                        <div style={{ width: "100%" }}>
                                                            <div className="d-flex justify-content-center mx-auto">
                                                                <div
                                                                    className="organogram-card pointer position-relative"
                                                                    // tabIndex={0}
                                                                    aria-label="View Profile HON’BLE MINISTER"
                                                                    role="link"
                                                                >
                                                                    <h3>CHAIRMAN</h3>
                                                                    <small className="text-uppercase">
                                                                        (Secretary DPIIT)
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="FamilyNode_root__LylyV"
                                                        style={{
                                                            width: "344px",
                                                            transform: "translate(0px, 0px)",
                                                            height: "350px",
                                                            paddingInline: "12px",
                                                        }}
                                                    >
                                                        <div style={{ width: "100%" }}>
                                                            <div className="d-flex justify-content-center mx-auto">
                                                                <div
                                                                    className="organogram-card pointer position-relative"
                                                                    // tabIndex={0}
                                                                    aria-label="View Profile HON’BLE MINISTER"
                                                                    role="link"
                                                                >
                                                                    <h3>Director General</h3>
                                                                    <small className="text-uppercase">
                                                                        (Chief Executive Officer)
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* //////////////////////////////// */}
                                        <div>
                                            <div>
                                                <div
                                                    style={{
                                                        // position: "",
                                                        width: "344px",
                                                        height: "180px",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            gap: "20px",
                                                        }}
                                                    >
                                                        <div
                                                            className="FamilyNode_root__LylyV"
                                                            style={{
                                                                width: "344px",
                                                                height: "350px",
                                                                transform: "translate(80px, -22px)",
                                                                paddingInline: "12px",
                                                            }}
                                                        >
                                                            <div style={{ width: "100%" }}>
                                                                <div className="d-flex justify-content-center mx-auto">
                                                                    <div
                                                                        className="organogram-card pointer position-relative"
                                                                        tabIndex={0}
                                                                        aria-label="View Profile HON’BLE MINISTER"
                                                                        role="link"
                                                                    >
                                                                        <small className="text-uppercase">
                                                                            Minister of Commerce and Industry &
                                                                            President
                                                                        </small>
                                                                        <p className="h4">Sh. Piyush Goyal</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div
                                                            className="FamilyNode_root__LylyV"
                                                            style={{
                                                                width: "344px",
                                                                height: "350px",
                                                                transform: "translate(475px, -22px)",
                                                                paddingInline: "12px",
                                                            }}
                                                        >
                                                            <div style={{ width: "100%" }}>
                                                                <div className="d-flex justify-content-center mx-auto">
                                                                    <div
                                                                        className="organogram-card pointer position-relative"
                                                                        tabIndex={0}
                                                                        aria-label="View Profile HON’BLE MINISTER"
                                                                        role="link"
                                                                    >
                                                                        <small className="text-uppercasenpm run dev
                                                                        ">
                                                                            Minister of and Industry & President
                                                                        </small>
                                                                        <p className="h4">Sh. Piyush Goyal</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* //////////////////// */}
                                                <div
                                                    style={{
                                                        // position: "",
                                                        width: "344px",
                                                        height: "400px",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            gap: "20px",
                                                        }}
                                                    >
                                                        <div
                                                            className="FamilyNode_root__LylyV"
                                                            style={{
                                                                width: "344px",
                                                                height: "350px",
                                                                transform: "translate(80px, -22px)",
                                                                paddingInline: "12px",
                                                            }}
                                                        >
                                                            <div style={{ width: "100%" }}>
                                                                <div className="d-flex justify-content-center mx-auto">
                                                                    <div
                                                                        className="organogram-card pointer position-relative"
                                                                        tabIndex={0}
                                                                        aria-label="View Profile HON’BLE MINISTER"
                                                                        role="link"
                                                                    >
                                                                        <small className="text-uppercase">
                                                                            Minister of Commerce and Industry &
                                                                            President
                                                                        </small>
                                                                        <p className="h4">Sh. Piyush Goyal</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div
                                                            className="FamilyNode_root__LylyV"
                                                            style={{
                                                                width: "344px",
                                                                height: "350px",
                                                                transform: "translate(475px, -22px)",
                                                                paddingInline: "12px",
                                                            }}
                                                        >
                                                            <div style={{ width: "100%" }}>
                                                                <div className="d-flex justify-content-center mx-auto">
                                                                    <div
                                                                        className="organogram-card pointer position-relative"
                                                                        tabIndex={0}
                                                                        aria-label="View Profile HON’BLE MINISTER"
                                                                        role="link"
                                                                    >
                                                                        <small className="text-uppercase">
                                                                            Minister of Commerce and Industry &
                                                                            President
                                                                        </small>
                                                                        <p className="h4">Sh. Piyush Goyal</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* //////////////////////// */}
                                                <div
                                                    style={{
                                                        // position: "",
                                                        width: "1200px",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            gap: "20px",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                width: "1200px",
                                                                height: "200px",
                                                                transform: "translate(20px, -250px)",
                                                                paddingInline: "12px",
                                                            }}
                                                        >
                                                            <div style={{ width: "100%" }}>
                                                                <div className="d-flex  mx-auto">
                                                                    <div
                                                                        className="organogram-card-large pointer position-relative"
                                                                        tabIndex={0}
                                                                        aria-label="View Profile HON’BLE MINISTER"
                                                                        role="link"
                                                                    >
                                                                        <ul>
                                                                            <li>
                                                                                <strong>HQ, Delhi</strong> Delhi NCR
                                                                                (Noida and Gr. Noida) Madhya Pradesh
                                                                            </li>

                                                                            <li>
                                                                                <strong>
                                                                                    Regional Directorate, Chandigarh
                                                                                </strong>{" "}
                                                                                Punjab Haryana UT of Chandigarh Himachal
                                                                                Pradesh Jammu & Kashmir
                                                                            </li>

                                                                            <li>
                                                                                <strong>
                                                                                    Regional Directorate, Jaipur
                                                                                </strong>{" "}
                                                                                Rajasthan
                                                                            </li>

                                                                            <li>
                                                                                <strong>
                                                                                    Regional Directorate, Mumbai
                                                                                </strong>{" "}
                                                                                Maharashtra Goa
                                                                            </li>

                                                                            <li>
                                                                                <strong>
                                                                                    Regional Directorate, Gandhinagar
                                                                                </strong>{" "}
                                                                                Gujarat UT of Daman & Diu UT of Dadra &
                                                                                Nagar Haveli
                                                                            </li>

                                                                            <li>
                                                                                <strong>
                                                                                    Regional Directorate, Patna
                                                                                </strong>{" "}
                                                                                Bihar Jharkhand
                                                                            </li>

                                                                            <li>
                                                                                <strong>
                                                                                    Regional Directorate, Kanpur
                                                                                </strong>{" "}
                                                                                Uttar Pradesh (except Noida & Gr. Noida)
                                                                                Uttarakhand
                                                                            </li>

                                                                            <li>
                                                                                <strong>
                                                                                    Regional Directorate, Kolkata
                                                                                </strong>{" "}
                                                                                West Bengal Sikkim Tripura
                                                                            </li>

                                                                            <li>
                                                                                <strong>
                                                                                    Regional Directorate, Bhubaneswar
                                                                                </strong>{" "}
                                                                                Odisha Chhattisgarh
                                                                            </li>

                                                                            <li>
                                                                                <strong>
                                                                                    Regional Directorate, Hyderabad
                                                                                </strong>{" "}
                                                                                Andhra Pradesh Telangana
                                                                            </li>

                                                                            <li>
                                                                                <strong>
                                                                                    Regional Directorate, Bengaluru
                                                                                </strong>{" "}
                                                                                Karnataka Kerala
                                                                            </li>

                                                                            <li>
                                                                                <strong>
                                                                                    Dr. Ambedkar Institute of Productivity
                                                                                    (AIP), Chennai
                                                                                </strong>{" "}
                                                                                Tamil Nadu UT of Puducherry UT of
                                                                                Lakshadweep UT of Andaman & Nicobar
                                                                                Islands
                                                                            </li>

                                                                            <li>
                                                                                <strong>
                                                                                    Regional Directorate, Guwahati
                                                                                </strong>{" "}
                                                                                Assam Arunachal Pradesh Manipur
                                                                                Meghalaya Mizoram Nagaland
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* //////////////////////////////////////////////////////////////////////// */}
                                                            <div
                                                                className="FamilyNode_root__LylyV"
                                                                style={{
                                                                    width: "344px",
                                                                    height: "300px",
                                                                    transform: "translate(805px, -500px)",
                                                                    paddingInline: "12px",
                                                                }}
                                                            >
                                                                <div style={{ width: "100%" }}>
                                                                    <div className="d-flex  mx-auto">
                                                                        <div
                                                                            className="organogram-card-medium pointer position-relative"
                                                                            tabIndex={0}
                                                                            aria-label="View Profile HON’BLE MINISTER"
                                                                            role="link"
                                                                        >
                                                                            <ul>
                                                                                <li>Agri Business</li>
                                                                                <li>Economic Services</li>
                                                                                <li>Energy Management</li>
                                                                                <li>Environment and Climate Action</li>
                                                                                <li>International Services</li>
                                                                                <li>Industrial Engineering</li>
                                                                                <li>Information Technology</li>
                                                                                <li>Human Resource Management</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="FamilyNode_root__LylyV"
                                                                style={{
                                                                    width: "344px",
                                                                    height: "300px",
                                                                    transform: "translate(805px, -460px)",
                                                                    paddingInline: "12px",
                                                                }}
                                                            >
                                                                <div style={{ width: "100%" }}>
                                                                    <div className="d-flex justify-content-center mx-auto">
                                                                        <div
                                                                            className="organogram-card-medium pointer position-relative"
                                                                            tabIndex={0}
                                                                            aria-label="View Profile HON’BLE MINISTER"
                                                                            role="link"
                                                                        >
                                                                            <ul>
                                                                                <li>Finance</li>
                                                                                <li>Administration</li>
                                                                                <li>
                                                                                    Planning Monitoring and Coordination
                                                                                    Cell
                                                                                </li>
                                                                                <li>Inspection Division</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* //////////////////////////////////// */}
                                        <div>
                                            <div>
                                                {/* <div
                          style={{
                            // position: "",
                            width: "344px",
                            height: "400px",
                          }}
                        ></div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}
