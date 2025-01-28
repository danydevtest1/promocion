import React from "react";
import { Button } from "react-bootstrap";
import { icon } from "../../../../assets";

import "./Info.scss";

export function Info() {
  return (
    <div className="footer-info">
     <h1><em>Sigue nuestras redes sociales</em></h1>
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
