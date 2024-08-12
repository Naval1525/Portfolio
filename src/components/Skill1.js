import React from 'react';
import Icon1 from '../components/skill/AWS-Dark.svg';
import R from '../components/skill/Docker.svg';

import Icon4 from '../components/skill/MaterialUI-Dark.svg';
import Icon2 from '../components/skill/Git.svg';
import Icon3 from '../components/skill/Figma-Dark.svg';
import Icon5 from '../components/skill/Github-Dark.svg';
import Icon6 from '../components/skill/NestJS-Dark.svg';
import Icon7 from '../components/skill/Netlify-Dark.svg';


const icons = [
 
  { src: Icon1, label: 'AWS', href: 'https://docs.aws.amazon.com/' },
  { src: R, label: 'Docker', href: 'https://docs.docker.com/' },
  { src: Icon3, label: 'Figma', href: 'https://help.figma.com/hc/en-us' },
  { src: Icon2, label: 'Git', href: 'https://git-scm.com/doc' },
  { src: Icon4, label: 'MaterialUI', href: 'https://expressjs.com/' },
  { src: Icon5, label: 'GitHub', href: 'https://docs.github.com/en' },
  { src: Icon6, label: 'NestJS', href: 'https://docs.nestjs.com/' },
  { src: Icon7, label: 'Netlify', href: 'https://docs.oracle.com/en/java/' }

];

export const Skill1 = () => {
  return (
    <div className=''>
      <div className='absolute right-[-118vh] bottom-[-35vh] '>
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