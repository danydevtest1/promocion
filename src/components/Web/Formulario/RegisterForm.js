import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Select from "react-select";

import "./RegisterForm.scss";

const carreras = [
  {
    value: "1",
    label: "Ingenieria en Sistemas Computacionales",
  },
  {
    value: "2",
    label: "Ingenieria Civil",
  },
  {
    value: "3",
    label: "Ingenieria Ambiental",
  },
  {
    value: "4",
    label: "Ingenieria Bioquimica",
  },
];

const style = {
  control: (styles) => {
    console.log(styles);
    
    return {
      ...styles,
      backgroundColor: "rgba(255,255,255,0.2);",
      borderWidth:1,
      borderColor:"white",
      boxShadow:0,
      minHeight:5
    };
  },
  placeholder: (styles) => {
    return {
      ...styles,
      color: "white",
    };
  },
  option: (styles) => {
    return {
      ...styles,
      backgroundColor: "none",
      color: "black",
      fontSize: "10px",
    };
  },
  values: (styles) => {
    return {
      ...styles,
      color: "red",
    };
  },
  singleValue:(styles)=>{
    return{
      ...styles,
      color:"white",
      fontSize:"10px"
    }
  }
};

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
                <Select styles={style}/>
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
              <div className="selected">
                <Select options={carreras} styles={style} />
              </div>
            </Col>
            <Col xs={6}>
              <h3>
                <em>Datos personales</em>
              </h3>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="text" placeholder="Nombre" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="text" placeholder="Apellidos" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="text" placeholder="934-12-27-344" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="email" placeholder="ejemplo@gru.com" />
              </Form.Group>
            </Col>
            <div className="d-grid gap-2 p-4">
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
