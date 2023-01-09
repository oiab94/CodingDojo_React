// import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./componentesFuncionales/personCard";

let App = () => {
  return <PersonCard name="John" lastName="Smith" age={9} hairColor="Brown" />;
};

export default App;
