import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-10 bg-footer text-white">
      <div className="page-container py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-400">
              About
            </h3>

            <div className="space-y-2 text-sm text-gray-300">
              <Link
                to="/"
                className="block hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/products"
                className="block hover:text-white"
              >
                ShopKart Stories
              </Link>

              <Link
                to="/products"
                className="block hover:text-white"
              >
                Careers
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-400">
              Help
            </h3>

            <div className="space-y-2 text-sm text-gray-300">
              <Link
                to="/cart"
                className="block hover:text-white"
              >
                Payments
              </Link>

              <Link
                to="/cart"
                className="block hover:text-white"
              >
                Shipping
              </Link>

              <Link
                to="/cart"
                className="block hover:text-white"
              >
                Returns
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-400">
              Consumer Policy
            </h3>

            <div className="space-y-2 text-sm text-gray-300">
              <p>Terms of Use</p>
              <p>Privacy</p>
              <p>Security</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-400">
              Contact
            </h3>

            <div className="space-y-2 text-sm text-gray-300">
              <p>ShopKart Support</p>
              <p>support@shopkart.example</p>
              <p>India</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
          © 2026 ShopKart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;