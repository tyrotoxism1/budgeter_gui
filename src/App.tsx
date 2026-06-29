import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./App.css";
import Expneses from "./pages/Expenses";
import Expneses from "./pages/Expenses";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BudgetOverview from "./components/BudgetOverview";
import { BrowserRouter, Route } from "react-router-dom";

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
