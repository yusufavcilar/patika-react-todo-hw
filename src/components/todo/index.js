import { useState } from "react";
import TodoBody from "../todo-body";
import TodoFooter from "../todo-footer";
import TodoHeader from "../todo-header";
import styles from "./index.module.css";

const Todo = () => {
    const [todos,setTodos] = useState([])

    const newTodoHandler = (todo) => {
     setTodos((prevState)=> [...prevState, todo])
    }

    const statusHandler = (todo) => {
    const copyTodos = [...todos]
    const updatedTodo = copyTodos.find((item)=> item.id === todo.id)
    updatedTodo.isCompleted = !updatedTodo.isCompleted
    setTodos(copyTodos);
    }

    
  return (
    <section className={styles.todoapp}>
      <TodoHeader newTodoHandler={newTodoHandler} />
      <TodoBody todos={todos} statusHandler={statusHandler}/>
      <TodoFooter />
    </section>
  );
};

export default Todo;
