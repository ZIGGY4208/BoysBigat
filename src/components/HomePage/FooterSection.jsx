import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-[#0b0c1c] text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Address Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Address</h2>
          <p className="flex items-center gap-2">📍 Limbe, Southwest, Cameroon</p>
          <p className="flex items-center gap-2">📞 Call +237673578106</p>
          <p className="flex items-center gap-2">📧 LimbeFieldBoyBrigate@gmail.com</p>
          
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-3 text-xl">
            <a href="#" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Info Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Info</h2>
          <p className="text-gray-300">
            Limbe Field Boys Brigade comprises the Tiko, Limbe South, and Limbe North associations, collectively fostering a strong and impactful presence within the region.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Events</a></li>
            <li><a href="#" className="hover:text-gray-400">Organisation</a></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Subscribe</h2>
          <input 
            type="email" 
            placeholder="Enter email" 
            className="w-full p-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-white"
          />
          <button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
            Subscribe
          </button>
        </div>
        
      </div>
    </footer>
  );
};

export default FooterSection;
