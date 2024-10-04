import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ placeholder, ...props }: InputProps) => (
  <input
    className="bg-gray-200 py-2 px-4 rounded-md"
    placeholder={placeholder}
    {...props}
  />
)

export const TextInput = ({ ...props }: InputProps) => (
  <input {...props} className="bg-gray-200 py-2 px-4 rounded-md" />
)

export const Password = ({ ...props }: InputProps) => (
  <input {...props} className="bg-gray-200 py-2 px-4 rounded-md" />
)
