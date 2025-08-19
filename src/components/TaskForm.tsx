import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface TaskFormProps {
  onAddTask: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  return (
    <form method="post" onSubmit={onAddTask} className="flex gap-2 mb-6">
      <Input
        type="text"
        name="name"
        placeholder="Add a new task"
        className="flex-1"
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
}
