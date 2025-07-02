
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ROICalculator from '@/components/ROICalculator';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-clara-navy/95 backdrop-blur-sm shadow-lg' : 'bg-clara-navy'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-clara-gold rounded-lg flex items-center justify-center">
              <span className="text-clara-navy font-bold text-lg">C</span>
            </div>
            <span className="text-white font-montserrat font-bold text-xl">Clara AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-clara-gold'
                    : 'text-white hover:text-clara-gold'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <ROICalculator 
              trigger={
                <Button variant="outline" className="border-clara-gold text-clara-gold hover:bg-clara-gold/10 px-4 py-2 text-sm">
                  Calculate ROI
                </Button>
              }
            />
            <Button className="bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold px-6">
              Book Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-clara-navy border-t border-clara-navy/20">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-clara-gold'
                    : 'text-white hover:text-clara-gold'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="space-y-3 pt-4">
              <ROICalculator 
                trigger={
                  <Button variant="outline" className="w-full border-clara-gold text-clara-gold hover:bg-clara-gold/10">
                    Calculate ROI
                  </Button>
                }
              />
              <Button className="w-full bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold">
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
