import React from "react";
import { Container } from "react-bootstrap";
import {} from "../../components/Web"
import {TopBar, Footer} from '../../components/Web';

import "./ClientLayout.scss";
export function ClientLayout({ children }) {
  return (
    <div className="client-layout">
      <div className="client-layout__header">
       <TopBar/>
      </div>
      {children}

      <div className="client-layout__footer">
        <Container>
         <Footer.Info/>
         <Footer.Menu/>
         <Footer.Newsletter/>
          </Container>
          <Container>
          <span>ALL RIGHTS RESERVADO</span>
          <span>Dany cambrano arcos</span>
          </Container>
        
     
       
       
      </div>
    </div>
  );
}
