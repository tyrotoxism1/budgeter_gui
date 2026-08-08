import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import type { Transaction } from "../types/TransactionType";
import { apiCall } from "../service/apiService.ts";

function Expenses() {
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

  const [transactions, setTransactions] = useState<Array<Transaction> | null>(
    null,
  );

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const data: Transaction = await apiCall<Transaction>(
        `http://localhost:8080/api/users/test_user/transactions/transactionType/expenses`,
        "GET",
      );
      if (isMounted) setTransactions(data);
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h1>Expenses</h1>
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
  );
}

export default Expenses;
