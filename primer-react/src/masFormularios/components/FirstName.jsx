import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const FirstName = ({onChange: changeValue}) => {
	return (
		<div>
			<br />
			<InputGroup size="lg">
				<InputGroup.Text id="inputGroup-sizing-lg">
					First Name
				</InputGroup.Text>
				<Form.Control
					aria-label="Large"
					aria-describedby="inputGroup-sizing-sm"
					onChange={changeValue}
				/>
			</InputGroup>
		</div>
	);
};
export default FirstName;