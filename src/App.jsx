import { useState } from "react";
import ProjectForm from "./components/ProjectForm/ProjectForm";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import styles from "./App.module.css";

function App() {
  const [projects, setProjects] = useState([]);

  const addProject = (name) => {
    const newProject = { id: Date.now(), name, tasks: [] };
    setProjects([...projects, newProject]);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const updateTasks = (id, tasks) => {
    setProjects(projects.map((p) => (p.id === id ? { ...p, tasks } : p)));
  };

  return (
    <div className={styles.app}>
      <h1>Project Management App</h1>
      <ProjectForm onAddProject={addProject} />
      <ProjectsList
        projects={projects}
        onDeleteProject={deleteProject}
        onUpdateTasks={updateTasks}
      />
    </div>
  );
}

export default App;