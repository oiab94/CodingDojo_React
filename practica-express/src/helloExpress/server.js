const express = require("express");
const app = express();
const port = 8000;

// *Respondemos con Hello World cuando se haga una petición GET desde la home 
// *page
/**
 * * "/" -> El primer argumento, indica que queremos manejar la solicitud GET de 
 * * está página
 * * () => {} -> El segundo argumento indica la función de devolución de llamada 
 * * que queremos ejecutar cuando un navegador realiza una REQUEST a está página
 */
app.get(
	"/", 
	(request, response) => {
		response.send("Hello World!")
	})

// * Ejecuta nuestro servidor en un puerto especifico
app.listen(
	port, 
	() => {
		console.log(`Listening the port: ${port}`);	
	})

// TODO: Ejecutar el archivo server.js con npm y ver como se pone al escucha
// TODO: Con nodemon podemos realizar cambios en nuestro server.js y no 
// TODO: necesitaremos reiniciarlo tras el cambio. Ejecutar igual que npm