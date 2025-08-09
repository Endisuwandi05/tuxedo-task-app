import TaskItem from "./components/TaskItem";

const dataTasks = [
  { id: 1, name: "Belajar React", isCompleted: true },
  { id: 2, name: "Selesaikan Proyek Figma", isCompleted: true },
  { id: 3, name: "Makan Siang", isCompleted: false },
  { id: 4, name: "Makan malam", isCompleted: true },
];

function App() {
  return (
    <div className="p-10 space-y-10">
      <h1 className="text-3xl font-bold">Daftar Tugas</h1>

      <ul>
        {dataTasks.map((task) => {
          return (
            <li key={task.id}>
              <TaskItem name="Belajar React" isCompleted={true} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
