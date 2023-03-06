import React, { useState } from "react";
import { toast } from "sonner";
import Button from "../Layout/Button";
import AmountInput from "./AmountInput";

interface DepositContainerProps {
  onSubmit: (amount: number) => void;
}

const DepositContainer = ({ onSubmit }: DepositContainerProps) => {
  const [amount, setAmount] = useState("0");
  const [error, setError] = useState<string>();

  const handleDeposit = () => {
    setError(undefined);

    const parsedAmount = Number(amount);

    if (parsedAmount <= 0) {
      setError("Deposit amount must be greater than 0.");
      return;
    }

    if (parsedAmount > 10000) {
      setError("Cannot deposit more than $10,000");
      toast.error("Unable to process the deposit.");
      return;
    }

    onSubmit(parsedAmount);
  };

  return (
    <>
      <div className='text-sm mb-8'>Please enter an amount to deposit</div>
      <AmountInput value={amount} onChange={setAmount} error={error} />
      <div className='mt-6'>
        <Button label='Deposit' onClick={handleDeposit} data-cy="submitDeposit"/>
      </div>
    </>
  );
};

export default DepositContainer;
