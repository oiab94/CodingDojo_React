// * Establecemos algunos datos para consultar en nuestra API
let users = [
	{ firstName: "Reimu",  lastName: "Hakurei"    },
	{ firstName: "Marisa", lastName: "Kirisame"   },
	{ firstName: "Sanae",  lastName: "Kochiya"    },
	{ firstName: "Sakuya", lastName: "Izayoi"     },
	{ firstName: "Momiji", lastName: "Inubashiri" }
];
const express = require("express");
const app = express();
const port = 3000;


// * Middleware
// * Estas funciones son responsables de proporcionar y analizar los datos de request
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) ) 
app.listen(
	port,
	() => {
		console.log(`Se escucha en el puerto: ${port}`);
	}
)

// * GET datos
app.get(
	"/",
	(req, res) => {
		res.send("<h1>Prueba de enrutamiento<h1/>")
	}
)

app.get(
	"/api/users",
	(req, res) => {
		res.json(users);
	}
);

// * Si queremos pasar los datos con un dato especifico
app.get(
	"/api/users/:id",
	(req, res) => {
		// Con esto obtenemos el id
		console.log("Se busco el id: " + req.params.id);
		// Con esto podriamos devolver un usuario
		res.json(users[req.params.id]);
	}
);

// * POST datos
// * Se debe de incluir el middleware para obtener el dato
app.post(
	"/api/users",
	(req, res) => {
		// ! req.body contendra los datos del formulario POSTMAN o REACT
		console.log(req.body);
		// !Podemons hacer PUSH en el array de usuarios, más tarde esto se insertara en la BD
		users.push(req.body);
		// *Siempre tendremos que responder algo
		res.json({ status: "ok POST" });
	}
);

// * UPDATE datos
app.put(
	"/api/users/:id",
	(req, res) => {
		const id = req.params.id;

		users[id] = req.body;

		// * Siempre tendremos que responder algo
		res.json({ status: "ok PUT" })
	}
)

// * DELETE datos
app.delete(
	"/api/users/:id",
	(req, res) => {
		const id = req.params.id;

		users.splice(id, 1);

		res.json({ status: "ok DELETE" })
	}
)