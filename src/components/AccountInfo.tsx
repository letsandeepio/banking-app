import React from 'react'

import { PaperClipIcon } from "@heroicons/react/20/solid";


const AccountInfo = () => {
  return (
    <div className='overflow-hidden bg-white shadow sm:rounded-lg mx-4'>
      <div className='px-4 py-5 sm:px-6'>
        <h2 className='text-lg font-semibold leading-6 text-gray-900'>
          Retirement
        </h2>
        <p className='mt-1 max-w-2xl text-sm text-gray-500'>Account Type: Current</p>
      </div>
      <div className='border-t border-gray-200'>
        <dl>
          <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Balance</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
              $100
            </dd>
          </div>
 
          <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Attachments</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
              <ul
                role='list'
                className='divide-y divide-gray-200 rounded-md border border-gray-200'
              >
                <li className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'>
                  <div className='flex w-0 flex-1 items-center'>
                    <PaperClipIcon
                      className='h-5 w-5 flex-shrink-0 text-gray-400'
                      aria-hidden='true'
                    />
                    <span className='ml-2 w-0 flex-1 truncate'>
                      resume_back_end_developer.pdf
                    </span>
                  </div>
                  <div className='ml-4 flex-shrink-0'>
                    <a
                      href='#'
                      className='font-medium text-indigo-600 hover:text-indigo-500'
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'>
                  <div className='flex w-0 flex-1 items-center'>
                    <PaperClipIcon
                      className='h-5 w-5 flex-shrink-0 text-gray-400'
                      aria-hidden='true'
                    />
                    <span className='ml-2 w-0 flex-1 truncate'>
                      coverletter_back_end_developer.pdf
                    </span>
                  </div>
                  <div className='ml-4 flex-shrink-0'>
                    <a
                      href='#'
                      className='font-medium text-indigo-600 hover:text-indigo-500'
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default AccountInfo