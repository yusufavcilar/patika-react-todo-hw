import React from "react";
import styles from "./index.module.css";

const TodoBody = ({ todos , statusHandler , deleteHandler }) => {
  return (
    <section className={styles.main}>
      <input className={styles["toggle-all"]} type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className={styles["todo-list"]}>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className={todo.isCompleted ? styles.completed : null}>
              <div className="view">
                <input className={styles.toggle} type="checkbox" onChange={()=> statusHandler(todo)} />
                <label>{todo.name}</label>
                <button className={styles.destroy} onClick={()=> deleteHandler(todo)}></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoBody;
