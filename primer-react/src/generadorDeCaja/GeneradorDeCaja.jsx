import { useState } from "react";
import DisplayColor from "./components/DisplayColor";
import FormularioColor from "./components/Form";

export default function GeneradorDeCaja(){
	const [color, setColor] = useState(["#ff0000", "#ffffff","#0000ff" ]);

	return (
		<div>
			<FormularioColor status={color} setStatus={setColor} />
			<DisplayColor color={color} />
		</div>
	);
}