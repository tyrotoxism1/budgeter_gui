import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions.tsx";

function App() {
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <nav style={{ display: "flex", gap: "15px", padding: "10px" }}>
          <Link to="/">Home</Link>
          <Link to="/transactions">Transactions</Link>
        </nav>
        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </main>
      </LocalizationProvider>
    </BrowserRouter>
  );
}

export default App;
