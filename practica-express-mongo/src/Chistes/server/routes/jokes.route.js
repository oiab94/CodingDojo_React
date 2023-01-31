const JokesController = require("../controllers/jokes.controller");

const ruta = (app) => {
	app.get("/api/jokes", JokesController.getJokes);
	app.get("/api/jokes/:id", JokesController.getOneJoke);
	app.post("/api/jokes/new", JokesController.newJoke);
	app.put("/api/jokes/update/:id", JokesController.updateJoke);
	app.delete("/api/jokes/delete/:id", JokesController.deleteJoke);
}

module.exports = ruta;