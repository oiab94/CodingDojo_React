import { useState } from "react";
import MessageDisplay from "./components/MessageDisplay";
import MessageForm from "./components/MessageForm";

const PruebaApp = () => {
	const [currentMsg, setCurrentMsg] = useState("There are no msg");

	const youveGotEmail = (newMessage) => {
		setCurrentMsg( newMessage );
	}

	return (
		<>
			<MessageForm onNewMessage={ youveGotEmail }/>
			<MessageDisplay message={ currentMsg } />
		</>
	);
}
export default PruebaApp;