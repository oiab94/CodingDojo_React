import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListTask from "./components/ListTask";
import AddTask from "./components/AddTask";

const ToDoList = () => {
  // * Aqui almacenamos las tareas
  const initialState = [];
  const [listTask, setListTask] = useState(initialState);

  return (
    <Container>
      <Row>
        <Col>
          <AddTask items={listTask} onClick={setListTask} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ListTask items={listTask} onClick={setListTask} />
        </Col>
      </Row>
    </Container>
  );
};
export default ToDoList;
