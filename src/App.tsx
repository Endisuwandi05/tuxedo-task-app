const dataTasks = [
  { id: 1, name: "Breakfast" },
  { id: 2, name: "Jogging" },
  { id: 3, name: "Study" },
];

export function App() {
  return (
    <div>
      <ul>
        {dataTasks.map((task) => {
          return (
            <li key={task.id}>
              <p>{task.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
