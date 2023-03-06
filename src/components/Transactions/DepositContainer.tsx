import React, { useState } from 'react'
import { toast } from 'sonner';
import Button from '../Layout/Button';
import AmountInput from './AmountInput';

interface DepositContainerProps {
  onSubmit: (amount: number) => void;
}


const DepositContainer = ({onSubmit}: DepositContainerProps) => {
  const [amount, setAmount] = useState("0");
  const [error, setError] = useState<string>();

  console.log("amount", amount)

  const handleDeposit = () => {
    setError(undefined);
    if(Number(amount) > 10000) {
        setError("Cannot deposit more than $10,000");
        toast.error("Unable to process the deposit.");
        return;
      }

    onSubmit(Number(amount))

  }

  return (
    <>
      <div className='text-sm mb-8'>Please enter an amount to deposit</div>
      <AmountInput value={amount} onChange={setAmount} error={error} />
      <div className='mt-6'>
        <Button label='Deposit' onClick={handleDeposit} />
      </div>
    </>
  );
}

export default DepositContainer