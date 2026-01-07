// // "use client";
// // import { useState } from 'react';
// // import InnerBannerSection from "@/components/InnerBannerSection";
// // import { navigationConfig } from "@/config/naviagtion";

// // function TabNavigation() {
// //   const [activeTab, setActiveTab] = useState('national');

// //   // Data for National Programs (INR)
// //   const nationalTableData = [
// //     {
// //       sno: 1,
// //       facility: "Rectangular shaped Hall multi-purpose table & chairs",
// //       tariff: "₹15,000 + Taxes",
// //       fullDaySlot: "Full-Day Slot",
// //       halfDaySlot: "Half-Day Slot"
// //     },
// //     {
// //       sno: 2,
// //       facility: "30 seats around the table in U-type layout and 40 at the back row",
// //       tariff: "Full-Day Slot: ₹15,000 + Taxes",
// //       fullDaySlot: "09 AM – 05 PM",
// //       halfDaySlot: "Half-Day Slots"
// //     },
// //     {
// //       sno: 3,
// //       facility: "Around 100 delegates in class-room layout",
// //       tariff: "Half-Day Slot: ₹7,500 + Taxes",
// //       fullDaySlot: "11 AM – 07 PM",
// //       halfDaySlot: "09 AM – 01 PM, 02 PM – 06 PM"
// //     },
// //     {
// //       sno: 4,
// //       facility: "1 nos podium with mike for speaker",
// //       tariff: "",
// //       fullDaySlot: "",
// //       halfDaySlot: ""
// //     },
// //     {
// //       sno: 5,
// //       facility: "Audio sound system (Bosch), Video recording, Table (3 nos) Micro-phone, Collar cordless mike (1.nos), Cordless mike (2nos), Internet Wi-Fi Connection, Tower ACs, Thermal Efficiency Sound-proof windows, Dios with three chairs, Laser Pointer",
// //       tariff: "Included in base tariff",
// //       fullDaySlot: "",
// //       halfDaySlot: ""
// //     },
// //     {
// //       sno: 6,
// //       facility: "Additional charges of ₹7,500 per hour plus applicable taxes for availing Video Conferencing facility by the client",
// //       tariff: "₹7,500/hour + taxes",
// //       fullDaySlot: "",
// //       halfDaySlot: ""
// //     },
// //     {
// //       sno: 7,
// //       facility: "Additional charges for availing catering services by the client and actual amount to be paid directly to the catering Agency who is empanelled caterer of NPC for catering services at reasonable rates",
// //       tariff: "As per actual",
// //       fullDaySlot: "",
// //       halfDaySlot: ""
// //     },
// //     {
// //       sno: 8,
// //       facility: "Additional charges of ₹2,000 per day plus applicable taxes for use of Lawn for serving tea, lunch etc. In case of additional requirements such as tent, crockery, tables etc charges will be as per actual",
// //       tariff: "₹2,000/day + taxes",
// //       fullDaySlot: "",
// //       halfDaySlot: ""
// //     }
// //   ];

// //   // Data for International Programs (USD) - From your image
// //   const internationalTableData = [
// //     {
// //       sno: 1,
// //       facility: "Rectangular shaped Hall multi-purpose table & chairs",
// //       tariff: "",
// //       timing: ""
// //     },
// //     {
// //       sno: 2,
// //       facility: "30 seats around the table in U-type layout and 40 at the back row",
// //       tariff: "Full-Day Slot",
// //       timing: "Full-Day Slot"
// //     },
// //     {
// //       sno: 3,
// //       facility: "Around 100 delegates in class-room layout",
// //       tariff: "$US 350 + Taxes",
// //       timing: "09 AM – 05 PM, 11 AM – 07 PM"
// //     },
// //     {
// //       sno: 4,
// //       facility: "1 nos podium with mike for speaker",
// //       tariff: "Half-Day Slots",
// //       timing: "Half-Day Slots"
// //     },
// //     {
// //       sno: 5,
// //       facility: "Audio sound system (Bosch), Video recording, Table (3 nos) Micro-phone, Collar cordless mike (1.nos), Cordless mike (2nos), Internet Wi-Fi Connection, Tower ACs, Thermal Efficiency Sound-proof windows, Dios with three chairs, Laser Pointer",
// //       tariff: "$US 175 + Taxes",
// //       timing: "09 AM – 01 PM, 02 PM – 06 PM"
// //     },
// //     {
// //       sno: 6,
// //       facility: "Additional charges of $ US 170 per hour plus applicable taxes for availing Video Conferencing facility by the client",
// //       tariff: "$US 170/hour + taxes",
// //       timing: ""
// //     },
// //     {
// //       sno: 7,
// //       facility: "Additional charges for availing catering services by the client and actual amount to be paid directly to the catering Agency who is empanelled caterer of NPC for catering services at reasonable rates. Catering Charges",
// //       tariff: "As per actual",
// //       timing: ""
// //     },
// //     {
// //       sno: 8,
// //       facility: "Additional charges of $ US 50 per day plus applicable taxes for use of Lawn for serving tea, lunch etc. In case of additional requirements such as tent, crockery, tables etc charges will be as per actual",
// //       tariff: "$US 50/day + taxes",
// //       timing: ""
// //     }
// //   ];

// //   return (
// //     <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-4">
// //       <div className="mb-4">
// //         <ul className="nav nav-pills tabfont">
// //           <li className="nav-item pr-4">
// //             <a
// //               className={`nav-link ${activeTab === 'national' ? 'active' : ''}`}
// //               href="#"
// //               onClick={(e) => {
// //                 e.preventDefault();
// //                 setActiveTab('national');
// //               }}
// //               style={{
// //                 color: activeTab === 'national' ? '' : '#666666',
// //                 textDecoration: activeTab === 'national' ? 'underline' : 'none',
// //                 cursor: 'pointer',
// //                 fontSize: '1.1rem',
// //                 fontWeight: activeTab === 'national' ? '600' : '500'
// //               }}
// //             >
// //               For National Programs
// //             </a>
// //           </li>
// //           <li className="nav-item pl-4">
// //             <a
// //               className={`nav-link ${activeTab === 'international' ? 'active' : ''}`}
// //               href="#"
// //               onClick={(e) => {
// //                 e.preventDefault();
// //                 setActiveTab('international');
// //               }}
// //               style={{
// //                 color: activeTab === 'international' ? '' : '#666666',
// //                 textDecoration: activeTab === 'international' ? 'underline' : 'none',
// //                 cursor: 'pointer',
// //                 fontSize: '1.1rem',
// //                 fontWeight: activeTab === 'international' ? '600' : '500'
// //               }}
// //             >
// //               For International Programs
// //             </a>
// //           </li>
// //         </ul>
// //       </div>

// //       {/* Tab Content */}
// //       <div className="tab-content mt-4">
// //         {/* National Programs Table */}
// //         <div className={`tab-pane fade ${activeTab === 'national' ? 'show active' : ''}`} id="SangamNational">
// //           <div className="p-4 border rounded bg-light">
// //             <h3 className="text-primary mb-4 ">For National Programs</h3>
// //             <div className="table-responsive">
// //               <table className="table table-bordered table-striped table-hover color: #214aab ">
// //                 <thead className="table-dark">
// //                   <tr>
// //                     <th className ="width= 5%">S.No.</th>
// //                     <th className ="width= 45%">Facilities Provided</th>
// //                     <th className ="width= 15%">Tariff</th>
// //                     <th className ="width= 15%">Half & Full-Day Slot</th>
// //                     <th className ="width= 15%">Half-Day Slot</th>

// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {nationalTableData.map((item) => (
// //                     <tr key={item.sno}>
// //                       <td className="text-center fw-bold">{item.sno}</td>
// //                       <td>{item.facility}</td>
// //                       <td className="text-center">
// //                         {item.tariff && <span className="text-success fw-bold">{item.tariff}</span>}
// //                       </td>
// //                       <td className="text-center">{item.fullDaySlot}</td>
// //                       <td className="text-center">{item.halfDaySlot}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //                 <tfoot>
// //                   <tr className="table-warning">

// //                   </tr>
// //                 </tfoot>
// //               </table>
// //             </div>

// //           </div>
// //         </div>

// //         {/* International Programs Table */}
// //         <div className={`tab-pane fade ${activeTab === 'international' ? 'show active' : ''}`} id="SangamInternational">
// //           <div className="p-4 border rounded bg-light">
// //             <h3 className="text-primary mb-4">For International Programs</h3>
// //             <div className="table-responsive">
// //               <table className="table table-bordered table-striped table-hover">
// //                 <thead className="table-dark">
// //                   <tr>
// //                     <th className="width=5%" >S.No.</th>
// //                     <th className="width=45%" >Facilities Provided</th>
// //                     <th className="width=15%" >Tariff</th>
// //                     <th className="width=15%" >Full & Half Day Slots Timing</th>

// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {internationalTableData.map((item) => (
// //                     <tr key={item.sno}>
// //                       <td className="text-center fw-bold">{item.sno}</td>
// //                       <td>{item.facility}</td>
// //                       <td className="text-center">
// //                         {item.tariff && <span className="text-success fw-bold">{item.tariff}</span>}
// //                       </td>
// //                       <td className="text-center">{item.timing}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //                 <tfoot>
// //                   <tr className="table-warning">

