import "./Globals.css";
function App() {
  return <div className="App"></div>;
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
