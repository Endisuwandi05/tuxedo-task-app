import TaskItem from './TaskItem';

const dataTasks = [
  { id: 1, name: 'Belajar React', isCompleted: true },
  { id: 2, name: 'Selesaikan Proyek Figma', isCompleted: true },
  { id: 3, name: 'Makan Siang', isCompleted: false },
  { id: 4, name: 'Makan malam', isCompleted: true },
];

export function TaskList() {
  return (
    <ul>
      {dataTasks.map((task) => {
        return (
          <li key={task.id}>
            <TaskItem name="Belajar React" isCompleted={true} />
          </li>
        );
      })}
    </ul>
  );
}
