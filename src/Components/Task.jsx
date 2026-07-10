export default function Task({ title, description, deleteTask, index }) {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <button
        className="delete-btn"
        onClick={() => deleteTask(index)}
      >
        Delete
      </button>
    </div>
  );
}