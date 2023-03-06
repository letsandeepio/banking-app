import React from 'react'
import AccountsList from '../Accounts/AccountsList';
import AccountView from '../Accounts/AccountView';

const MainContainer = () => {
  return (
    <main className='flex-1 min-h-0 flex flex-col'>
      <div className='flex flex-1 min-h-0'>
        <AccountsList />
        <AccountView/>
      </div>
    </main>
  );
}

export default MainContainer