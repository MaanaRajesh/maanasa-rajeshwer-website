import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px", color: "black", fontWeight: "normal" }}>
        Days I Code
      </h1>
      <GitHubCalendar
        username="MaanaRajesh"
        blockSize={30}
        blockMargin={10}
        fontSize={20}
        theme={{
          level0: "rgba(198, 186, 76, 0.20)",
          level1: "rgba(149, 56, 13, 0.35)",
          level2: "rgba(149, 56, 13, 0.55)",
          level3: "rgba(149, 56, 13, 0.78)",
          level4: "#95380D",
        }}
      />
    </Row>
  );
}

export default Github;