// //                   </tr>
// //                 </tfoot>
// //               </table>
// //             </div>

// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default function AboutUs() {
// //   return (
// //     <div>
// //       <InnerBannerSection
// //         imageSrc={navigationConfig["facilities"].imageSrc}
// //         breadcrumbs={navigationConfig["facilities"].breadcrumbs}
// //         navItems={navigationConfig["facilities"].navItems}
// //         pageTilte="Conference Hall"
// //       />

// //       <div className="container">
// //         <h1 className="pghdng2 pghdng1 headingcontrast display-4 fw-bold mb-4 p-4">
// //           Sang<span className="text-primary">am Hall</span>
// //         </h1>

// //         <div
// //           className="row py-5 px-3 px-md-5 imgopacity d-flex justify-content-between align-items-center"
// //           style={{
// //             backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')",
// //             backgroundSize: "cover",
// //             backgroundPosition: "center",
// //             backgroundRepeat: "no-repeat",
// //             backgroundAttachment: "fixed",
// //             minHeight: "70vh",
// //             color: "white",
// //             marginBottom: "2rem",
// //             borderRadius: "10px"
// //           }}
// //         >
// //           <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
// //             <img
// //               src="https://www.npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture1.jpg"
// //               className="imgclass"
// //               style={{
// //                 width: "100%",
// //                 maxWidth: "350px",
// //                 height: "250px",
// //                 objectFit: "cover",
// //                 borderRadius: "8px",
// //                 boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
// //               }}
// //               alt="Sangam Hall Interior"
// //             />
// //           </div>
// //           <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
// //             <img
// //               src="https://www.npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture2.jpg"
// //               className="imgclass"
// //               style={{
// //                 width: "100%",
// //                 maxWidth: "350px",
// //                 height: "250px",
// //                 objectFit: "cover",
// //                 borderRadius: "8px",
// //                 boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
// //               }}
// //               alt="Sangam Hall Auditorium"
// //             />
// //           </div>
// //           <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
// //             <img
// //               src="https://www.npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture6.jpg"
// //               className="imgclass"
// //               style={{
// //                 width: "100%",
// //                 maxWidth: "350px",
// //                 height: "250px",
// //                 objectFit: "cover",
// //                 borderRadius: "8px",
// //                 boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
// //               }}
// //               alt="Sangam Hall Stage"
// //             />
// //           </div>

// //           <div className="col-12 mt-4">
// //             <h2 className="text-left text-white fw-bold" style={{textShadow: "2px 2px 4px rgba(0,0,0,0.8)"}}>
// //               NPC observes the principles of Circular Economy on World Environment Day to promote waste management by re-use, recycle, etc. to enhance optimal use & sustainability of resources
// //             </h2>
// //           </div>
// //         </div>

// //         <div className="row">
// //           <div className="col-12">
// //             <p className="p-4 mb-0 fs-5">Information for hall booking are as follows:</p>

// //             <TabNavigation />

// //              <div>

// //       <div className="container">
// //         <h1 className="pghdng2 pghdng1 headingcontrast display-4 fw-bold mb-4 p-4">
// //           Mant<span className="text-primary">han Hall</span>
// //         </h1>

// //         <div
// //           className="row py-5 px-3 px-md-5 imgopacity d-flex justify-content-between align-items-center"
// //           style={{
// //             backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')",
// //             backgroundSize: "cover",
// //             backgroundPosition: "center",
// //             backgroundRepeat: "no-repeat",
// //             backgroundAttachment: "fixed",
// //             minHeight: "70vh",
// //             color: "white",
// //             marginBottom: "2rem",
// //             borderRadius: "10px"
// //           }}
// //         >
// //           <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
// //             <img
// //               src="https://www.npcindia.gov.in/NPC/Images/Facilities/Manthan%20Conference%20Hall/Picture5.jpg"
// //               className="imgclass"
// //               style={{
// //                 width: "100%",
// //                 maxWidth: "350px",
// //                 height: "250px",
// //                 objectFit: "cover",
// //                 borderRadius: "8px",
// //                 boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
// //               }}
// //               alt="Sangam Hall Interior"
// //             />
// //           </div>
// //           <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
// //             <img
// //               src="https://www.npcindia.gov.in/NPC/Images/Facilities/Manthan%20Conference%20Hall/Picture8.jpg"
// //               className="imgclass"
// //               style={{
// //                 width: "100%",
// //                 maxWidth: "350px",
// //                 height: "250px",
// //                 objectFit: "cover",
// //                 borderRadius: "8px",
// //                 boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
// //               }}
// //               alt="Sangam Hall Auditorium"
// //             />
// //           </div>
// //           <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
// //             <img
// //               src="https://www.npcindia.gov.in/NPC/Images/Facilities/Manthan%20Conference%20Hall/Picture7.jpg"
// //               className="imgclass"
// //               style={{
// //                 width: "100%",
// //                 maxWidth: "350px",
// //                 height: "250px",
// //                 objectFit: "cover",
// //                 borderRadius: "8px",
// //                 boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
// //               }}
// //               alt="Sangam Hall Stage"
// //             />
// //           </div>

// //           <div className="col-12 mt-4">
// //             <h2 className="text-left text-white fw-bold" style={{textShadow: "2px 2px 4px rgba(0,0,0,0.8)"}}>
// //               NPC observes the principles of Circular Economy on World Environment Day to promote waste management by re-use, recycle, etc. to enhance optimal use & sustainability of resources
// //             </h2>
// //           </div>
// //         </div>
// //         </div>
// //         </div>

// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import { useState } from 'react';
// import InnerBannerSection from "@/components/InnerBannerSection";
// import { navigationConfig } from "@/config/naviagtion";

// function TabNavigation() {
//   const [activeTab, setActiveTab] = useState('national');

//   // Data for National Programs (INR)
//   const nationalTableData = [
//     {
//       sno: 1,
//       facility: "Rectangular shaped Hall multi-purpose table & chairs",
//       tariff: "",
//       timing: ""
//     },
//     {
//       sno: 2,
//       facility: "30 seats around the table in U-type layout and 40 at the back row",
//       tariff: "Full-Day Slot: ₹15,000 + Taxes",
//       timing: "09 AM – 05 PM, 11 AM – 07 PM"
//     },
//     {
//       sno: 3,
//       facility: "Around 100 delegates in class-room layout",
//       tariff: "Half-Day Slots: ₹7,500 + Taxes",
//       timing: "09 AM – 01 PM, 02 PM – 06 PM"
//     },
//     {
//       sno: 4,
//       facility: "1 nos podium with mike for speaker",
//       tariff: "Included in base tariff",
//       timing: ""
//     },
//     {
//       sno: 5,
//       facility: "Audio sound system (Bosch), Video recording, Table (3 nos) Micro-phone, Collar cordless mike (1.nos), Cordless mike (2nos), Internet Wi-Fi Connection, Tower ACs, Thermal Efficiency Sound-proof windows, Dias with three chairs, Laser Pointer",
//       tariff: "Included in base tariff",
//       timing: ""
//     },
//     {
//       sno: 6,
//       facility: "Additional charges of ₹7,500 per hour plus applicable taxes for availing Video Conferencing facility by the client",
//       tariff: "₹7,500/hour + taxes",
//       timing: ""
//     },
//     {
//       sno: 7,
//       facility: "Additional charges for availing catering services by the client and actual amount to be paid directly to the catering Agency who is empanelled caterer of NPC for catering services at reasonable rates",
//       tariff: "As per actual",
//       timing: ""
//     },
//     {
//       sno: 8,
//       facility: "Additional charges of ₹2,000 per day plus applicable taxes for use of Lawn for serving tea, lunch etc. In case of additional requirements such as tent, crockery, tables etc charges will be as per actual",
//       tariff: "₹2,000/day + taxes",
//       timing: ""
//     }
//   ];

//   // Data for International Programs (USD) - From your image
//   const internationalTableData = [
//     {
//       sno: 1,
//       facility: "Rectangular shaped Hall multi-purpose table & chairs",
//       tariff: "",
//       timing: ""
//     },
//     {
//       sno: 2,
//       facility: "30 seats around the table in U-type layout and 40 at the back row",
//       tariff: "Full-Day Slot: $US 350 + Taxes",
//       timing: "09 AM – 05 PM, 11 AM – 07 PM"
//     },
//     {
//       sno: 3,
//       facility: "Around 100 delegates in class-room layout",
//       tariff: "Half-Day Slots: $US 175 + Taxes",
//       timing: "09 AM – 01 PM, 02 PM – 06 PM"
//     },
//     {
//       sno: 4,
//       facility: "1 nos podium with mike for speaker",
//       tariff: "Included in base tariff",
//       timing: ""
//     },
//     {
//       sno: 5,
//       facility: "Audio sound system (Bosch), Video recording, Table (3 nos) Micro-phone, Collar cordless mike (1.nos), Cordless mike (2nos), Internet Wi-Fi Connection, Tower ACs, Thermal Efficiency Sound-proof windows, Dias with three chairs, Laser Pointer",
//       tariff: "Included in base tariff",
//       timing: ""
//     },
//     {
//       sno: 6,
//       facility: "Additional charges of $ US 170 per hour plus applicable taxes for availing Video Conferencing facility by the client",
//       tariff: "$US 170/hour + taxes",
//       timing: ""
//     },
//     {
//       sno: 7,
//       facility: "Additional charges for availing catering services by the client and actual amount to be paid directly to the catering Agency who is empanelled caterer of NPC for catering services at reasonable rates. Catering Charges",
//       tariff: "As per actual",
//       timing: ""
//     },
//     {
//       sno: 8,
//       facility: "Additional charges of $ US 50 per day plus applicable taxes for use of Lawn for serving tea, lunch etc. In case of additional requirements such as tent, crockery, tables etc charges will be as per actual",
//       tariff: "$US 50/day + taxes",
//       timing: ""
//     }
//   ];

