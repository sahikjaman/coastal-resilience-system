export default function Team() {
  const team = [
    { name: "GIS Analyst", role: "Data Mapping Specialist" },
    { name: "Environmental Scientist", role: "Research Lead" },
    { name: "Web Developer", role: "Platform Engineer" },
    { name: "Policy Expert", role: "Impact Advisor" },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">👥 Tim</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="card text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
