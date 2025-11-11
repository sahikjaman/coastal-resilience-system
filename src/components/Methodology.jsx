import { Microscope, Wrench } from "lucide-react";

export default function Methodology({ title, methods }) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Microscope className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              {title}
            </h2>
          </div>
          <p className="text-gray-600 text-lg">
            Pendekatan ilmiah dan teknologi terkini untuk analisis yang akurat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {methods.map((method, idx) => (
            <div 
              key={idx} 
              className="card group relative"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Icon with gradient background */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform bg-gradient-to-br ${
                  idx === 0 ? 'from-blue-500 to-cyan-500' :
                  idx === 1 ? 'from-purple-500 to-pink-500' :
                  idx === 2 ? 'from-green-500 to-teal-500' :
                  'from-orange-500 to-red-500'
                }`}>
                  <span className="text-3xl">{method.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {method.name}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                {method.description}
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-xl border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="w-4 h-4 text-blue-600" />
                  <p className="font-semibold text-sm text-blue-900">Tools & Technologies:</p>
                </div>
                <p className="text-sm text-gray-700 font-medium">{method.tools}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
