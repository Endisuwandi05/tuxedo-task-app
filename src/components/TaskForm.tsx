import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface TaskFormProps {
  onAddTask: (taskName: string) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (taskName.trim() !== "") {
      onAddTask(taskName);
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Input
        type="text"
        placeholder="Add a new task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="flex-1"
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
}
