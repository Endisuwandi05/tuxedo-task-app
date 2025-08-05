import TaskItem from "./components/TaskItem";

function App() {
  return (
    <div className="App">
      <h1>Daftar Tugas</h1>

      <TaskItem name="Belajar React" isCompleted={true} />
      <TaskItem name="Selesaikan Proyek Figma" isCompleted={true} />
      <TaskItem name="Makan Siang" isCompleted={false} />
      <TaskItem name="Makan malam" isCompleted={true} />
    </div>
  );
}

export default App;
