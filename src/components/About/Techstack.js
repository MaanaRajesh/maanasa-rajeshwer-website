import React from "react";
import { Col, Row } from "react-bootstrap";

// SVGs (inline)
import { ReactComponent as CppIcon } from "../../Assets/TechIcons/C++.svg";
import { ReactComponent as PythonIcon } from "../../Assets/TechIcons/Python.svg";
import { ReactComponent as DockerIcon } from "../../Assets/TechIcons/Docker.svg";
import { ReactComponent as GitIcon } from "../../Assets/TechIcons/Git.svg";
import { ReactComponent as Ros2Icon } from "../../Assets/TechIcons/ros2.svg";
import { ReactComponent as MujocoIcon } from "../../Assets/TechIcons/mujoco.svg";

// PNGs
import pytorchPng from "../../Assets/TechIcons/pytorch.png";
import opencvPng from "../../Assets/TechIcons/opencv.png";
import numpyPng from "../../Assets/TechIcons/numpy.png";
import linuxPng from "../../Assets/TechIcons/linux.png";
import isaacPng from "../../Assets/TechIcons/Isaac.png";
import robosuitePng from "../../Assets/TechIcons/robosuite.png";
import mlflowPng from "../../Assets/TechIcons/mlflow.png";

function Techstack() {
  const items = [
    // Core
    { label: "Python", node: <PythonIcon className="tech-icon-svg" aria-label="Python" /> },
    { label: "C++", node: <CppIcon className="tech-icon-svg" aria-label="C++" /> },
    { label: "PyTorch", node: <img src={pytorchPng} alt="PyTorch" className="tech-icon-img" /> },
    { label: "ROS 2", node: <Ros2Icon className="tech-icon-svg" aria-label="ROS 2" /> },

    // Perception / tooling
    { label: "OpenCV", node: <img src={opencvPng} alt="OpenCV" className="tech-icon-img" /> },
    { label: "NumPy", node: <img src={numpyPng} alt="NumPy" className="tech-icon-img" /> },
    { label: "Linux", node: <img src={linuxPng} alt="Linux" className="tech-icon-img" /> },
    { label: "Docker", node: <DockerIcon className="tech-icon-svg" aria-label="Docker" /> },
    { label: "Git", node: <GitIcon className="tech-icon-svg" aria-label="Git" /> },

    // Sim / frameworks
    { label: "Isaac Sim", node: <img src={isaacPng} alt="Isaac Sim" className="tech-icon-img" /> },
    { label: "MuJoCo", node: <MujocoIcon className="tech-icon-svg" aria-label="MuJoCo" /> },
    { label: "Robosuite", node: <img src={robosuitePng} alt="Robosuite" className="tech-icon-img" /> },
    { label: "MLflow", node: <img src={mlflowPng} alt="MLflow" className="tech-icon-img" /> },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {items.map((item) => (
        <Col key={item.label} xs={6} md={3} className="tech-icons">
          {item.node}
          <div className="tech-icons-text">{item.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;