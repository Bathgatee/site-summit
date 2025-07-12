import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Site Summit | Modern Website Services</title>
        <meta name="description" content="Get a professionally built, SEO-friendly website with Site Summit. Choose from Starter, Business, or Full Platform solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-700 to-blue-500 text-white text-center py-24 px-6">
        <h1 className="text-5xl font-extrabold mb-4">Climb Higher. Build Better.</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          SEO-optimized websites, custom features, and modern design that elevate your digital presence.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Packages Section */}
      <section className="bg-white text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Our Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Link to="/starter" className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Starter Site</h3>
            <p className="text-gray-600">Simple, clean 1-page site for getting online fast</p>
          </Link>

          <Link to="/business" className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Business Site</h3>
            <p className="text-gray-600">Multi-page, SEO-focused website with CMS options</p>
          </Link>

          <Link to="/platform" className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Full Platform</h3>
            <p className="text-gray-600">Advanced site with Stripe, dashboards, and custom backend</p>
          </Link>

          <Link to="/ecommerce" className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">eCommerce Site</h3>
            <p className="text-gray-600">Prebuilt store tailored to your products, fully SEO ready</p>
          </Link>
        </div>
      </section>
    </>
  );
}

