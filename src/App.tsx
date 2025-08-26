import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { initialDataTasks } from "./data/Tasks";


export default function App() {

  const [tasks, setTasks] = useState(() => {
    
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks
      ? (JSON.parse(storedTasks) as DataRecipe[])
      : storedTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName: string) => {
    const newTask = {[
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      name: taskName,
      isCompleted: ]
      false,

    };
    setTasks([.
      
      
      
      
      ..tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Handle DoubleClick
  // const handleDoubleClick = () => {
  //   setEditing(true);
  // };

  //  Handle DoubleChange

  // const handleDoubleChange = (e: React.FormEvent<HTMLFormElement>) => {
  //   setEditedText(e.target.value);
  // };

  // Handle press Esc and Enter
  // const doublePress = () => {};
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tuxedo</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleCompletion={toggleTaskCompletion}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}
