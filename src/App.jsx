import { Routes, Route, Link, useLocation } from "react-router-dom";
import DniConsulta from "./DniConsulta";
import RucConsulta from "./RucConsulta";
import "./App.css";

function App() {
  const location = useLocation();

  // Renderiza el logo según la ruta actual
  const renderLogo = () => {
    if (location.pathname === "/dni") {
      return (
        <img src="./images/reniec-logo.png" alt="RENIEC" className="logo" />
      );
    } else if (location.pathname === "/ruc") {
      return <img src="./images/sunat-logo.png" alt="SUNAT" className="logo" />;
    }
    return null;
  };

  return (
    <div className="container">
      <h1>Consulta de Identidad</h1>
      {renderLogo()}
      <div className="button-group">
        <Link to="/dni">
          <button>Consultar DNI</button>
        </Link>
        <Link to="/ruc">
          <button>Consultar RUC</button>
        </Link>
      </div>

      <Routes>
        <Route path="/dni" element={<DniConsulta />} />
        <Route path="/ruc" element={<RucConsulta />} />
      </Routes>
    </div>
  );
}

export default App;
