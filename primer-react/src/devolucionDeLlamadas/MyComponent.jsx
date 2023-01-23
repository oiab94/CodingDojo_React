import Button from "react-bootstrap/esm/Button";

const MyComponent = (props) => {
  const onClickHandler = (value) => {
    alert("You press " + value);
  };

  return props.movies.map((item) => {
    return <Button onClick={() => onClickHandler(item)}>{item}</Button>;
  });
};

export default MyComponent;
