import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";

const ShowCharacter = (props) => {
	const url = props.url;
	const [data, setData] = useState({});

	// *Obtiene los datos del caracter
	useEffect(
		() => {
			axios.get(url)
					 .then(response => setData(response.data))
		}, [url]
	)

	// *Desplegar los datos seleccionados
	const DisplayCharacter = () => {
		const keys = Object.keys(data);
		const values = Object.values(data);

		return (
			keys.map(
				(item, index) => {
					return <ListGroup.Item key={item}>
						{item}: {values[index]}</ListGroup.Item>
				}
				)
		);
	}

	return (
		<>
			<ListGroup>
				<DisplayCharacter />
			</ListGroup>
		</>
	);
}
export default ShowCharacter;