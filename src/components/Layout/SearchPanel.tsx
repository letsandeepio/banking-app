import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import useAppStore from "../../zustand/appStore";

const SearchPanel = () => {
  const { searchTerm, setSearchTerm } = useAppStore();

  return (
    <div className='flex flex-1'>
      <div className='flex w-full lg:ml-0'>
        <label htmlFor='search-field' className='sr-only'>
          Search
        </label>
        <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center'>
            <MagnifyingGlassIcon className='h-5 w-5' aria-hidden='true' />
          </div>
          <input
            id='search-field'
            className='block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm'
            placeholder='Search'
            type='search'
            name='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
