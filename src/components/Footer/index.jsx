import React, { useState, useEffect } from 'react';
import { SocialMedia } from '../';
import * as styles from './Footer.module.scss';



const Footer = () => {
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isVisible, setVisibility] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => 
      window.removeEventListener("scroll", onScroll);
  })

  const onScroll = (e) => {
    // console.log(window.innerHeight + window.scrollY >= document.body.scrollHeight)
    const scrollPosition = window.scrollY
    setVisibility(
      scrollPosition < lastScrollPosition
      || scrollPosition === 0
      || scrollPosition + window.innerHeight + 25 >= document.body.scrollHeight
    )
    setLastScrollPosition(scrollPosition);
  }

  const today = new Date();
  return (
    <>

      <footer className={`
        ${styles.footerContainer}
        ${!isVisible && styles.hide}
      `}>
        <SocialMedia />
        <div className={styles.copyright}>
          <span className='hide-on-sm'>{`© Hesperos Choir ${today.getFullYear()}`}</span>
        </div>
      </footer>

    </>
  )
}
export default Footer;

