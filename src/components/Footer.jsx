import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 w-full text-center mt-8">
      <p className="mb-2">Follow Lee on social media:</p>
      <div className="flex justify-center gap-6 text-2xl">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400">
          <FaTwitter />
        </a>
      </div>
      <p className="mt-4 text-sm text-gray-400">© {new Date().getFullYear()} Lee Byung-hun Entertainment. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
