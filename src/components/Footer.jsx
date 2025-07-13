function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start text-center md:text-left gap-10">

        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 mb-2">Site Summit</h4>
          <p>Climb Higher. Build Smarter. (footer centered)</p>
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 mb-2">Services</h4>
          <ul className="space-y-1">
            <li><a href="/starter" className="hover:underline">Starter</a></li>
            <li><a href="/business" className="hover:underline">Business</a></li>
            <li><a href="/platform" className="hover:underline">Full Platform</a></li>
            <li><a href="/ecommerce" className="hover:underline">eCommerce</a></li>
          </ul>
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
          <p>Email: support@mysitesummit.com</p>
          <p>© {new Date().getFullYear()} Site Summit. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
