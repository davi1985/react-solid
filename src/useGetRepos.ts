import axios from 'axios'
import { useState, useEffect } from 'react'

type Repo = { id: string; language: string; name: string }

export const useGetRepos = () => {
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

  return {
    isLoading,
    error,
    repos,
  }
}
