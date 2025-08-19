import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { About } from "./routes/About.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
