import InnerBannerSection from "@/components/InnerBannerSection";
import { navigationConfig } from "@/config/naviagtion";

export default function AboutUs() {
  return (
    <div style={{}}>
      <InnerBannerSection
        imageSrc={navigationConfig["keyLinks"].imageSrc}
        breadcrumbs={navigationConfig["keyLinks"].breadcrumbs}
        navItems={navigationConfig["keyLinks"].navItems}
        pageTilte="Contact Us"
      />
      <section className="maincontent" role="main">
        <div className="container my-5">
          <div className="row g-5 align-items-start">
            {/* LEFT COLUMN : FORM (5 columns) */}
            <div className=" col-12 col-lg-5">
              <div className=" formbox rounded p-4 h-100">
                <div className="mb-3">
                  <input
                    type="text"
                    name="fullname"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="organame"
                    className="form-control"
                    placeholder="Organization Name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="orgaadd"
                    className="form-control"
                    placeholder="Organization Address"
                  />
                </div>

                <div className="mb-3">
                  <select className="form-control" name="department">
                    <option value="0">---Subject List---</option>
                    <option>Agri Business Group</option>
                    <option>Economic Services</option>
                    <option>Energy Management</option>
                    <option>Human Resource Management</option>
                    <option>Information Technology</option>
                    <option>Industrial Engineering</option>
                    <option>Technology Management</option>
                    <option>Others</option>
                  </select>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="mobile"
                    className="form-control"
                    placeholder="Mobile"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    rows={2}
                    name="comment"
                    className="form-control"
                    placeholder="Post Your Comment"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <p className="mb-2">
                    Resolve the simple captcha:
                    <br />
                    15 + 1 =
                    <input
                      type="text"
                      className="ms-2"
                      size={2}
                      name="captchaResult"
                    />
                  </p>
                  <input type="hidden" name="firstNumber" value="15" />
                  <input type="hidden" name="secondNumber" value="1" />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  style={{ borderRadius: "20px" }}
                >
                  Submit
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN : MAP / QR (7 columns) */}
            <div className="col-12 col-lg-7">
              <div className="border rounded map-height">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28026.354042674087!2d77.227942!3d28.590948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2effe8335dd%3A0x934917be87d91472!2sNational%20Productivity%20Council!5e0!3m2!1sen!2sin!4v1766491573525!5m2!1sen!2sin"
                  className="map-iframe"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
