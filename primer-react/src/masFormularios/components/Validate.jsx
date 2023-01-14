import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


const ValidateFirstName = (firstName) => { 
	return (
		firstName.length < 2 ? 
			<p className="text-danger">First Name must be at least 2 characters</p> :
			<p></p> 
	);
}

const ValidateLastName = (lastName) => {
	return (
		lastName.length < 2 ?
			<p className="text-danger">Last Name must be at least 2 characters</p> :
			<p></p>
	);
}

const ValidateEmail = (email) => {
	return (
		email.length < 2 ?
			<p className="text-danger">Email must be at least 2 characters</p> :
			<p></p> 
	);
}

const ValidatePassword = (password) => {
	const [newPassword, setNewPassword] = useState("")
	
	const ShowValidPassword = () => {
		return (
			newPassword === password ? 
				<p></p> :
				(
					<>
						<p className="text-danger">Password must be at least 8 characters</p>
						<p className="text-danger">Password must match</p>
					</>
				)
		);	
	}

	return (
		<>
			<InputGroup size="lg">
				<InputGroup.Text id="inputGroup-sizing-lg">
				Confirm Password
				</InputGroup.Text>
				<Form.Control
					aria-label="Large"
					aria-describedby="inputGroup-sizing-sm"
					type='password'
					onChange={(e) => setNewPassword(e.target.value)}
					/>
			</InputGroup>
			<ShowValidPassword />
		</>
	);
}

export {ValidateFirstName, ValidateLastName, ValidateEmail, ValidatePassword}