import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const ListTask = (props) => {
  const tasks = props.items;
  const setTask = props.onClick;

  // *Indicamos el estado del check en el texto
  const setChecked = (index) => {
    const newArray = tasks.map((task, i) => {
      if (index === i) {
        return { ...task, checked: !task.checked };
      } else {
        return task;
      }
    });
    setTask(newArray);
  };

	// *Borramos la tarea que no necesitamos
	const deleteTask = (index) => {
		const newArray = tasks.filter((_, i) => i !== index);
		setTask(newArray);
	}


  return (
    <Form>
      <Form.Check>
        {tasks.map((task, index) => {
          return (
            <div key={index}>
              <Form.Check
                inline
                type="checkbox"
                className="form-control-lg"
                onClick={() => setChecked(index)}
              />
              <Form.Check.Label
                className={
                  task.checked
                    ? "text-decoration-line-through form-control-lg"
                    : "form-control-lg"
                }
              >
                {task.name}
              </Form.Check.Label>
              <Button 
								variant="outline-dark" 
								onClick={() => deleteTask(index)}>
                Delete
              </Button>
            </div>
          );
        })}
      </Form.Check>
    </Form>
  );
};
export default ListTask;
