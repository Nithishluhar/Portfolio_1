import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import { FaRocketchat, } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h4 className='text-3xl'>hi 🙋🏼</h4>
        <h1 className='tracking-widest'>Nithish P</h1>
        <h5 className="text-light tracking-widest ">I'm  Full-stack Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down  text-4xl  ">
         <FaRocketchat/>
         <SiGmail/>
        </a>
      
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
