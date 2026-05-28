
import { Phone, Truck, Navigation, Clock, MessageCircle, Star, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const growthLayers = [
  {
    slug: 'answers',
    icon: Phone,
    verb: 'Answers',
    metric: '+28% booked',
    tooltip: 'Pick up every call in <4 s.',
    href: '/how-it-works#answers'
  },
  {
    slug: 'dispatches',
    icon: Truck,
    verb: 'Dispatches',
    metric: 'zero paging',
    tooltip: 'Auto-assign the right tech.',
    href: '/how-it-works#dispatch'
  },
  {
    slug: 'optimizes',
    icon: Navigation,
    verb: 'Optimizes',
    metric: '+1 job/tech',
    tooltip: 'Re-routes on traffic in real time.',
    href: '/how-it-works#optimize'
  },
  {
    slug: 'reminds',
    icon: Clock,
    verb: 'Reminds',
    metric: '–35% no-shows',
    tooltip: 'SMS & voice nudges keep customers home.',
    href: '/how-it-works#remind'
  },
  {
    slug: 'engages',
    icon: MessageCircle,
    verb: 'Engages',
    metric: '+7% ticket',
    tooltip: 'Upsells idle hours automatically.',
    href: '/how-it-works#engage'
  },
  {
    slug: 'reviews',
    icon: Star,
    verb: 'Reviews',
    metric: '4.8★ avg',
    tooltip: 'Instant review requests post-job.',
    href: '/how-it-works#review'
  },
  {
    slug: 'collects',
    icon: CreditCard,
    verb: 'Collects',
    metric: '–9 days DSO',
    tooltip: 'Friendly AI chases the invoice.',
    href: '/how-it-works#collect'
  }
];

const ClaraGrowthPills = () => {
  const handlePillClick = (layerName: string, href: string) => {
    // GA event tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'home_pill',
        event_label: layerName
      });
    }
    
    // Navigate to the href
    window.location.href = href;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-clara-navy mb-4">
            Seven ways Clara grows your revenue—automatically.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From 4-second answers to faster invoices, each layer kicks dollars back into your business.
          </p>
        </div>

        <TooltipProvider>
          {/* Pills Container */}
          <div 
            role="tablist"
            className="flex justify-start gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:overflow-visible md:justify-center md:flex-wrap"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {growthLayers.map((layer) => {
              const IconComponent = layer.icon;
              return (
                <Tooltip key={layer.slug}>
                  <TooltipTrigger asChild>
                    <button
                      role="tab"
                      onClick={() => handlePillClick(layer.slug, layer.href)}
                      className="flex-shrink-0 snap-start bg-gray-50 hover:bg-teal-500 text-clara-navy hover:text-white transition-all duration-300 px-5 py-3 rounded-xl font-inter font-bold text-sm flex items-center gap-3 min-w-fit group"
                      style={{ 
                        backgroundColor: 'var(--pill-bg, #F5F7FA)',
                        color: 'var(--pill-text, #041E42)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.setProperty('--pill-bg', '#1ABC9C');
                        e.currentTarget.style.setProperty('--pill-text', 'white');
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.setProperty('--pill-bg', '#F5F7FA');
                        e.currentTarget.style.setProperty('--pill-text', '#041E42');
                      }}
                    >
                      <IconComponent 
                        size={20} 
                        strokeWidth={2}
                        className="text-teal-500 group-hover:text-white transition-colors"
                        aria-label={`${layer.icon.name} icon – ${layer.verb} layer`}
                      />
                      <span>{layer.verb}</span>
                      <span className="text-xs opacity-75">{layer.metric}</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{layer.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </TooltipProvider>

        {/* CTA Below Stack */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => window.location.href = '/how-it-works'}
            className="bg-clara-gold hover:bg-clara-gold/92 text-clara-navy font-semibold px-8 py-3 text-lg"
          >
            See How It Works
          </Button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          [role="tablist"] {
            scroll-snap-type: x mandatory;
          }
          [role="tab"] {
            scroll-snap-align: start;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          [role="tab"] {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ClaraGrowthPills;
