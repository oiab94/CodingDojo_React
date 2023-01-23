// import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./devolucionDeLlamadas/MyComponent";

let App = () => {
  return (
		<>
			<MyComponent movies={["1", "2", "3"]} />
		</>
	);
};

export default App;
