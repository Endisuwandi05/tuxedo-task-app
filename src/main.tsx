import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { Onboard } from "./routes/Onboard.tsx";
import { Navbar } from "./components/shared/Navbar.tsx";
import { TaskId } from "./routes/Task.id.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<App />} />
      <Route path="Onboard" element={<Onboard />} />
      <Route path="/tasks/:id" element={<TaskId />} />
    </Routes>
  </BrowserRouter>
);
