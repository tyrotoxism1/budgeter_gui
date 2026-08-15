import "./App.css";
import Expenses from "./pages/Expenses";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Transactions from "./pages/Transaction";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "15px", padding: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/transactions">Transactions</Link>
      </nav>
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Expenses />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
