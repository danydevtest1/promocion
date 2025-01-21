import React from "react";
import { Button } from "react-bootstrap";
import { icon } from "../../../../assets";

import "./Info.scss";

export function Info() {
  return (
    <div className="footer-info">
      <icon.LogoWhite className="logo" />
      <p>
        Ofrecer servicios con calidad en educación superior tecnológica,
        mediante un modelo educativo integral que permita el desarrollo de
        competencias profesionales, con amplia capacidad para generar
        investigación, innovar la tecnología y la formación de profesionistas de
        alto nivel académico, con un sentido de pertinencia y superación
        continua.
      </p>
      <div className="d-flex gap-2 mb-2">
      <Button variant="primary" as="a">
        <i class="bi bi-facebook"></i>
      </Button>
      <Button  variant="info">
        <i class="bi bi-twitter"></i>
      </Button>
      <Button variant="danger">
        <i class="bi bi-youtube"></i>
      </Button>
      </div>
    
    </div>
  );
}
