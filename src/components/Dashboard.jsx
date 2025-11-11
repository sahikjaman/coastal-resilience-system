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
import { TrendingUp, TrendingDown } from "lucide-react";

export default function Dashboard({ data, title }) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border border-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {data.stats?.map((stat, idx) => (
          <div 
            key={idx} 
            className="card group relative overflow-hidden"
          >
            {/* Gradient indicator */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
              idx === 0 ? 'from-blue-500 to-cyan-500' : 
              idx === 1 ? 'from-purple-500 to-pink-500' : 
              'from-orange-500 to-red-500'
            }`}></div>
            
            <p className="text-gray-500 text-sm font-medium mb-2 uppercase tracking-wide">
              {stat.label}
            </p>
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-3">
              {stat.value}
            </p>
            <div className={`flex items-center gap-2 text-sm font-semibold ${
              stat.trend >= 0 ? "text-red-600" : "text-green-600"
            }`}>
              {stat.trend >= 0 ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span>{Math.abs(stat.trend)}% perubahan</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data.chartData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0891b2" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#0891b2" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="year" 
              stroke="#6b7280"
              style={{ fontSize: '14px', fontWeight: '500' }}
            />
            <YAxis 
              stroke="#6b7280"
              style={{ fontSize: '14px', fontWeight: '500' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                padding: '12px'
              }}
            />
            <Legend 
              wrapperStyle={{ 
                fontSize: '14px',
                fontWeight: '600',
                paddingTop: '20px'
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#0891b2"
              strokeWidth={3}
              dot={{ fill: '#0891b2', r: 5 }}
              activeDot={{ r: 7, fill: '#0e7490' }}
              fill="url(#colorValue)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
