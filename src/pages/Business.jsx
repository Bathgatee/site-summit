import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Starter() {
  return (
    <>
      <Helmet>
        <title>Starter Website Package | Site Summit</title>
        <meta
          name="description"
          content="Get online quickly with a simple, SEO-friendly 1-page website from Site Summit."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-700 to-purple-500 text-white text-center py-24 px-6">
        <h1 className="text-4xl font-extrabold mb-4">Start Simple, Launch Strong</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Perfect for personal brands, startups, or anyone needing a clean, responsive 1-page website.
        </p>
      </section>

      {/* Features / Cards Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What’s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Rapid Setup</h3>
              <p className="text-gray-600">
                Get your website live within days. Great for launches, events, or temporary campaigns.
              </p>
            </div>
            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Clean 1-Page Layout</h3>
              <p className="text-gray-600">
                Sleek design with your logo, services, and contact form—all in one scrollable page.
              </p>
            </div>
            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Mobile-First Design</h3>
              <p className="text-gray-600">
                Fully responsive, so your site looks amazing on phones, tablets, and desktops.
              </p>
            </div>
            <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">SEO-Friendly</h3>
              <p className="text-gray-600">
                Optimized structure for Google indexing. Help customers find you fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="bg-purple-100 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Launch your site today for just</h2>
        <p className="text-4xl font-extrabold text-purple-700 mb-6">$299</p>
        <Link
          to="/contact"
          className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
        >
          Get Started
        </Link>
      </section>
    </>
  );
}

