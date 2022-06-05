import TodoHeader from '../todo-header';
import styles from './index.module.css';

const Todo = () => {
    return (
        <section className={styles.todoapp}>
       
        <TodoHeader/>
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
    </section>
    )
}

export default Todo;