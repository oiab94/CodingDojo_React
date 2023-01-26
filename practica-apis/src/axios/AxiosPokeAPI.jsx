import axios from "axios";
import {useState, useEffect} from 'react';

const AxiosPokeAPI = () => {
	const url = "https://pokeapi.co/api/v2/pokemon/ditto";
	const [responseData, setResponseData] = useState([]);

	useEffect(
		() => {
			axios.get(url)
				.then(response => {setResponseData(response.data)})
		}, []
	);
	
	return (
		<>
			{
				console.log(responseData)
			}
		</>
	);
}
export default AxiosPokeAPI;