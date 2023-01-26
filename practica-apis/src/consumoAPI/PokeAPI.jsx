// import {useEffect} from 'react';

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

const PokeAPI = () => {
	return (
		<>
			<h1>Datos: </h1>
			{
				// useEffect(() => {
				// 	fetch(url)
				// 	.then(response => console.log(response))
				// 	.catch(err => console.log(err))
				// }, [])
				fetch(url)
					.then(response => response.json())
					.then(response => console.log(response))
					.catch(err => console.log(err))
			}
		</>
	);
}
export default PokeAPI;