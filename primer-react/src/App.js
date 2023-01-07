// import logo from "./logo.svg";
import "./App.css";
import PersonalCard from "./poniendoTodoJunto/PoniendoTodoJunto";

function App() {
  return (
    <>
      <PersonalCard 
        name= "Jane" 
        lastName= "Doe"
        age= {45}
        hairColor="Black" />
      <PersonalCard 
        name= "John"
        lastName="Smith"
        age= {88}
        hairColor="Brown"
      />
    </>
  );
}

export default App;
