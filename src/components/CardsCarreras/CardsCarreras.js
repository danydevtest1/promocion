import React from 'react';
import {Row,Col} from "react-bootstrap";
import {imagenes} from "../../assets";

import CardCarrera from './CardCarrera';

//import "./CardsCarreras.scss";

const carreras=[
    {
        "id":"1",
        "informacion":"Mucha informacion",
        "imagen":imagenes.sistemas
    },
    {
        "id":"2",
        "nombre":"Ingeniería Bioquímica",
        "informacion":"Mucha informacion",
        "imagen":imagenes.bioquimica
    },
    {
        "id":"3",
        "nombre":"Lic. en Administración",
        "informacion":"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum",
        "imagen":imagenes.administracion
    },
    {
        "id":"1",
        "nombre":"Ingeniería en sistemas computacionales",
        "informacion":"Mucha informacion",
        "imagen":imagenes.sistemas
    },
    {
        "id":"2",
        "nombre":"Ingeniería Bioquímica",
        "informacion":"Mucha informacion",
        "imagen":imagenes.bioquimica
    },
    {
        "id":"3",
        "nombre":"Lic. en Administración",
        "informacion":"Mucha informacion",
        "imagen":imagenes.administracion
    },
    {
        "id":"3",
        "nombre":"Lic. en Administración",
        "informacion":"Mucha informacion",
        "imagen":imagenes.administracion
    }
    
]

export function CardsCarreras() {
  return (
    
    <Row xs={1} md={3} className="container g-2 justify-content-center align-items-center align-text-center d-flex">
      {carreras.map((carrera, idx) => (
        <Col key={idx}>
          
            <CardCarrera nombre={carrera.nombre} imagen={carrera.imagen} informacion={carrera.informacion}/>
            
         
        </Col>
      ))}
    </Row>
  
  )
}
