import { Button } from './Button'

export const App = () => (
  <div className="flex gap-2">
    <Button label="First Button" variant="primary" />
    <Button label="Second Button" variant="secondary" icon="✅" />
  </div>
)
