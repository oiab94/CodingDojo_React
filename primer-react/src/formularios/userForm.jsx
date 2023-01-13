import { useState } from "react";
import "./style.module.css";

const UserForm = (props) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { username, email, password };
    console.log("Welcome", newUser);
  };

  return (
    <form onSubmit={createUser}>
      <div>
        <label>Username: </label>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={username}
        />
      </div>

      <div>
        <label>Email Address: </label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div>
        <label>Password: </label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <input type="submit" value="Create User" />
    </form>
  );
};

export default UserForm;
