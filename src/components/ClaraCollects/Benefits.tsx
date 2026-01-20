import { Zap, TrendingUp, Clock, Heart, Eye, Users } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Faster Payments",
      description: "30% faster average collection time. Get paid weeks earlier on every invoice.",
      bgColor: "bg-red-50",
      iconColor: "text-clara-red"
    },
    {
      icon: TrendingUp,
      title: "Improved Cash Flow",
      description: "More predictable revenue. Less capital tied up in unpaid invoices.",
      bgColor: "bg-red-50",
      iconColor: "text-clara-red"
    },
    {
      icon: Clock,
      title: "Less Manual Effort",
      description: "Your team stops chasing payments and focuses on serving customers.",
      bgColor: "bg-red-50",
      iconColor: "text-clara-red"
    },
    {
      icon: Heart,
      title: "Fewer Awkward Follow-ups",
      description: "Clara handles the uncomfortable conversations professionally.",
      bgColor: "bg-red-50",
      iconColor: "text-clara-red"
    },
    {
      icon: Eye,
      title: "Better Financial Visibility",
      description: "Real-time dashboards show collection status across all accounts.",
      bgColor: "bg-red-50",
      iconColor: "text-clara-red"
    },
    {
      icon: Users,
      title: "Preserved Relationships",
      description: "Professional, friendly collection that keeps customers happy.",
      bgColor: "bg-red-50",
      iconColor: "text-clara-red"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-clara-red font-bold uppercase tracking-wider text-sm mb-4">What You Gain</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Businesses <span className="text-clara-red">Gain</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Clara Collects delivers measurable improvements to your receivables and cash flow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
