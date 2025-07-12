import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Platform() {
  return (
    <>
      <Helmet>
        <title>Platform Website Package | Site Summit</title>
        <meta
          name="description"
          content="Launch a full-featured website with Stripe integration, admin tools, and custom backend from Site Summit."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-700 to-purple-500 text-white text-center py-24 px-6">
        <h1 className="text-4xl font-extrabold mb-4">Full Platform, Full Power</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Best for SaaS tools, digital products, and businesses that need Stripe checkout, dashboards, and more.
        </p>
      </section>

      {/* Features */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Everything You Need to Scale</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Stripe Checkout Integration</h3>
              <p className="text-gray-600">Seamlessly accept payments for products, subscriptions, or services.</p>
            </div>
            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">License Key Generator</h3>
              <p className="text-gray-600">Automatically create and deliver license keys after payment.</p>
            </div>
            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Secure File Delivery</h3>
              <p className="text-gray-600">Give customers access to digital downloads through protected links.</p>
            </div>
            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Admin Dashboard</h3>
              <p className="text-gray-600">Monitor activity, manage users, and receive email alerts in real time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-purple-100 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Full-featured platform package starting at</h2>
        <p className="text-4xl font-extrabold text-purple-700 mb-6">$999</p>
        <Link
          to="/contact"
          className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
        >
          Build My Platform
        </Link>
      </section>
    </>
  );
}
