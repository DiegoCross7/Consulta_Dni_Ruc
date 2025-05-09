import { useState } from "react";

function DniConsulta() {
  const [dni, setDni] = useState("");
  const [datos, setDatos] = useState(null);
  const [error, setError] = useState("");

  const consultarDni = async () => {
    if (dni.length !== 8) {
      setError("El DNI debe tener 8 dígitos");
      setDatos(null);
      return;
    }
    try {
      const response = await fetch(`http://localhost:3008/api/dni/${dni}`);
      const data = await response.json();
      setDatos(data);
      setError("");
    } catch (err) {
      setError("Error al consultar el DNI");
      setDatos(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        maxLength="8"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
        placeholder="Ingresa tu DNI"
      />
      <button onClick={consultarDni}>Consultar</button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {datos && (
        <div className="resultado">
          <p>
            <strong>Nombre Completo:</strong> {datos.nombreCompleto}
          </p>
          <p>
            <strong>Nombre(s):</strong> {datos.nombres}
          </p>
          <p>
            <strong>Apellido Paterno:</strong> {datos.apellidoPaterno}
          </p>
          <p>
            <strong>Apellido Materno:</strong> {datos.apellidoMaterno}
          </p>
          <p>
            <strong>Número de Documento:</strong> {datos.numeroDocumento}
          </p>
          <p>
            <strong>Tipo de Documento:</strong>{" "}
            {datos.tipoDocumento === 1 ? "DNI" : "Otro"}
          </p>
          <p>
            <strong>Dígito Verificador:</strong> {datos.digitoVerificador}
          </p>
        </div>
      )}
    </div>
  );
}

export default DniConsulta;
