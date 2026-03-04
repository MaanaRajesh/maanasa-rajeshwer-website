import React from "react";
import { Col, Row } from "react-bootstrap";

import ubuntuPng from "../../Assets/TechIcons/ubuntu.png";
import vscodePng from "../../Assets/TechIcons/vscode.png";
import githubPng from "../../Assets/TechIcons/github.png";
import condaPng from "../../Assets/TechIcons/conda.png";
import sshPng from "../../Assets/TechIcons/ssh.png";

const ITEMS = [
  { label: "Ubuntu", src: ubuntuPng },
  { label: "VS Code", src: vscodePng },
  { label: "GitHub", src: githubPng },
  { label: "Conda", src: condaPng },
  { label: "SSH", src: sshPng },
];

function Toolstack() {
  return (
    <Row className="stack-grid" style={{ justifyContent: "center", paddingBottom: "40px" }}>
      {ITEMS.map((item) => (
        <Col
          key={item.label}
          xs={6}
          sm={4}
          md={2}
          className="d-flex justify-content-center"
        >
          <div className="tech-icons">
            <img src={item.src} alt={item.label} className="tech-icon-img" />
            <div className="tech-icons-text">{item.label}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;