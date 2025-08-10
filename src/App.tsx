import { TaskList } from "./components/TaskList";

function App() {
  return (
    <div className="p-10 space-y-10">
      <h1 className="text-3xl font-bold">Tuxedo: Daftar Tugas</h1>

      <TaskList />
    </div>
  );
}

export default App;
