import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const Password = ({onChange: changeValue}) => {
	return (
		<div>
			<br />
			<InputGroup size="lg">
				<InputGroup.Text id="inputGroup-sizing-lg">
				Password
				</InputGroup.Text>
				<Form.Control
					aria-label="Large"
					aria-describedby="inputGroup-sizing-sm"
					type='password'
					onChange={changeValue}
				/>
			</InputGroup>
			<br />
		</div>
	);
};
export default Password;
