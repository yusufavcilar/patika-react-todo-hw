import React from 'react'
import styles from './index.module.css';

const TodoHeader = () => {
  return (
    <header>
    <h1>todos</h1>
    <form>
        <input className={styles["new-todo"]} placeholder="What needs to be done?" autoFocus/>
    </form>
</header>
  )
}

export default TodoHeader;