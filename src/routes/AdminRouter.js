import React from "react";
import { Routes, Route } from "react-router-dom";

import { AdminLayouts } from "../layout";
import { Auths, Users, Graficas } from "../pages/Admin";

const user = {"name":"dany"};

export function AdminRouter() {
  const loadLoyout = (Layout, Page) => [
    <Layout>
      <Page />
    </Layout>,
  ];
  return (
    <Routes>
      {!user ? (
        <Route path="/admin/*" element={loadLoyout(AdminLayouts, Auths)} />
      ) : (
        <>
      {
        ['/admin','/admin/graficos'].map((path)=>(
          <Route key={path} path={path} element={loadLoyout(AdminLayouts,Graficas)}/>
        ))
      }
          <Route path="/admin/usuario" element={loadLoyout(AdminLayouts, Users)} />
        </>
      )}
    </Routes>
  );
}
