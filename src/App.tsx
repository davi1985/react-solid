import { Dashboard, Widget } from './Chart'

export const App = () => {
  const widgets: Widget[] = [
    {
      type: 'chart',
      data: [10, 20, 30, 40],
      title: 'Sample Chart',
    },
    {
      data: [],
      type: 'table',
      columns: ['Name', 'Age', 'City'],
      rows: [
        ['Alice', '30', 'New York'],
        ['Bob', '25', 'Los Angeles'],
        ['Charlie', '35', 'Chicago'],
      ],
    },
  ]

  return <Dashboard widgets={widgets} />
}
