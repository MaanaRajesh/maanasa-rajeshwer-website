import React from "react";
import { Col, Row } from "react-bootstrap";

import { ReactComponent as MacIcon } from "../../Assets/TechIcons/Apple MacOSX.svg";
import { ReactComponent as ChromeIcon } from "../../Assets/TechIcons/Google Chrome.svg";
import { ReactComponent as VsCodeIcon } from "../../Assets/TechIcons/vscode.svg";
import { ReactComponent as IntelliJIcon } from "../../Assets/TechIcons/intellij-idea.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={3} className="tech-icons">
        <MacIcon className="tech-icon-svg" aria-label="macOS" />
        <div className="tech-icons-text">macOS</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <ChromeIcon className="tech-icon-svg" aria-label="Chrome" />
        <div className="tech-icons-text">Chrome</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <VsCodeIcon className="tech-icon-svg" aria-label="VS Code" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={6} md={3} className="tech-icons">
        <IntelliJIcon className="tech-icon-svg" aria-label="IntelliJ" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>
    </Row>
  );
}

export default Toolstack;