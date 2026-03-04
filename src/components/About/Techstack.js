import React from "react";
import { Col, Row } from "react-bootstrap";

// Core
import pythonPng from "../../Assets/TechIcons/Python.png";
import cppPng from "../../Assets/TechIcons/C++.png";
import pytorchPng from "../../Assets/TechIcons/pytorch.png";
import ros2Png from "../../Assets/TechIcons/ros2.png";
import mlflowPng from "../../Assets/TechIcons/mlflow.png";
import numpyPng from "../../Assets/TechIcons/numpy.png";
import opencvPng from "../../Assets/TechIcons/opencv.png";

// Simulation
import mujocoPng from "../../Assets/TechIcons/mujoco.png";
import isaacPng from "../../Assets/TechIcons/Isaac.png";
import gazeboPng from "../../Assets/TechIcons/gazebo.png";

// Infra
import dockerPng from "../../Assets/TechIcons/Docker.png";
import gitPng from "../../Assets/TechIcons/github.png";

const SECTIONS = [
  {
    title: "Core",
    items: [
      { label: "Python", src: pythonPng },
      { label: "C++", src: cppPng },
      { label: "NumPy", src: numpyPng },
      { label: "OpenCV", src: opencvPng },
      { label: "PyTorch", src: pytorchPng },
      { label: "ROS2", src: ros2Png },
      { label: "MLflow", src: mlflowPng },
    ],
  },
  {
    title: "Simulation",
    items: [
      { label: "MuJoCo", src: mujocoPng },
      { label: "Isaac Sim", src: isaacPng },
      { label: "Gazebo", src: gazeboPng },
    ],
  },
  {
    title: "Infra",
    items: [
      { label: "Docker", src: dockerPng },
      { label: "Git", src: gitPng },
    ],
  },
];

export function StackSection({ title, items, paddingBottom = "26px" }) {
  return (
    <>
      {title && (
        <Row style={{ justifyContent: "center", paddingBottom: "6px" }}>
          <Col xs={12} style={{ textAlign: "center" }}>
            <div className="stack-section-title">{title}</div>
          </Col>
        </Row>
      )}

      <Row className="stack-grid" style={{ justifyContent: "center", paddingBottom }}>
        {items.map((item) => (
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
    </>
  );
}

function Techstack() {
  return (
    <div>
      {SECTIONS.map((section) => (
        <StackSection key={section.title} title={section.title} items={section.items} />
      ))}
    </div>
  );
}

export default Techstack;