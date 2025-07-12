import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow py-4 px-6 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="Site Summit Logo" className="h-8 w-8" />
        <span className="text-xl font-bold text-blue-600">Site Summit</span>
      </Link>
      <div className="space-x-6 text-sm font-medium">
        <Link to="/starter" className="text-gray-700 hover:text-blue-600">Starter</Link>
        <Link to="/business" className="text-gray-700 hover:text-blue-600">Business</Link>
        <Link to="/platform" className="text-gray-700 hover:text-blue-600">Platform</Link>
        <Link to="/ecommerce" className="text-gray-700 hover:text-blue-600">eCommerce</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
}


