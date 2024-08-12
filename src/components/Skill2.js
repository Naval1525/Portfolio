import React from 'react';
import Icon1 from '../components/skill/Prisma.svg';
import R from '../components/skill/TailwindCSS-Dark.svg';

import Icon4 from '../components/skill/Redux.svg';
import Icon2 from '../components/skill/Python-Dark.svg';
import Icon3 from '../components/skill/Bootstrap.svg';
import Icon5 from '../components/skill/ThreeJS-Dark.svg';
import Icon6 from '../components/skill/CPP.svg';
import Icon7 from '../components/skill/MySQL-Dark.svg';


const icons = [
 
  { src: Icon1, label: 'Prisma', href: 'https://www.prisma.io/docs' },
  { src: R, label: 'TailwindCSS', href: 'https://tailwindcss.com/docs/installation' },
  { src: Icon3, label: 'Bootstrap', href: 'https://getbootstrap.com/docs/4.1/getting-started/introduction/' },
  { src: Icon2, label: 'Python', href: 'https://docs.python.org/3/' },
  { src: Icon4, label: 'Redux', href: 'https://redux.js.org/introduction/getting-started' },
  { src: Icon5, label: 'ThreeJS', href: 'https://threejs.org/docs/' },
  { src: Icon6, label: 'CPP', href: 'https://devdocs.io/cpp/' },
  { src: Icon7, label: 'MySQL', href: 'https://dev.mysql.com/doc/' }

];

export const Skill2 = () => {
  return (
    <div className=''>
      <div className='absolute right-[-118vh] bottom-[-55vh] '>
        <div className="flex gap-16 pb-12">
          {icons.map((icon, index) => (
            <div key={index} className="w-20">
              <a href={icon.href} target="_blank" rel="noopener noreferrer">
                <img src={icon.src} className="w-full h-auto transform hover:scale-110 transition duration-500 ease-in-out" />
              </a>
              <p className="text-sm text-center text-black font-sans font-bold">{icon.label}</p>
            </div>
          ))}
        </div>
        
      </div>
      
    </div>
  );
};