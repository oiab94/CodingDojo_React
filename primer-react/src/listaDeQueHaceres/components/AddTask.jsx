import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const AddTask = (props) => {
  const listTask = props.items;
  const setListTask = props.onClick;

  // *Aqui conservaremos los datos de la nueva tarea
  const [newTask, setNewTask] = useState({ name: "", checked: false });

  // *Cargamos los datos de la nueva tarea
  const createTask = (e) => {
    setNewTask({
      ...newTask,
      name: e.target.value,
    });
  };

  // *Actualizamos el listado de tareas
  const updateListTask = () => {
    const newArray = listTask.map((task, index) => {
      return task;
    });
    newArray.push(newTask);
    setListTask(newArray);
  };

  return (
    <div className="mt-3">
      <Form.Control type="input" onChange={createTask} />
      <Button className="mt-2" type="add" value="add" onClick={updateListTask}>
        Add
      </Button>
    </div>
  );
};
export default AddTask;
