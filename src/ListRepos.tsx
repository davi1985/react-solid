import axios from 'axios'
import { useEffect, useState } from 'react'

type Repo = { id: string; language: string; name: string }

export const ListRepos = () => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get(
          'https://api.github.com/users/davi1985/repos'
        )
        setRepos(data)
      } catch {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  if (error) return <p>Ocorreu um error.</p>

  if (isLoading && !error) return <p>Carregando dados...</p>

  return (
    <main>
      {repos.map(({ id, language, name }) => (
        <div key={id}>
          <h1>{name}</h1>
          <span>{language}</span>
        </div>
      ))}
    </main>
  )
}
