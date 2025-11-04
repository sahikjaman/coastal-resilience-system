import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard({ data, title }) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {data.stats?.map((stat, idx) => (
          <div key={idx} className="card">
            <p className="text-gray-600 text-sm">{stat.label}</p>
            <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
            <p
              className={`text-sm ${
                stat.trend >= 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {stat.trend >= 0 ? "📈" : "📉"} {Math.abs(stat.trend)}% perubahan
            </p>
          </div>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data.chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#0f3460"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
