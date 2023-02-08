import { useState } from "react";

export default function FormularioColor(props) {
	const [color, setColor] = useState("");
	const status = props.status;
	const setStatus = props.setStatus;

	const agregaColor = (e) => {
		e.preventDefault();

		let temp = status.map(
			(item, index) => {
				return (item)
			});
		temp.push(color);
		setStatus(temp);
	}


	return (
		<form>
			<label>Color</label>
			<input type="text" onChange={e => setColor(e.target.value)}/>
			<button onClick={agregaColor}>Add</button>
		</form>
	);
}