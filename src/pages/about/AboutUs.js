import React from "react";
import "./AboutUs.css";
import logoKebili from "../../assets/logo-kebili.png";
import campus from "../../assets/campus.png";
import teamwork from "../../assets/Team-work.png";

export default function AboutUs() {
  return (
    <div className="about-us">
      <header className="sticky-header">
        <a href="#" className="logo-container" aria-label="ISET Kebili Home">
          <img src={logoKebili} alt="ISET Kebili Logo" className="logo animated-logo" />
          <span className="institute-name animated-name">ISET KEBILI</span>
        </a>
      </header>

      <main>
        <section className="front-section">
          <h1 className="section-title">Welcome to ISET Kebili</h1>
          <p className="section-text">
            At the Higher Institute of Technological Studies (ISET) in Kebili,
            we are dedicated to nurturing future leaders through innovative
            education and hands-on training. We offer a range of programs in
            technology, engineering, and business, empowering students to excel
            in their fields.
          </p>
        </section>

        <section className="info-sections">
          <div className="info-container fade-in">
            <div className="text-content">
              <h2>Our Mission</h2>
              <p>
                To provide quality education and practical skills that prepare
                students for the challenges of a dynamic workforce. We emphasize
                creativity, critical thinking, and collaboration, fostering a
                community of lifelong learners.
              </p>
            </div>
            <img src={campus} alt="Campus" className="info-image" />
          </div>

          <div className="info-container fade-in">
            <div className="text-content">
              <h2>Why Choose Us?</h2>
              <p>
                ISET Kebili offers a vibrant learning environment with
                state-of-the-art facilities, experienced faculty, and a focus on
                practical experience. Our strong partnerships with industries
                provide our students with internships and job opportunities.
              </p>
            </div>
            <img src={teamwork} alt="Teamwork" className="info-image" />
          </div>
        </section>

        <section className="contact-section fade-in">
          <h1 className="section-title">Contact Us</h1>
          <div className="contact-info">
            <a href="#" className="contact-item hover-effect">
              <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/address-blue-circle-location-map-marker-navigation-icon-45868.png" alt="Address Icon" />
              <div>
                <h3>Address</h3>
                <p>Av. de la République, Kebili, Tunisia</p>
              </div>
            </a>
            <a href="#" className="contact-item hover-effect">
              <img src="https://cdn.iconscout.com/icon/free/png-64/phone-2666572-2212584.png" alt="Phone Icon" />
              <div>
                <h3>Phone</h3>
                <p>+216 75 491 960</p>
              </div>
            </a>
            <a href="#" className="contact-item hover-effect">
              <img src="https://cdn.iconscout.com/icon/free/png-64/gmail-2489176-2082900.png" alt="Email Icon" />
              <div>
                <h3>Email</h3>
                <p>contact@isetkebili.tn</p>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
