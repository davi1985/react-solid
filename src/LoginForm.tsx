import { FormEvent, useState } from 'react'

export const LoginForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault()

    try {
      const formData = new FormData(ev.currentTarget)
      await axios.post('https://myapi.com/login', formData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
