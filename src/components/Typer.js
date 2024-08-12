import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypewriterComponent = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://kit.fontawesome.com/58a810656e.js';
    script2.crossOrigin = 'anonymous';
    document.body.appendChild(script2);

    const colors = ['#6666FF'];
    let colorIndex = 0;

    const typed = new Typed(".role", {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      onStringTyped: (string) => {
        const roleSpan = document.querySelector('.role');
        roleSpan.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
      },
    });

    return () => {
      typed.destroy();
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="w-400px relative mx-auto">
        <p className="absolute left-0 font-bold text-4xl text-black text-shadow-md ">
        <span className="text-black text-5xl font-sans font-bold">MySelf&nbsp;&nbsp;&nbsp;</span>
      <span className="text-[#6666FF] text-5xl font-sans font-bold">NavalBihani</span><br /> <br />
          <p>
          I am a <span className="role"></span>
          </p>
        </p>
        <p>
            
        </p>
      </div>
    </div>
  );
};

export default TypewriterComponent;