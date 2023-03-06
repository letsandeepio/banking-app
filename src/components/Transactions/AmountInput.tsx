import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

interface AmountInputProps {
  value: string;
  onChange: (newVal: string) => void;
  error?: string;
}

const AmountInput = ({ value, onChange, error }: AmountInputProps) => {
  const errorClasses = error
    ? "text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500"
    : "text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600";

  return (
    <div>
      <label
        htmlFor='amount'
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        Amount
      </label>
      <div className='relative mt-2 rounded-md shadow-sm'>
        <input
          type='number'
          name='amount'
          id='amount'
          className={`block w-full rounded-md border-0 py-1.5 pr-10 sm:text-sm sm:leading-6 ${errorClasses}`}
          aria-invalid='true'
          aria-describedby='amount-error'
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
          {error && (
            <ExclamationCircleIcon
              className='h-5 w-5 text-red-500'
              aria-hidden='true'
            />
          )}
        </div>
      </div>
      <p className='mt-2 text-sm text-red-600' id='amount-error'>
        {error && error}
      </p>
    </div>
  );
};

export default AmountInput;
