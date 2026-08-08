import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import type { HomeData, HomeDataDTO } from "../types/HomeType";
import { apiCall } from "../service/apiService.ts";
import { preconnect } from "react-dom";

function BudgetOverview() {
  const today: dayjs.Dayjs = dayjs();
  const [startDate, setStartDate] = useState(
    today.startOf("month").format("YYYY-MM-DD"),
  );
  const [endDate, setEndDate] = useState(
    today.endOf("month").format("YYYY-MM-DD"),
  );
  console.log("Start date: ", startDate);
  console.log("End date: ", endDate);

  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    (async (startDate, endDate) => {
      const data: HomeDataDTO = await apiCall<HomeDataDTO>(
        `http://localhost:8080/api/users/test_user/home/?startDate=${startDate}&endDate=${endDate}`,
        "GET",
      );
      // CHANGE TO CONFIG IN BACKEND DTO RETREIVED HERE
      // Also change to have one for each saving, roth, and investments
      const savingSplit: number = 0.16;
      const pd: HomeData = data;
      pd.allocatable = pd.income - pd.bills;
      pd.HYSA = pd.allocatable * savingSplit;
      pd.rothIRA = pd.allocatable * savingSplit;
      pd.savings = pd.allocatable * savingSplit;
      pd.budget = pd.allocatable - pd.HYSA - pd.savings - pd.investments;
      pd.remainingBudget = pd.budget - pd.expenses;
      if (isMounted) setHomeData(pd);
    })(startDate, endDate);
    return () => {
      isMounted = false;
    };
  }, [startDate, endDate]);

  console.log(homeData);
  return (
    <div>
      <h1>Budgeter</h1>
      <div>
        <DatePicker
          label={"Select month and year"}
          views={["year", "month"]}
          defaultValue={today}
          onChange={(newValue) => {
            setStartDate(newValue.startOf("month").format("YYYY-MM-DD"));
            setEndDate(newValue.endOf("month").format("YYYY-MM-DD"));
            return;
          }}
          openTo="month"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Expected</th>
            <th scope="col">Actual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Income</th>
            <td>3852</td>
            <td>{homeData?.income.toFixed(2) ?? "Null"}</td>
          </tr>
          <tr>
            <th scope="row">Bills</th>
            <td>1736.67</td>
            <td>{homeData?.bills.toFixed(2) ?? "Null"}</td>
          </tr>

          <tr>
            <th scope="row">Allocatable</th>
            <td>2115.33</td>
            <td>{homeData?.allocatable.toFixed(2) ?? "Null"}</td>
          </tr>
          <tr>
            <th scope="row">HYSA</th>
            <td>352.56</td>
            <td>{homeData?.savings.toFixed(2) ?? "Null"}</td>
          </tr>
          <tr>
            <th scope="row">Roth IRA</th>
            <td>352.56</td>
            <td>{homeData?.rothIRA.toFixed(2) ?? "Null"}</td>
          </tr>
          <tr>
            <th scope="row">Investing</th>
            <td>352.56</td>
            <td>{homeData?.investments.toFixed(2) ?? "Null"}</td>
          </tr>
          <tr>
            <th scope="row">Budget</th>
            <td>1057.65</td>
            <td>{homeData?.budget.toFixed(2) ?? "Null"}</td>
          </tr>
          <tr>
            <th scope="row">Expenses</th>
            <td>1011.41</td>
            <td>{homeData?.expenses.toFixed(2) ?? "Null"}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colSpan={2}>
              remaining budget
            </th>
            <td>{homeData?.remainingBudget.toFixed(2) ?? "Null"}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default BudgetOverview;
