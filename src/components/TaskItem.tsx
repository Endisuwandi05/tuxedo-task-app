interface TaskProps {
  name: string;
  isCompleted: boolean;
}

function TaskItem({ name, isCompleted }: TaskProps) {
  return (
    <div className="mb-1.25 border border-gray-300 p-2.5">
      <h2 className="text-lg font-bold">{name}</h2>

      <p>
        <span>Status: </span>
        {isCompleted ? (
          <span className="text-green-700">Completed ✅</span>
        ) : (
          <span className="text-red-700">Incomplete ❌</span>
        )}
      </p>
    </div>
  );
}

export default TaskItem;
