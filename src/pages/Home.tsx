import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BudgetOverview from "../components/BudgetOverview";

function Home() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BudgetOverview />
    </LocalizationProvider>
  );
}

export default Home;
