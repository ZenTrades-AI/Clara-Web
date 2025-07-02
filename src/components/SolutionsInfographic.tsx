
const SolutionsInfographic = () => {
  return (
    <section className="py-20 bg-clara-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-montserrat font-bold text-clara-navy mb-4">
            How Clara Adapts to Your Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One AI platform, infinite possibilities across service industries
          </p>
        </div>

        <div className="relative">
          {/* Central Clara Hub */}
          <div className="flex items-center justify-center mb-12">
            <div className="w-32 h-32 bg-gradient-to-br from-clara-gold to-clara-teal rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">Clara</div>
                <div className="text-sm">AI Core</div>
              </div>
            </div>
          </div>

          {/* Industry Connections */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'HVAC', icon: '🌡️', specialty: 'Emergency response & scheduling' },
              { name: 'Plumbing', icon: '🔧', specialty: 'Urgent dispatch & follow-up' },
              { name: 'Electrical', icon: '⚡', specialty: 'Safety protocols & compliance' },
              { name: 'Fire Safety', icon: '🔥', specialty: 'Critical response & documentation' },
              { name: 'Facilities', icon: '🏢', specialty: 'Multi-service coordination' },
              { name: 'Construction', icon: '🏗️', specialty: 'Project management & updates' },
              { name: 'Cleaning', icon: '🧽', specialty: 'Route optimization & quality' },
              { name: 'Security', icon: '🛡️', specialty: '24/7 monitoring & alerts' }
            ].map((industry, index) => (
              <div
                key={industry.name}
                className="group relative"
              >
                {/* Connection Line */}
                <div className="absolute top-1/2 left-1/2 w-px h-20 bg-gradient-to-b from-clara-gold to-transparent transform -translate-x-1/2 -translate-y-full opacity-30"></div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <div className="text-center">
                    <div className="text-3xl mb-3">{industry.icon}</div>
                    <h3 className="font-montserrat font-bold text-clara-navy mb-2">{industry.name}</h3>
                    <p className="text-xs text-gray-600">{industry.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Benefits */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-clara-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-montserrat font-bold text-clara-navy mb-2">Industry-Specific Training</h3>
              <p className="text-gray-600">Clara learns your industry's terminology, priorities, and workflows</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-clara-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-montserrat font-bold text-clara-navy mb-2">Seamless Integration</h3>
              <p className="text-gray-600">Connects with your existing tools and processes without disruption</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-clara-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-montserrat font-bold text-clara-navy mb-2">Scalable Growth</h3>
              <p className="text-gray-600">Grows with your business from single location to enterprise scale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsInfographic;
