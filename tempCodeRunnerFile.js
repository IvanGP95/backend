const express = require("express");
const Contenedor = require("./actividad2");
// const productos = new Contenedor("productos");

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Open server on port ${PORT}`);
});