//   return (
//     <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-4">
//       <div className="mb-4">
//         <ul className="nav nav-pills tabfont">
//           <li className="nav-item pr-4">
//             <a
//               className={`nav-link ${activeTab === 'national' ? 'active' : ''}`}
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setActiveTab('national');
//               }}
//               style={{
//                 color: activeTab === 'national' ? '#214aab' : '#666666',
//                 textDecoration: activeTab === 'national' ? 'underline' : 'none',
//                 cursor: 'pointer',
//                 fontSize: '1.1rem',
//                 fontWeight: activeTab === 'national' ? '600' : '500'
//               }}
//             >
//               For National Programs
//             </a>
//           </li>
//           <li className="nav-item pl-4">
//             <a
//               className={`nav-link ${activeTab === 'international' ? 'active' : ''}`}
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setActiveTab('international');
//               }}
//               style={{
//                 color: activeTab === 'international' ? '#214aab' : '#666666',
//                 textDecoration: activeTab === 'international' ? 'underline' : 'none',
//                 cursor: 'pointer',
//                 fontSize: '1.1rem',
//                 fontWeight: activeTab === 'international' ? '600' : '500'
//               }}
//             >
//               For International Programs
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Tab Content */}
//       <div className="tab-content mt-4">
//         {/* National Programs Table */}
//         <div className={`tab-pane fade ${activeTab === 'national' ? 'show active' : ''}`} id="SangamNational">
//           <div className="p-4 border rounded bg-light">
//             <h3 className="text-primary mb-4">For National Programs</h3>
//             <div className="table-responsive">
//               <table className="table table-bordered table-striped table-hover">
//                 <thead style={{ backgroundColor: '#214aab', color: 'white' }}>
//                   <tr>
//                     <th className="text-center" style={{ width: '5%' }}>S.No.</th>
//                     <th style={{ width: '50%' }}>Facilities Provided</th>
//                     <th className="text-center" style={{ width: '20%' }}>Tariff</th>
//                     <th className="text-center" style={{ width: '25%' }}>Full & Half Day Slots Timing</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {nationalTableData.map((item) => (
//                     <tr key={item.sno}>
//                       <td className="text-center fw-bold">{item.sno}</td>
//                       <td>{item.facility}</td>
//                       <td className="text-center">
//                         {item.tariff && <span className="text-success fw-bold">{item.tariff}</span>}
//                       </td>
//                       <td className="text-center">{item.timing}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* International Programs Table */}
//         <div className={`tab-pane fade ${activeTab === 'international' ? 'show active' : ''}`} id="SangamInternational">
//           <div className="p-4 border rounded bg-light">
//             <h3 className="text-primary mb-4">For International Programs</h3>
//             <div className="table-responsive">
//               <table className="table table-bordered table-striped table-hover">
//                 <thead style={{ backgroundColor: '#214aab', color: 'white' }}>
//                   <tr>
//                     <th className="text-center" style={{ width: '5%' }}>S.No.</th>
//                     <th style={{ width: '50%' }}>Facilities Provided</th>
//                     <th className="text-center" style={{ width: '20%' }}>Tariff</th>
//                     <th className="text-center" style={{ width: '25%' }}>Full & Half Day Slots Timing</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {internationalTableData.map((item) => (
//                     <tr key={item.sno}>
//                       <td className="text-center fw-bold">{item.sno}</td>
//                       <td>{item.facility}</td>
//                       <td className="text-center">
//                         {item.tariff && <span className="text-success fw-bold">{item.tariff}</span>}
//                       </td>
//                       <td className="text-center">{item.timing}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Create a similar component for Manthan Hall
// function ManthanTabNavigation() {
//   const [activeTab, setActiveTab] = useState('national');

//   // Data for National Programs (INR) - You should update this with actual Manthan Hall data
//   const nationalTableData = [
//     {
//       sno: 1,
//       facility: "Rectangular shaped Hall multi-purpose table & chairs",
//       tariff: "",
//       timing: ""
//     },
//     {
//       sno: 2,
//       facility: "30 seats around the table in U-type layout and 40 at the back row",
//       tariff: "Full-Day Slot: ₹12,000 + Taxes",
//       timing: "09 AM – 05 PM, 11 AM – 07 PM"
//     },
//     {
//       sno: 3,
//       facility: "Around 80 delegates in class-room layout",
//       tariff: "Half-Day Slots: ₹6,000 + Taxes",
//       timing: "09 AM – 01 PM, 02 PM – 06 PM"
//     },
//     {
//       sno: 4,
//       facility: "1 nos podium with mike for speaker",
//       tariff: "Included in base tariff",
//       timing: ""
//     },
//     {
//       sno: 5,
//       facility: "Audio sound system, Video recording, Microphone, Internet Wi-Fi Connection, ACs, Sound-proof windows",
//       tariff: "Included in base tariff",
//       timing: ""
//     },
//     {
//       sno: 6,
//       facility: "Additional charges for availing Video Conferencing facility by the client",
//       tariff: "As per actual",
//       timing: ""
//     },
//     {
//       sno: 7,
//       facility: "Additional charges for availing catering services by the client",
//       tariff: "As per actual",
//       timing: ""
//     }
//   ];

//   // Data for International Programs (USD) - You should update this with actual Manthan Hall data
//   const internationalTableData = [
//     {
//       sno: 1,
//       facility: "Rectangular shaped Hall multi-purpose table & chairs",
//       tariff: "",
//       timing: ""
//     },
//     {
//       sno: 2,
//       facility: "30 seats around the table in U-type layout and 40 at the back row",
//       tariff: "Full-Day Slot: $US 300 + Taxes",
//       timing: "09 AM – 05 PM, 11 AM – 07 PM"
//     },
//     {
//       sno: 3,
//       facility: "Around 80 delegates in class-room layout",
//       tariff: "Half-Day Slots: $US 150 + Taxes",
//       timing: "09 AM – 01 PM, 02 PM – 06 PM"
//     },
//     {
//       sno: 4,
//       facility: "1 nos podium with mike for speaker",
//       tariff: "Included in base tariff",
//       timing: ""
//     },
//     {
//       sno: 5,
//       facility: "Audio sound system, Video recording, Microphone, Internet Wi-Fi Connection, ACs, Sound-proof windows",
//       tariff: "Included in base tariff",
//       timing: ""
//     },
//     {
//       sno: 6,
//       facility: "Additional charges for availing Video Conferencing facility by the client",
//       tariff: "As per actual",
//       timing: ""
//     },
//     {
//       sno: 7,
//       facility: "Additional charges for availing catering services by the client",
//       tariff: "As per actual",
//       timing: ""
//     }
//   ];

