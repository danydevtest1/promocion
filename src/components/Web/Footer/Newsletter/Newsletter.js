import React from "react";
import { Form, Button, Container } from "react-bootstrap";

import "./Newsletter.scss";

export function Newsletter() {
  return (
    <div className="footer-newsletter">
      <h4>Registrate en nuestras carreras</h4>
      <Form>
        <Form.Group
          className="mb-3 gap-2"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control type="email" placeholder="Ingresa un correo" />
        </Form.Group>

        <div className="d-grid gap-2 p-2">
          <Button variant="success" size="md">
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  );
}
