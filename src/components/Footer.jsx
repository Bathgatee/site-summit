export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm px-6 pt-12 pb-4 mt-12">
      <div className="max-w-6xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1 */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-gray-800 mb-2">Site Summit</h4>
            <p>Climb Higher. Build Better. Web solutions tailored for your growth.</p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-gray-800 mb-2">Services</h4>
            <ul className="space-y-1">
              <li><a href="/starter" className="hover:underline">Starter</a></li>
              <li><a href="/business" className="hover:underline">Business</a></li>
              <li><a href="/platform" className="hover:underline">Full Platform</a></li>
              <li><a href="/ecommerce" className="hover:underline">eCommerce</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
            <p>Email: support@mysitesummit.com</p>
          </div>
        </div>

        {/* Divider + Copyright */}
        <hr className="my-6 border-gray-300" />
        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Site Summit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
