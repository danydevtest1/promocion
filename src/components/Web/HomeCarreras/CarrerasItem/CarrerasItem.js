import React, { useState } from "react";

import { Button, Image } from "react-bootstrap";
import { imagenes } from "../../../../assets";

import "./CarrerasItem.scss";

export function CarrerasItem(props) {
  const {carrera, imagen, informacion} =props;
  return (
    <div className="card-container">
      <div className="card-container__image-container">
        <Image src={imagen} alt="admin" />
      </div>
      <div className="card-container__text-container">
        <div className="text">
          <h2>{carrera}</h2>

          <p>
            {informacion}
          </p>
        </div>
        <div className="but">
          <Button variant="link">
          <i class="bi bi-grid-fill"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}
