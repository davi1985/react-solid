export type Widget = {
  type: 'chart' | 'table'
  data: any
  title?: string
  columns?: string[]
  rows?: string[][]
}
type ChartProps = { data: number[]; title: string }
type TableProps = { columns: string[]; rows: string[][] }
type DashboardProps = { widgets: Widget[] }

const Chart = ({ title, data }: ChartProps) => (
  <div>
    <h2>{title}</h2>
    <div>{JSON.stringify(data)}</div>
  </div>
)

const Table = ({ columns, rows }: TableProps) => (
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
    {widgets.map(({ title, data, type, columns, rows }, index) => {
      if (type === 'chart') {
        return <Chart key={index} data={data as number[]} title={title!} />
      }

      return <Table key={index} columns={columns!} rows={rows!} />
    })}
  </div>
)
