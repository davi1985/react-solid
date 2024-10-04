import { Repo } from './Repo'
import { useGetRepos } from './useGetRepos'

export const ListRepos = () => {
  const { error, isLoading, repos } = useGetRepos()

  if (error) {
    return <p>Ops, something wrong...</p>
  }

  if (isLoading && !error) {
    return <p>Loading data..</p>
  }

  return (
    <main>
      {repos.map(({ id, language, name }) => (
        <Repo key={id} name={name} language={language} />
      ))}
    </main>
  )
}
