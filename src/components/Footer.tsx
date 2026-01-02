import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-clara-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo + description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/lovable-uploads/white.png"
                alt="Clara AI"
                className="h-16 md:h-20 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md text-sm leading-relaxed">
              The AI Growth Engine for service-trade contractors. From first ring
              to final payment.
            </p>
            <p className="text-sm text-gray-400">
              © 2025 Clara AI. All rights reserved.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/how-it-works"
                  className="text-gray-300 hover:text-clara-red transition-colors text-sm"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="text-gray-300 hover:text-clara-red transition-colors text-sm"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-300 hover:text-clara-red transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/resources"
                  className="text-gray-300 hover:text-clara-red transition-colors text-sm"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-clara-red transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-clara-red transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/user-licence-agreement"
                  className="text-gray-300 hover:text-clara-red transition-colors text-sm"
                >
                  User Licence Agreement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Calls &lt; 85% confidence escalate to human dispatcher within two rings.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
