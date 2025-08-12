import { useState } from 'react';
import TaskItem from './TaskItem';

const initialDataTasks = [
  { id: 1, name: 'Belajar React', isCompleted: true },
  { id: 2, name: 'Selesaikan Proyek Figma', isCompleted: true },
  { id: 3, name: 'Makan Siang', isCompleted: false },
  { id: 4, name: 'Makan Malam', isCompleted: true },
  { id: 5, name: 'Makan Bubur', isCompleted: true },
];

export function TaskList() {
  // 1. Mengubah dataTasks menjadi state menggunakan useState
  const [tasks, setTasks] = useState(initialDataTasks);

  // 2. Fungsi untuk memperbarui state (menandai tugas selesai)
  const toggleTaskCompletion = (taskId) => {
    // Membuat salinan array tasks yang baru
    const updatedTasks = tasks.map((task) =>
      // Jika id tugas cocok, ubah status isCompleted
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    // Memperbarui state dengan array yang baru
    setTasks(updatedTasks);
  };

  return (
    <ul className="flex flex-col gap-y-3">
      {tasks.map((task) => (
        // 3. Meletakkan TaskItem sebagai elemen utama di dalam li
        <li key={task.id}>
          {/* Mengirim data tugas dan fungsi toggleTaskCompletion ke TaskItem */}
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

export interface TaskProps {
  isCompleted: boolean;
  name: string;
  onToggleCompletion: () => void; // Add this line
}