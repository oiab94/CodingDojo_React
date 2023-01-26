import MyContext from "./Context/CreacionContex";
import CreacionComponente from "./Componente";

const PruebaApp = () => {
	return (
		<div>
			<MyContext.Provider value={"world"}>
				<CreacionComponente>
				</CreacionComponente>
			</MyContext.Provider>
		</div>
	);
}
export default PruebaApp;
