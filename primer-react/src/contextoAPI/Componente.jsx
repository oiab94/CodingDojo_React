import { useContext } from "react";
import MyContext from "./Context/CreacionContex";

const CreacionComponente = (props) => {
	const context = useContext(MyContext);

	return (
		<div>
			<h1>Hello {context}</h1>			
		</div>
	);
}
export default CreacionComponente;
