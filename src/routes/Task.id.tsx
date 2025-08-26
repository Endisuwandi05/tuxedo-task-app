import { useParams } from "react-router";

export function TaskId() {
  const params = useParams();
  const id = Number(params.id);

  return (
    <div>
      <h1>Task ID: {id}</h1>
    </div>
  );
}
