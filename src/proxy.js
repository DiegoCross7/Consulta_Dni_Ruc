import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 3008;
// Cambia con tu token
const TOKEN = "apis-token-14849.F5vCkaKuby4mTjJ7qr8oDJD6HEljSPPs";

app.use(cors());

// Ruta para consultar DNI
app.get("/api/dni/:numero", async (req, res) => {
  const dni = req.params.numero;
  try {
    const response = await fetch(
      `https://api.apis.net.pe/v2/reniec/dni?numero=${dni}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error en la consulta al API del DNI" });
  }
});

// Ruta para consultar RUC
app.get("/api/ruc/:numero", async (req, res) => {
  const ruc = req.params.numero;
  try {
    const response = await fetch(
      `https://api.apis.net.pe/v2/sunat/ruc/full?numero=${ruc}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error en la consulta al API del RUC" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
