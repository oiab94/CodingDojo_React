import logo from "./logo.svg";
import "./App.css";
// *Importamos la clase PersonCard
import PersonCard from "./PersonCard/PersonCard";

function App() {
  return (
    <>
      <PersonCard 
        firstName="Jane" 
        lastName="Doe" 
        age={45} 
        hairColor="Black" />
      <PersonCard
        firstName="John"
        lastName="Smith"
        age={88}
        hairColor="Brown"
      />
      <PersonCard
        firstName="Millard"
        lastName="Filmore"
        age={50}
        hairColor="Brown"
      />
      <PersonCard
        firstName="Maria"
        lastName="Smith"
        age={62}
        hairColor="Brown"
      />
    </>
  );
}

export default App;
