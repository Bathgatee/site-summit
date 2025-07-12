import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Site Summit</title>
        <meta
          name="description"
          content="Get in touch with Site Summit to start your custom website project, ask a question, or get a free quote. We’re here to help you climb higher."
        />
        <meta property="og:title" content="Contact Site Summit" />
        <meta property="og:description" content="Start your journey with a custom-built website. Reach out to Site Summit today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mysitesummit.com/contact" />
        <meta property="og:image" content="https://www.mysitesummit.com/preview.png" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-700 to-blue-500 text-white text-center py-24 px-6">
        <h1 className="text-4xl font-extrabold mb-4">Let’s Build Something Great</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have a question or ready to get started? We're just a message away.
        </p>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Send Us a Message</h2>
          <form
            className="grid grid-cols-1 gap-6"
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <input
              type="hidden"
              name="_subject"
              value="New Contact Request from Site Summit"
            />
            <input
              type="hidden"
              name="_redirect"
              value="https://mysitesummit.com/thank-you"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
