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
import ppoImg from "../../Assets/Projects/ppo.png";

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
              title="Spatially-Aware ReID for Identity-Preserving Video Segmentation"
              description="Training-free spatial re-identification pipeline combining SAM masklets, RAFT optical flow, spatial proximity (α=0.4), and tracklet-based temporal reasoning. Eliminated ID switches in identical-object sequences through occlusions and rapid motion (≤400 px inter-frame centroid displacement)."
              ghLink="https://github.com/MaanaRajesh/sam2-spatial-reid"
              demoLink="YOUR_REPORT_LINK_HERE"
            />
          </Col>

          {/* 2) BEV Multi-camera forklift detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bevImg}
              isBlog={false}
              title="BEV Early-Fusion Multi-Camera Detection for Identical Forklifts"
              description="Built a synthetic multi-camera warehouse dataset in Isaac Sim (1200 frames, 2 cameras) with nuScenes-format conversion and calibrated annotations. Designed a BEV detector with attention-based camera fusion: 98% AP @ IoU=0.5 and 0.92 cross-camera IoU consistency (+25% AP over 2D baseline)."
              demoLink="YOUR_REPORT_LINK_HERE"             
            />
          </Col>

          {/* 3) VAE + Imitation learning + language goals */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vaeImg}
              isBlog={false}
              title="VAE-Augmented Imitation Learning + LLM Goal Generation"
              description="Behavioral cloning for pick-and-place with compact VAE latent trajectory representations. Integrated language-based goal parsing to generate constraint-compliant 3D placement targets, reducing reliance on visual inputs."
              ghLink="YOUR_GITHUB_LINK_HERE"
              demoLink="YOUR_REPORT_LINK_HERE"
            />
          </Col>

          {/* 4) F1TENTH / Autonomous racing */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={f1tenthImg}
              isBlog={false}
              title="F1TENTH Autonomous Racing (ROS 2)"
              description="Developing and testing ROS 2 perception–planning–control components under real-time constraints, with sim-to-real workflows and safety-focused integration."
              ghLink="YOUR_GITHUB_LINK_HERE"
              demoLink="YOUR_DEMO_OR_REPORT_LINK_HERE"
            />
          </Col>

          {/* 5) Franka vision-based manipulation */}
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

          {/* 6) PPO Continuous Control */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ppoImg}
              isBlog={false}
              title="Policy Learning for Continuous Robot Control (PPO)"
              description="Implemented PPO in PyTorch for continuous control of a MuJoCo bipedal walker. Trained stochastic policies for 1M+ timesteps and analyzed learning stability, exploration dynamics, and failure recovery in closed-loop control."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
