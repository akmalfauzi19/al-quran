import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Doa from "./pages/Doa/Doa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/surah/:id" element={<Detail />} />
        <Route path="/doa" element={<Doa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
