
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Starter() {
  return (
    <>
      <Helmet>
        <title>Starter Website Package | Site Summit</title>
        <meta
          name="description"
          content="Simple, beautiful one-page websites for small local businesses. Contact-ready and mobile optimized."
        />
      </Helmet>

      <section className="bg-gradient-to-b from-green-700 to-green-500 text-white text-center py-24 px-6">
        <h1 className="text-4xl font-extrabold mb-4">Starter Site Package</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Perfect for local businesses that just need to be seen. Mobile responsive, fast-loading, and contact-ready.
        </p>
      </section>

      <section className="bg-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Includes:</h2>
          <ul className="text-gray-700 space-y-3">
            <li>✅ One-page scroll layout</li>
            <li>✅ Contact form & map integration</li>
            <li>✅ Fast load times</li>
            <li>✅ Mobile & SEO optimized</li>
            <li>✅ $199 one-time</li>
          </ul>
          <Link
            to="/contact"
            className="inline-block mt-10 bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Get My Site
          </Link>
        </div>
      </section>
    </>
  );
}
