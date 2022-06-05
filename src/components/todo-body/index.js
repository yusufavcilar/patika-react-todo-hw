import React from 'react'
import styles from './index.module.css';

const TodoBody = () => {
  return (
    <section className={styles.main}>
            <input className={styles["toggle-all"]} type="checkbox"/>
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>
    
            <ul className={styles["todo-list"]}>
                <li className={styles.completed}>
                    <div className={styles.view}>
                        <input className={styles.toggle} type="checkbox"/>
                        <label>Learn JavaScript</label>
                        <button className={styles.destroy}></button>
                    </div>
                </li>
                <li>
                    <div className="view">
                        <input className={styles.toggle} type="checkbox"/>
                        <label>Learn React</label>
                        <button className={styles.destroy}></button>
                    </div>
                </li>
                <li>
                    <div className="view">
                        <input className={styles.toggle} type="checkbox"/>
                        <label>Have a life!</label>
                        <button className={styles.destroy}></button>
                    </div>
                </li>
            </ul>
        </section>
  )
}

export default TodoBody;