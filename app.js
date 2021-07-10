const express = require("express");
const path = require("path");
const app = express();

app.listen(3030, () => {
    console.log("Servidor corriendo");
})

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

const publicPath = path.resolve(dirname, "./public");
app.use(express.static(publicPath));

const publicPath2 = path.resolve(dirname, "./views");
app.use(express.static(publicPath2));
