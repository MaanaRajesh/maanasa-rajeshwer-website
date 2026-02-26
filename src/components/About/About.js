import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row className="align-items-center" style={{ paddingTop: "30px" }}>
            <Col md={7} style={{ paddingBottom: "40px" }}>
              <h1 style={{ fontSize: "2.2em", marginBottom: "18px" }}>
                About
              </h1>
              <AboutCard />
            </Col>

            <Col md={5} className="about-img" style={{ paddingBottom: "40px" }}>
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          <h2 className="project-heading" style={{ marginTop: "10px" }}>
            Professional <strong className="purple">Skillset</strong>
          </h2>
          <Techstack />

          <h2 className="project-heading" style={{ marginTop: "30px" }}>
            Tools <strong className="purple">I use</strong>
          </h2>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
