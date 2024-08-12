import React from 'react';

const BoxWithPara = () => {
  return (
    <div className="bg-white border border-gray-300 rounded-md shadow-md p-4 w-[500px] mx-auto mb-4 hover:bg-gray-100 hover:shadow-lg hover:shadow-black transition duration-300 from-neutral-600">
      <p>
        Hi! I'm Naval Bihani , a software developer skilled in front-end technologies with a knack for problem-solving. I've tackled over  400+ DSA questions on  &nbsp;
        <a 
          href="https://leetcode.com/u/navalbihani15/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 font-bold hover:text-blue-800 hover:scale-110 transition duration-300"
        >
         LeetCode
        </a>
        &nbsp; and I excel at creating responsive, user-friendly web applications. I'm passionate about continuous learning and delivering impactful digital experiences.
      </p>
      <p>
        Check out some of my   &nbsp;
        <a 
          href="https://github.com/Naval1525" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 font-bold hover:text-blue-800 hover:scale-110 transition duration-300"
        >
          Projects
        </a>
        &nbsp;  and &nbsp; 
        <a 
          href="https://www.linkedin.com/in/navalbihani15/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 font-bold hover:text-blue-800 hover:scale-110 transition duration-300"
        >
         Let's Connect .
        </a>
      </p>
    </div>
  );
};

export default BoxWithPara;