//   return (
//     <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-4">
//       <div className="mb-4">
//         <ul className="nav nav-pills tabfont">
//           <li className="nav-item pr-4">
//             <a
//               className={`nav-link ${activeTab === 'national' ? 'active' : ''}`}
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setActiveTab('national');
//               }}
//               style={{
//                 color: activeTab === 'national' ? '#214aab' : '#666666',
//                 textDecoration: activeTab === 'national' ? 'underline' : 'none',
//                 cursor: 'pointer',
//                 fontSize: '1.1rem',
//                 fontWeight: activeTab === 'national' ? '600' : '500'
//               }}
//             >
//               For National Programs
//             </a>
//           </li>
//           <li className="nav-item pl-4">
//             <a
//               className={`nav-link ${activeTab === 'international' ? 'active' : ''}`}
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setActiveTab('international');
//               }}
//               style={{
//                 color: activeTab === 'international' ? '#214aab' : '#666666',
//                 textDecoration: activeTab === 'international' ? 'underline' : 'none',
//                 cursor: 'pointer',
//                 fontSize: '1.1rem',
//                 fontWeight: activeTab === 'international' ? '600' : '500'
//               }}
//             >
//               For International Programs
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Tab Content */}
//       <div className="tab-content mt-4">
//         {/* National Programs Table */}
//         <div className={`tab-pane fade ${activeTab === 'national' ? 'show active' : ''}`} id="ManthanNational">
//           <div className="p-4 border rounded bg-light">
//             <h3 className="text-primary mb-4">For National Programs</h3>
//             <div className="table-responsive">
//               <table className="table table-bordered table-striped table-hover">
//                 <thead style={{ backgroundColor: '#214aab', color: 'white' }}>
//                   <tr>
//                     <th className="text-center" style={{ width: '5%' }}>S.No.</th>
//                     <th style={{ width: '50%' }}>Facilities Provided</th>
//                     <th className="text-center" style={{ width: '20%' }}>Tariff</th>
//                     <th className="text-center" style={{ width: '25%' }}>Full & Half Day Slots Timing</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {nationalTableData.map((item) => (
//                     <tr key={item.sno}>
//                       <td className="text-center fw-bold">{item.sno}</td>
//                       <td>{item.facility}</td>
//                       <td className="text-center">
//                         {item.tariff && <span className="text-success fw-bold">{item.tariff}</span>}
//                       </td>
//                       <td className="text-center">{item.timing}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* International Programs Table */}
//         <div className={`tab-pane fade ${activeTab === 'international' ? 'show active' : ''}`} id="ManthanInternational">
//           <div className="p-4 border rounded bg-light">
//             <h3 className="text-primary mb-4">For International Programs</h3>
//             <div className="table-responsive">
//               <table className="table table-bordered table-striped table-hover">
//                 <thead style={{ backgroundColor: '#214aab', color: 'white' }}>
//                   <tr>
//                     <th className="text-center" style={{ width: '5%' }}>S.No.</th>
//                     <th style={{ width: '50%' }}>Facilities Provided</th>
//                     <th className="text-center" style={{ width: '20%' }}>Tariff</th>
//                     <th className="text-center" style={{ width: '25%' }}>Full & Half Day Slots Timing</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {internationalTableData.map((item) => (
//                     <tr key={item.sno}>
//                       <td className="text-center fw-bold">{item.sno}</td>
//                       <td>{item.facility}</td>
//                       <td className="text-center">
//                         {item.tariff && <span className="text-success fw-bold">{item.tariff}</span>}
//                       </td>
//                       <td className="text-center">{item.timing}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function AboutUs() {
//   return (
//     <div>
//       <InnerBannerSection
//         imageSrc={navigationConfig["facilities"].imageSrc}
//         breadcrumbs={navigationConfig["facilities"].breadcrumbs}
//         navItems={navigationConfig["facilities"].navItems}
//         pageTilte="Conference Hall"
//       />

//       <div className="container">

//         <div
//           className="row py-5 px-3 px-md-5 imgopacity d-flex justify-content-between align-items-center"
//           style={{
//             backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             backgroundAttachment: "fixed",
//             minHeight: "70vh",
//             color: "white",
//             marginBottom: "2rem",
//             borderRadius: "10px"
//           }}
//         >
//           <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
//             <img
//               src="https://www.npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture1.jpg"
//               className="imgclass"
//               style={{
//                 width: "100%",
//                 maxWidth: "350px",
//                 height: "250px",
//                 objectFit: "cover",
//                 borderRadius: "8px",
//                 boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
//               }}
//               alt="Sangam Hall Interior"
//             />
//           </div>
//           <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
//             <img
//               src="https://www.npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture2.jpg"
//               className="imgclass"
//               style={{
//                 width: "100%",
//                 maxWidth: "350px",
//                 height: "250px",
//                 objectFit: "cover",
//                 borderRadius: "8px",
//                 boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
//               }}
//               alt="Sangam Hall Auditorium"
//             />
//           </div>
//           <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
//             <img
//               src="https://www.npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture6.jpg"
//               className="imgclass"
//               style={{
//                 width: "100%",
//                 maxWidth: "350px",
//                 height: "250px",
//                 objectFit: "cover",
//                 borderRadius: "8px",
//                 boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
//               }}
//               alt="Sangam Hall Stage"
//             />
//           </div>

//           <div className="col-12 mt-4">
//             <h2 className="text-left text-white fw-bold" style={{textShadow: "2px 2px 4px rgba(0,0,0,0.8)"}}>
//               NPC observes the principles of Circular Economy on World Environment Day to promote waste management by re-use, recycle, etc. to enhance optimal use & sustainability of resources
//             </h2>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-12">
//             <p className="p-4 mb-0 fs-5">Information for hall booking are as follows:</p>

//             <TabNavigation />

//             {/* Manthan Hall Section */}
//             <div>

//               <div
//                 className="row py-5 px-3 px-md-5 imgopacity d-flex justify-content-between align-items-center"
//                 style={{
//                   backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')",
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   backgroundRepeat: "no-repeat",
//                   backgroundAttachment: "fixed",
//                   minHeight: "70vh",
//                   color: "white",
//                   marginBottom: "2rem",
//                   borderRadius: "10px"
//                 }}
//               >
//                 <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
//                   <img
//                     src="https://www.npcindia.gov.in/NPC/Images/Facilities/Manthan%20Conference%20Hall/Picture5.jpg"
//                     className="imgclass"
//                     style={{
//                       width: "100%",
//                       maxWidth: "350px",
//                       height: "250px",
//                       objectFit: "cover",
//                       borderRadius: "8px",
//                       boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
//                     }}
//                     alt="Manthan Hall Interior"
//                   />
//                 </div>
//                 <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
//                   <img
//                     src="https://www.npcindia.gov.in/NPC/Images/Facilities/Manthan%20Conference%20Hall/Picture8.jpg"
//                     className="imgclass"
//                     style={{
//                       width: "100%",
//                       maxWidth: "350px",
//                       height: "250px",
//                       objectFit: "cover",
//                       borderRadius: "8px",
//                       boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
//                     }}
//                     alt="Manthan Hall Auditorium"
//                   />
//                 </div>
//                 <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
//                   <img
//                     src="https://www.npcindia.gov.in/NPC/Images/Facilities/Manthan%20Conference%20Hall/Picture7.jpg"
//                     className="imgclass"
//                     style={{
//                       width: "100%",
//                       maxWidth: "350px",
//                       height: "250px",
//                       objectFit: "cover",
//                       borderRadius: "8px",
//                       boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
//                     }}
//                     alt="Manthan Hall Stage"
//                   />
//                 </div>

//                 <div className="col-12 mt-4">
//                   <h2 className="text-left text-white fw-bold" style={{textShadow: "2px 2px 4px rgba(0,0,0,0.8)"}}>
//                     NPC observes the principles of Circular Economy on World Environment Day to promote waste management by re-use, recycle, etc. to enhance optimal use & sustainability of resources
//                   </h2>
//                 </div>
//               </div>

//               <p className="p-4 mb-0 fs-5">Information for hall booking are as follows:</p>
//               <ManthanTabNavigation />

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import InnerBannerSection from "@/components/InnerBannerSection";
// import { navigationConfig } from "@/config/naviagtion";
// import { useState, useEffect } from "react";

// export default function AboutUs() {
//   const images = [
//     {
//       src: "https://npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture1.jpg",
//       alt: " Image having Minister of MEITY",
//       title: "",
//       date: "",

//       href: "/publicationMedia/photo-gallery/album-1-ifshdfhsdfhsdoh",
//     },
//     {
//       src: "https://npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture2.jpg",
//       alt: "",
//       title: "",
//       date: "",

//       href: "/publicationMedia/photo-gallery/album-2-ifshdfhsdfhsdoh",
//     },
//     {
//       src: "https://npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture6.jpg",
//       alt: "",
//       title: "",
//       date: "",

//       href: "/publicationMedia/photo-gallery/album-1-ifshdfhsdfhsdoh",
//     },

//   ];
//   const [itemsPerPage, setItemsPerPage] = useState<number>(10);
//   const [selectedCategory, setSelectedCategory] = useState<string>("");
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [sortOrder, setSortOrder] = useState<string>("");

//   // -------------------- HELPERS --------------------
//   const parseDate = (value: string | number): number => {
//     if (typeof value === "number") {
//       return new Date(value, 0, 1).getTime();
//     }

//     const [day, month, year] = value.split(".");
//     return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
//   };

//   // -------------------- FILTER --------------------
//   const filteredOrganizations = images.filter((img) =>
//     img.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // -------------------- SORT (BY DATE) --------------------
//   const sortedOrganizations = [...filteredOrganizations].sort((a, b) => {
//     if (!sortOrder) return 0;

//     const dateA = parseDate(a.date);
//     const dateB = parseDate(b.date);

//     return sortOrder === "DESCY" ? dateB - dateA : dateA - dateB;
//   });

//   // -------------------- PAGINATION --------------------
//   const totalPages = Math.ceil(sortedOrganizations.length / itemsPerPage);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;

//   const currentItems = sortedOrganizations.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );

//   // -------------------- HANDLERS --------------------
//   const goToPage = (page: number) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   const goNext = () => {
//     if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
//   };

//   const goPrev = () => {
//     if (currentPage > 1) setCurrentPage((prev) => prev - 1);
//   };

//   const handleClearAll = () => {
//     setSelectedCategory("");
//     setSearchQuery("");
//     setSortOrder("");
//     setItemsPerPage(10);
//     setCurrentPage(1);
//   };

//   // -------------------- EFFECTS --------------------
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [sortOrder]);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchQuery]);

//   const highlightText = (text: string, query: string) => {
//     if (!query) return text;

//     const regex = new RegExp(`(${query})`, "gi");
//     const parts = text.split(regex);

