import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function BudgetOverview() {
  return (
    <div>
      <h1>Budgeter</h1>
      <div>
        <DatePicker
          label={"Select month and year"}
          views={["year", "month"]}
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
            <td>3596.38</td>
          </tr>
          <tr>
            <th scope="row">Bills</th>
            <td>1736.67</td>
            <td>1736.67</td>
          </tr>

          <tr>
            <th scope="row">Allocatable</th>
            <td>2115.33</td>
            <td>1859.713</td>
          </tr>
          <tr>
            <th scope="row">HYSA</th>
            <td>352.56</td>
            <td>492.82</td>
          </tr>
          <tr>
            <th scope="row">Roth IRA</th>
            <td>352.56</td>
            <td>309.96</td>
          </tr>
          <tr>
            <th scope="row">Investing</th>
            <td>352.56</td>
            <td>309.96</td>
          </tr>
          <tr>
            <th scope="row">Budget</th>
            <td>1057.65</td>
            <td>746.97</td>
          </tr>
          <tr>
            <th scope="row">Expenses</th>
            <td>1011.41</td>
            <td>598.25</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colSpan={2}>
              remaining budget
            </th>
            <td>148.72</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default BudgetOverview;
