import React from 'react'
import AccountsList from './AccountsList';

const MainContainer = () => {
  return (
    <main className='flex-1 max-h-full overflow-auto'>
      <div className='py-6'>
        <div className='max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h1 className='text-2xl font-semibold text-gray-900 mb-3'>My Accounts</h1>
        </div>
        <div className='max-w-7xl px-4 sm:px-6 lg:px-8 flex gap-4'>
          <AccountsList/>
          <div>
            This is the side container
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContainer