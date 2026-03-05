import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Maanasa Rajeshwer is currently pursuing a Master of Science in
            Engineering in Robotics at the{" "}
            <span className="purple">University of Pennsylvania</span>, where she
            focuses on <span className="purple">embodied AI</span> and{" "}
            <span className="purple">multimodal perception</span>. Her work
            centers on building systems that connect perception, learning, and
            physical interaction, with the goal of enabling robots to operate
            more robustly in real-world environments.
          </p>
          <p style={{ textAlign: "justify" }}>
            She previously studied at the{" "}
            <span className="purple">
              University of North Carolina at Chapel Hill
            </span>
            , where she graduated with a B.S. in{" "}
            <span className="purple">Computer Science</span> and a B.S. in{" "}
            <span className="purple">Statistics and Analytics</span>, along with
            a minor in Health and Society. Before beginning her graduate
            studies, she worked as a{" "}
            <span className="purple">Data Engineer at Gap Inc.</span>, where she
            developed large-scale data pipelines supporting customer analytics
            and decision systems across the company's retail platforms.
          </p>
          <p style={{ textAlign: "justify" }}>
            In her recent robotics work, Maanasa has explored problems such as{" "}
            <span className="purple">identity-preserving video segmentation</span>
            ,{" "}
            <span className="purple">
              multi-camera perception using bird's-eye-view representations
            </span>
            , and{" "}
            <span className="purple">
              imitation learning pipelines for robotic manipulation
            </span>
            . Across these projects, she is interested in building systems that
            can perceive dynamic environments, maintain consistent
            representations over time, and translate those representations into
            meaningful physical actions.
          </p>
          <p style={{ textAlign: "justify" }}>
            More broadly, she is motivated by the challenge of designing{" "}
            <span className="purple">embodied systems</span> that work with
            people in mind. She is particularly interested in{" "}
            <span className="purple">human–robot interaction</span> and in
            developing robots that can perceive, move, and interact in ways
            that are intuitive, reliable, and useful in everyday environments.
            Her interests extend to areas where robotics intersects with
            human-centered technologies, including{" "}
            <span className="purple">haptics, wearables</span>, and interactive
            systems that deepen the connection between people and intelligent
            machines.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
