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
//       tariff: "₹15,000 + Taxes",
//       fullDaySlot: "Full-Day Slot",
//       halfDaySlot: "Half-Day Slot"
//     },
//     {
//       sno: 2,
//       facility: "30 seats around the table in U-type layout and 40 at the back row",
//       tariff: "Full-Day Slot: ₹15,000 + Taxes",
//       fullDaySlot: "09 AM – 05 PM",
//       halfDaySlot: "Half-Day Slots"
//     },
//     {
//       sno: 3,
//       facility: "Around 100 delegates in class-room layout",
//       tariff: "Half-Day Slot: ₹7,500 + Taxes",
//       fullDaySlot: "11 AM – 07 PM",
//       halfDaySlot: "09 AM – 01 PM, 02 PM – 06 PM"
//     },
//     {
//       sno: 4,
//       facility: "1 nos podium with mike for speaker",
//       tariff: "",
//       fullDaySlot: "",
//       halfDaySlot: ""
//     },
//     {
//       sno: 5,
//       facility: "Audio sound system (Bosch), Video recording, Table (3 nos) Micro-phone, Collar cordless mike (1.nos), Cordless mike (2nos), Internet Wi-Fi Connection, Tower ACs, Thermal Efficiency Sound-proof windows, Dios with three chairs, Laser Pointer",
//       tariff: "Included in base tariff",
//       fullDaySlot: "",
//       halfDaySlot: ""
//     },
//     {
//       sno: 6,
//       facility: "Additional charges of ₹7,500 per hour plus applicable taxes for availing Video Conferencing facility by the client",
//       tariff: "₹7,500/hour + taxes",
//       fullDaySlot: "",
//       halfDaySlot: ""
//     },
//     {
//       sno: 7,
//       facility: "Additional charges for availing catering services by the client and actual amount to be paid directly to the catering Agency who is empanelled caterer of NPC for catering services at reasonable rates",
//       tariff: "As per actual",
//       fullDaySlot: "",
//       halfDaySlot: ""
//     },
//     {
//       sno: 8,
//       facility: "Additional charges of ₹2,000 per day plus applicable taxes for use of Lawn for serving tea, lunch etc. In case of additional requirements such as tent, crockery, tables etc charges will be as per actual",
//       tariff: "₹2,000/day + taxes",
//       fullDaySlot: "",
//       halfDaySlot: ""
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
//       tariff: "Full-Day Slot",
//       timing: "Full-Day Slot"
//     },
//     {
//       sno: 3,
//       facility: "Around 100 delegates in class-room layout",
//       tariff: "$US 350 + Taxes",
//       timing: "09 AM – 05 PM, 11 AM – 07 PM"
//     },
//     {
//       sno: 4,
//       facility: "1 nos podium with mike for speaker",
//       tariff: "Half-Day Slots",
//       timing: "Half-Day Slots"
//     },
//     {
//       sno: 5,
//       facility: "Audio sound system (Bosch), Video recording, Table (3 nos) Micro-phone, Collar cordless mike (1.nos), Cordless mike (2nos), Internet Wi-Fi Connection, Tower ACs, Thermal Efficiency Sound-proof windows, Dios with three chairs, Laser Pointer",
//       tariff: "$US 175 + Taxes",
//       timing: "09 AM – 01 PM, 02 PM – 06 PM"
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
//                 color: activeTab === 'national' ? '' : '#666666',
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
//                 color: activeTab === 'international' ? '' : '#666666',
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
//             <h3 className="text-primary mb-4 ">For National Programs</h3>
//             <div className="table-responsive">
//               <table className="table table-bordered table-striped table-hover color: #214aab ">
//                 <thead className="table-dark">
//                   <tr>
//                     <th className ="width= 5%">S.No.</th>
//                     <th className ="width= 45%">Facilities Provided</th>
//                     <th className ="width= 15%">Tariff</th>
//                     <th className ="width= 15%">Half & Full-Day Slot</th>
//                     <th className ="width= 15%">Half-Day Slot</th>
                    
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
//                       <td className="text-center">{item.fullDaySlot}</td>
//                       <td className="text-center">{item.halfDaySlot}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//                 <tfoot>
//                   <tr className="table-warning">
                   
//                   </tr>
//                 </tfoot>
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
//                 <thead className="table-dark">
//                   <tr>
//                     <th className="width=5%" >S.No.</th>
//                     <th className="width=45%" >Facilities Provided</th>
//                     <th className="width=15%" >Tariff</th>
//                     <th className="width=15%" >Full & Half Day Slots Timing</th>
                 
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
//                 <tfoot>
//                   <tr className="table-warning">
                   
                    
//                   </tr>
//                 </tfoot>
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
//         <h1 className="pghdng2 pghdng1 headingcontrast display-4 fw-bold mb-4 p-4">
//           Sang<span className="text-primary">am Hall</span> 
//         </h1>

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


