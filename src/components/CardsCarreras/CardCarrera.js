import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

import "./CardsCarreras.scss";

export default function CardCarrera(props) {
  const { imagen, nombre, informacion } = props;
  return (
  
      <Card className="d-flex justify-content-center fnd align-items-center  align-text-center text-center animate__animated animate__fadeInUp ">
        <div className="overflow">
        <Card.Img variant="top" src={imagen} rounded className="card-img-top"/>
        </div>
       
        <Card.Body className="text-light">
          <Card.Title>{nombre ? nombre : "Titulo por definir"}</Card.Title>
          <Card.Text>
            <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto...
            </p>
          </Card.Text>
          <div className="buti text-end">
        <Button variant="primary ml-end float">Registrar</Button>
        <Button variant="outline-info ml-end float">Info</Button>
        </div>
        </Card.Body>
       
          
      </Card>
    
  );
}

CardCarrera.propTypes = {
  nombre: PropTypes.string.isRequired,
  imagen: PropTypes.string,
};
