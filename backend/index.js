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

// Conexión con MongoDB
mongoose
  .connect(
    "mongodb+srv://produccionconoflex:RXZwTw1yucmH0UP5@conoflex.2ha87.mongodb.net/?retryWrites=true&w=majority&appName=Conoflex"
  )
  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch((err) => console.error("Error al conectar a MongoDB", err));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
