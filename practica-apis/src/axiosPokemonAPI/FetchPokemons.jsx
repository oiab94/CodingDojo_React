import {useState, useEffect} from "react"
import axios from "axios"
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup';

const FetchPokemons = () => {
	const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0/results"
	const [objPokemons, setObjPokemons] = useState([]);
	const [listPokemon, setListPokemon] = useState([]);

	useEffect(
		() => {
			axios.get(url)
				.then(response => setObjPokemons(response.data))
		}
	)

	const getData = () => {
		const newArray = objPokemons.results.map(
			(item, index) => { return item }
		);
		setObjPokemons(newArray);
		getItem();
	}

	const getItem = () => {
		const newArray = objPokemons.results;
		setListPokemon(newArray);
	}

  return (
		<Container className="mt-3">
			<Button
				variant="outline-secondary"
				onClick={getData} >
					Fetch Pokemon
			</Button>
			<ListGroup numbered={true}>
			{
				listPokemon.map(
					(item, index) => 
					<ListGroup.Item key={index}>{item.name}</ListGroup.Item>
					)
				}

				</ListGroup>
		</Container>
	);
		
};
export default FetchPokemons;
