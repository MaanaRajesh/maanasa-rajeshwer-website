import React from "react";
import { Col, Row } from "react-bootstrap";

// Core
import pythonSvg from "../../Assets/TechIcons/Python.svg";
import cppSvg from "../../Assets/TechIcons/C++.svg";
import pytorchSvg from "../../Assets/TechIcons/pytorch.svg";
import ros2Svg from "../../Assets/TechIcons/ros2.svg";

import numpyPng from "../../Assets/TechIcons/numpy.png";
import opencvPng from "../../Assets/TechIcons/opencv.png";

// Simulation
import mujocoPng from "../../Assets/TechIcons/mujoco.png";
import isaacPng from "../../Assets/TechIcons/Isaac.png";
import gazeboPng from "../../Assets/TechIcons/gazebo.png";

// Infra
import dockerSvg from "../../Assets/TechIcons/Docker.svg";
import gitSvg from "../../Assets/TechIcons/Git.svg";

/**
 * Add/remove items here only.
 * type: "svg" | "png"
 */
const SECTIONS = [
  {
    title: "Core",
    items: [
      { label: "Python", src: pythonSvg, type: "svg" },
      { label: "C++", src: cppSvg, type: "svg" },
      { label: "NumPy", src: numpyPng, type: "png" },
      { label: "OpenCV", src: opencvPng, type: "png" },
      { label: "PyTorch", src: pytorchSvg, type: "svg" },
      { label: "ROS2", src: ros2Svg, type: "svg" },
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
      { label: "Docker", src: dockerSvg, type: "svg" },
      { label: "Git", src: gitSvg, type: "svg" },
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
              className={item.type === "svg" ? "tech-icon-svg" : "tech-icon-img"}
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