// import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./granInversion/personCard";

let App = () => {
  return (
    <div>
      <PersonCard 
				name="Jane" 
				lastName="Doe" 
				age={45} 
				hairColor="Black" />
      <PersonCard 
				name="John" 
				lastName="Smith" 
				age={9} 
				hairColor="Brown" />
      <PersonCard
        name="Millard"
        lastName="Filmore"
        age={50}
        hairColor="Brown"/>
      <PersonCard 
				name="Maria" 
				lastName="Smith" 
				age={62} 
				hairColor="Brown" />
    </div>
  );
};

export default App;
