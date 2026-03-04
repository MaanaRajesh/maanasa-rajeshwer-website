import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SOCIAL_LINKS } from "../data/socialLinks";

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Maanasa Rajeshwer</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {CURRENT_YEAR} Maanasa Rajeshwer</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {SOCIAL_LINKS.map(({ href, Icon, label }) => (
              <li key={label} className="social-icons">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                  aria-label={label}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
