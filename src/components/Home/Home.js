import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import home_humanrobot from "../../Assets/home-humanrobot.jpeg";
import Particle from "../Particle";
import Home2 from "./Home2";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
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
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />

      <Container>
        <Row className="home-about-social">
          <h1 style={{ paddingTop: "40px" }}>
            Contact <span className="purple">Me</span>
          </h1>
          <p style={{ color: "black" }}>
            Want to collaborate or chat? Please reach out!
          </p>

          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="mailto:maanasa@seas.upenn.edu"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="Email"
              >
                <AiOutlineMail />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://github.com/MaanaRajesh/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/maanasa-rajeshwer/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Row>
      </Container>
    </section>
  );
}

export default Home;