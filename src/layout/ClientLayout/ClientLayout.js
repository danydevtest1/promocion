import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TopBar, Footer } from "../../components/Web";

import "./ClientLayout.scss";
export function ClientLayout({ children }) {
  return (
    <div className="client-layout">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="client-layout__header">
              <TopBar />
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>{children}</Col>
        </Row>

        <Row>
          <Col xs={12}>
            <div className="client-layout__footer">
              <Container>
                <Footer.Info />
              </Container>
              <Container>
                <span>ALL RIGHTS RESERVADO</span>
                <span>Dany cambrano arcos</span>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
