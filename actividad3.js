const express = require("express");
const Container = require("./actividad2");
const productos = new Container("productList");

const app = express();
const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Open server on port ${PORT}`);
});

 app.get("/productos", (req, res) => {
    productos
      .getAll()
      .then((data) => res.send(data))
      .catch((error) => {
        console.log(error.message);
        res.send({ error: error.message });
      });
  });

app.get("/productoRandom", (req, res) => {
  productos
    .getAll()
    .then((data) => {
      const random = Math.floor(Math.random() * data.length);
      res.send(data[random]);
    })
    .catch((error) => {
      console.log(error.message);
      res.send({ error: error.message });
    });
});

server.on("error", (error) => console.log("Server error:", error));