import useAppStore from "../../zustand/appStore";
import useBankStore from "../../zustand/bankStore";
import AddNewAccountPlaceholder from "../NewAccount/AddNewAccountPlaceholder";

const AccountsList = () => {
  const accounts = useBankStore((state) => state.accounts);
  const { setCurrentlySelectedAccount, setMode } = useAppStore();

  const { searchTerm } = useAppStore();

  /* Filter by name or type */
  const filteredAccounts = accounts.filter(
    (account) =>
      account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul
      role='list'
      className='divide-y divide-gray-200 min-w-[384px] max-w-sm flex-1 overflow-y-auto min-h-0 border-r border-gray-200 px-2 pt-2'
    >
      {filteredAccounts.map((account) => (
        <li
          key={account.id}
          className='relative bg-white py-5 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50 '
          onClick={() => {
            setMode("account");
            setCurrentlySelectedAccount(account.id);
          }}
        >
          <div className='flex justify-between space-x-3'>
            <div className='min-w-0 flex-1'>
              <a href='#' className='block focus:outline-none'>
                <span className='absolute inset-0' aria-hidden='true' />
                <p className='truncate text-sm font-medium text-gray-900'>
                  {account.name}
                </p>
                <p className='truncate text-sm text-gray-500'>
                  {account.type === "current" ? "Current" : "Saving"}
                </p>
              </a>
            </div>
            <div className='flex-shrink-0 whitespace-nowrap text-sm text-gray-500'>
              <p className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
                Active
              </p>
            </div>
          </div>
        </li>
      ))}
      {accounts.length === 0 && <AddNewAccountPlaceholder />}
    </ul>
  );
};

export default AccountsList;
