import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import { Banner, HomeCarreras } from "../../../components/Web";

export function Home() {
  return (
    <Container>
      <div className="home">
        <Row>
          <Col>
            <Banner />
          </Col>
        </Row>
        <Row>
          <Col>
            <HomeCarreras />
          </Col>
        </Row>
      </div>
    </Container>
  );
}