//     return parts.map((part, index) =>
//       regex.test(part) ? (
//         <span key={index} style={{ backgroundColor: "yellow" }}>
//           {part}
//         </span>
//       ) : (
//         part
//       )
//     );
//   };
//   return (
//     <div style={{}}>
//       <InnerBannerSection
//         imageSrc={navigationConfig["publicationMedia"].imageSrc}
//         breadcrumbs={navigationConfig["publicationMedia"].breadcrumbs}
//         navItems={navigationConfig["publicationMedia"].navItems}
//         pageTilte="Photo Gallery"
//       />

//       <section className="mainContent">
//         <div className="container mt-5">
//           <form className="form-group row align-items-start row-gap-2 filterbox filterBoxResponsive">
//             <div className="col-md-12 col-lg-4">
//               <div className="input-group searchField">
//                 <span className="input-group-text">
//                   <span
//                     aria-hidden="true"
//                     className="material-symbols-outlined bhashini-skip-translation"
//                   >
//                     {/* <img src="/images/icons/Search_Icon.svg" alt="Search" /> */}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24 "
//                       viewBox="0 0 64 64"
//                       fill="none"
//                       // style={{display: flex; justify-content: center}}
//                     >
//                       <path
//                         d="M25.3333 42.6667C20.4889 42.6667 16.3889 40.9889 13.0333 37.6333C9.67778 34.2778 8 30.1778 8 25.3333C8 20.4889 9.67778 16.3889 13.0333 13.0333C16.3889 9.67778 20.4889 8 25.3333 8C30.1778 8 34.2778 9.67778 37.6333 13.0333C40.9889 16.3889 42.6667 20.4889 42.6667 25.3333C42.6667 27.2889 42.3556 29.1333 41.7333 30.8667C41.1111 32.6 40.2667 34.1333 39.2 35.4667L54.1333 50.4C54.6222 50.8889 54.8667 51.5111 54.8667 52.2667C54.8667 53.0222 54.6222 53.6444 54.1333 54.1333C53.6444 54.6222 53.0222 54.8667 52.2667 54.8667C51.5111 54.8667 50.8889 54.6222 50.4 54.1333L35.4667 39.2C34.1333 40.2667 32.6 41.1111 30.8667 41.7333C29.1333 42.3556 27.2889 42.6667 25.3333 42.6667ZM25.3333 37.3333C28.6667 37.3333 31.5 36.1667 33.8333 33.8333C36.1667 31.5 37.3333 28.6667 37.3333 25.3333C37.3333 22 36.1667 19.1667 33.8333 16.8333C31.5 14.5 28.6667 13.3333 25.3333 13.3333C22 13.3333 19.1667 14.5 16.8333 16.8333C14.5 19.1667 13.3333 22 13.3333 25.3333C13.3333 28.6667 14.5 31.5 16.8333 33.8333C19.1667 36.1667 22 37.3333 25.3333 37.3333Z"
//                         fill="#5279d7"
//                       />
//                     </svg>
//                   </span>
//                 </span>

//                 <input
//                   type="search"
//                   role="searchbox"
//                   name="scheme"
//                   aria-label="search"
//                   className="form-control"
//                   placeholder="Search..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />

//                 <span className="input-group-text filterIconResponsive d-block d-md-none">
//                   <span
//                     aria-hidden="true"
//                     className="material-symbols-outlined bhashini-skip-translation"
//                   >
//                     filter_alt
//                   </span>
//                 </span>
//               </div>
//             </div>

//             <div className="col-md-12 col-lg-8 d-none d-md-block filterIconResponsivebox">
//               <div className="d-flex align-items-center justify-content-end flex-wrap gap-2">
//                 <div className="input-group sortField">
//                   <span className="input-group-text">
//                     <span
//                       aria-hidden="true"
//                       className="material-symbols-outlined bhashini-skip-translation"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24 "
//                         viewBox="0 0 64 64"
//                         fill="none"
//                       >
//                         <path
//                           d="M8 48V42.6667H24V48H8ZM8 34.6667V29.3333H40V34.6667H8ZM8 21.3333V16H56V21.3333H8Z"
//                           fill="#162F6A"
//                         />
//                       </svg>
//                     </span>
//                   </span>
//                   <select
//                     className="form-select"
//                     role="listbox"
//                     aria-label="select"
//                     onChange={(e) => setSortOrder(e.target.value)}
//                   >
//                     <option value="">Sort by</option>
//                     <option value="DESCY">Latest</option>
//                     <option value="ASCY">Oldest</option>
//                   </select>
//                 </div>
//                 {/* Per Page Select */}
//                 <div className="input-group perPageField" role="combobox">
//                   <label htmlFor="pageLimitSelect" className="visually-hidden">
//                     Items per page
//                   </label>

//                   <span className="input-group-text">
//                     <span
//                       className="material-symbols-outlined bhashini-skip-translation"
//                       aria-hidden="true"
//                     >
//                       {/* <img src="/images/icons/List_Icon.svg" alt="List" /> */}
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24 "
//                         viewBox="0 0 64 64"
//                         fill="none"
//                       >
//                         <path
//                           d="M18.1605 50.9548C19.1048 50.9548 19.8957 50.6354 20.5332 49.9967C21.17 49.358 21.4885 48.5664 21.4885 47.6221C21.4885 46.6778 21.1691 45.8869 20.5304 45.2494C19.8916 44.6125 19.1001 44.2941 18.1558 44.2941C17.2115 44.2941 16.4209 44.6135 15.784 45.2522C15.1465 45.891 14.8278 46.6825 14.8278 47.6268C14.8278 48.5711 15.1471 49.3617 15.7859 49.9986C16.4253 50.6361 17.2168 50.9548 18.1605 50.9548ZM18.1605 36.3299C19.1048 36.3299 19.8957 36.0105 20.5332 35.3718C21.17 34.733 21.4885 33.9415 21.4885 32.9972C21.4885 32.0529 21.1691 31.2623 20.5304 30.6254C19.8916 29.9885 19.1001 29.6701 18.1558 29.6701C17.2115 29.6701 16.4209 29.9895 15.784 30.6282C15.1465 31.267 14.8278 32.0585 14.8278 33.0028C14.8278 33.9471 15.1471 34.7377 15.7859 35.3746C16.4253 36.0115 17.2168 36.3299 18.1605 36.3299ZM18.1605 21.7059C19.1048 21.7059 19.8957 21.3865 20.5332 20.7478C21.17 20.109 21.4885 19.3175 21.4885 18.3732C21.4885 17.4289 21.1691 16.6383 20.5304 16.0014C19.8916 15.3639 19.1001 15.0452 18.1558 15.0452C17.2115 15.0452 16.4209 15.3645 15.784 16.0033C15.1465 16.642 14.8278 17.4336 14.8278 18.3779C14.8278 19.3222 15.1471 20.1131 15.7859 20.7506C16.4253 21.3874 17.2168 21.7059 18.1605 21.7059ZM29.5976 50.4475H51.0273V44.8014H29.5976V50.4475ZM29.5976 35.8235H51.0273V30.1765H29.5976V35.8235ZM29.5976 21.1986H51.0273V15.5525H29.5976V21.1986ZM7.80565 65C5.90384 65 4.29412 64.3412 2.97647 63.0235C1.65882 61.7059 1 60.0962 1 58.1944V7.80565C1 5.90384 1.65882 4.29412 2.97647 2.97647C4.29412 1.65882 5.90384 1 7.80565 1H58.1944C60.0962 1 61.7059 1.65882 63.0235 2.97647C64.3412 4.29412 65 5.90384 65 7.80565V58.1944C65 60.0962 64.3412 61.7059 63.0235 63.0235C61.7059 64.3412 60.0962 65 58.1944 65H7.80565ZM7.80565 59.3529H58.1944C58.4842 59.3529 58.7497 59.2322 58.9906 58.9906C59.2322 58.7497 59.3529 58.4842 59.3529 58.1944V7.80565C59.3529 7.51576 59.2322 7.25035 58.9906 7.00941C58.7497 6.76784 58.4842 6.64706 58.1944 6.64706H7.80565C7.51576 6.64706 7.25035 6.76784 7.00941 7.00941C6.76784 7.25035 6.64706 7.51576 6.64706 7.80565V58.1944C6.64706 58.4842 6.76784 58.7497 7.00941 58.9906C7.25035 59.2322 7.51576 59.3529 7.80565 59.3529Z"
//                           fill="#5279d7"
//                         />
//                       </svg>
//                     </span>
//                   </span>

//                   <select
//                     className="form-select"
//                     id="pageLimitSelect"
//                     aria-label="pages"
//                     value={itemsPerPage}
//                     onChange={(e) => {
//                       setItemsPerPage(Number(e.target.value));
//                       setCurrentPage(1); // reset to page 1 whenever per-page changes
//                     }}
//                   >
//                     <option value="10">10 per page</option>
//                     <option value="15">15 per page</option>
//                     <option value="20">20 per page</option>
//                   </select>
//                 </div>
//                 {/* Clear Button */}
//                 {(itemsPerPage !== 10 || selectedCategory !== "") && (
//                   <div className="input-group perPageField">
//                     <button
//                       className="btn d-flex align-items-center justify-content-center w-100"
//                       title="Clear All"
//                       type="button"
//                       aria-label="Clear all filter"
//                       onClick={handleClearAll}
//                       style={{
//                         padding: "0.85rem 1.2rem",
//                         border: "1px solid #5279d7",
//                         borderRadius: "0.375rem",
//                         backgroundColor: "white",
//                       }}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="14"
//                         height="14"
//                         viewBox="0 0 66 66"
//                         fill="none"
//                         className="me-2"
//                       >
//                         <path
//                           d="M5.92308 65L1 60.0769L28.0769 33L1 5.92308L5.92308 1L33 28.0769L60.0769 1L65 5.92308L37.9231 33L65 60.0769L60.0769 65L33 37.9231L5.92308 65Z"
//                           fill="#162F6A"
//                         />
//                       </svg>

