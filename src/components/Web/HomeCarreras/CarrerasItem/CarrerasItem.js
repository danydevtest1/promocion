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
          <h2><em>{carrera}</em></h2>

          <p>
           <em>{informacion}</em> 
          </p>
        </div>
        <div className="but">
          <Button variant="link">
          <i class="bi bi-eye"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}
