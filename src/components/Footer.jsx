import React, { useState, useEffect } from 'react';
import { SocialMedia } from './';

const Footer = () => {
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isVisible, setVisibility] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => 
      window.removeEventListener("scroll", onScroll);
  })

  const onScroll = (e) => {
    const scrollPosition = window.scrollY
    setVisibility(
      scrollPosition < lastScrollPosition
      || scrollPosition === 0
      || scrollPosition + window.innerHeight >= document.body.scrollHeight
      || document.body.scrollHeight < 700
    )
    setLastScrollPosition(scrollPosition);
  }

  const today = new Date();

  return (
    <footer className={`
      fixed bottom-0 w-full h-12 bg-light/80 border-t border-t-primary transition-all
      ${!isVisible && "bottom-[-60px]"}
    `}>
      <SocialMedia />
      <span className={"absolute hidden sm:block text-xs bottom-3 right-3"}>
          {`© Hesperos Choir ${today.getFullYear()}`}
      </span>
    </footer>
  )
}
export default Footer;

