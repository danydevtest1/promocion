import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "./RegisterForm.scss";

export function RegisterForm() {
  return (
    <div className="containerform">
      <Form>
        <Container>
          <Row className="mb-3">
            <Col xs={6}>
              <h3>
                <em>Escuela de procedencia</em>
              </h3>
              <Form.Group
                className="mb-3 bg-opacity-10"
                controlId="formGroupEmail"
              >
                <Form.Select>
                  <option>Escuela</option>
                  <option value="1">EMSAD 32</option>
                  <option value="2">CBTA 265</option>
                  <option value="3">COBATAB 08</option>
                  <option value="1">EMSAD 32</option>
                  <option value="2">CBTA 265</option>
                  <option value="3">COBATAB 08</option>
                  <option value="1">EMSAD 32</option>
                  <option value="2">CBTA 265</option>
                  <option value="3">COBATAB 08</option>
                  <option value="1">EMSAD 32</option>
                  <option value="2">CBTA 265</option>
                  <option value="3">COBATAB 08</option>
                  <option value="1">EMSAD 32</option>
                  <option value="2">CBTA 265</option>
                  <option value="3">COBATAB 08</option>
                  <option value="1">EMSAD 32</option>
                  <option value="2">CBTA 265</option>
                  <option value="3">COBATAB 08</option>
                  <option value="1">EMSAD 32</option>
                  <option value="2">CBTA 265</option>
                  <option value="3">COBATAB 08</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Localidad" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Select>
                  <option>Estado</option>
                  <option value="1">Tabasco</option>
                  <option value="2">Chiapas</option>
                  <option value="3">Campeche</option>
                  <option value="3">Yucatan</option>
                  <option value="3">Veracruz</option>
                  <option value="3">Ing. Electromecánica</option>
                  <option value="3">Lic. En Administración</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Select>
                  <option>Municipio</option>
                  <option value="1">Tabasco</option>
                  <option value="2">Chiapas</option>
                  <option value="3">Campeche</option>
                  <option value="3">Yucatan</option>
                  <option value="3">Veracruz</option>
                  <option value="3">Ing. Electromecánica</option>
                  <option value="3">Lic. En Administración</option>
                </Form.Select>
              </Form.Group>
              <h3>
                <em>Carrera</em>
              </h3>
              <Form.Select>
                <option>Carrera</option>
                <option value="1">Ing. En Sistemas Computacionales</option>
                <option value="2">Ing. Bioquímica</option>
                <option value="3">Ing. Industrial</option>
                <option value="3">Ing. Ambiental</option>
                <option value="3">Ing. Civil</option>
                <option value="3">Ing. Electromecánica</option>
                <option value="3">Lic. En Administración</option>
              </Form.Select>
            </Col>
            <Col xs={6}>
              <h3>
                <em>Datos personales</em>
              </h3>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="text" placeholder="Nombre completo" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="text" placeholder="Apellidos" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control
                  type="text"
                  placeholder="934-12-27-344"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="email" placeholder="ejemplo@gru.com" />
              </Form.Group>
            </Col>
            <div className="d-grid gap-2 p-2">
              <Button variant="danger" size="md">
                Enviar
              </Button>
            </div>
          </Row>
        </Container>
      </Form>
    </div>
  );
}
