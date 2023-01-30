const express = require('express');
const app = express();
const port = 3000;

// *Creamos el MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.listen(
	port,
	() => console.log(`EXPRESS: Se despliega en el puerto ${port}`)
)

// *Conectamos la BD
require("./server/config/mongoose.config");

// *Enrutamiento a la BD
const ruta = require('./server/routes/user.route');
ruta(app);
// const RutasUsuarios = require("./server/routes/user.route");
// RutasUsuarios(app);