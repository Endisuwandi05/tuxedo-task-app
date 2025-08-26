// DEFINISIKAN TIPE DATA (Sama seperti sebelumnya)
interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
}

const instructionalTasks: Task[] = [
  {
    id: 1,
    name: "Klik checkbox ini untuk menyelesaikan tugas",
    isCompleted: true,
  },
  {
    id: 2,
    name: "Gunakan tombol '+' untuk menambah tugas baru",
    isCompleted: false,
  },
  {
    id: 3,
    name: "Atur prioritas tugasmu agar tetap fokus",
    isCompleted: false,
  },
  {
    id: 4,
    name: "Selamat menikmati produktivitas bersama Tuxedo!",
    isCompleted: false,
  },
];

export function Memulai() {
  const tasks = instructionalTasks;

  return (
    <div className="m-10 p-8 max-w-2xl mx-auto bg-white rounded-xl shadow-lg">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Selamat Datang di Tuxedo!
        </h1>
        <p className="text-gray-600 mt-2">
          Ini adalah contoh bagaimana daftar tugas Anda akan terlihat.
          <br />
          Ikuti langkah-langkah di bawah ini untuk memulai.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Contoh Daftar Tugas:
        </h2>
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center p-3 bg-gray-100 rounded-lg transition-all"
            >
              <input
                type="checkbox"
                checked={task.isCompleted}
                readOnly
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
              />
              <span
                className={`ml-4 flex-1 text-gray-800 ${
                  task.isCompleted ? "line-through text-gray-500" : ""
                }`}
              >
                {task.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => alert("Sekarang kamu  ke halaman utama aplikasi...")}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
        >
          Mulai Sekarang
        </button>
      </div>
    </div>
  );
}
