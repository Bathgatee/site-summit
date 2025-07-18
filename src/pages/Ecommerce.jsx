import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Ecommerce() {
  return (
    <>
      <Helmet>
        <title>Software Sales Platform | Site Summit</title>
        <meta
          name="description"
          content="Sell your products with a powerful ecommerce site from Site Summit. Tiers available for flippers, small shops, and advanced sellers."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-700 to-blue-500 text-white text-center py-24 px-6">
        <h1 className="text-4xl font-extrabold mb-4">Ecommerce Solutions That Scale</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Whether you're flipping collectibles or running a full storefront, we have a package for you.
        </p>
      </section>

      {/* Tiers */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Choose Your Tier</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

            {/* Flipper Tier */}
            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Flipper Tier</h3>
              <p className="text-gray-600 mb-4">Great for eBay sellers and online flippers wanting a simple store to list inventory and accept payments.</p>
              <ul className="text-gray-500 list-disc list-inside mb-4">
                <li>Basic storefront layout</li>
                <li>Product gallery</li>
                <li>Stripe or PayPal integration</li>
                <li>Optional eBay inventory sync</li>
              </ul>
              <p className="text-xl font-bold text-blue-600">$399+</p>
            </div>

            {/* Small Business Tier */}
            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Small Business Tier</h3>
              <p className="text-gray-600 mb-4">Designed for brick-and-mortar shops expanding online with dozens of products and custom branding.</p>
              <ul className="text-gray-500 list-disc list-inside mb-4">
                <li>Fully branded design</li>
                <li>Inventory manager</li>
                <li>Order and customer tracking</li>
                <li>Email alerts and sales reports</li>
              </ul>
              <p className="text-xl font-bold text-blue-600">$899+</p>
            </div>

            {/* Advanced Tier */}
            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Advanced Tier</h3>
              <p className="text-gray-600 mb-4">Perfect for small businesses looking to add a full online presence with backend tools and ERP integration.</p>
              <ul className="text-gray-500 list-disc list-inside mb-4">
                <li>Custom ecommerce dashboard</li>
                <li>ERP integration via ODBC</li>
                <li>Advanced analytics and automation</li>
                <li>Ongoing support and updates</li>
              </ul>
              <p className="text-xl font-bold text-blue-600">$1999+</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-100 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Ecommerce Build?</h2>
        <p className="mb-6 text-gray-700">Contact us to plan a custom solution tailored to your product and market.</p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>
    </>
  );
}
