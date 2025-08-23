import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";

interface TaskFormProps {
  onAddTask: (taskName: string) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    if (typeof name === "string" && name.trim() !== "") {
      onAddTask(name.trim());
    }
  };

  return (
    <form method="post" onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Label htmlFor="task-title">Daftar Tugas</Label>
      <Input
        id="Add a new task"
        type="text"
        name="name"
        placeholder="Add a new task"
        className="flex-1"
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
}
