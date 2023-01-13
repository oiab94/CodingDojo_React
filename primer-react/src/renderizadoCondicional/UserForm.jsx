import {useState} from 'react';

const UserForm = (props) => {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [hasBeenSubmit, setHasBeenSubmit] = useState("");

	const createUser = (e) => {
		e.preventDefault();
		const newUser = {userName, email, password};
		console.log("Welcome", newUser);
		setHasBeenSubmit(true);
	};

	const formMessage = () => {
		if( hasBeenSubmit ) return "Thank you for submit the form!";
		return "Welcome, please submit the form";
	};

	return (
		<form onSubmit={ createUser }>
			{
				// *Utilizando operadores ternarios 
				hasBeenSubmit ? 
					<h3>Thank you for submit the form!</h3> :
					<h3>Welcome, please submit the form</h3>
			}
			<div>
				<label>Username:</label>
				<input type="text" onChange={(e) => setUserName(e.target.value)} />
			</div>
			<div>
				<label>Email Address:</label>
				<input type="text" onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div>
				<label>Password:</label>
				<input type="password" onChange={(e) => setPassword(e.target.value)} />
			</div>
			<input type="submit" value="Create User" />
		</form>
	);
}

export default UserForm;