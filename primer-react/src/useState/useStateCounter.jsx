import { Component, useState } from "react";

/**
 * *Usando useState nos permite convertir este componente en un componente
 * *funcional.
 */
const CounterUseState = (props) => {
	/**
	 * *Al invocar useState no necesitamos pasar un objeto, simplemente podemos  
	 * *pasar un valor primitivo y luego actualizarlo en consecuencia
	 */
  const [state, setState] = useState({
    clickCount: 0,
  });

	const handleClick = () => {
		setState({
			clickCount: state.clickCount + 1,
		});
	};

	return (
		<div>
			{state.clickCount}
			<button onClick={ handleClick }>Click Me</button>
		</div>
	);
};

export default CounterUseState;