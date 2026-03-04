import React from "react";
import { Col, Row } from "react-bootstrap";

// Tools / environment (these are “tooling”, not core robotics tech)
import ubuntuPng from "../../Assets/TechIcons/ubuntu.png";
import vscodeSvg from "../../Assets/TechIcons/vscode.svg";
import githubPng from "../../Assets/TechIcons/github.png";
import condaPng from "../../Assets/TechIcons/conda.png";
import sshPng from "../../Assets/TechIcons/ssh.png";

const ITEMS = [
  { label: "Ubuntu", src: ubuntuPng, type: "png" },
  { label: "VS Code", src: vscodeSvg, type: "svg" },
  { label: "GitHub", src: githubPng, type: "png" },
  { label: "Conda", src: condaPng, type: "png" },
  { label: "SSH", src: sshPng, type: "png" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {ITEMS.map((item) => (
        <Col key={item.label} xs={6} md={3} className="tech-icons">
          <img
            src={item.src}
            alt={item.label}
            className={item.type === "svg" ? "tech-icon-svg" : "tech-icon-img"}
          />
          <div className="tech-icons-text">{item.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;