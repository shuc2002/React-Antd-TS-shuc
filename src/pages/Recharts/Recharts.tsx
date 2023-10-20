import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"

// 虚拟数据
const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 4600 },
  { month: "Mar", sales: 4200 },
  { month: "Apr", sales: 4800 },
  { month: "May", sales: 5200 },
  { month: "Jun", sales: 5000 },
  { month: "Jul", sales: 5500 },
  { month: "Aug", sales: 6000 },
  { month: "Sep", sales: 5800 },
  { month: "Oct", sales: 6500 },
  { month: "Nov", sales: 6300 },
  { month: "Dec", sales: 7000 },
]

const categoryData = [
  { name: "Electronics", value: 400 },
  { name: "Fashion", value: 300 },
  { name: "Toys", value: 200 },
  { name: "Food", value: 100 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const DataVizPage: React.FC = () => {
  return (
    <div>
      <h2>Monthly Sales</h2>
      <LineChart
        width={500}
        height={300}
        data={salesData}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey='month' />
        <YAxis />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Line
          type='monotone'
          dataKey='sales'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
      </LineChart>

      <h2>Sales by Category</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={categoryData}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill='#8884d8'
          dataKey='value'
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {categoryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  )
}

export default DataVizPage
