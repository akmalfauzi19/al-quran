import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/surah/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
