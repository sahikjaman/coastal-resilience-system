import { BarChart3, AlertTriangle, Info } from "lucide-react";

export default function DataAnalysis({ data }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 rounded-2xl p-8 shadow-xl border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
          Analisis Data
        </h3>
      </div>

      <div className="space-y-6">
        {data.analysis?.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-start gap-3 mb-3">
              {item.title.includes('⚠️') || item.title.includes('Kritis') ? (
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
              ) : (
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Info className="w-5 h-5 text-blue-600" />
                </div>
              )}
              <h4 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h4>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4 ml-13">
              {item.description}
            </p>
            
            {item.metrics && (
              <div className="mt-4 flex gap-3 flex-wrap ml-13">
                {item.metrics.map((metric, i) => (
                  <span 
                    key={i} 
                    className="metric-badge inline-flex items-center gap-2"
                  >
                    <span className="font-semibold">{metric.label}:</span>
                    <span>{metric.value}</span>
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
