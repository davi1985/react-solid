export type ChartWidget = {
  type: 'chart'
  data: number[]
  title: string
}

export type TableWidget = {
  type: 'table'
  columns: string[]
  rows: string[][]
}

export type Widget = ChartWidget | TableWidget
type DashboardProps = { widgets: Widget[] }

const Chart = ({ title, data }: ChartWidget) => (
  <div>
    <h2>{title}</h2>
    <div>{JSON.stringify(data)}</div>
  </div>
)

const Table = ({ columns, rows }: TableWidget) => (
  <table>
    <thead>
      <tr>
        {columns.map((col) => (
          <th>{col}</th>
        ))}
      </tr>
    </thead>

    <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)

export const Dashboard = ({ widgets }: DashboardProps) => (
  <div>
    {widgets.map((widget, index) => {
      if (widget.type === 'chart') {
        return <Chart key={index} {...widget} />
      }

      return <Table key={index} {...widget} />
    })}
  </div>
)
