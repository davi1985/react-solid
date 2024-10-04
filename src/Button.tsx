import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  variant: ButtonVariant
  children?: ReactNode | string
}

export const Button = ({ label, variant, children, ...props }: ButtonProps) => {
  const mapVariant = {
    primary: 'bg-blue-400 text-gray-100 rounded-full',
    secondary: 'text-blue-500 border rounded-full border-blue-500',
  }

  return (
    <button className={`py-2 px-4 shadow-md ${mapVariant[variant]}`} {...props}>
      {children && <span className="p-2">{children}</span>}

      {label}
    </button>
  )
}
