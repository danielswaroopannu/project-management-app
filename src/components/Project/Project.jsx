import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TasksList from "../TasksList/TasksList";
import Modal from "../Modal/Modal";
import styles from "./Project.module.css";

function Project({ project, onDeleteProject, onUpdateTasks }) {
  const [showModal, setShowModal] = useState(false);

  const addTask = (task) => {
    onUpdateTasks(project.id, [...project.tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = project.tasks.filter((_, i) => i !== index);
    onUpdateTasks(project.id, updatedTasks);
  };

  const clearTasks = () => {
    onUpdateTasks(project.id, []);
  };

  const handleDelete = () => {
    setShowModal(true);
  };

  const confirmDelete = () => {
    onDeleteProject(project.id);
    setShowModal(false);
  };

  return (
    <div className={styles.project}>
      <h2 className={styles.title}>{project.name}</h2>
      <TaskForm onAddTask={addTask} />
      <TasksList tasks={project.tasks} onDeleteTask={deleteTask} />
      <div className={styles.actions}>
        <button onClick={clearTasks} className={styles.clearBtn}>Clear All Tasks</button>
        <button onClick={handleDelete} className={styles.deleteBtn}>Delete Project</button>
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h3>Are you sure you want to delete this project?</h3>
          <div className={styles.modalActions}>
            <button onClick={confirmDelete} className={styles.confirmBtn}>Yes, Delete</button>
            <button onClick={() => setShowModal(false)} className={styles.cancelBtn}>Cancel</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Project;