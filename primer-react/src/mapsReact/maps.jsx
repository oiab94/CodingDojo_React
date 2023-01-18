const MapsReact = (props) => {
	const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];

	return (
		<>
			<h1>Componentes</h1>
			<ul>{
				groceryList.map(
					( item, index ) =>
						<li key={ index }>{ item }</li> 
					)
				}
			</ul>
		</>
	);
};

export default MapsReact;