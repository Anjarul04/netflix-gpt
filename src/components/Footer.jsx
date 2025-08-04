

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
             My Name is Anjarul Haque. I am Forntend developer who loves React and coffee ☕
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Web Development</a></li>
              <li><a href="#" className="hover:underline">Mobile Apps</a></li>
              <li><a href="#" className="hover:underline">E-commerce</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: haqueanjarul232@gmail.com</li>
              <li>Phone: 9525174480</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Anjarul04" className="hover:underline">Github</a>
              <a href="https://x.com/TheAnjarul" className="hover:underline">Twitter</a>
              <a href="https://www.linkedin.com/in/anjarulhaq/" className="hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          &copy; Made by Anjarul Haque ❤️. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;