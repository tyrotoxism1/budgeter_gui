import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import type { Transaction } from "../types/TransactionType";
import { apiCall } from "../service/apiService.ts";
import Select from "@mui/material/Select";
import type { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem, Button } from "@mui/material";
import AddTransacitonModal from "../components/AddTransactionModal.tsx";

function Transactions() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "amount", headerName: "Amount", width: 50 },
    { field: "date", headerName: "Date", width: 100 },
    { field: "description", headerName: "Description", width: 300 },
    { field: "fromBucketName", headerName: "From", width: 100 },
    { field: "toBucketName", headerName: "To", width: 100 },
    { field: "tags", headerName: "Tags", width: 100 },
  ];

  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [transactions, setTransactions] = useState<Array<Transaction> | null>(
    null,
  );

  const [transactionType, setTransactionType] = useState("expenses");

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const data: Transaction = await apiCall<Transaction>(
        `http://localhost:8080/api/users/test_user/transactions/transactionType/${transactionType}`,
        "GET",
      );
      if (isMounted) setTransactions(data);
      console.log(data);
    })();
    return () => {
      isMounted = false;
    };
  }, [transactionType]);

  const handleSelectChange = (event: SelectChangeEvent) => {
    setTransactionType(event.target.value as string);
  };

  return (
    <div>
      <h1>Transactions </h1>
      <div>
        <button onClick={() => setShowAddTransaction(true)}>
          Add Transaction
        </button>
        <Select
          labelId="select-transaction-type-label"
          id="select-transaction-type"
          value={transactionType}
          label="Transaction Type"
          onChange={handleSelectChange}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"expenses"}>Expenses</MenuItem>
          <MenuItem value={"bills"}>Bills</MenuItem>
          <MenuItem value={"savings"}>Savings</MenuItem>
          <MenuItem value={"investments"}>Investments</MenuItem>
          <MenuItem value={"income"}>Income</MenuItem>
          <MenuItem value={"loans"}>Loans</MenuItem>
        </Select>
      </div>
      <div>
        <div>
          {showAddTransaction ? (
            <AddTransacitonModal onClose={() => setShowAddTransaction(false)} />
          ) : null}
        </div>
        <DataGrid
          rows={transactions}
          columns={columns}
          initialState={{
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Transactions;
