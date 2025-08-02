const dataTasks = [
  { id: 1, name: "Breakfast", isCompleted: true },
  { id: 2, name: "Jogging", isCompleted: false },
  { id: 3, name: "Study", isCompleted: false },
];

export function App() {
  return (
    <div>
      <ul>
        {dataTasks.map((task) => {
          return (
            <li key={task.id}>
              <Task name={task.name} isCompleted={task.isCompleted} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Task({
  name,
  isCompleted,
}: {
  name: string;
  isCompleted: boolean;
}) {
  return (
    <div>
      <h2>{name}</h2>
      {isCompleted && <p>Completed ✅</p>}
      {!isCompleted && <p>Incomplete ❌</p>}
    </div>
  );
}
