import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = ({ label, ...rest }: ButtonProps) => {
  return (
    <button
      type='button'
      className='rounded-md bg-indigo-600 py-1.5 px-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
