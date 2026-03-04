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

/**
 * Add/remove items here only.
 * type: "Png" | "png"
 */
const SECTIONS = [
  {
    title: "Core",
    items: [
      { label: "Python", src: pythonPng, type: "png" },
      { label: "C++", src: cppPng, type: "png" },
      { label: "NumPy", src: numpyPng, type: "png" },
      { label: "MLflow", src: mlflowPng, type:"png" },
      { label: "OpenCV", src: opencvPng, type: "png" },
      { label: "PyTorch", src: pytorchPng, type: "png" },
      { label: "ROS2", src: ros2Png, type: "png" },
    ],
  },
  {
    title: "Simulation",
    items: [
      { label: "MuJoCo", src: mujocoPng, type: "png" },
      { label: "Isaac Sim", src: isaacPng, type: "png" },
      { label: "Gazebo", src: gazeboPng, type: "png" },
    ],
  },
  {
    title: "Infra",
    items: [
      { label: "Docker", src: dockerPng, type: "png" },
      { label: "Git", src: gitPng, type: "png" },
    ],
  },
];

function StackSection({ title, items }) {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col xs={12} style={{ textAlign: "center" }}>
          <h3 className="stack-section-title">{title}</h3>
        </Col>
      </Row>

      <Row style={{ justifyContent: "center", paddingBottom: "35px" }}>
        {items.map((item) => (
          <Col key={item.label} xs={6} md={3} className="tech-icons">
            <img
              src={item.src}
              alt={item.label}
              className={item.type === "png" ? "tech-icon-png" : "tech-icon-img"}
            />
            <div className="tech-icons-text">{item.label}</div>
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
        <StackSection
          key={section.title}
          title={section.title}
          items={section.items}
        />
      ))}
    </div>
  );
}

export default Techstack;