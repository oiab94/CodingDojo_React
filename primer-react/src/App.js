// import logo from "./logo.svg";
import "./App.css";
import Counter from "./useState/counter";
import CounterUseState from './useState/useStateCounter';

let App = () => {
  return (
		<>
			<Counter />
			<CounterUseState />
		</>
	);
};

export default App;
