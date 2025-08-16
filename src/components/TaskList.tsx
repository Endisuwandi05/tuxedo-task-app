import { useState } from "react";
import TaskItem from "@/components/TaskItem";
import { Button } from "@/components/ui/button";

const initialDataTasks = [
  { id: 1, name: "Belajar React", isCompleted: true },
  { id: 2, name: "Selesaikan Proyek Figma", isCompleted: true },
  { id: 3, name: "Makan Siang", isCompleted: false },
  { id: 4, name: "Makan Malam", isCompleted: true },
  { id: 5, name: "Makan Bubur", isCompleted: true },
];

export function TaskList() {
  const [tasks, setTasks] = useState(initialDataTasks);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      name: "Example Task",
      isCompleted: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div>
        <Button onClick={addTask}>Add Task</Button>
      </div>

      <ul className="flex flex-col gap-y-3">
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskItem
              isCompleted={task.isCompleted}
              name={task.name}
              onToggleCompletion={() => toggleTaskCompletion(task.id)}
              deleteTask={() => deleteTask(task.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
