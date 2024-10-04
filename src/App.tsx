import { Input } from './Input'

export const App = () => (
  <div className="flex gap-2">
    <Input type="text" placeholder="Write some text" />
    <Input type="number" placeholder="Write some number" />
  </div>
)
