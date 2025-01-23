import React from "react";
import {Container,Row, Col} from "react-bootstrap";
import { Banner, HomeCarreras } from "../../../components/Web";

export function Home() {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col xs={12}>
          <Banner />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
          <HomeCarreras />
          </Col>
        </Row>
      </Container>
      
    
    </div>
  );
}
