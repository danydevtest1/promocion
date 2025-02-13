import React from "react";
import { Form, Button } from "react-bootstrap";
import Select from "react-select";

import "./FormInput.scss";

export function FormInput() {
  const styles = {
    control: (styles) => {
      return {
        ...styles,
        label: "control",
      };
    },
    placeholder: (styles) => {
      return {
        ...styles,
        color: "white",
      };
    },
  };
  return (
    <Form className="form">
      <h2>Carrera</h2>
      <div className="form__carrera">
        <Select styles={styles} placeholder="Seleccionar carrera.." />
      </div>
      <h2>Datos de procedencia</h2>
      <div className="form__select">
        <Select styles={styles} placeholder="Seleccionar estado..." />
        <Select styles={styles} placeholder="Seleccionar municipio..." />
        <Select styles={styles} placeholder="Escuela de procedencia..." />
      </div>
      <h2>Datos personales</h2>
      <div className="form__input">
        <div className="inp1">
          <Form.Control type="text" placeholder="Nombre completo" />
        </div>
        <div className="inp2">
          <Form.Control type="number" placeholder="Teléfono" />
        </div>
        <div className="inp3">
          <Form.Control type="email" placeholder="ejemplo@mail.com" />
        </div>

        <div className="bt">
          <Button variant="danger" type="submit">
            Registrar
          </Button>
        </div>
      </div>
    </Form>
  );
}
