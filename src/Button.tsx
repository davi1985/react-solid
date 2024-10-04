type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = { label: string; variant: ButtonVariant; icon?: string }

export const Button = ({ label, variant, icon }: ButtonProps) => {
  const mapVariant = {
    primary: 'bg-blue-400 text-gray-100 rounded-full',
    secondary: 'text-blue-500 border rounded-full border-blue-500',
  }

  return (
    <button className={`py-2 px-4 shadow-md ${mapVariant[variant]}`}>
      {icon && <span className="p-2">{icon}</span>}

      {label}
    </button>
  )
}
