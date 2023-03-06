import { useState } from "react";
import useAppStore from "../../zustand/appStore";
import useBankStore from "../../zustand/bankStore";
import Button from "../Layout/Button";
import AmountInput from "./AmountInput";

interface WithdrawalContainerProps {
  onSubmit: (amount: number) => void;
}

const WithdrawalContainer = ({ onSubmit }: WithdrawalContainerProps) => {
  const [amount, setAmount] = useState("0");
  const [error, setError] = useState<string>();

  const currentlySelectAccount = useAppStore(
    (state) => state.currentlySelectedAccount
  );
  const accounts = useBankStore((state) => state.accounts);

  const account = accounts.find(
    (account) => account.id === currentlySelectAccount
  );


  const handleWithdrawal = () => {

    if (!account) return;

    const newBalance = account?.balance - Number(amount);

    setError(undefined);

    console.log("Amount to withdraw", amount)
    console.log("Account balance", account?.balance);
    console.log("New Balance" , newBalance);


    if (newBalance < 100) {
      setError("Account balance cannot be less than $100.");
      return;
    }

    if (Number(amount) > account.balance * 0.9) {
      setError("Withdrawal limit is exceeded");
      return;
    }

    onSubmit(Number(amount));
  };

  return (
    <>
      <div className='text-sm mb-8'>Please enter an amount to withdraw.</div>
      <AmountInput value={amount} onChange={setAmount} error={error} />
      <div className='mt-6'>
        <Button label='Withdrawal' onClick={handleWithdrawal} />
      </div>
    </>
  );
};

export default WithdrawalContainer;
