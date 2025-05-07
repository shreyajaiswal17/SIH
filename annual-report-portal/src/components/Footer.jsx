import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="glass-card py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* About Us Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">About Lumina</h3>
          <p className="text-gray-300 mb-4">
            Lumina provides a comprehensive platform to help educational institutes create visually compelling,
            data-driven annual reports with ease.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                Our Services
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/signup" className="text-gray-300 hover:text-white transition-colors">
                Sign Up
              </a>
            </li>
            <li className="mb-2">
              <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">Contact Us</h3>
          <ul>
            <li className="flex items-center mb-2">
              <MapPin className="text-blue-500 mr-3 h-5 w-5" />
              <span className="text-gray-300">Delhi</span>
            </li>
            <li className="flex items-center mb-2">
              <Phone className="text-blue-500 mr-3 h-5 w-5" />
              <span className="text-gray-300">+91 1234567890</span>
            </li>
            <li className="flex items-center mb-2">
              <Mail className="text-blue-500 mr-3 h-5 w-5" />
              <span className="text-gray-300">support@lumina.com</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Social Media Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Lumina. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
