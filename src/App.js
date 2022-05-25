import "./App.css";
import Header from "./components/UI/header/Header";
import { LandingPage, MoviePage, NotFoundPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App test">
      <Header />
      <main className="mb-3">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="movie/:id" element={<MoviePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
