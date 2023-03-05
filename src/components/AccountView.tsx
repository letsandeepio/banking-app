import React from "react";
import AccountInfo from './AccountInfo';

const AccountView = () => {
  return (
    <div className='pt-4 w-full bg-gray-100'>
      <div className='pb-4 pr-4 w-full flex justify-end'>
        <div>
          <button
            type='button'
            className='rounded-md bg-red-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 hover:border-red-500 focus-visible:outline focus-visible:outline-red-600'
          >
            Delete Account
          </button>
        </div>
      </div>
      <AccountInfo />
    </div>
  );
};

export default AccountView;
