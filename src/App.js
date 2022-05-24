import "./App.css";
import Header from "./components/UI/header/Header";
import LandingPage from "./pages/LandingPage";
import MoviePage from "./pages/MoviePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App test">
      <Header />
      <main className="mb-3">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="movie/:id" element={<MoviePage />} />
          {/* FIXME */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
