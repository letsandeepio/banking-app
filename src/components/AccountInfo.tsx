import React from "react";

import { PaperClipIcon } from "@heroicons/react/20/solid";
import {
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";

const AccountInfo = () => {
  return (
    <div className='overflow-hidden bg-white shadow sm:rounded-lg mx-4'>
      <div className='flex'>
        <div className='px-4 py-5 sm:px-6 flex-1'>
          <h2 className='text-lg font-semibold leading-6 text-gray-900'>
            Retirement
          </h2>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>
            Account Type: Current
          </p>
        </div>
        <div className='flex-1 px-4 py-5 sm:px-6 text-4xl text-right'>$100</div>
      </div>


      <div className='border-t border-gray-200 px-2 py-2 flex justify-end gap-2'>
        <button className='text-sm flex gap-1'>
          <ArrowUpTrayIcon className='h-4 w-4' />
          Withdraw
        </button>
        <button className='text-sm flex gap-1'>
          <ArrowDownTrayIcon className='h-4 w-4' />
          Deposit
        </button>
      </div>
    </div>
  );
};

export default AccountInfo;
