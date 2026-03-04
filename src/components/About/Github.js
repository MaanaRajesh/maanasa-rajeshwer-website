import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px", color: "var(--rust)" }}>
        Days I <strong style={{ color: "var(--rust)" }}>Code</strong>
      </h1>
      <GitHubCalendar
        username="MaanaRajesh"
        blockSize={30}
        blockMargin={10}
        color="#C6BA4C"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
