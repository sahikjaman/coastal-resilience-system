export default function DataAnalysis({ data }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-8 border-l-4 border-teal-600">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">
        📊 Analisis Data
      </h3>

      <div className="space-y-4">
        {data.analysis?.map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
            <p className="text-gray-700">{item.description}</p>
            {item.metrics && (
              <div className="mt-3 flex gap-4 flex-wrap">
                {item.metrics.map((metric, i) => (
                  <span key={i} className="metric-badge">
                    {metric.label}: {metric.value}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
