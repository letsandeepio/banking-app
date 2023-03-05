import React from 'react'
import AccountsList from './AccountsList';

const MainContainer = () => {
  return (
    <main className='flex-1 min-h-0 flex flex-col'>
      <div className='max-w-7xl flex gap-4 flex-1 min-h-0 mt-4'>
        <AccountsList />
        <div className=''>
          This is the side container
        </div>
      </div>
    </main>
  );
}

export default MainContainer