//              <div>
     

      
      
//       <div className="container">
//         <h1 className="pghdng2 pghdng1 headingcontrast display-4 fw-bold mb-4 p-4">
//           Mant<span className="text-primary">han Hall</span> 
//         </h1>

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
//               src="https://www.npcindia.gov.in/NPC/Images/Facilities/Manthan%20Conference%20Hall/Picture5.jpg" 
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
//               src="https://www.npcindia.gov.in/NPC/Images/Facilities/Manthan%20Conference%20Hall/Picture8.jpg" 
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
//               src="https://www.npcindia.gov.in/NPC/Images/Facilities/Manthan%20Conference%20Hall/Picture7.jpg" 
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
//         </div>
//         </div>
            
           
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from 'react';
import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

function TabNavigation() {
  const [activeTab, setActiveTab] = useState('national');

  // Data for National Programs (INR)
  const nationalTableData = [
    {
      sno: 1,
      facility: "Rectangular shaped Hall multi-purpose table & chairs",
      tariff: "",
      timing: ""
    },
    {
      sno: 2,
      facility: "30 seats around the table in U-type layout and 40 at the back row",
      tariff: "Full-Day Slot: ₹15,000 + Taxes",
      timing: "09 AM – 05 PM, 11 AM – 07 PM"
    },
    {
      sno: 3,
      facility: "Around 100 delegates in class-room layout",
      tariff: "Half-Day Slots: ₹7,500 + Taxes",
      timing: "09 AM – 01 PM, 02 PM – 06 PM"
    },
    {
      sno: 4,
      facility: "1 nos podium with mike for speaker",
      tariff: "Included in base tariff",
      timing: ""
    },
    {
      sno: 5,
      facility: "Audio sound system (Bosch), Video recording, Table (3 nos) Micro-phone, Collar cordless mike (1.nos), Cordless mike (2nos), Internet Wi-Fi Connection, Tower ACs, Thermal Efficiency Sound-proof windows, Dias with three chairs, Laser Pointer",
      tariff: "Included in base tariff",
      timing: ""
    },
    {
      sno: 6,
      facility: "Additional charges of ₹7,500 per hour plus applicable taxes for availing Video Conferencing facility by the client",
      tariff: "₹7,500/hour + taxes",
      timing: ""
    },
    {
      sno: 7,
      facility: "Additional charges for availing catering services by the client and actual amount to be paid directly to the catering Agency who is empanelled caterer of NPC for catering services at reasonable rates",
      tariff: "As per actual",
      timing: ""
    },
    {
      sno: 8,
      facility: "Additional charges of ₹2,000 per day plus applicable taxes for use of Lawn for serving tea, lunch etc. In case of additional requirements such as tent, crockery, tables etc charges will be as per actual",
      tariff: "₹2,000/day + taxes",
      timing: ""
    }
  ];

  // Data for International Programs (USD) - From your image
  const internationalTableData = [
    {
      sno: 1,
      facility: "Rectangular shaped Hall multi-purpose table & chairs",
      tariff: "",
      timing: ""
    },
    {
      sno: 2,
      facility: "30 seats around the table in U-type layout and 40 at the back row",
      tariff: "Full-Day Slot: $US 350 + Taxes",
      timing: "09 AM – 05 PM, 11 AM – 07 PM"
    },
    {
      sno: 3,
      facility: "Around 100 delegates in class-room layout",
      tariff: "Half-Day Slots: $US 175 + Taxes",
      timing: "09 AM – 01 PM, 02 PM – 06 PM"
    },
    {
      sno: 4,
      facility: "1 nos podium with mike for speaker",
      tariff: "Included in base tariff",
      timing: ""
    },
    {
      sno: 5,
      facility: "Audio sound system (Bosch), Video recording, Table (3 nos) Micro-phone, Collar cordless mike (1.nos), Cordless mike (2nos), Internet Wi-Fi Connection, Tower ACs, Thermal Efficiency Sound-proof windows, Dias with three chairs, Laser Pointer",
      tariff: "Included in base tariff",
      timing: ""
    },
    {
      sno: 6,
      facility: "Additional charges of $ US 170 per hour plus applicable taxes for availing Video Conferencing facility by the client",
      tariff: "$US 170/hour + taxes",
      timing: ""
    },
    {
      sno: 7,
      facility: "Additional charges for availing catering services by the client and actual amount to be paid directly to the catering Agency who is empanelled caterer of NPC for catering services at reasonable rates. Catering Charges",
      tariff: "As per actual",
      timing: ""
    },
    {
      sno: 8,
      facility: "Additional charges of $ US 50 per day plus applicable taxes for use of Lawn for serving tea, lunch etc. In case of additional requirements such as tent, crockery, tables etc charges will be as per actual",
      tariff: "$US 50/day + taxes",
      timing: ""
    }
  ];

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-4">
      <div className="mb-4">
        <ul className="nav nav-pills tabfont">
          <li className="nav-item pr-4">
            <a
              className={`nav-link ${activeTab === 'national' ? 'active' : ''}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('national');
              }}
              style={{
                color: activeTab === 'national' ? '#214aab' : '#666666',
                textDecoration: activeTab === 'national' ? 'underline' : 'none',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: activeTab === 'national' ? '600' : '500'
              }}
            >
              For National Programs
            </a>
          </li>
          <li className="nav-item pl-4">
            <a
              className={`nav-link ${activeTab === 'international' ? 'active' : ''}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('international');
              }}
              style={{
                color: activeTab === 'international' ? '#214aab' : '#666666',
                textDecoration: activeTab === 'international' ? 'underline' : 'none',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: activeTab === 'international' ? '600' : '500'
              }}
            >
              For International Programs
            </a>
          </li>
        </ul>
      </div>
      
      {/* Tab Content */}
      <div className="tab-content mt-4">
        {/* National Programs Table */}
        <div className={`tab-pane fade ${activeTab === 'national' ? 'show active' : ''}`} id="SangamNational">
          <div className="p-4 border rounded bg-light">
            <h3 className="text-primary mb-4">For National Programs</h3>
            <div className="table-responsive">
              <table className="table table-bordered table-striped table-hover">
                <thead style={{ backgroundColor: '#214aab', color: 'white' }}>
                  <tr>
                    <th className="text-center" style={{ width: '5%' }}>S.No.</th>
                    <th style={{ width: '50%' }}>Facilities Provided</th>
                    <th className="text-center" style={{ width: '20%' }}>Tariff</th>
                    <th className="text-center" style={{ width: '25%' }}>Full & Half Day Slots Timing</th>
                  </tr>
                </thead>
                <tbody>
                  {nationalTableData.map((item) => (
                    <tr key={item.sno}>
                      <td className="text-center fw-bold">{item.sno}</td>
                      <td>{item.facility}</td>
                      <td className="text-center">
                        {item.tariff && <span className="text-success fw-bold">{item.tariff}</span>}
                      </td>
                      <td className="text-center">{item.timing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* International Programs Table */}
        <div className={`tab-pane fade ${activeTab === 'international' ? 'show active' : ''}`} id="SangamInternational">
          <div className="p-4 border rounded bg-light">
            <h3 className="text-primary mb-4">For International Programs</h3>
            <div className="table-responsive">
              <table className="table table-bordered table-striped table-hover">
                <thead style={{ backgroundColor: '#214aab', color: 'white' }}>
                  <tr>
                    <th className="text-center" style={{ width: '5%' }}>S.No.</th>
                    <th style={{ width: '50%' }}>Facilities Provided</th>
                    <th className="text-center" style={{ width: '20%' }}>Tariff</th>
                    <th className="text-center" style={{ width: '25%' }}>Full & Half Day Slots Timing</th>
                  </tr>
                </thead>
                <tbody>
                  {internationalTableData.map((item) => (
                    <tr key={item.sno}>
                      <td className="text-center fw-bold">{item.sno}</td>
                      <td>{item.facility}</td>
                      <td className="text-center">
                        {item.tariff && <span className="text-success fw-bold">{item.tariff}</span>}
                      </td>
                      <td className="text-center">{item.timing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Create a similar component for Manthan Hall
function ManthanTabNavigation() {
  const [activeTab, setActiveTab] = useState('national');

  // Data for National Programs (INR) - You should update this with actual Manthan Hall data
  const nationalTableData = [
    {
      sno: 1,
      facility: "Rectangular shaped Hall multi-purpose table & chairs",
      tariff: "",
      timing: ""
    },
    {
      sno: 2,
      facility: "30 seats around the table in U-type layout and 40 at the back row",
      tariff: "Full-Day Slot: ₹12,000 + Taxes",
      timing: "09 AM – 05 PM, 11 AM – 07 PM"
    },
    {
      sno: 3,
      facility: "Around 80 delegates in class-room layout",
      tariff: "Half-Day Slots: ₹6,000 + Taxes",
      timing: "09 AM – 01 PM, 02 PM – 06 PM"
    },
    {
      sno: 4,
      facility: "1 nos podium with mike for speaker",
      tariff: "Included in base tariff",
      timing: ""
    },
    {
      sno: 5,
      facility: "Audio sound system, Video recording, Microphone, Internet Wi-Fi Connection, ACs, Sound-proof windows",
      tariff: "Included in base tariff",
      timing: ""
    },
    {
      sno: 6,
      facility: "Additional charges for availing Video Conferencing facility by the client",
      tariff: "As per actual",
      timing: ""
    },
    {
      sno: 7,
      facility: "Additional charges for availing catering services by the client",
      tariff: "As per actual",
      timing: ""
    }
  ];

  // Data for International Programs (USD) - You should update this with actual Manthan Hall data
  const internationalTableData = [
    {
      sno: 1,
      facility: "Rectangular shaped Hall multi-purpose table & chairs",
      tariff: "",
      timing: ""
    },
    {
      sno: 2,
      facility: "30 seats around the table in U-type layout and 40 at the back row",
      tariff: "Full-Day Slot: $US 300 + Taxes",
      timing: "09 AM – 05 PM, 11 AM – 07 PM"
    },
    {
      sno: 3,
      facility: "Around 80 delegates in class-room layout",
      tariff: "Half-Day Slots: $US 150 + Taxes",
      timing: "09 AM – 01 PM, 02 PM – 06 PM"
    },
    {
      sno: 4,
      facility: "1 nos podium with mike for speaker",
      tariff: "Included in base tariff",
      timing: ""
    },
    {
      sno: 5,
      facility: "Audio sound system, Video recording, Microphone, Internet Wi-Fi Connection, ACs, Sound-proof windows",
      tariff: "Included in base tariff",
      timing: ""
    },
    {
      sno: 6,
      facility: "Additional charges for availing Video Conferencing facility by the client",
      tariff: "As per actual",
      timing: ""
    },
    {
      sno: 7,
      facility: "Additional charges for availing catering services by the client",
      tariff: "As per actual",
      timing: ""
    }
  ];

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-4">
      <div className="mb-4">
        <ul className="nav nav-pills tabfont">
          <li className="nav-item pr-4">
            <a
              className={`nav-link ${activeTab === 'national' ? 'active' : ''}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('national');
              }}
              style={{
                color: activeTab === 'national' ? '#214aab' : '#666666',
                textDecoration: activeTab === 'national' ? 'underline' : 'none',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: activeTab === 'national' ? '600' : '500'
              }}
            >
              For National Programs
            </a>
          </li>
          <li className="nav-item pl-4">
            <a
              className={`nav-link ${activeTab === 'international' ? 'active' : ''}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('international');
              }}
              style={{
                color: activeTab === 'international' ? '#214aab' : '#666666',
                textDecoration: activeTab === 'international' ? 'underline' : 'none',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: activeTab === 'international' ? '600' : '500'
              }}
            >
              For International Programs
            </a>
          </li>
        </ul>
      </div>
      
      {/* Tab Content */}
      <div className="tab-content mt-4">
        {/* National Programs Table */}
        <div className={`tab-pane fade ${activeTab === 'national' ? 'show active' : ''}`} id="ManthanNational">
          <div className="p-4 border rounded bg-light">
            <h3 className="text-primary mb-4">For National Programs</h3>
            <div className="table-responsive">
              <table className="table table-bordered table-striped table-hover">
                <thead style={{ backgroundColor: '#214aab', color: 'white' }}>
                  <tr>
                    <th className="text-center" style={{ width: '5%' }}>S.No.</th>
                    <th style={{ width: '50%' }}>Facilities Provided</th>
                    <th className="text-center" style={{ width: '20%' }}>Tariff</th>
                    <th className="text-center" style={{ width: '25%' }}>Full & Half Day Slots Timing</th>
                  </tr>
                </thead>
                <tbody>
                  {nationalTableData.map((item) => (
                    <tr key={item.sno}>
                      <td className="text-center fw-bold">{item.sno}</td>
                      <td>{item.facility}</td>
                      <td className="text-center">
                        {item.tariff && <span className="text-success fw-bold">{item.tariff}</span>}
                      </td>
                      <td className="text-center">{item.timing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* International Programs Table */}
        <div className={`tab-pane fade ${activeTab === 'international' ? 'show active' : ''}`} id="ManthanInternational">
          <div className="p-4 border rounded bg-light">
            <h3 className="text-primary mb-4">For International Programs</h3>
            <div className="table-responsive">
              <table className="table table-bordered table-striped table-hover">
                <thead style={{ backgroundColor: '#214aab', color: 'white' }}>
                  <tr>
                    <th className="text-center" style={{ width: '5%' }}>S.No.</th>
                    <th style={{ width: '50%' }}>Facilities Provided</th>
                    <th className="text-center" style={{ width: '20%' }}>Tariff</th>
                    <th className="text-center" style={{ width: '25%' }}>Full & Half Day Slots Timing</th>
                  </tr>
                </thead>
                <tbody>
                  {internationalTableData.map((item) => (
                    <tr key={item.sno}>
                      <td className="text-center fw-bold">{item.sno}</td>
                      <td>{item.facility}</td>
                      <td className="text-center">
                        {item.tariff && <span className="text-success fw-bold">{item.tariff}</span>}
                      </td>
                      <td className="text-center">{item.timing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <div>
      <InnerBannerSection
        imageSrc={navigationConfig["facilities"].imageSrc}
        breadcrumbs={navigationConfig["facilities"].breadcrumbs}
        navItems={navigationConfig["facilities"].navItems}
        pageTilte="Conference Hall"
      />

      <div className="container">
        <h1 className="pghdng2 pghdng1 headingcontrast display-4 fw-bold mb-4 p-4">
          Sang<span className="text-primary">am Hall</span> 
        </h1>

        <div 
          className="row py-5 px-3 px-md-5 imgopacity d-flex justify-content-between align-items-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            minHeight: "70vh",
            color: "white",
            marginBottom: "2rem",
            borderRadius: "10px"
          }}
        >
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
            <img 
              src="https://www.npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture1.jpg" 
              className="imgclass"
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
              }}
              alt="Sangam Hall Interior"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
            <img 
              src="https://www.npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture2.jpg" 
              className="imgclass"
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
              }}
              alt="Sangam Hall Auditorium"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
            <img 
              src="https://www.npcindia.gov.in/NPC/Images/Facilities/Sangam%20Conference%20Hall/Picture6.jpg" 
              className="imgclass"
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
              }}
              alt="Sangam Hall Stage"
            />
          </div>
          
          <div className="col-12 mt-4">
            <h2 className="text-left text-white fw-bold" style={{textShadow: "2px 2px 4px rgba(0,0,0,0.8)"}}>
              NPC observes the principles of Circular Economy on World Environment Day to promote waste management by re-use, recycle, etc. to enhance optimal use & sustainability of resources
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <p className="p-4 mb-0 fs-5">Information for hall booking are as follows:</p>
            
            <TabNavigation />

            {/* Manthan Hall Section */}
            <div>
              <h1 className="pghdng2 pghdng1 headingcontrast display-4 fw-bold mb-4 p-4 mt-5">
                Mant<span className="text-primary">han Hall</span> 
              </h1>

              <div 
                className="row py-5 px-3 px-md-5 imgopacity d-flex justify-content-between align-items-center"
                style={{
                  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "fixed",
                  minHeight: "70vh",
                  color: "white",
                  marginBottom: "2rem",
                  borderRadius: "10px"
                }}
              >
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
                  <img 
                    src="https://www.npcindia.gov.in/NPC/Images/Facilities/Manthan%20Conference%20Hall/Picture5.jpg" 
                    className="imgclass"
                    style={{
                      width: "100%",
                      maxWidth: "350px",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
                    }}
                    alt="Manthan Hall Interior"
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
                  <img 
                    src="https://www.npcindia.gov.in/NPC/Images/Facilities/Manthan%20Conference%20Hall/Picture8.jpg" 
                    className="imgclass"
                    style={{
                      width: "100%",
                      maxWidth: "350px",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
                    }}
                    alt="Manthan Hall Auditorium"
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 imgdiv d-flex justify-content-center">
                  <img 
                    src="https://www.npcindia.gov.in/NPC/Images/Facilities/Manthan%20Conference%20Hall/Picture7.jpg" 
                    className="imgclass"
                    style={{
                      width: "100%",
                      maxWidth: "350px",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.8)"
                    }}
                    alt="Manthan Hall Stage"
                  />
                </div>
                
                <div className="col-12 mt-4">
                  <h2 className="text-left text-white fw-bold" style={{textShadow: "2px 2px 4px rgba(0,0,0,0.8)"}}>
                    NPC observes the principles of Circular Economy on World Environment Day to promote waste management by re-use, recycle, etc. to enhance optimal use & sustainability of resources
                  </h2>
                </div>
              </div>

              <p className="p-4 mb-0 fs-5">Information for hall booking are as follows:</p>
              <ManthanTabNavigation />

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}