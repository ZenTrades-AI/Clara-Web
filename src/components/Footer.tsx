
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-clara-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/4747974c-78dc-400c-a26d-91d2e624fe3d.png" 
                alt="Clara AI" 
                className="h-40 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              The AI Growth Engine for service-trade contractors. From first ring to final payment.
            </p>
            <p className="text-sm text-gray-400">
              © 2025 Clara AI. All rights reserved.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-clara-red transition-colors">How It Works</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-clara-red transition-colors">Solutions</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-clara-red transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-gray-300 hover:text-clara-red transition-colors">Resources</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-clara-red transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-clara-red transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-clara-red transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Calls &lt; 85% confidence escalate to human dispatcher within two rings.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
