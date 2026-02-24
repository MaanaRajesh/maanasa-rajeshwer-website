import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// TODO: Replace these with your own project images (add files under src/Assets/Projects/)
import reidImg from "../../Assets/Projects/reid.png";
import bevImg from "../../Assets/Projects/bev_forklift.png";
import vaeImg from "../../Assets/Projects/vae_il.png";
import frankaImg from "../../Assets/Projects/franka_vision.png";
import f1tenthImg from "../../Assets/Projects/f1tenth.png";
import garmentImg from "../../Assets/Projects/garment.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          A few projects across embodied AI, perception, and interaction. Each card links to code, reports, or demos.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 1) ReID / Identity-preserving segmentation */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reidImg}
              isBlog={false}
              title="Identity-Preserving Video Segmentation"
              description="Designed a tracking/segmentation pipeline aimed at maintaining object identity through motion, occlusion, and appearance changes. Focused on robust temporal association and evaluation on challenging sequences."
              ghLink="YOUR_GITHUB_LINK_HERE"
              demoLink="YOUR_DEMO_LINK_HERE"
            />
          </Col>

          {/* 2) BEV Multi-camera forklift detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bevImg}
              isBlog={false}
              title="BEV Multi-Camera Forklift Detection"
              description="Course project studying BEV-based multi-camera detection for warehouse environments. Emphasis on architecture understanding, experiment analysis, and clear technical documentation."
              ghLink="https://github.com/prasadpr09/BEV-Fusion-with-detr3D"
              demoLink="OPTIONAL_DEMO_LINK_HERE"
            />
          </Col>

          {/* 3) VAE + Imitation learning + language goals */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vaeImg}
              isBlog={false}
              title="VAE-Augmented Imitation Learning + Language Goals"
              description="Trained behavioral cloning policies for pick-and-place with compact latent trajectory representations, and used a language model to translate natural-language instructions into constraint-compliant 3D goals for evaluation."
              ghLink="YOUR_GITHUB_LINK_HERE"
              demoLink="YOUR_DEMO_LINK_HERE"
            />
          </Col>

          {/* 4) Franka vision-based manipulation */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frankaImg}
              isBlog={false}
              title="Vision-Based Manipulation with Franka"
              description="Built a manipulation pipeline combining visual sensing with control to execute structured pick/place behaviors. Focused on calibration, pose estimation, and reliable closed-loop execution."
              ghLink="YOUR_GITHUB_LINK_HERE"
              demoLink="YOUR_DEMO_LINK_HERE"
            />
          </Col>

          {/* 5) F1TENTH / Autonomous racing */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={f1tenthImg}
              isBlog={false}
              title="F1TENTH Autonomous Racing Stack"
              description="Implemented and tested components for autonomous driving in ROS 2, including safety logic, planning/control integration, and sim-to-real workflows."
              ghLink="YOUR_GITHUB_LINK_HERE"
              demoLink="YOUR_DEMO_LINK_HERE"
            />
          </Col>

          {/* 6) Garment / deformables / interaction */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={garmentImg}
              isBlog={false}
              title="Deformables & Wearable Interaction (In Progress)"
              description="Exploring perception and representations for deformable objects and garments, with an interest in touch/feedback-driven interaction. Prototyping datasets, keypoints, and evaluation protocols."
              ghLink="YOUR_GITHUB_LINK_HERE"
              demoLink="OPTIONAL_DEMO_LINK_HERE"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
