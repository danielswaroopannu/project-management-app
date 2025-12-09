import { useRef, useEffect } from "react";
import styles from "./ProjectForm.module.css";

function ProjectForm({ onAddProject }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ fixed typo
    const name = inputRef.current.value.trim();
    if (name) {
      onAddProject(name);
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter project name"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Add Project</button>
    </form>
  );
}

export default ProjectForm;