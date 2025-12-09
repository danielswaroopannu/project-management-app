import Project from "../Project/Project";
import styles from "./ProjectsList.module.css";

function ProjectsList({ projects, onDeleteProject, onUpdateTasks }) {
  if (projects.length === 0) {
    return <p className={styles.empty}>No projects yet. Add one above!</p>;
  }

  return (
    <div className={styles.list}>
      {projects.map((p) => (
        <Project
          key={p.id}
          project={p}
          onDeleteProject={onDeleteProject}
          onUpdateTasks={onUpdateTasks}
        />
      ))}
    </div>
  );
}

export default ProjectsList;