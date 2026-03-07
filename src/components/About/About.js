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
          <Row className="align-items-center" style={{ paddingTop: "10px" }}>
            <Col md={7} style={{ paddingBottom: "20px" }}>
              <h1 style={{ fontSize: "2.2em", marginBottom: "12px", color: "black" }} data-aos="fade-up">
                About
              </h1>
              <AboutCard />
            </Col>

            <Col md={5} className="about-img" style={{ paddingBottom: "20px" }}>
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          <div data-aos="fade-up" style={{
            background: "linear-gradient(to bottom, rgba(200, 120, 57, 0.25), rgba(149, 56, 13, 0.55))",
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
