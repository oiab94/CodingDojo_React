import { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";

const SetID = (props) => {
	const url = props.state;
	const setUrl = props.setState;
	const setDisplay = props.setDisplay;
	const [id, setID] = useState("");

	// * Setea el ID seleccionado
	const setNewID = (e) => {
		setID(e.target.value)
	}

	// *Setea la nueva dirección URL
	const setNewUrl = (e) => {
		setUrl(url + id + "/");
		setDisplay(true);
	} 

	return (
		<Container>
			<InputGroup 
				size="lg">
				<InputGroup.Text>ID</InputGroup.Text>
				<Form.Control 
					onChange={ (e) => setNewID(e) }
					placeholder="Ingrese ID"></Form.Control>
				<Button 
					variant="secondary"
					onClick={ setNewUrl } >Search</Button>
			</InputGroup>
		</Container>
	);

}
export default SetID;