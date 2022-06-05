import { useEffect, useState } from "react";
import TodoBody from "../todo-body";
import TodoFooter from "../todo-footer";
import TodoHeader from "../todo-header";
import styles from "./index.module.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [filter, setFilter] = useState("All");

  const newTodoHandler = (todo) => {
    setTodos((prevState) => [...prevState, todo]);
  };

  const statusHandler = (todo) => {
    const copyTodos = [...todos];
    const updatedTodo = copyTodos.find((item) => item.id === todo.id);
    updatedTodo.isCompleted = !updatedTodo.isCompleted;
    setTodos(copyTodos);
  };

  const deleteHandler = (todo) => {
    const updatedTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(updatedTodos);
  };

  const deleteCompletedHandler = () => {
    const updatedTodos = todos.filter((item) => !item.isCompleted);
    setTodos(updatedTodos);
  };

  const filterHandler = (btn) => {
    setFilter(btn.name);
  };

  useEffect(() => {
    if (filter === "All") {
      setFilteredTodos(todos);
    } else if (filter === "Active") {
      setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
    } else if (filter === "Completed") {
      setFilteredTodos(todos.filter((todo) => todo.isCompleted));
    }
  }, [filter, todos]);

  return (
    <section className={styles.todoapp}>
      <TodoHeader newTodoHandler={newTodoHandler} />
      <TodoBody
        todos={filteredTodos}
        statusHandler={statusHandler}
        deleteHandler={deleteHandler}
      />
      <TodoFooter
        todos={todos}
        deleteCompletedHandler={deleteCompletedHandler}
        filterHandler={filterHandler}
      />
    </section>
  );
};

export default Todo;
