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
                srcSet="/lovable-uploads/white-mobile.png 200w, /lovable-uploads/white.png 450w"
                sizes="(max-width: 768px) 200px, 450px"
                alt="Clara AI Logo"
                className="h-11 md:h-14 w-[90px] md:w-[113px] object-cover object-top"
                width="280"
                height="200"
                loading="lazy"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md text-sm leading-relaxed">
              The only AI your trades business needs. From first ring to final payment.
            </p>
            <p className="text-sm text-gray-400">
              © 2026 Clara AI. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              415 Mission St, Fl #37
              <br />
              San Francisco, CA 94105
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
                  to="/careers"
                  className="text-gray-300 hover:text-clara-red transition-colors text-sm"
                >
                  Career
                </Link>
              </li>
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
            Calls requiring complex support automatically escalate to a live representative.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
