import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials text-3xl">
      <a href="https://www.linkedin.com/in/nithish06/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Nithishluhar" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials