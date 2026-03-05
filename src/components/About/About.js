import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.jpeg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row className="align-items-center" style={{ paddingTop: "30px" }}>
            <Col md={7} style={{ paddingBottom: "40px" }}>
              <h1 style={{ fontSize: "2.2em", marginBottom: "18px", color: "black" }}>
                About
              </h1>
              <AboutCard />
            </Col>

            <Col md={5} className="about-img" style={{ paddingBottom: "40px" }}>
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          <div style={{
            background: "rgba(107, 114, 42, 0.25)",
            borderRadius: "18px",
            padding: "28px 20px 36px",
            marginTop: "30px",
          }}>
            <h2 className="project-heading" style={{ marginTop: "10px", color: "black" }}>
              Professional Skillset
            </h2>
            <Techstack />

            <h2 className="project-heading" style={{ marginTop: "30px", color: "black", fontWeight: "normal" }}>
              Tools I Use
            </h2>
            <Toolstack />

            <Github />
          </div>
        </Container>
      </Container>
    </>
  );
}

export default About;