//                       <span style={{ all: "unset", fontSize: "1.5rem" }}>
//                         Clear All
//                       </span>
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </form>
//                 {/* Add this after the pagination section */}

//           <div className="row photos-row-gap">
//             {currentItems.map((photo, idx) => (
//               <div className="col-sm-12 col-md-6 col-lg-4" key={idx}>
//                 <div className="photos-card h-100">
//                   <div className="img-fluid position-relative">
//                     <img
//                       src={photo.src}
//                       className="photos-img img-fluid"
//                       alt={photo.alt}
//                       width={100}
//                       height={100}
//                     />
//                     <a
//                       className="position-absolute photos-btn pointer"
//                       // target="_blank"
//                       rel="noopener noreferrer"
//                       title={`Know More about ${photo.title}`}
//                       aria-label={`Know More about ${photo.title}`}
//                       href={photo.href}
//                     >
//                       <span className="material-symbols-outlined bhashini-skip-translation">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24 "
//                           viewBox="0 0 64 64"
//                           fill="none"
//                         >
//                           <path
//                             d="M43.1337 34.6667H13.3337C12.5781 34.6667 11.9448 34.4112 11.4337 33.9C10.9225 33.3889 10.667 32.7556 10.667 32C10.667 31.2445 10.9225 30.6112 11.4337 30.1C11.9448 29.5889 12.5781 29.3334 13.3337 29.3334H43.1337L30.067 16.2667C29.5337 15.7334 29.2781 15.1112 29.3003 14.4C29.3225 13.6889 29.6003 13.0667 30.1337 12.5334C30.667 12.0445 31.2892 11.7889 32.0003 11.7667C32.7114 11.7445 33.3337 12 33.867 12.5334L51.467 30.1334C51.7337 30.4 51.9225 30.6889 52.0337 31C52.1448 31.3112 52.2003 31.6445 52.2003 32C52.2003 32.3556 52.1448 32.6889 52.0337 33C51.9225 33.3112 51.7337 33.6 51.467 33.8667L33.867 51.4667C33.3781 51.9556 32.767 52.2001 32.0337 52.2001C31.3003 52.2001 30.667 51.9556 30.1337 51.4667C29.6003 50.9334 29.3337 50.3001 29.3337 49.5667C29.3337 48.8334 29.6003 48.2001 30.1337 47.6667L43.1337 34.6667Z"
//                             fill="#ffffffff"
//                           />
//                         </svg>
//                       </span>
//                     </a>
//                   </div>
//                   <div className="photos-card-body">
//                     <p className="photos-card-title h4">
//                       {" "}
//                       {highlightText(photo.title, searchQuery)}
//                     </p>
//                   </div>
//                   <div className="photos-card-footer d-flex justify-content-between align-items-center text-uppercase">
//                     <small className="ptype" aria-label={photo.date}>
//                       {photo.date}
//                     </small>
//                     <small className="ptype">{photo.items} </small>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
// <div className="row mt-5">
//     <div className="col-12">
//         <br />
//         <p>
//             NPC observes the principles of Circular Economy on World Environment Day to promote waste management by re-use, recycle, etc. to enhance optimal use & sustainability of resources
//         </p>
//         <br />
//     </div>
// </div>
//              </div>

//           <div className="row align-items-center mt-5">
//             <div className="col-md-4"></div>

//             <div className="col-md-4 d-flex justify-content-center">
//               <nav aria-label="Page navigation">
//                 <ul className="pagination pointer">
//                   <li>
//                     <button
//                       className="button-item previous mb-2"
//                       disabled={currentPage === 1}
//                       aria-label="Go to previous page"
//                       onClick={goPrev}
//                     >
//                       <img
//                         src="/images/icons/Chevron_Left.svg"
//                         alt="Previous Page"
//                       />
//                     </button>
//                   </li>

//                   {Array.from({ length: totalPages }).map((_, index) => {
//                     const page = index + 1;

//                     return (
//                       <li
//                         key={page}
//                         className="page-item"
//                         role="link"
//                         aria-label={`Go to page ${page}`}
//                       >
//                         <span
//                           className={`page-link pointer hover ${
//                             currentPage === page ? "active" : ""
//                           }`}
//                           onClick={() => goToPage(page)}
//                         >
//                           {page}
//                         </span>
//                       </li>
//                     );
//                   })}

//                   <li>
//                     <button
//                       className="button-item next mb-2"
//                       disabled={currentPage === totalPages}
//                       aria-label="Go to next page"
//                       onClick={goNext}
//                     >
//                       <span className="material-symbols-outlined">
//                         <img
//                           src="/images/icons/Chevron_Right.svg"
//                           alt="Next Page"
//                         />
//                       </span>
//                     </button>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>

//       </section>
//     </div>
//   );
// }

// // NEW ONE

// "use client";
// import { useState } from 'react';
// import InnerBannerSection from "@/components/InnerBannerSection";
// import { navigationConfig } from "@/config/naviagtion";

// function TabNavigation() {
//   const [activeTab, setActiveTab] = useState('national');

//   // Data for National Programs (INR)
//   const nationalTableData = [
//     {
//       SrNo: "1",
//       column1: "Rectangular shaped Hall multi-purpose table & chairs",
//       column2: "",
//       column3: ""
//     },
//     {
//       SrNo: "2",
//       column1: "30 seats around the table in U-type layout and 40 at the back row",
//       column2: "Full-Day Slot: ₹15,000 + Taxes",
//       column3: "09 AM – 05 PM, 11 AM – 07 PM"
//     },
//     {
//       SrNo: "3",
//       column1: "Around 100 delegates in class-room layout",
//       column2: "Half-Day Slots: ₹7,500 + Taxes",
//       column3: "09 AM – 01 PM, 02 PM – 06 PM"
//     },
//     {
//       SrNo: "4",
//       column1: "1 nos podium with mike for speaker",
//       column2: "Included in base tariff",
//       column3: ""
//     },
//     {
//       SrNo: "5",
//       column1: "Audio sound system (Bosch), Video recording, Table (3 nos) Micro-phone, Collar cordless mike (1.nos), Cordless mike (2nos), Internet Wi-Fi Connection, Tower ACs, Thermal Efficiency Sound-proof windows, Dias with three chairs, Laser Pointer",
//       column2: "Included in base tariff",
//       column3: ""
//     },
//     {
//       SrNo: "6",
//       column1: "Additional charges of ₹7,500 per hour plus applicable taxes for availing Video Conferencing facility by the client",
//       column2: "₹7,500/hour + taxes",
//       column3: ""
//     },
//     {
//       SrNo: "7",
//       column1: "Additional charges for availing catering services by the client and actual amount to be paid directly to the catering Agency who is empanelled caterer of NPC for catering services at reasonable rates",
//       column2: "As per actual",
//       column3: ""
//     },
//     {
//       SrNo: "8",
//       column1: "Additional charges of ₹2,000 per day plus applicable taxes for use of Lawn for serving tea, lunch etc. In case of additional requirements such as tent, crockery, tables etc charges will be as per actual",
//       column2: "₹2,000/day + taxes",
//       column3: ""
//     }
//   ];

//   // Data for International Programs (USD)
//   const internationalTableData = [
//     {
//       SrNo: "1",
//       column1: "Rectangular shaped Hall multi-purpose table & chairs",
//       column2: "",
//       column3: ""
//     },
//     {
//       SrNo: "2",
//       column1: "30 seats around the table in U-type layout and 40 at the back row",
//       column2: "Full-Day Slot: $US 350 + Taxes",
//       column3: "09 AM – 05 PM, 11 AM – 07 PM"
//     },
//     {
//       SrNo: "3",
//       column1: "Around 100 delegates in class-room layout",
//       column2: "Half-Day Slots: $US 175 + Taxes",
//       column3: "09 AM – 01 PM, 02 PM – 06 PM"
//     },
//     {
//       SrNo: "4",
//       column1: "1 nos podium with mike for speaker",
//       column2: "Included in base tariff",
//       column3: ""
//     },
//     {
//       SrNo: "5",
//       column1: "Audio sound system (Bosch), Video recording, Table (3 nos) Micro-phone, Collar cordless mike (1.nos), Cordless mike (2nos), Internet Wi-Fi Connection, Tower ACs, Thermal Efficiency Sound-proof windows, Dias with three chairs, Laser Pointer",
//       column2: "Included in base tariff",
//       column3: ""
//     },
//     {
//       SrNo: "6",
//       column1: "Additional charges of $ US 170 per hour plus applicable taxes for availing Video Conferencing facility by the client",
//       column2: "$US 170/hour + taxes",
//       column3: ""
//     },
//     {
//       SrNo: "7",
//       column1: "Additional charges for availing catering services by the client and actual amount to be paid directly to the catering Agency who is empanelled caterer of NPC for catering services at reasonable rates. Catering Charges",
//       column2: "As per actual",
//       column3: ""
//     },
//     {
//       SrNo: "8",
//       column1: "Additional charges of $ US 50 per day plus applicable taxes for use of Lawn for serving tea, lunch etc. In case of additional requirements such as tent, crockery, tables etc charges will be as per actual",
//       column2: "$US 50/day + taxes",
//       column3: ""
//     }
//   ];

