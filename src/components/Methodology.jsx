export default function Methodology({ title, methods }) {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          🔬 {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {methods.map((method, idx) => (
            <div key={idx} className="card">
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                {method.name}
              </h3>
              <p className="text-gray-700 mb-4">{method.description}</p>
              <div className="bg-blue-50 p-3 rounded text-sm text-gray-600">
                <p className="font-semibold mb-2">Tools:</p>
                <p>{method.tools}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
