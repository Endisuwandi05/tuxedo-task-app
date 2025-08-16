import { useState } from "react";
import TaskItem from "@/components/TaskItem";
import { Button } from "@/components/ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const initialDataTasks = [
  { id: 1, name: "Belajar React", isCompleted: true },
  { id: 2, name: "Selesaikan Proyek Figma", isCompleted: true },
  { id: 3, name: "Makan Siang", isCompleted: false },
  { id: 4, name: "Makan Malam", isCompleted: true },
  { id: 5, name: "Makan Bubur", isCompleted: true },
];

export function TaskList() {
  const [tasks, setTasks] = useState(initialDataTasks);

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name")?.toString();
    if (!name) return;

    const newTask = {
      id: tasks[tasks.length - 1]?.id + 1 || 1,
      name: name,
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
    <div className="space-y-10">
      <div>
        <form method="post" onSubmit={addTask} className="space-y-2">
          <Label htmlFor="name">Name:</Label>
          <Input id="name" name="name" className="max-w-3xs" />
          <Button type="submit">Add Task</Button>
        </form>
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
