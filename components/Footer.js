export const Footer = () => {
    return (
      <footer className="bg-white py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo & Socials */}
          <div>
            <h2 className="text-2xl font-bold text-pink-500">Travlog</h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-pink-500 text-xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-pink-500 text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-pink-500 text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-pink-500 text-xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-pink-500 text-xl">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
  
          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Product</h3>
            <ul className="mt-2 space-y-2 text-gray-500">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Case studies</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">Updates</a></li>
            </ul>
          </div>
  
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Company</h3>
            <ul className="mt-2 space-y-2 text-gray-500">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Culture</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
  
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Support</h3>
            <ul className="mt-2 space-y-2 text-gray-500">
              <li><a href="#">Getting started</a></li>
              <li><a href="#">Help center</a></li>
              <li><a href="#">Server status</a></li>
              <li><a href="#">Report a bug</a></li>
              <li><a href="#">Chat support</a></li>
            </ul>
          </div>
  
          {/* Contacts */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Contacts us</h3>
            <ul className="mt-2 space-y-2 text-gray-500">
              <li>
                <i className="fas fa-envelope mr-2"></i> contact@company.com
              </li>
              <li>
                <i className="fas fa-phone mr-2"></i> (xx) xxxx-xxxx
              </li>
              <li>
                <i className="fas fa-map-marker-alt mr-2"></i> 794 McAllister St,
                San Francisco, 94102
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  

  