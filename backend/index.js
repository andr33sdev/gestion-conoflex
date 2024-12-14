// Importar dependencias
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// CORS
app.use(cors());

// Middleware
app.use(express.json());

// Rutas
const routes = require("./routes");
app.use(routes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });