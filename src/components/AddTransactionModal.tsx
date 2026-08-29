import { DatePicker } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

type AddTransactionProps = {
  onClose: () => void;
};

/*
 * Adding transaction will require request to backend for 'To' and 'From' buckets
 * along with avaliable tags for the user.
 * We could have the parent component pass these values or could just make backend request within modal.
 * Request would be relatively lighweight to just grab the tags and buckets
 */
function AddTransacitonModal({ onClose }: AddTransactionProps) {
  const today: dayjs.Dayjs = dayjs();
  const [transactionDate, setTransactionDate] = useState(dayjs());
  function submit() {
    console.log("Transaction Date: " + transactionDate);
    console.log("Transaction Date: " + transactionDate);
  }

  return (
    <div>
      <label>Title</label>
      <input type="text" />
      <label>Amount</label>
      <input type="number" />
      <DatePicker
        label={"Date"}
        defaultValue={today}
        onChange={(newValue) => {
          setTransactionDate(newValue);
        }}
      />
      <div>
        <button onClick={onClose}>Cancel</button>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}
export default AddTransacitonModal;
