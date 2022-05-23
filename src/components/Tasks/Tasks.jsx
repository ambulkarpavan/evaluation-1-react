import React, {Children} from "react";
import styles from "./tasks.module.css";

const Tasks = ({children}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.box}>
      <ul data-cy="tasks" className={styles.tasks}>
        {children}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </div>
  );
};

export default Tasks;
