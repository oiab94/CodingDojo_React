import { useEffect } from "react";
import { useState } from "react";

const LimpiezaAlDesmontar = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

	useEffect(() => {
		console.log("Hello");
		const int = setInterval(
			() => setTime(new Date().toLocaleString()), 
			1000
		);

		return () => { clearInterval(int) };
	}, []);

	return (
		<>
			<div>Current time: {time}</div>
		</>
	);
};
export default LimpiezaAlDesmontar;