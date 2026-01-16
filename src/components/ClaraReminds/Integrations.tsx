const integrations = [
  { name: "ServiceTitan", logo: "🔧" },
  { name: "Housecall Pro", logo: "📱" },
  { name: "Jobber", logo: "📋" },
  { name: "ServiceM8", logo: "⚙️" },
  { name: "FieldEdge", logo: "🔌" },
  { name: "Zapier", logo: "⚡" },
];

const Integrations = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Works With Your Existing Tools
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Clara Reminds integrates seamlessly with the platforms you already use
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-premium transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="text-4xl mb-3">{integration.logo}</div>
              <div className="text-sm font-semibold text-foreground">{integration.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
