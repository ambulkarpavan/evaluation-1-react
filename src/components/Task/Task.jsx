import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({value}) => {
  // NOTE: do not delete `data-cy` key value pair
  console.log(value)
  return (
    <div data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div>{value}</div>
      <div data-cy="task-text"></div>
      <Counter/>
      <button data-cy="task-remove-button" className={styles.btn} >x</button>
    </div>
  );
};

export default Task;
