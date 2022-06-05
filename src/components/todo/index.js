import TodoBody from "../todo-body";
import TodoFooter from "../todo-footer";
import TodoHeader from "../todo-header";
import styles from "./index.module.css";

const Todo = () => {
  return (
    <section className={styles.todoapp}>
      <TodoHeader />
      <TodoBody />
      <TodoFooter />
    </section>
  );
};

export default Todo;
