import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I build robotics systems at the intersection of{" "}
              <b className="purple">Embodied AI</b>,{" "}
              <b className="purple">multimodal perception</b>, and{" "}
              <b className="purple">physical interaction</b>.
              <br />
              <br />
              I’m drawn to problems where a robot has to stay{" "}
              <b className="purple">robust under ambiguity</b>—tracking identity through
              motion and occlusion, learning from demonstrations, and generalizing across
              new layouts and sensor conditions.
              <br />
              <br />
              Technically, I work mostly in <b className="purple">Python/C++</b> with{" "}
              <b className="purple">PyTorch</b> and <b className="purple">ROS</b>, and I
              enjoy building end-to-end pipelines that connect{" "}
              <b className="purple">perception</b> to <b className="purple">control</b>.
              <br />
              <br />
              Longer-term, I’m excited about where robotics is heading: systems that learn
              skills in simulation, transfer reliably to the real world, and interact with
              humans through{" "}
              <b className="purple">touch, form factor, and feedback</b>—not just screens.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
