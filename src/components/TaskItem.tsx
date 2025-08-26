import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { Link } from "react-router";

interface TaskProps {
  id: number;
  isCompleted: boolean;
  name: string;
  onToggleCompletion: () => void;
  deleteTask: () => void;
}

export function TaskItem({
  id,
  isCompleted,
  name,
  onToggleCompletion,
  deleteTask,
}: TaskProps) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onToggleCompletion}
          className="form-checkbox h-5 w-5 text-blue-600 rounded-full"
        />
        <span
          className={
            isCompleted ? "line-through text-gray-500" : "text-gray-900"
          }
        >
          {name}
        </span>
      </div>
      <div className="flex gap-2">
        <Button asChild variant="outline" size="sm">
          <Link to={`/tasks/${id}`}>View</Link>
        </Button>
        <Button variant="destructive" size="sm" onClick={deleteTask}>
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
}

export default TaskItem;
