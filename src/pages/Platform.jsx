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

      {/* Thumbnails Section */}
      <section className="bg-white py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <img
            src="/assets/full-platform-thumbnails.png"
            alt="Full Platform Features"
            className="rounded-xl shadow-lg mx-auto"
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Everything You Need to Scale</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <Link to="/features/license-keys" className="border rounded-xl p-6 shadow hover:shadow-lg transition block">
              <h3 className="text-xl font-semibold mb-2">License Key Generator</h3>
              <p className="text-gray-600">Auto-generate license keys on purchase, track activation and expiration.</p>
            </Link>
            <Link to="/features/stripe-checkout" className="border rounded-xl p-6 shadow hover:shadow-lg transition block">
              <h3 className="text-xl font-semibold mb-2">Stripe Checkout + IP Logging</h3>
              <p className="text-gray-600">Seamless payment flow with built-in customer IP address tracking.</p>
            </Link>
            <Link to="/features/secure-downloads" className="border rounded-xl p-6 shadow hover:shadow-lg transition block">
              <h3 className="text-xl font-semibold mb-2">Secure File Downloads</h3>
              <p className="text-gray-600">Restrict access to paid files and ensure verified-only downloads.</p>
            </Link>
            <Link to="/features/admin-dashboard" className="border rounded-xl p-6 shadow hover:shadow-lg transition block">
              <h3 className="text-xl font-semibold mb-2">Admin Dashboard + Email Alerts</h3>
              <p className="text-gray-600">View license activity, logs, and get notified of purchases in real time.</p>
            </Link>
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
