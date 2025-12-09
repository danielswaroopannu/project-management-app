import Task from "../Task/Task";
import styles from "./TasksList.module.css";

function TaskList({ tasks, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p className={styles.empty}>No tasks yet. Add one above!</p>;
  }

  return (
    <ul className={styles.list}>
      {tasks.map((t, i) => (
        <Task key={i} task={t} onDelete={() => onDeleteTask(i)} />
      ))}
    </ul>
  );
}

export default TaskList;