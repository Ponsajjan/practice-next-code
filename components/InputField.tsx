'use client'
import React, { ChangeEvent } from 'react';

type InputFieldProps = {
  labelText?: string;
  type?: 'text' | 'password' | 'number'; // Add more types if needed
  maxLength?: number;
  placeholder?: string;
  required?: boolean;
  value: string | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  errorMessage?: string;
  name?: string;
}

const InputField = ({
  labelText,
  type = 'text',
  maxLength = 250,
  placeholder,
  required,
  value,
  onChange,
  className,
  errorMessage,
  name
}: InputFieldProps) => {
  return (
    <>
      <label className="block text-gray-700 font-medium">
        {labelText}
        <input
            type={type}
            required={required}
            placeholder={placeholder}
            value={value || ''}
            onChange={onChange}
            name={name}
            maxLength={maxLength}
            className={`block w-full h-10 md:h-12 focus-visible:ring active:border-gray-400 focus:outline-gray-400 outline-gray-400 rounded-md border-gray-300 py-2 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring focus:ring-inset focus:ring-gray-50 sm:text-sm sm:leading-6 ${className}`}
        />
        <p className="text-red-600 text-sm min-h-5">{errorMessage || ''}</p>
      </label>
    </>
  );
}

export default InputField;
