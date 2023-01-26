import { useState } from "react";
import MyContext from "./context/MyContext";
import ChangeValue from "./components/ChangeValue";


const PruebaApp = () => {
	const [val, setVal] = useState(1);

	return(
		<div>
			<MyContext.Provider value={{val, setVal}}>
				<ChangeValue />
			</MyContext.Provider>	
		</div>
	);
}
export default PruebaApp;