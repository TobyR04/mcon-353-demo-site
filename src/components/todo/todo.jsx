import React from "react";
import "./todo.css";
import { TextField, Checkbox, Button, Title } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export function Todo() {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodoText] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    };

    setTodos([...todos].concat(newTodo));
    setTodoText("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function changeDone(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id == id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <body>
      <div className="todo-container">
        <header>Todo List</header>
        <br></br>

        <div id="inputs">
          <form onSubmit={handleSubmit}>
            <TextField
              id="filled-basic"
              onChange={(e) => setTodoText(e.target.value)}
              value={todo}
            />

            <Button id="submit" type="submit">
              Add
            </Button>
          </form>
        </div>

        {todos.map((todo) => (
          <div id="tasks">
            {todo.text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <DeleteIcon onClick={() => deleteTodo(todo.id)}></DeleteIcon>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Checkbox
              onChange={() => changeDone(todo.id)}
              checked={todo.completed}
            />
          </div>
        ))}
      </div>
    </body>
  );
}

export default Todo;
