import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { openHubSpotForm } from '@/utils/hubspotForm';
import {
  Phone,
  ChevronDown,
  Glasses,
  PhoneCall,
  DollarSign,
  Shield,
  Wind,
  Home,
  Droplets,
  Zap,
  FileText,
  Newspaper,
  Lightbulb,
  TrendingUp,
  Building2,
  Menu,
  X
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const agents = [
  { name: "Field Co-Pilot", href: "/solutions/field-copilot", icon: Glasses, desc: "Real-time AI guidance for field teams" },
  { name: "Clara Answers", href: "/solutions/answers", icon: PhoneCall, desc: "AI that answers every call" },
  { name: "Clara Collects", href: "/solutions/collects", icon: DollarSign, desc: "Automated payment follow-up" },
];

const industries = [
  { name: "Fire Protection", href: "/industries/fire-protection", icon: Shield },
  { name: "HVAC", href: "/industries/hvac", icon: Wind },
  { name: "Roofing", href: "/industries/roofing", icon: Home },
  { name: "Plumbing", href: "/industries/plumbing", icon: Droplets },
  { name: "Electrical", href: "/industries/electrical", icon: Zap },
];

const caseStudyLinks = [
  { name: "Case Studies Overview", href: "/resources/case-studies", desc: "See how contractors succeed with Clara" },
  { name: "HVAC Case Studies", href: "/resources/case-studies?industry=HVAC", desc: "Heating and cooling success stories" },
  { name: "Plumbing Case Studies", href: "/resources/case-studies?industry=Plumbing", desc: "Plumbing contractor transformations" },
  { name: "Electrical Case Studies", href: "/resources/case-studies?industry=Electrical", desc: "Electrical business growth" },
  { name: "Fire Protection Case Studies", href: "/resources/case-studies?industry=Fire%20Protection", desc: "Fire safety contractor wins" },
];

const integrationLinks = [
  { name: "Integrations Overview", href: "/integrations", desc: "See all platform connections" },
  { name: "ServiceTitan", href: "/integrations/service-titan" },
  { name: "Jobber", href: "/integrations/jobber" },
  { name: "Housecall Pro", href: "/integrations/housecall-pro" },
  { name: "BuildOps", href: "/integrations/buildops" },
  { name: "FieldEdge", href: "/integrations/fieldedge" },
  { name: "ServiceTrade", href: "/integrations/service-trade" },
  { name: "QuickBooks", href: "/integrations/quickbooks" },
  { name: "Google Calendar", href: "/integrations/google-calendar" },
  { name: "Stripe", href: "/integrations/stripe" },
];

const blogLinks = [
  { name: "Blog Overview", href: "/resources/blogs", icon: Newspaper, desc: "Latest articles and insights" },
  { name: "Product Updates", href: "/resources/blogs?category=product", icon: Lightbulb, desc: "New features and releases" },
  { name: "AI for Field Services", href: "/resources/blogs?category=ai", icon: Building2, desc: "How AI transforms operations" },
  { name: "Operations & Growth", href: "/resources/blogs?category=operations", icon: TrendingUp, desc: "Business improvement strategies" },
  { name: "Industry Insights", href: "/resources/blogs?category=industry", icon: FileText, desc: "Trade-specific knowledge" },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const threshold = (location.pathname === '/demo') ? window.innerHeight * 0.8 : 50;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleCall = () => {
    window.location.href = 'tel:+15707554859';
  };

  const isHidden = (location.pathname === '/demo') && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${isHidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        } ${isScrolled || location.pathname !== '/' ? 'bg-clara-navy/95 backdrop-blur-sm shadow-lg' : 'bg-clara-navy'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/lovable-uploads/white.png"
            alt="Clara AI"
            className="h-40 w-auto"
          />
        </Link>

        {/* Center Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-white hover:text-clara-red transition-colors">
            Home
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium text-white hover:text-clara-red transition-colors">
            How It Works
          </Link>

          {/* Solutions Mega Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-white hover:text-clara-red hover:bg-transparent bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-6 p-6 w-[500px] bg-white text-foreground">
                    {/* Agents Column */}
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Clara Fleet</p>
                      <div className="space-y-2">
                        {agents.map((agent) => {
                          const Icon = agent.icon;
                          return (
                            <NavigationMenuLink asChild key={agent.name}>
                              <Link
                                to={agent.href}
                                className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                              >
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                  <Icon className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-foreground">{agent.name}</p>
                                  <p className="text-xs text-muted-foreground">{agent.desc}</p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          );
                        })}
                      </div>
                      <p className="text-xs text-muted-foreground mt-3">Three AI agents as one growth system.</p>
                    </div>

                    {/* Industries Column */}
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Industries</p>
                      <div className="space-y-1">
                        {industries.map((industry) => {
                          const Icon = industry.icon;
                          return (
                            <NavigationMenuLink asChild key={industry.name}>
                              <Link
                                to={industry.href}
                                className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                              >
                                <Icon className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-foreground">{industry.name}</span>
                              </Link>
                            </NavigationMenuLink>
                          );
                        })}
                      </div>
                      <p className="text-xs text-muted-foreground mt-3">How Clara adapts to each trade.</p>
                    </div>
                  </div>
                  <div className="border-t border-border p-3 bg-secondary/30">
                    <Link to="/solutions" className="text-sm font-medium text-primary hover:underline">
                      View All Solutions →
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link to="/pricing" className="text-sm font-medium text-white hover:text-clara-red transition-colors">
            Pricing
          </Link>

          {/* Resources Mega Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-white hover:text-clara-red hover:bg-transparent bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-6 p-6 w-[720px] bg-white text-foreground">
                    {/* Case Studies Column */}
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Case Studies</p>
                      <div className="space-y-1">
                        {caseStudyLinks.map((link, index) => (
                          <NavigationMenuLink asChild key={link.name}>
                            <Link
                              to={link.href}
                              className="flex flex-col p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                            >
                              <span className={`text-sm ${index === 0 ? 'font-semibold text-foreground' : 'font-medium text-foreground'}`}>
                                {link.name}
                              </span>
                              {link.desc && index === 0 && (
                                <span className="text-xs text-muted-foreground mt-0.5">{link.desc}</span>
                              )}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>

                    {/* Integrations Column */}
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Integrations</p>
                      <div className="space-y-1 max-h-64 overflow-y-auto">
                        {integrationLinks.map((link, index) => (
                          <NavigationMenuLink asChild key={link.name}>
                            <Link
                              to={link.href}
                              className="flex flex-col p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                            >
                              <span className={`text-sm ${index === 0 ? 'font-semibold text-foreground' : 'font-medium text-foreground'}`}>
                                {link.name}
                              </span>
                              {link.desc && (
                                <span className="text-xs text-muted-foreground mt-0.5">{link.desc}</span>
                              )}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>

                    {/* Blogs Column */}
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Blogs</p>
                      <div className="space-y-1">
                        {blogLinks.map((link) => {
                          const Icon = link.icon;
                          return (
                            <NavigationMenuLink asChild key={link.name}>
                              <Link
                                to={link.href}
                                className="flex items-start gap-2 p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                              >
                                <Icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                  <span className="text-sm font-medium text-foreground">{link.name}</span>
                                  <p className="text-xs text-muted-foreground">{link.desc}</p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-border p-3 bg-secondary/30">
                    <Link to="/resources" className="text-sm font-medium text-primary hover:underline">
                      View All Resources →
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex border-clara-red text-clara-red hover:bg-clara-red/10 px-4 py-2"
            onClick={handleCall}
          >
            <Phone className="h-4 w-4 mr-2" />
            Call Clara
          </Button>
          <Button
            size="sm"
            className="bg-clara-red hover:bg-clara-red/90 text-white font-semibold px-6"
            onClick={openHubSpotForm}
          >
            Book Demo
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-clara-navy border-t border-clara-navy/20">
          <nav className="px-6 py-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-sm font-medium text-white hover:text-clara-red"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/how-it-works"
              className="block py-2 text-sm font-medium text-white hover:text-clara-red"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>

            {/* Solutions Mobile */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-white hover:text-clara-red"
                onClick={() => setMobileSubmenu(mobileSubmenu === 'solutions' ? null : 'solutions')}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSubmenu === 'solutions' && (
                <div className="pl-4 space-y-2 mt-2">
                  <p className="text-xs font-semibold text-white/70 uppercase">Clara Fleet</p>
                  {agents.map((agent) => (
                    <Link
                      key={agent.name}
                      to={agent.href}
                      className="block py-1 text-sm text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {agent.name}
                    </Link>
                  ))}
                  <p className="text-xs font-semibold text-white/70 uppercase mt-3">Industries</p>
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      to={industry.href}
                      className="block py-1 text-sm text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className="block py-2 text-sm font-medium text-white hover:text-clara-red"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>

            {/* Resources Mobile */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-white hover:text-clara-red"
                onClick={() => setMobileSubmenu(mobileSubmenu === 'resources' ? null : 'resources')}
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSubmenu === 'resources' && (
                <div className="pl-4 space-y-2 mt-2">
                  <p className="text-xs font-semibold text-white/70 uppercase">Case Studies</p>
                  {caseStudyLinks.slice(0, 1).map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block py-1 text-sm text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <p className="text-xs font-semibold text-white/70 uppercase mt-3">Integrations</p>
                  {integrationLinks.slice(0, 1).map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block py-1 text-sm text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <p className="text-xs font-semibold text-white/70 uppercase mt-3">Blogs</p>
                  {blogLinks.slice(0, 1).map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block py-1 text-sm text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Mobile Buttons */}
            <div className="space-y-3 pt-4">
              <Button
                variant="outline"
                className="w-full border-clara-red text-clara-red hover:bg-clara-red/10 bg-transparent"
                onClick={handleCall}
              >
                Call Clara
              </Button>
              <Button
                className="w-full bg-clara-red hover:bg-clara-red/90 text-white font-semibold"
                onClick={() => {
                  openHubSpotForm();
                  setMobileMenuOpen(false);
                }}
              >
                Book Demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
