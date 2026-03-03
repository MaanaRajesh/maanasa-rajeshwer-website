import React from "react";
import { Col, Row } from "react-bootstrap";

// Inline SVG imports (Approach 1)
import { ReactComponent as CppIcon } from "../../assets/TechIcons/C++.svg";
import { ReactComponent as PythonIcon } from "../../assets/TechIcons/Python.svg";
import { ReactComponent as DockerIcon } from "../../assets/TechIcons/Docker.svg";
import { ReactComponent as GitIcon } from "../../assets/TechIcons/Git.svg";

import { ReactComponent as JsIcon } from "../../assetsTechIcons/Javascript.svg";
import { ReactComponent as TsIcon } from "../../assets/TechIcons/Typescript.svg";
import { ReactComponent as ReactIcon } from "../../assets/TechIcons/React.svg";
import { ReactComponent as NodeIcon } from "../../assets/TechIcons/Node.svg";

import { ReactComponent as AwsIcon } from "../../assets/TechIcons/AWS.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={3} className="tech-icons">
        <CppIcon className="tech-icon-svg" aria-label="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <PythonIcon className="tech-icon-svg" aria-label="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <DockerIcon className="tech-icon-svg" aria-label="Docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <GitIcon className="tech-icon-svg" aria-label="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      {/* Keep these if you want, but they read more “web stack” than robotics */}
      <Col xs={6} md={3} className="tech-icons">
        <JsIcon className="tech-icon-svg" aria-label="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <TsIcon className="tech-icon-svg" aria-label="TypeScript" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <ReactIcon className="tech-icon-svg" aria-label="React" />
        <div className="tech-icons-text">React</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <NodeIcon className="tech-icon-svg" aria-label="Node.js" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <AwsIcon className="tech-icon-svg" aria-label="AWS" />
        <div className="tech-icons-text">AWS</div>
      </Col>
    </Row>
  );
}

export default Techstack;