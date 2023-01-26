import { useContext } from "react";
import MyContext from "../context/MyContext";

const ChangeValue = (props) => {
	const component = useContext(MyContext);
	const val = component.val;
	const setVal = component.setVal;

	const newValue = () => {
		setVal(val+1);
	}

	return(
		<>
		<h1>{val}</h1>
		<button onClick={ newValue }>+1</button>
		</>
	);
}
export default ChangeValue;
