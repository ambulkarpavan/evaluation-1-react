import React, { useState } from "react";
import AddTask from "./AddTask/AddTask";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";
import Task from "./Task/Task";
import styles from "./taskApp.module.css";

import{ v4 as uuidv4} from "uuid";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [todos,setTodos] = useState([])
  const addtodo=(text) => {
    setTodos([...todos , {
      id:uuidv4(),
      value:text} ])
  }

  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader />
      <AddTask addtodo={addtodo} />
      <Tasks> 
        {todos.map((todo) => {
          return <Task key={todo.id} value={todo.value}></Task>
        })}
      </Tasks>
      {/* Header */} 
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
