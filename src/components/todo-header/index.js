import { useState } from "react";
import styles from "./index.module.css";
import { v4 as uuidv4 } from 'uuid';

const TodoHeader = ({ newTodoHandler }) => {
  const [newTodo, setNewTodo] = useState("");

  const onChangeHandler = (event) => {
    setNewTodo(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (newTodo !== "") {
      const todo = {
        id:uuidv4(),
        name:newTodo,
        isCompleted:false,
      }
      newTodoHandler(todo);
      setNewTodo("");
    }
  };

  return (
    <header>
      <h1>todos</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          value={newTodo}
          className={styles["new-todo"]}
          placeholder="What needs to be done?"
          autoFocus
          onChange={onChangeHandler}
        />
      </form>
    </header>
  );
};

export default TodoHeader;
