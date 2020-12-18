import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShowcaseSwiper from "../components/swipers/ShowcaseSwiper"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="about" style={{ backgroundColor: "#f9caa7" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 text-white">
            <h4 className="title display-4">About Us</h4>
            <p>
              La Playa Estrella is a beach resort run by a family that has long
              withstood the test of time. The homegrown Cebuanos that manage the
              property grew from humble beginnings and continue to value the
              practices to which they attribute all of their successes. La Playa
              Estrella offers peaceful and comfortable accommodation with free
              WiFi access throughout the property. Operating a 24-hour front
              desk, it houses a restaurant and a beach bar, and provides free
              parking on site. ​ La Playa Estrella firmly believes that full
              satisfaction of customers can be attained through our active
              participation in providing quality service. Our success depends on
              our commitment, competence, and dedication towards our duties and
              responsibilities.
            </p>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div>
              <ShowcaseSwiper />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="rooms">
      <div className="container py-5">
        <div className="w-100 mx-auto px-3" style={{ maxWidth: 500 }}>
          <div className="text-center" data-aos="zoom-in">
            <h4 className="title title-color display-4">Our Rooms</h4>
            <p>
              Our rooms offer the traditional and serene atmosphere where guests
              will experience a peaceful vacation, a perfect destination for
              families and romantic holidays.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 mb-3" data-aos="flip-left">
            <div className="room room1 shadow-sm">
              <div class="overlay">
                <h4>Deluxe Garden View</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3" data-aos="flip-left">
            <div className="room room2 shadow-sm">
              <div class="overlay">
                <h4>Superior Garden View</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3" data-aos="flip-left">
            <div className="room room3 shadow-sm">
              <div class="overlay">
                <h4>Superior Beach View</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3" data-aos="flip-left">
            <div className="room room4 shadow-sm">
              <div class="overlay">
                <h4>Executive Deluxe Beach View</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3" data-aos="flip-left">
            <div className="room room5 shadow-sm">
              <div class="overlay">
                <h4>Family Room</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div>
        <iframe
          className="w-100"
          height="400"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.4906589149373!2d123.79549451472396!3d11.151260955212337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a862a77a22a381%3A0xa4e85f7289b86971!2sLa%20Playa%20Estrella%20Beach%20Resort!5e0!3m2!1sen!2sph!4v1608296555453!5m2!1sen!2sph"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div
            className="col-md-6 d-flex flex-column justify-content-center"
            data-aos="fade-right"
          >
            <h4 className="title title-color display-4">CONTACT US TODAY!</h4>
            <p className="mb-0">FOR GENERAL INQUIRIES & FURTHER INFORMATION</p>
            <p className="mb-0">MOBILE: (+63) 977 837 7128</p>
            <p className="mb-0">LANDLINE: (032) 316 - 7614</p>
            <p className="mb-0">EMAIL: laplayabeachresort@gmail.com</p>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="shadow-sm bg-light p-3">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn bg-main-color">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
