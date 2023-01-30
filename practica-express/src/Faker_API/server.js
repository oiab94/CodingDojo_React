import express from "express";
import Usuario from "./src/usuario.mjs";
import Empresa from "./src/empresa.mjs";

// * Configuramos nuestro express
const app = express();
const port = 3000;

// *MIDDLEWARE
app.use( express.json() );
app.use( express.urlencoded({ extended:true }) );
app.listen(
	port,
	() => {
		console.log(`Se escucha en le puerto ${port}`);
	}
);

// *GET datos
app.get(
	"/api/users/new",
	(req, res) => res.send(Usuario)
);
app.get(
	"/api/companies/new",
	(req, res) => res.send(Empresa)
);

app.get(
	"/api/user/company",
	(req, res) => res.send([Usuario, Empresa])
);