//   // Reusable table component with 4 columns (for Sangam Hall)
//   const InfoTable = ({ title, members }: { title: string; members: any[] }) => {
//     return (
//       <div
//         role="table"
//         className="container our-team-list-container mx-auto my-4"
//       >
//         {/* Title */}
//         <div className="our-team-list-header d-flex align-items-center mb-2">
//           <span className="material-symbols-outlined bhashini-skip-translation me-2">

//           </span>
//           <p className="text-uppercase mb-0">{title}</p>
//         </div>

//         {/* Header Row */}
//         <div role="rowgroup">
//           <div className="row row-gap-4 me-0 ms-0 our-team-list-subheader fw-bold">
//             <div className="col-lg-1 col-sm-12 ps-1">S.No.</div>
//             <div className="col-lg-4 col-sm-12 ps-1">Facilities Provided</div>
//             <div className="col-lg-3 col-sm-12">Tariff</div>
//             <div className="col-lg-4 col-sm-12">Full & Half Day Slots Timing</div>
//           </div>
//         </div>

//         {/* Table Rows */}
//         <div role="rowgroup">
//           {members.map((row, idx) => (
//             <div
//               key={idx}
//               role="row"
//               className="row row-gap-4 me-0 ms-0 our-team-list-subheader-list"
//             >
//               {/* S.No. */}
//               <div className="col-lg-1 col-md-12">
//                 <div className="d-flex gap-2 align-items-center">
//                   <div className="d-flex flex-column">
//                     <p className="mb-0">{row.SrNo}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Facilities Provided */}
//               <div className="col-lg-4 col-md-12">
//                 <div className="d-flex gap-2 align-items-center">
//                   <div className="d-flex flex-column">
//                     <p className="mb-0">{row.column1}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Tariff */}
//               <div className="col-lg-3 col-md-12">
//                 <div className="d-flex gap-2 align-items-center">
//                   <div className="d-flex flex-column">
//                     <p className="mb-0">{row.column2}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Timing */}
//               <div className="col-lg-4 col-md-12">
//                 <div className="d-flex gap-2 align-items-center">
//                   <div className="d-flex flex-column">
//                     <p className="mb-0">{row.column3}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-4">
//       <div className="mb-4">
//         <ul className="nav nav-pills tabfont">
//           <li className="nav-item pr-4">
//             <a
//               className={`nav-link ${activeTab === 'national' ? 'active' : ''}`}
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setActiveTab('national');
//               }}
//               style={{
//                 color: activeTab === 'national' ? '#214aab' : '#666666',
//                 textDecoration: activeTab === 'national' ? 'underline' : 'none',
//                 cursor: 'pointer',
//                 fontSize: '1.1rem',
//                 fontWeight: activeTab === 'national' ? '600' : '500'
//               }}
//             >
//               For National Programs
//             </a>
//           </li>
//           <li className="nav-item pl-4">
//             <a
//               className={`nav-link ${activeTab === 'international' ? 'active' : ''}`}
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setActiveTab('international');
//               }}
//               style={{
//                 color: activeTab === 'international' ? '#214aab' : '#666666',
//                 textDecoration: activeTab === 'international' ? 'underline' : 'none',
//                 cursor: 'pointer',
//                 fontSize: '1.1rem',
//                 fontWeight: activeTab === 'international' ? '600' : '500'
//               }}
//             >
//               For International Programs
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Tab Content */}
//       <div className="tab-content mt-4">
//         {/* National Programs Table */}
//         <div className={`tab-pane fade ${activeTab === 'national' ? 'show active' : ''}`} id="SangamNational">
//           <div className="p-4 border rounded bg-light">
//             <h3 className="text-primary mb-4">For National Programs</h3>
//             <InfoTable title="Sangam Hall Facilities" members={nationalTableData} />
//           </div>
//         </div>

//         {/* International Programs Table */}
//         <div className={`tab-pane fade ${activeTab === 'international' ? 'show active' : ''}`} id="SangamInternational">
//           <div className="p-4 border rounded bg-light">
//             <h3 className="text-primary mb-4">For International Programs</h3>
//             <InfoTable title="Sangam Hall Facilities" members={internationalTableData} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Contact Person Details Table Component (5 columns)
// const ContactPersonTable = () => {
//   const tables = [
//     {
//       title: "Contact Person Details",
//       members: [
//         {
//           SrNo: "1",
//           column1: "Shri Rajesh Sund",
//           column2: "Director Gr-I & Group Head (ES & PP), HQ DELHI",
//           column3: "011-24607303",
//           column4: "rajesh.sund@npcindia.gov.in",
//         },
//         {
//           SrNo: "2",
//           column1: "C Narendra",
//           column2: "Director Gr-II & Regional Director (Bangalore)",
//           column3: "080-23467294",
//           column4: "c.narendra@npcindia.gov.in",
//         },
//         {
//           SrNo: "3",
//           column1: "Shri Manoj Kumar Verma",
//           column2: "Director Gr-II & Regional Director (Guwahati)",
//           column3: "0361-3512552",
//           column4: "mk.verma@npcindia.gov.in ; guwahati@npcindia.gov.in",
//         },
//         {
//           SrNo: "4",
//           column1: "Ashok Kumar",
//           column2: "In charge - Regional Director (Chandigarh)",
//           column3: "9888481938",
//           column4: "ashok.kumar@npcindia.gov.in",
//         },
//         {
//           SrNo: "5",
//           column1: "Dr. Rajat Sharma",
//           column2: "Director Gr-II & Regional Director (Kanpur)",
//           column3: "0512-2224176",
//           column4: "rajat.sharma@npcindia.gov.in",
//         },
//         {
//           SrNo: "6",
//           column1: "Shri Avijit Nayak",
//           column2: "Director Gr-II & Regional Director (Bhubaneswar)",
//           column3: "0674-2397381/26",
//           column4: "avijit.nayak@npcindia.gov.in",
//         },
//         {
//           SrNo: "7",
//           column1: "Shri G. Saravanan",
//           column2: "Director Gr-I & Head (AIP Chennai)",
//           column3: "044-26241059",
//           column4: "g.saravanan@npcindia.gov.in",
//         },
//         {
//           SrNo: "8",
//           column1: "Shri Rahul Kirkire",
//           column2: "Director Gr-I & Regional Director (Gandhinagar)",
//           column3: "079-23287344",
//           column4: "rahul.kirkire@npcindia.gov.in ; gandhinagar@npcindia.gov.in",
//         },
//         {
//           SrNo: "9",
//           column1: "Dr. B. Hemant",
//           column2: "Director Gr-I & Regional Director (Hyderabad)",
//           column3: "040-24733473",
//           column4: "hemant.rao@npcindia.gov.in ; hyderabad@npcindia.gov.in",
//         },
//         {
//           SrNo: "10",
//           column1: "Shri Mukesh Singh",
//           column2: "Director Gr-II & Regional Director (Jaipur)",
//           column3: "0141-2702935",
//           column4: "mukesh.singh@npcindia.gov.in ; jaipur@npcindia.gov.in",
//         },
//         {
//           SrNo: "11",
//           column1: "Shri S. Chakraborty",
//           column2: "Director Gr-I & Regional Director (Kolkata)",
//           column3: "033-22876069",
//           column4: "s.chakraborty@npcindia.gov.in",
//         },
//         {
//           SrNo: "12",
//           column1: "Shri BP Bhandary",
//           column2: "Director G-I & Regional Director (Mumbai)",
//           column3: "022-23002924, 23071322",
//           column4: "bp.bhandary@npcindia.gov.in",
//         },
//         {
//           SrNo: "13",
//           column1: "Shri J.K. Singh",
//           column2: "Director Gr-II & Regional Director (Patna)",
//           column3: "0612-2558311",
//           column4: "jk.singh@npcindia.gov.in ; patna@npcindia.gov.in",
//         },
//       ],
//     },
//   ];

//   const InfoTable = ({ title, members }: { title: string; members: any[] }) => {
//     return (
//       <div
//         role="table"
//         className="container our-team-list-container mx-auto my-4"
//       >
//         {/* Title */}
//         <div className="our-team-list-header d-flex align-items-center mb-2">
//           <span className="material-symbols-outlined bhashini-skip-translation me-2">

//           </span>
//           <p className="text-uppercase mb-0">{title}</p>
//         </div>

