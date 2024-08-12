import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
  return (
    <div>
      <nav className="h-screen flex justify-center md:h-[10vh]">
        <div className="text-black font-extrabold text-3xl pt-6 pl-36 md:text-2xl md:pt-4">
          PORTFOLIO
        </div>

        <div className="flex gap-6 pl-5 pt-4 md:pl-[100vh] md:pt-4">
          <SocialIcon
            url="https://www.linkedin.com/in/navalbihani15"
            className="hover:scale-125 transition duration-300"
          />
          <SocialIcon
            url="https://github.com/Naval1525"
            className="hover:scale-125 transition duration-300"
          />
          <SocialIcon
            url="https://leetcode.com/navalbihani15"
            className="hover:scale-125 transition duration-300"
          />
          <SocialIcon
            url="https://x.com/Naval1504"
            className="hover:scale-125 transition duration-300"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;