import TaskItem from './TaskItem';

const dataTasks = [
  { id: 1, name: 'Belajar React', isCompleted: true },
  { id: 2, name: 'Selesaikan Proyek Figma', isCompleted: true },
  { id: 3, name: 'Makan Siang', isCompleted: false },
  { id: 4, name: 'Makan malam', isCompleted: true },
  { id:5, name: 'Makan Bubur', isCompleted: true },
];

export function TaskList() {
  return (
    <ul className="flex flex-col gap-y-3">
      {dataTasks.map((task) => {
        return (
          < li key={task.id} >
            <TaskItem isCompleted={task.isCompleted} name={task.name} />
         
          </li>
        );
      })}
    </ul>
  );
}
