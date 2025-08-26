import TaskItem from "@/components/TaskItem";

interface TaskListProps {
  tasks: { id: number; name: string; isCompleted: boolean }[];
  onToggleCompletion: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

export function TaskList({
  tasks,
  onToggleCompletion,
  onDeleteTask,
}: TaskListProps) {
  return (
    <div className="flex flex-col gap-y-3 list-none">
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem
            id={task.id}
            isCompleted={task.isCompleted}
            name={task.name}
            onToggleCompletion={() => onToggleCompletion(task.id)}
            deleteTask={() => onDeleteTask(task.id)}
          />
        </li>
      ))}
    </div>
  );
}
