import { useRef } from "react";
import styles from "./TaskForm.module.css";

function TaskForm({ onAddTask }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = inputRef.current.value.trim();
    if (task) {
      onAddTask(task);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter task"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Add Task</button>
    </form>
  );
}

export default TaskForm;