import React from 'react'

        import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold text-white">WarmPaws</h2>
          <p className="mt-3 text-sm text-gray-400">
            Keeping your furry friends warm, safe & happy this winter.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <p className='text-gray-400'>📍 Dhaka, Bangladesh</p>
          <p className='text-gray-400'>📧 support@warmpaws.com</p>
          <p className='text-gray-400'>📞 +880 1234 567890</p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl text-white">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
          <p className="mt-4 text-sm">
            <a href="#" className="underline text-gray-400">Privacy Policy</a>
          </p>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-300 text-sm">
        © 2025 WarmPaws. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

 