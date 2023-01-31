const mongoose = require("mongoose");

// *Configuración de la conexión con mongoDB
mongoose.set("strictQuery", true)
mongoose.connect(
	"mongodb://localhost:27017/jokes",
	{ useNewUrlParser: true, useUnifiedTopology: true}
	)
	.then(() => console.log("MONGO: Conexión establecida"))
	.catch(() => console.log("MONGO: No se pudo establecer conexion"))
