import { useEffect, useState } from "react";

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
  return <div className="modal"></div>;
}
export default AddTransacitonModal;
