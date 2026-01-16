import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";
import Image from "next/image";

export default function AboutUs() {
  const images = [
    {
      src: "/images/facilities/conImg1.png",
      title: "Single Occupancy Size-11 Sq.m/ 114 Sq.ft",
    },
    {
      src: "/images/facilities/conImg2.png",
      title: "Double Occupancy Size- 14 Sq.m/ 145 Sq.ft",
    },
    {
      src: "/images/facilities/conImg3.png",
      title: "Capacity-30 Persons",
    },
    {
      src: "/images/facilities/conImg4.png",
      title: "Capacity-30 Persons",
    },
    {
      src: "/images/facilities/conImg5.png",
      title: "Capacity-80 Persons",
    },
    {
      src: "/images/facilities/conImg6.png",
      title: "Dining Hall Capacity-30 Persons",
    },
  ];

  return (
    <div>
      <InnerBannerSection
        imageSrc={navigationConfig["facilities"].imageSrc}
        breadcrumbs={navigationConfig["facilities"].breadcrumbs}
        navItems={navigationConfig["facilities"].navItems}
        pageTilte="Hostel & Training Facility"
      />

      <div className="container">
        <div
          className="row py-5 px-3 px-md-5 Imageopacity"
          style={{
            minHeight: "70vh",
            marginBottom: "2rem",
            borderRadius: "10px",
          }}
        >
          {images.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 d-flex flex-column align-items-center"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={350} // fixed width in pixels
                height={250} // fixed height in pixels
                className="Imageclass"
                style={{
                  width: "100%", // this will make it responsive, can also use layout="responsive" instead
                  maxWidth: "350px",
                  height: "250px",
                  // objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.8)",
                }}
              />

              {/* Image Title */}
              <p
                style={{
                  color: "black",
                  fontSize: "13px",
                  marginTop: "8px",
                  textAlign: "center",
                }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>

       <div className="row">
  <div className="col-12">
    <div className="mb-4">
      <p>
        The executive hostel facilities include 27 single and 4 double
        air-conditioned rooms furnished with TV and provisioned with
        supply of hot and cold water and attached with a modern Dining &
        Kitchen Hall facility with seating capacity of 30 the executive
        hostel provides serene and green ambience for seminars,
        trainings and workshops.
      </p>
      <p>
        The training facilities include air-conditioned conference and
        lecture rooms with audio-visual facilities. An air conditioned
        auditorium with a seating capacity of 80 is available.
      </p>
    </div>

    <h3 className="mb-4">
      Institutions and organizations can avail these facilities at the
      following rates:
    </h3>

    {/* ===== Charges Footer Section ===== */}
    <div className="row mt-3 mb-4">
      {/* Executive Hostel Charges */}
      <div className="col-12 col-md-6 mb-4">
        <div
          style={{
            background: "#f8f9fa",
            padding: "20px",
            borderRadius: "10px",
            height: "100%",
          }}
        >
          <h4 className="mb-3">Executive Hostel Charges</h4>
          <ul style={{ fontSize: "13px", paddingLeft: "24px" }}>
            <li>Single Occupancy: Rs1300/ + 12% GST</li>
            <li>Double Occupancy: Rs 2000/ + 12% GST</li>
            <li>Dining Kitchen hall: Rs 5000 + 18% GST</li>
          </ul>
        </div>
      </div>

      {/* Lecture & Conference Room Charges */}
      <div className="col-12 col-md-6 mb-4">
        <div
          style={{
            background: "#f8f9fa",
            padding: "20px",
            borderRadius: "10px",
            height: "100%",
          }}
        >
          <h4 className="mb-3">Lecture & Conference Room Charges</h4>
          <ul style={{ fontSize: "13px", paddingLeft: "24px" }}>
            <li>Upto 25 persons Capacity : Rs 8000 + 18% GST</li>
            <li>Upto 40 persons Capacity : Rs 8000+ 18% GST</li>
            <li>Upto 80 persons capacity : Rs 10000 + 18% GST</li>
          </ul>



        </div>
      </div>
    </div>
  </div>

  
</div>
      </div>
    </div>
  );
}
