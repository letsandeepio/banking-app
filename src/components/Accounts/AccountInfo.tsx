import {
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import useAppStore from "../../zustand/appStore";
import useBankStore from "../../zustand/bankStore";
import TransactionModal from "../Layout/TransactionModal";

const AccountInfo = () => {
  const [transactionModalOpen, setTransactionModalOpen] = useState(false);

  const accounts = useBankStore((state) => state.accounts);

  const { currentlySelectedAccount, setTransactionMode } = useAppStore();

  const account = accounts.find(
    (account) => account.id === currentlySelectedAccount
  );

  return (
    <>
      <div className='overflow-hidden bg-white shadow sm:rounded-lg mx-4'>
        <div className='flex'>
          <div className='px-4 py-5 sm:px-6 flex-1'>
            <h2 className='text-lg font-semibold leading-6 text-gray-900'>
              {account?.name}
            </h2>
            <p className='mt-1 max-w-2xl text-sm text-gray-500'>
              Account Type: {account?.type}
            </p>
          </div>
          <div className='flex-1 px-4 py-5 sm:px-6 text-4xl text-right'>
            ${account?.balance}
          </div>
        </div>

        <div className='border-t border-gray-200 px-2 py-2 flex justify-end gap-2'>
          <button
            className='text-sm flex gap-1'
            onClick={() => {
              setTransactionMode("withdraw");
              setTransactionModalOpen(true);
            }}
          >
            <ArrowUpTrayIcon className='h-4 w-4' />
            Withdraw
          </button>
          <button
            className='text-sm flex gap-1'
            onClick={() => {
              setTransactionMode("deposit");
              setTransactionModalOpen(true);
            }}
          >
            <ArrowDownTrayIcon className='h-4 w-4' />
            Deposit
          </button>
        </div>
      </div>
      <TransactionModal
        open={transactionModalOpen}
        setOpen={setTransactionModalOpen}
      />
    </>
  );
};

export default AccountInfo;
