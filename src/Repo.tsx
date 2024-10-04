type Props = {
  language: string
  name: string
}

export const Repo = ({ language, name }: Props) => (
  <div>
    <h1>{name}</h1>
    <span>{language}</span>
  </div>
)
