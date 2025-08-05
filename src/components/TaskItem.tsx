interface TaskProps {
  name: string;
  isCompleted: boolean;
}

function TaskItem({ name, isCompleted }: TaskProps) {
  return (
    <div
      style={{ padding: "10px", border: "1px solid #eee", marginBottom: "5px" }}
    >
      <h2>Nama: {name}</h2>
      {isCompleted ? (
        <p style={{ color: "green" }}>Status: Completed ✅</p>
      ) : (
        <p style={{ color: "red" }}>Status: Incomplete ❌</p>
      )}
    </div>
  );
}

export default TaskItem;
