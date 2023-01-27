import { useState } from "react";
import { useEffect } from "react";

const StarWarsAPI = () => {
  const [state, setState] = useState(0);
  const url = "https://swapi.dev/api/people/";


	/**
	 * * useEffect(callback, parametroDeAjuste o contexto)
	 * * si no lleva el contexto la función se repetira constantemente
	 * ! quitar las llaves [] y ver como repite "hello"
	 */
  useEffect(() => {
		/**
		 * *Forma en que funciona este fetch
		 * *1) fetch(url).then(callback) -> retorna un JSON
		 * *2) JSON.then(callback) -> agregamos nuestros nuevos datos
		*/
		console.log("Hello");
		fetch(url)
      .then((response) => {
        return response.json();
      })
      .then( (data) => setState({ people: data.results })); 
  }, []);

  return (
    <>
      {state.people
        ? state.people.map((item, index) => {
            return <div key={index}>{item.name}</div>;
          })
        : null}
    </>
  );
};
export default StarWarsAPI;
