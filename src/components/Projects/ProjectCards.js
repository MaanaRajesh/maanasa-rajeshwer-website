import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="project-card-text">
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button variant="primary" className="project-btn" href={props.ghLink} target="_blank" rel="noreferrer">
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}
        {props.demoLink && (
          <Button variant="primary" className="project-btn" href={props.demoLink} target="_blank" rel="noreferrer" style={{ marginLeft: "10px" }}>
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
        {props.reportLink && (
          <Button variant="secondary" className="project-btn" href={props.reportLink} target="_blank" rel="noreferrer" style={{ marginLeft: "10px" }}>
            📄 Report
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
