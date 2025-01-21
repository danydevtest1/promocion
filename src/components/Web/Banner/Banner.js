import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RegisterForm } from "../Formulario";
import "./Banner.scss";

export function Banner() {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col>
            <h1>
              <em>¡¡Registráte y sé parte de esta comunidad!!</em>
            </h1>

            <RegisterForm />
          </Col>
        </Row>
      </Container>

      <div className="banner_dark" />
    </div>
  );
}
