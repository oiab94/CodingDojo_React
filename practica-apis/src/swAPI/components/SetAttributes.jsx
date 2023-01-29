import { useEffect } from 'react';
import { useState } from 'react';
import {Container, Dropdown} from 'react-bootstrap';

const SetAttributes = (props) => {
	const attributes = props.state;
	const url = "https://swapi.dev/api/";
	const setUrl = props.setUrl;
	const [listAttributes, setListAttributes] = useState([]);

	// *Obtener nombre de los atributos
	useEffect(
		() => {
			setListAttributes(Object.keys(attributes))
		}, [attributes]
	)

	// *Inserta el texto que se elige en el menu
	const onClickMenu = (e) => {
		setUrl(url + e.target.text + "/")
	}

	// *Inserta los datos en la lista
	const selectAttributes = () => {
		return listAttributes.map(
			(item, index) => {
				return (
					<Dropdown.Item 
						onClick={onClickMenu} 
						key={index}
						id={item}>{item}</Dropdown.Item>
				)
			}
		)
	}

	return(
		<Container>
			<Dropdown >
				<Dropdown.Toggle
					size="lg" 
					variant="secondary">Atributos</Dropdown.Toggle>

				<Dropdown.Menu>
					{ selectAttributes() }
				</Dropdown.Menu>
			</Dropdown>
		</Container>
	);
}
export default SetAttributes;