//         {/* Header Row */}
//         <div role="rowgroup">
//           <div className="row row-gap-4 me-0 ms-0 our-team-list-subheader fw-bold">
//             <div className="col-lg-1 col-sm-12 ps-1">S.No.</div>
//             <div className="col-lg-2 col-sm-12 ps-1">Name</div>
//             <div className="col-lg-4 col-sm-12 ps-1">Designation</div>
//             <div className="col-lg-2 col-sm-12">Telephone (Office)</div>
//             <div className="col-lg-3 col-sm-12">E-mail</div>
//           </div>
//         </div>

//         {/* Table Rows */}
//         <div role="rowgroup">
//           {members.map((row, idx) => (
//             <div
//               key={idx}
//               role="row"
//               className="row row-gap-4 me-0 ms-0 our-team-list-subheader-list"
//             >
//               {/* S.No. */}
//               <div className="col-lg-1 col-md-12">
//                 <div className="d-flex gap-2 align-items-center">
//                   <div className="d-flex flex-column">
//                     <p className="mb-0">{row.SrNo}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Name */}
//               <div className="col-lg-2 col-md-12">
//                 <div className="d-flex gap-2 align-items-center">
//                   <div className="d-flex flex-column">
//                     <p className="name mb-0">{row.column1}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Designation */}
//               <div className="col-lg-4 col-md-12">
//                 <div className="d-flex gap-2 align-items-center">
//                   <div className="d-flex flex-column">
//                     <p className="designation mb-0">{row.column2}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Telephone */}
//               <div className="col-lg-2 col-md-12">
//                 <div className="d-flex gap-2 align-items-center">
//                   <div className="d-flex flex-column">
//                     <p className="designation mb-0">{row.column3}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="col-lg-3 col-md-12">
//                 <div className="d-flex gap-2 align-items-center">
//                   <div className="d-flex flex-column">
//                     <p className="designation mb-0">{row.column4}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       {tables.map((tbl, idx) => (
//         <InfoTable key={idx} title={tbl.title} members={tbl.members} />
//       ))}
//     </>
//   );
// };

// export default function AboutUs() {
//   return (
//     <div>
//       <InnerBannerSection
//         imageSrc={navigationConfig["facilities"].imageSrc}
//         breadcrumbs={navigationConfig["facilities"].breadcrumbs}
//         navItems={navigationConfig["facilities"].navItems}
//         pageTilte="Conference Hall"
//       />

//       <div className="container">
//         <div
//           className="row py-5 px-3 px-md-5 imgopacity d-flex justify-content-between align-items-center"
//           style={{

//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             backgroundAttachment: "fixed",
//             minHeight: "70vh",
//             color: "white",
//             marginBottom: "2rem",
//             borderRadius: "10px"
//           }}
//         >
//           <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
//             <img
//               src="https://www.npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture1.jpg"
//               className="imgclass"
//               style={{
//                 width: "100%",
//                 maxWidth: "350px",
//                 height: "250px",
//                 objectFit: "cover",
//                 borderRadius: "8px",
//                 boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
//               }}
//               alt="Sangam Hall Interior"
//             />
//           </div>
//           <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
//             <img
//               src="https://www.npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture2.jpg"
//               className="imgclass"
//               style={{
//                 width: "100%",
//                 maxWidth: "350px",
//                 height: "250px",
//                 objectFit: "cover",
//                 borderRadius: "8px",
//                 boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
//               }}
//               alt="Sangam Hall Auditorium"
//             />
//           </div>
//           <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
//             <img
//               src="https://www.npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture6.jpg"
//               className="imgclass"
//               style={{
//                 width: "100%",
//                 maxWidth: "350px",
//                 height: "250px",
//                 objectFit: "cover",
//                 borderRadius: "8px",
//                 boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
//               }}
//               alt="Sangam Hall Stage"
//             />
//           </div>

//           <div className="py-4 mt-4">
//             <h2 className="text-left text-black " >
//               NPC observes the principles of Circular Economy on World Environment Day to promote waste management by re-use, recycle, etc. to enhance optimal use & sustainability of resources
//             </h2>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-12">
//             <h5 className="p-4 mb-0 fs-5">Information for hall booking are as follows:</h5>
//             <TabNavigation />
//           </div>
//         </div>

//         {/* Contact Person Details Table */}
//         <div className="row mt-5">
//           <div className="col-12">

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import Image from "next/image";

/* ===============================
   TYPES
================================ */
type Tariff = {
  full: string | number;
  half: string | number;
};

type TableLayoutProps = {
  title: string;
  facilities: string[];
  tariff?: Tariff;
};

type HallSectionProps = {
  hallName: string;
  images: string[];
  description: string;
};

/* ===============================
   TABLE LAYOUT (MOVED OUTSIDE)
================================ */
const TableLayout = ({ title, facilities, tariff }: TableLayoutProps) => (
  <div className="container my-4">
    <div className="p-3 fw-bold" style={{ background: "#e6f7fb" }}>
      {title}
    </div>

    <div
      className="row text-center fw-bold text-white"
      style={{ background: "#007bff" }}
    >
      <div className="col-1 py-2">S.No.</div>
      <div className="col-5 py-2">Facilities Provided</div>
      <div className="col-3 py-2">Tariff</div>
      <div className="col-3 py-2">Timing</div>
    </div>

    <div className="row border">
      <div className="col-6 p-0">
        {facilities.map((item, idx) => (
          <div key={idx} className="row border-bottom">
            <div className="col-2 text-center py-2">{idx + 1}</div>
            <div className="col-10 py-2">{item}</div>
          </div>
        ))}
      </div>

      {tariff && (
        <div className="col-3 text-center d-flex flex-column justify-content-center border-start">
          <h6>Full-Day Slot</h6>
          <p>{tariff.full}</p>
          <h6>Half-Day Slot</h6>
          <p>{tariff.half}</p>
        </div>
      )}

      <div className="col-3 text-center d-flex flex-column justify-content-center border-start">
        <h6>Full-Day Slot</h6>
        <p>09 AM – 05 PM</p>
        <p>11 AM – 07 PM</p>
        <h6>Half-Day Slots</h6>
        <p>09 AM – 01 PM</p>
        <p>02 PM – 06 PM</p>
      </div>
    </div>
  </div>
);

/* ===============================
   TAB NAVIGATION
================================ */
function TabNavigation() {
  const [activeTab, setActiveTab] = useState("national");

  const nationalFacilities = [
    "Rectangular shaped Hall multi-purpose table & chairs",
    "30 seats around the table in U-type layout and 40 at the back row",
    "Around 100 delegates in class-room layout",
    "1 nos podium with mike for speaker",
    "Audio sound system (Bosch), Video recording, Table Mic, Cordless Mic, Wi-Fi, ACs, Sound-proof windows, Dias, Laser Pointer",
    "Additional charges of Rs. 5000/- per hour for Video Conferencing",
    "Additional charges for catering services (paid directly to empanelled caterer)",
    "Additional charges of Rs. 2000/- per day for lawn usage",
  ];

  const internationalFacilities = [...nationalFacilities];

  return (
    <>
      <ul className="nav nav-pills mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "national" ? "active" : ""}`}
            onClick={() => setActiveTab("national")}
          >
            National Programs
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "international" ? "active" : ""
            }`}
            onClick={() => setActiveTab("international")}
          >
            International Programs
          </button>
        </li>
      </ul>

      {activeTab === "national" && (
        <TableLayout
          title="For National Programs"
          facilities={nationalFacilities}
          tariff={{ full: "₹20,000 + Taxes", half: "₹10,000 + Taxes" }}
        />
      )}

      {activeTab === "international" && (
        <TableLayout
          title="For International Programs"
          facilities={internationalFacilities}
          tariff={{ full: "$350 + Taxes", half: "$175 + Taxes" }}
        />
      )}
    </>
  );
}

/* ===============================
   HALL SECTION
================================ */
const HallSection = ({ hallName, images, description }: HallSectionProps) => (
  <div className="row py-5 px-3 mb-5 bg-light rounded">
    {images.map((img, index) => (
      <div key={index} className="col-md-4 mb-3">
        <Image
          src={img}
          alt={hallName}
          width={350} // set width (example)
          height={250} // set height
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
          }}
        />
      </div>
    ))}

    <div className="col-12 mt-3">
      <p className="text-center text-muted px-4">{description}</p>
    </div>

    <div className="col-12 mt-3">
      <h2 className="text-center mb-4">{hallName}</h2>
      <TabNavigation />
    </div>
  </div>
);

/* ===============================
   MAIN PAGE
================================ */
export default function AboutUs() {
  const halls = [
    {
      hallName: "Sangam Conference Hall",
      images: [
        "https://www.npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture1.jpg",
        "https://www.npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture2.jpg",
        "https://www.npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture6.jpg",
      ],
      description:
        "NPC observes the principles of Circular Economy on World Environment Day to promote waste management by re-use, recycle, etc.",
    },
  ];

  return (
    <>
      <InnerBannerSection
        imageSrc={navigationConfig["facilities"].imageSrc}
        breadcrumbs={navigationConfig["facilities"].breadcrumbs}
        navItems={navigationConfig["facilities"].navItems}
        pageTilte="Conference Hall"
      />

      <div className="container py-5">
        {halls.map((hall, index) => (
          <HallSection key={index} {...hall} />
        ))}
      </div>
    </>
  );
}
