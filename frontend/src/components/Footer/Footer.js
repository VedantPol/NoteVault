import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">
            Note Vault{" "}
            <a href="https://github.com/VedantPol/NoteVault">
              &copy; VedantPol
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
