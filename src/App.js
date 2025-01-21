import { BrowserRouter } from "react-router-dom";
import { RoutesPage, AdminRouter } from "./routes";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesPage />
        <AdminRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
