import "./App.css";
import Expenses from "./pages/Expenses";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "15px", padding: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenses" element={<Expenses />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
