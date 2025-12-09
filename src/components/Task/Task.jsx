import styles from "./Task.module.css";

function Task({ task, onDelete }) {
  return (
    <li className={styles.task}>
      <span>{task}</span>
      <button onClick={onDelete} className={styles.deleteBtn}>Delete</button>
    </li>
  );
}

export default Task;