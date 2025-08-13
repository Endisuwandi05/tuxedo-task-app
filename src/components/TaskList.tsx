import { useState } from 'react';
import TaskItem from './TaskItem';

const initialDataTasks = [
  { id: 1, name: 'Belajar React', isCompleted: true },
  { id: 2, name: 'Selesaikan Proyek Figma', isCompleted: true },
  { id: 3, name: 'Makan Siang', isCompleted: false },
  { id: 4, name: 'Makan Malam', isCompleted: true },
  { id: 5, name: 'Makan Makan', isCompleted: true },
];

export function TaskList() {
  const [tasks, setTasks] = useState(initialDataTasks);

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <ul className="flex flex-col gap-y-3">
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem
            isCompleted={task.isCompleted}
            name={task.name}
            onToggleCompletion={() => toggleTaskCompletion(task.id)}
          />
        </li>
      ))}
    </ul>
  );
}

