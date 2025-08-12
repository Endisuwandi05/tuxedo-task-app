// TaskItem.tsx

// Definisikan interface untuk prop yang diterima
interface TaskProps {
  isCompleted: boolean;
  name: string;
  // Tambahkan prop onToggleCompletion di sini
  // Ini adalah fungsi yang tidak mengembalikan nilai (void)
  onToggleCompletion: () => void;
}

// Gunakan interface tersebut pada komponen
export function TaskItem({ isCompleted, name, onToggleCompletion }: TaskProps) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
      <div className="flex items-center gap-2">
        {/* Gunakan onToggleCompletion di sini, misalnya pada sebuah button atau div */}
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onToggleCompletion} // Panggil fungsi saat checkbox diubah
          className="form-checkbox h-5 w-5 text-blue-600 rounded"
        />
        <span className={isCompleted ? 'line-through text-gray-500' : 'text-gray-900'}>
          {name}
        </span>
      </div>
    </div>
  );
}

export default TaskItem;