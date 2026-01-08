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
          <div className="">
            <h1 className="py-4"></h1>
            <ul>
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
            </ul>
            <h3>
              Institutions and organizations can avail these facilities at the
              following rates:
            </h3>

            {/* ===== Charges Footer Section ===== */}
            <div className="row mt-5 mb-4">
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
                  <h5 className="mb-3">Executive Hostel Charges</h5>
                  <ul style={{ fontSize: "20px", paddingLeft: "24px" }}>
                    <li>Single Occupancy Room – ₹XXXX per day</li>
                    <li>Double Occupancy Room – ₹XXXX per day</li>
                    <li>Dining Facility (30 persons capacity)</li>
                    <li>AC Rooms with TV & Hot/Cold Water</li>
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
                  <h5 className="mb-3">Lecture & Conference Room Charges</h5>
                  <ul style={{ fontSize: "20px", paddingLeft: "24px" }}>
                    <li>Conference Room (30 persons) – ₹XXXX</li>
                    <li>Auditorium (80 persons) – ₹XXXX</li>
                    <li>AC Rooms with Audio-Visual Facilities</li>
                    <li>Ideal for Training, Seminars & Workshops</li>
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
