import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Container from "react-bootstrap/Container";
import FirstName from "./components/FirstName";
import LastName from "./components/LastName";
import Email from "./components/Email";
import Password from "./components/Password";
import {
  ValidateFirstName,
  ValidateLastName,
  ValidateEmail,
  ValidatePassword,
} from "./components/Validate";

const UserForm = (props) => {
  const [firstName, setFirtsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <FirstName onChange={(e) => setFirtsName(e.target.value)} />
      {ValidateFirstName(firstName)}
      <LastName onChange={(e) => setLastName(e.target.value)} />
      {ValidateLastName(lastName)}
      <Email onChange={(e) => setEmail(e.target.value)} />
      {ValidateEmail(email)}
      <Password onChange={(e) => setPassword(e.target.value)} />
      {ValidatePassword(password)}
    </Container>
  );
};
export default UserForm;
