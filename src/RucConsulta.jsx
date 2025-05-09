import { useState } from "react";

function RucConsulta() {
  const [ruc, setRuc] = useState("");
  const [datos, setDatos] = useState(null);
  const [error, setError] = useState("");

  const consultarRuc = async () => {
    if (ruc.length !== 11) {
      setError("El RUC debe tener 11 dígitos");
      setDatos(null);
      return;
    }
    try {
      const response = await fetch(`http://localhost:3008/api/ruc/${ruc}`);
      const data = await response.json();

      if (data.error) {
        setError("RUC no encontrado");
        setDatos(null);
      } else {
        setDatos(data);
        setError("");
      }
    } catch (err) {
      setError("Error al consultar el RUC");
      setDatos(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        maxLength="11"
        value={ruc}
        onChange={(e) => setRuc(e.target.value)}
        placeholder="Ingresa RUC"
      />
      <button onClick={consultarRuc}>Consultar</button>
      {error && <p style={{ color: "#2c3e50" }}>{error}</p>}

      {datos && (
        <div className="resultado">
          <p>
            <strong>Razón Social:</strong> {datos.razonSocial}
          </p>
          <p>
            <strong>RUC:</strong> {datos.numeroDocumento}
          </p>
          <p>
            <strong>Estado:</strong> {datos.estado}
          </p>
          <p>
            <strong>Condición:</strong> {datos.condicion}
          </p>

          {/* Mostrar dirección y ubicación sólo si existen */}
          {datos.direccion && (
            <p>
              <strong>Dirección:</strong> {datos.direccion}
            </p>
          )}
          {datos.departamento && (
            <p>
              <strong>Departamento:</strong> {datos.departamento}
            </p>
          )}
          {datos.provincia && (
            <p>
              <strong>Provincia:</strong> {datos.provincia}
            </p>
          )}
          {datos.distrito && (
            <p>
              <strong>Distrito:</strong> {datos.distrito}
            </p>
          )}

          {/* Actividad económica principal */}
          {datos.actividadPrincipal && datos.actividadPrincipal.description && (
            <p>
              <strong>Actividad Económica:</strong>{" "}
              {datos.actividadPrincipal.description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default RucConsulta;
