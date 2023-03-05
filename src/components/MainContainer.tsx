import React from 'react'
import AccountsList from './AccountsList';
import AccountView from './AccountView';

const MainContainer = () => {
  return (
    <main className='flex-1 min-h-0 flex flex-col'>
      <div className='max-w-7xl flex flex-1 min-h-0'>
        <AccountsList />
        <AccountView/>
      </div>
    </main>
  );
}

export default MainContainer