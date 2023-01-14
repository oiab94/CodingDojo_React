import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const LastName = ({onChange: changeValue}) => {
	return (
		<div>
			<br />
			<InputGroup size="lg">
				<InputGroup.Text id="inputGroup-sizing-lg">
					Last Name
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
export default LastName;