/**
 * Existen varias formas de enviar eventos en JSX
 * Utilizar siempre camelCase para los eventos
 */

const fontSize = {fontSize: "80px"};

let Eventos = () => {
  return (
    <>
      <button onClick={() => alert("Este boton a sido tocado!")}>Tocame</button>
        
			<h1 style={{ backgroundColor: "#a9a9a9" }}>Hello World</h1>
			
			<span style={fontSize}>Segundo Texto</span>
    </>
  );
};

export default Eventos;
