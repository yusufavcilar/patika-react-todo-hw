import React from 'react'
import styles from './index.module.css';

const TodoFooter = () => {
  return (
    <footer className={styles.footer}>
            <span className={styles["todo-count"]}>
                <strong>2</strong>
                items left
            </span>
    
            <ul className={styles.filters}>
                <li>
                    <a href="/" className={styles.selected}>All</a>
                </li>
                <li>
                    <a href="/">Active</a>
                </li>
                <li>
                    <a href="/" >Completed</a>
                </li>
            </ul>
    
            <button className={styles["clear-completed"]}>
                Clear completed
            </button>
        </footer>
  )
}

export default TodoFooter;