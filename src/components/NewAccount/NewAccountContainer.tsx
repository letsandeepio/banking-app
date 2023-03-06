import { useState } from "react";
import { toast } from "sonner";
import useAppStore from "../../zustand/appStore";
import useBankStore from "../../zustand/bankStore";
import Button from "../Layout/Button";
import AccountTypeSelection, {
  AccountSelectionType,
  accountTypes,
} from "./AccountTypeSelection";

interface FormError {
  accountName: boolean;
  accountStartingBalance?: boolean;
}

const initialFormErrors = {
  accountName: false,
  accountStartingBalance: false,
};

const NewAccountContainer = () => {
  const { createAccount } = useBankStore();
  const { setMode, setCurrentlySelectedAccount } = useAppStore();

  const [formState, setFormState] = useState({
    accountName: "New Account",
    accountType: accountTypes[0],
    accountStartingBalance: "100",
  });

  const [formErrors, setFormErrors] = useState<FormError>(initialFormErrors);

  const validateForm = () => {
    let formValidated = true;
    const parsedBalance = Number(formState.accountStartingBalance);

    setFormErrors(initialFormErrors);
    if (!formState.accountName) {
      setFormErrors((prev) => ({
        ...prev,
        accountName: true,
      }));
      formValidated = false;
    }

    if (parsedBalance < 100 || parsedBalance > 10000) {
      setFormErrors((prev) => ({
        ...prev,
        accountStartingBalance: true,
      }));
      formValidated = false;
    }

    if (formValidated) {
      const newAccountCreated = createAccount({
        name: formState.accountName,
        type: formState.accountType.type,
        balance: parsedBalance,
      });
      toast.success("New account created");
      setMode("account");
      setCurrentlySelectedAccount(newAccountCreated);
    } else {
      toast.error("Unable to to create new account");
    }
  };

  const accountTypeSelectionHandler = (newSelection: AccountSelectionType) => {
    setFormState({ ...formState, accountType: newSelection });
  };

  return (
    <>
      <div>
        <h3 className='text-base font-semibold leading-6 text-gray-900'>
          Account Information
        </h3>
        <p className='mt-1 max-w-2xl text-sm text-gray-500'>
          Let's setup a new account for you
        </p>
      </div>
      <div className='space-y-6 sm:space-y-5'>
        <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
          <label
            htmlFor='account-name'
            className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'
          >
            Account Name
          </label>
          <div className='mt-2 sm:col-span-2 sm:mt-0'>
            <input
              type='text'
              name='account-name'
              id='account-name'
              autoComplete='given-name'
              value={formState.accountName}
              onChange={(e) =>
                setFormState((state) => ({
                  ...state,
                  accountName: e.target.value,
                }))
              }
              className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
            />

            {formErrors.accountName && (
              <div className='text-xs text-red-500 py-2'>
                Account name is required
              </div>
            )}
          </div>
        </div>

        <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
          <label
            htmlFor='account-type'
            className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'
          >
            Account Type
          </label>
          <div className='mt-2 sm:col-span-2 sm:mt-0'>
            <AccountTypeSelection
              value={formState.accountType}
              onChange={accountTypeSelectionHandler}
            />
          </div>
        </div>

        <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
          <label
            htmlFor='starting-balance'
            className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'
          >
            Starting Balance
          </label>
          <div className='mt-2 sm:col-span-2 sm:mt-0'>
            <input
              type='number'
              name='starting-balance'
              id='starting-balance'
              value={formState.accountStartingBalance}
              onChange={(e) =>
                setFormState((state) => ({
                  ...state,
                  accountStartingBalance: e.target.value,
                }))
              }
              className='block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
            />
            {formErrors.accountStartingBalance && (
              <div className='text-xs text-red-500 py-2'>
                Starting balance must be less than $10000 & greater than $100
              </div>
            )}
          </div>
        </div>

        <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
          <div className='mt-2 sm:col-span-3 sm:mt-0 flex justify-end gap-2'>
            <button className='text-sm' onClick={() => setMode("account")}>
              Cancel
            </button>
            <Button onClick={validateForm} label='Create Account' data-cy="createAccount"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewAccountContainer;
