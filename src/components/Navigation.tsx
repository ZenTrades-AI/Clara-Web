import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
// import ROICalculator from '@/components/ROICalculator'; // No longer needed
import { openHubSpotForm } from '@/utils/hubspotForm';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // On demo page, hide nav initially until scrolled past hero intro (approx 800px)
      // On other pages (including Home), use standard 50px threshold
      const threshold = (location.pathname === '/demo') ? window.innerHeight * 0.8 : 50;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleCall = () => {
    window.location.href = 'tel:+15707554859';
  };

  // Determine if nav should be hidden (only on demo page when not scrolled)
  const isHidden = (location.pathname === '/demo') && !isScrolled;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${isHidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        } ${isScrolled || location.pathname !== '/' ? 'bg-clara-navy/95 backdrop-blur-sm shadow-lg' : 'bg-clara-navy'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/white.png"
                alt="Clara AI"
                className="h-40 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${location.pathname === item.path
                    ? 'text-clara-red'
                    : 'text-white hover:text-clara-red'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* === CHANGED BLOCK START === */}
              <Button
                variant="outline"
                className="border-clara-red text-clara-red hover:bg-clara-red/10 px-4 py-2 text-sm"
                onClick={handleCall}
              >
                Call Clara
              </Button>
              {/* === CHANGED BLOCK END === */}
              <Button
                className="bg-clara-red hover:bg-clara-red/90 text-white font-semibold px-6"
                onClick={openHubSpotForm}
              >
                Book Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-clara-navy border-t border-clara-navy/20">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block text-sm font-medium transition-colors duration-200 ${location.pathname === item.path
                    ? 'text-clara-red'
                    : 'text-white hover:text-clara-red'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="space-y-3 pt-4">
                {/* === CHANGED BLOCK START === */}
                <Button
                  variant="outline"
                  className="w-full border-clara-red text-clara-red hover:bg-clara-red/10"
                  onClick={handleCall}
                >
                  Call Clara
                </Button>
                {/* === CHANGED BLOCK END === */}
                <Button
                  className="w-full bg-clara-red hover:bg-clara-red/90 text-white font-semibold"
                  onClick={() => {
                    openHubSpotForm();
                    setIsMenuOpen(false);
                  }}
                >
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
