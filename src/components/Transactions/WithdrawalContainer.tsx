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


    const parsedAmount = Number(amount)
    const newBalance = account?.balance - parsedAmount;
    const availableBalanceToWithdraw = account.balance * 0.9;

    setError(undefined);

    if (parsedAmount <= 0) {
      setError("Withdrawal amount must be greater than 0.");
      return;
    }

    if (newBalance < 100) {
      setError("Account balance cannot be less than $100.");
      return;
    }

    if (parsedAmount > availableBalanceToWithdraw) {
      setError(
        `Withdrawal limit is exceeded. Available balance to withdraw: $${availableBalanceToWithdraw}`
      );
      return;
    }

    onSubmit(parsedAmount);
  };

  return (
    <>
      <div className='text-sm mb-8'>Please enter an amount to withdraw.</div>
      <AmountInput value={amount} onChange={setAmount} error={error} />
      <div className='mt-6'>
        <Button
          label='Withdraw'
          onClick={handleWithdrawal}
          data-cy='submitWithdraw'
        />
      </div>
    </>
  );
};

export default WithdrawalContainer;
