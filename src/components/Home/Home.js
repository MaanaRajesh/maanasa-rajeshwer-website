import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import home_humanrobot from "../../Assets/home-humanrobot.jpeg";
import Particle from "../Particle";
import { SOCIAL_LINKS } from "../../data/socialLinks";

function Home() {
  return (
    <section className="home-page">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 className="heading-name" data-aos="fade-up">
                MAANASA RAJESHWER
              </h1>

              <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
                Engineering embodied intelligence, grounded in human intuition.
              </p>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} data-aos="fade-in" data-aos-delay="400">
              <div style={{ position: "relative" }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 60% 40%, rgba(200,120,57,0.28), transparent 70%)",
                  pointerEvents: "none",
                  zIndex: 0,
                }} />
                <img
                  src={home_humanrobot}
                  alt="home pic"
                  className="home-hero-img img-fluid"
                  style={{ maxHeight: "450px", position: "relative", zIndex: 1 }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <Row className="home-about-social">
          <h1 style={{ paddingTop: "0px", color: "black", fontSize: "2.8em", fontWeight: 400, fontFamily: '"Bellefair", serif' }}>
            Contact Me
          </h1>
          <p style={{ color: "var(--clay)", fontSize: "1.35em", marginBottom: "1.2rem" }}>
            Want to collaborate or chat? Please reach out!
          </p>

          <ul className="home-about-social-links">
            {SOCIAL_LINKS.map(({ href, Icon, label }) => (
              <li key={label} className="social-icons">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label={label}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
