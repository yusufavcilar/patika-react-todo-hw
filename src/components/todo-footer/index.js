import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { v4 as uuidv4 } from "uuid";

const FILTER_BUTTONS = [
  {
    id: uuidv4(),
    name: "All",
    isActive: true,
  },
  {
    id: uuidv4(),
    name: "Active",
    isActive: false,
  },
  {
    id: uuidv4(),
    name: "Completed",
    isActive: false,
  },
];

const TodoFooter = ({ todos, deleteCompletedHandler, filterHandler }) => {
  const [todoCount, setTodoCount] = useState(0);
  const [filterBtns, setFilterBtns] = useState(FILTER_BUTTONS);

  const filterTodos = () => {
    const filtered = todos.filter((item) => !item.isCompleted);
    setTodoCount(filtered.length);
  };

  const filterBtnOnClick = (btn) => {
    const copyFilterButtons = filterBtns.map((item) => {
      if (btn.id === item.id) {
        return {
          ...item,
          isActive: true,
        };
      } else {
        return {
          ...item,
          isActive: false,
        };
      }
    });
    setFilterBtns(copyFilterButtons);
    filterHandler(btn);
  };

  useEffect(() => {
    filterTodos();
  }, [todos]);

  return (
    <footer className={styles.footer}>
      <span className={styles["todo-count"]}>
        <strong>{todoCount}</strong>
        items left
      </span>

      <ul className={styles.filters}>
        {filterBtns.map((btn) => {
          return (
            <li key={btn.id}>
              <button
                className={btn.isActive ? styles.selected : null}
                onClick={() => filterBtnOnClick(btn)}
              >
                {btn.name}
              </button>
            </li>
          );
        })}
      </ul>

      <button
        className={styles["clear-completed"]}
        onClick={deleteCompletedHandler}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default TodoFooter;
