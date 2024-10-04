import { FormEvent, useState } from 'react'

type FormProps = {
  onSubmit(ev: FormEvent): Promise<void>
}

const Form = ({ onSubmit }: FormProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export const LoginForm = () => {
  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault()

    try {
      await axios.post('https://myapi.com/login', formData)
    } catch (err) {
      console.error(err.message)
    }
  }

  return <Form onSubmit={handleSubmit} />
}
