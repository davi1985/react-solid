type InputProps = { type: string; placeholder: string }

export const Input = ({ type, placeholder }: InputProps) => (
  <input
    className="bg-gray-200 py-2 px-4 rounded-md"
    type={type}
    placeholder={placeholder}
  />
)
