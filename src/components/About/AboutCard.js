import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I’m <span className="purple">Maanasa Rajeshwer</span>.
            <br />
            I’m a <span className="purple">Robotics M.S.E.</span> student at{" "}
            <span className="purple">UPenn</span> focused on{" "}
            <span className="purple">Embodied AI</span> and{" "}
            <span className="purple">multimodal perception</span>.
            <br />
            <br />
            I build systems that connect{" "}
            <span className="purple">vision</span>,{" "}
            <span className="purple">learning</span>, and{" "}
            <span className="purple">physical interaction</span> — especially for
            deformables and human-centered hardware (think{" "}
            <span className="purple">haptics, wearables, and expressive tech</span>).
            <br />
            <br />
            Recently, I’ve worked on identity-preserving video segmentation,
            BEV-based multi-camera detection, and imitation learning pipelines.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Embodied AI + robot learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Multimodal perception (video, flow, tracking)
            </li>
            <li className="about-activity">
              <ImPointRight /> Haptics + wearables + interactive systems
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build systems that can perceive, move, and feel — with humans in mind."
          </p>
          <footer className="blockquote-footer">Maanasa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
