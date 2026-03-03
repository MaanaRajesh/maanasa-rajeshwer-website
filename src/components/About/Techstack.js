import React from "react";
import { Col, Row } from "react-bootstrap";

// SVGs (import as URL, render with <img>)
import vscodeSvg from "../../Assets/TechIcons/vscode.svg";
import dockerSvg from "../../Assets/TechIcons/Docker.svg";

// PNGs
import ubuntuPng from "../../Assets/TechIcons/ubuntu.png";
import githubPng from "../../Assets/TechIcons/github.png";
import condaPng from "../../Assets/TechIcons/conda.png";
import sshPng from "../../Assets/TechIcons/ssh.png";
import gazeboPng from "../../Assets/TechIcons/gazebo.png";
import isaacPng from "../../Assets/TechIcons/Isaac.png";
import rvizPng from "../../Assets/TechIcons/rviz.png";

function Toolstack() {
  const items = [
    { label: "Ubuntu", src: ubuntuPng, type: "png" },
    { label: "VS Code", src: vscodeSvg, type: "svg" },
    { label: "GitHub", src: githubPng, type: "png" },
    { label: "Docker", src: dockerSvg, type: "svg" },
    { label: "Conda", src: condaPng, type: "png" },
    { label: "SSH", src: sshPng, type: "png" },
    { label: "Gazebo", src: gazeboPng, type: "png" },
    { label: "Isaac Sim", src: isaacPng, type: "png" },
    { label: "rviz", src: rvizPng, type: "png" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {items.map((item) => (
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