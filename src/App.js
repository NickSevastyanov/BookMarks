import { BrowserRouter, Routes, Route } from "react-router-dom";
import Films from "./pages/Films";
import Animes from "./pages/Animes";
import Shows from "./pages/Shows";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Films />} />
          <Route path="/Films" element={<Films />} />
          <Route path="/Shows" element={<Shows />} />
          <Route path="/Animes" element={<Animes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
