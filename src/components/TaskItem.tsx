interface TaskProps {
  isCompleted: boolean;
  name: string;

  onToggleCompletion: () => void;
  onDeleteTask: () => void;
}

export function TaskItem({
  isCompleted,
  name,
  onToggleCompletion,
  onDeleteTask,
}: TaskProps) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onToggleCompletion}
          className="form-checkbox h-5 w-5 text-blue-600 rounded"
        />
        <span
          className={
            isCompleted ? "line-through text-gray-500" : "text-gray-900"
          }
        >
          {name}
        </span>
      </div>
      <button
        onClick={onDeleteTask}
        className="text-red-500 hover:text-red-700"
      >
        Hapus
      </button>
    </div>
  );
}

export default TaskItem;
