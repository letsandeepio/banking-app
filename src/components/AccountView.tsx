import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import useAppStore from "../zustand/appStore";
import useBankStore from "../zustand/bankStore";
import AccountInfo from "./AccountInfo";
import NewAccountContainer from "./NewAccountContainer";

const AccountView = () => {
  const { setMode, viewMode, currentlySelectedAccount } = useAppStore();
  const accounts = useBankStore((state) => state.accounts);
  return (
    <div className='pt-4 w-full bg-gray-100'>
      {viewMode === "account" && accounts.length === 0 && (
        <div className='p-4 flex h-full w-full justify-center align-middle items-center'>
          Welcome to the Banking App, click on + New Account to begin.
        </div>
      )}

      {viewMode === "account" && !currentlySelectedAccount && (
        <div className='p-4 flex h-full w-full justify-center align-middle items-center'>
          Welcome to the Banking App, select a account on the right to begin.
        </div>
      )}

      {viewMode === "new" && (
        <div className='p-4 flex flex-col gap-2'>
          <NewAccountContainer />
        </div>
      )}

      {viewMode === "account" && (
        <>
          <div className='pb-4 pr-4 w-full flex justify-end gap-2'>
            <div className=''>
              <button
                type='button'
                className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                onClick={() => setMode("new")}
              >
                <PlusIcon
                  className='-ml-0.5 mr-1.5 h-5 w-5'
                  aria-hidden='true'
                />
                New Account
              </button>
            </div>
            <div>
              <button
                type='button'
                className='rounded-md bg-red-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 hover:border-red-500 focus-visible:outline focus-visible:outline-red-600'
              >
                Delete
              </button>
            </div>
          </div>
          <AccountInfo />
        </>
      )}
    </div>
  );
};

export default AccountView;
