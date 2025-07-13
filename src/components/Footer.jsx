import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm mt-12">
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 py-10 text-left">
            
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">SITE SUMMIT</h4>
              <p>Climb Higher. Build Better. Web solutions tailored for your growth.</p>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">SERVICES</h4>
              <ul className="space-y-1">
                <li><a href="/starter" className="hover:underline">Starter</a></li>
                <li><a href="/business" className="hover:underline">Business</a></li>
                <li><a href="/platform" className="hover:underline">Full Platform</a></li>
                <li><a href="/ecommerce" className="hover:underline">eCommerce</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">RESOURCES</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">Status</a></li>
                <li><a href="#" className="hover:underline">Terms</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">CONTACT</h4>
              <p>support@mysitesummit.com</p>
              <p>New York, NY</p>
            </div>
          </div>

          <div className="border-t border-gray-300 text-center py-4 text-xs text-gray-500">
            © {new Date().getFullYear()} Site Summit. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

