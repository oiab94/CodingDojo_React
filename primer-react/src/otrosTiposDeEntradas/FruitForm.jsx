import { useState } from "react";

const fruits = ["banana", "pineapple", "peach", "apple"];

export default function FruitForms() {
  const [selectedFruit, setSelectedFruit] = useState(fruits[0]);
  const [isTasty, setItTasty] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefaul();
    console.log(
      "The " + selectedFruit + " is " + (isTasty ? " " : " not") + " tasty!"
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={selectedFruit}
        onChange={(e) => setSelectedFruit(e.target.value)}
      >
        {fruits.map((fruit, idx) => (
          <option key={idx} value={fruit}>
            {fruit}
          </option>
        ))}
      </select>
			<label>
				<input type="checkbox" checked={isTasty} onChange={e => setItTasty(e.target.checked)}/>
				Is it tasty?
			</label>
			<button>Take a bite!</button>
    </form>
  );
}
