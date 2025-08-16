import { TaskList } from './components/TaskList';

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center"> Tuxedo : Tugas  Saya</h1>
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <form action=""></form>
        <TaskList />
      </div>
    </div>
  );
}

export default App;