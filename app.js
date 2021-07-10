const express = require('express');
const app = express();
const path = require('path');



const publicPath = path.resolve(dirname, "./public");
app.use(express.static(publicPath));


const publicPath2 = path.resolve(dirname, "./views");
app.use(express.static(publicPath2));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});


app.listen(process.env.PORT || 3000, function() {
  console.log("Corriendo servidor en el puerto 3000");
})