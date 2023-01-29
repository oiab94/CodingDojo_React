import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import SetAttributes from "./components/SetAttributes";
import SetID from "./components/SetID";
import ShowCharacter from "./components/ShowCharacter";

const StarWarsAPI = () => {
	const [attributes, setAttributes] = useState({});
	const [url, setUrl] = useState("");
	const [display, setDisplay] = useState(false);

	useEffect(
		() => {
			axios.get("https://swapi.dev/api/")
				.then(response => setAttributes(response.data))
				.catch(error => console.log(error))
		}, []
	)

	return(
		<Container className="mt-3">
			<Row>
				<Col xs lg="2">
					<SetAttributes 
						state={attributes}
						setUrl={setUrl}/>
				</Col>
				<Col xs lg="5">
					<SetID 
						state={url}
						setState={setUrl}
						setDisplay={setDisplay}/>
				</Col>
			</Row>
			<Row>
				<Col>
					{
						display ? 
							<ShowCharacter url={url} /> : <></>
					}
				</Col>
			</Row>
		</Container>
	);
}
export default StarWarsAPI;