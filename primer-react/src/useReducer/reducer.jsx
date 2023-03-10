import { useReducer } from "react";

// *Indicamos cuales son los valores iniciales de nuestro form
const initialState = {
  name: "",
  email: "",
};

// *Creamos las acciones que debe cumplir el reduce para modificar nuestro form
const reducer = (state, action) => {
	return ({
		...state,
		[action.type]: action.payload,
	});
}

const AppPrueba = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// *Indicamos como tiene que manejar el cambio que se realiza en nuestro input
	const handleChange = (e) => {
		const {name, value} = e.target;
		dispatch({
			type: name,
			payload: value,
		});
	}

	return (
		<div>
			{JSON.stringify(state)}
			<div>
				<label>
					<span>Name:</span>{" "}
					<input 
						name="name"
						value={state.name}
						onChange={handleChange} />
				</label>
			</div>
			<div>
				<label>
					<span>Email:</span>{" "}
					<input 
						name="email"
						value={state.email}
						onChange={handleChange}/>
				</label>
			</div>
		</div>
	);
}
export default AppPrueba;