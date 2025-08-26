import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { Memulai } from "./routes/Memulai.tsx";
import { Navbar } from "./components/shared/Navbar.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<App />} />
      <Route path="memulai" element={<Memulai />} />
    </Routes>
  </BrowserRouter>
);
