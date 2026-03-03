import React from "react";
import { Col, Row } from "react-bootstrap";

// SVGs (inline)
import { ReactComponent as VsCodeIcon } from "../../Assets/TechIcons/vscode.svg";
import { ReactComponent as DockerIcon } from "../../Assets/TechIcons/Docker.svg";

// PNGs
import ubuntuPng from "../../Assets/TechIcons/ubuntu.png";
import githubPng from "../../Assets/TechIcons/github.png";
import condaPng from "../../Assets/TechIcons/conda.png";
import sshPng from "../../Assets/TechIcons/ssh.png";
import gazeboPng from "../../Assets/TechIcons/gazebo.png";
import isaacPng from "../../Assets/TechIcons/Isaac.png";
import rvizPng from "../../Assets/TechIcons/rviz.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={3} className="tech-icons">
        <img src={ubuntuPng} alt="Ubuntu" className="tech-icon-img" />
        <div className="tech-icons-text">Ubuntu</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <VsCodeIcon className="tech-icon-svg" aria-label="VS Code" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <img src={githubPng} alt="GitHub" className="tech-icon-img" />
        <div className="tech-icons-text">GitHub</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <DockerIcon className="tech-icon-svg" aria-label="Docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <img src={condaPng} alt="Conda" className="tech-icon-img" />
        <div className="tech-icons-text">Conda</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <img src={sshPng} alt="SSH" className="tech-icon-img" />
        <div className="tech-icons-text">SSH</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <img src={gazeboPng} alt="Gazebo" className="tech-icon-img" />
        <div className="tech-icons-text">Gazebo</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <img src={isaacPng} alt="Isaac Sim" className="tech-icon-img" />
        <div className="tech-icons-text">Isaac Sim</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <img src={rvizPng} alt="rviz" className="tech-icon-img" />
        <div className="tech-icons-text">rviz</div>
      </Col>
    </Row>
  );
}

export default Toolstack;