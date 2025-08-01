import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Globals.css";
import TaskItem from "./components/TaskItem";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TaskItem />
  </StrictMode>
);
