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
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                MAANASA RAJESHWER
              </h1>

              <p className="hero-subtitle">
                Engineering embodied intelligence, grounded in human intuition.
              </p>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={home_humanrobot}
                alt="home pic"
                className="home-hero-img img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <Row className="home-about-social">
          <h1 style={{ paddingTop: "40px", color: "black" }}>
            Contact Me
          </h1>
          <p style={{ color: "var(--maroon)" }}>
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
