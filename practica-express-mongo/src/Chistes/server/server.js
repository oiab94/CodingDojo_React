const express = require("express");
const app = express();
const port = 3000;

// *Creación el MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended:true }))
app.listen(
	port,
	() => console.log(`EXPRESS: Se despliega en el puerto ${port}`)
)

// *Conectamos la BD
require("./config/mongoose.config");

// *Enrutamiento a la BD
const ruta = require("./routes/jokes.route");
ruta(app);