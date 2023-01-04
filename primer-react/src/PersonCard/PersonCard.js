let PersonCard = ({ firstName, lastName, age, hairColor }) => {
  return (
		<div>
      <h1>
        {lastName}, {firstName}
      </h1>
      <p>
        <span>Age: {age}</span><br></br>
        <span>Hair Color: {hairColor}</span>
      </p>
		</div>
  );
};

export default PersonCard;