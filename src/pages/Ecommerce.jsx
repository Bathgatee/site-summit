import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Ecommerce() {
  return (
    <>
      <Helmet>
        <title>eCommerce Website Package | Site Summit</title>
        <meta
          name="description"
          content="Launch your online store with Site Summit's prebuilt, customizable, SEO-ready eCommerce solution."
        />
      </Helmet>

      {/* Hero Section with purple gradient */}
      <section className="bg-gradient-to-b from-purple-700 to-purple-500 text-white text-center py-24 px-6">
        <h1 className="text-4xl font-extrabold mb-4">Sell Online with Style</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Our prebuilt, customizable eCommerce sites get you up and running quickly—with beautiful product displays,
          secure checkout, and mobile-first design.
        </p>
      </section>

      {/* Features / Cards Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <p className="text-gray-600 mb-4">
                Prebuilt layout, up to 10 products, email support.
              </p>
              <p className="font-bold text-lg text-purple-700">$499</p>
            </div>
            <div className="border rounded-xl p-6 shadow-lg ring-2 ring-purple-500 transition">
              <h3 className="text-xl font-semibold mb-2">Standard</h3>
              <p className="text-gray-600 mb-4">
                Includes product filters, Stripe checkout, and contact forms.
              </p>
              <p className="font-bold text-lg text-purple-700">$999</p>
            </div>
            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <p className="text-gray-600 mb-4">
                Fully custom design, 50+ products, inventory tools, dashboard.
              </p>
              <p className="font-bold text-lg text-purple-700">$1999</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-purple-100 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to start selling?</h2>
        <p className="text-gray-700 mb-6">Let us help you build a beautiful, scalable eCommerce site.</p>
        <div className="space-y-4">
          <Link
            to="/contact"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
          >
            Get Started
          </Link>
          <br />
          <Link
            to="/contact"
            className="inline-block text-purple-700 font-medium underline hover:text-purple-900"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
