import React from 'react';
import { SocialMedia } from '../';
import * as styles from './Footer.module.scss';

const Footer = () => {
  const today = new Date();
  return (
    <footer className={styles.footerContainer}>
      <SocialMedia />
      <div className={styles.copyright}>
        <span className='hide-on-sm'>{`© Hesperos Choir ${today.getFullYear()}`}</span>
      </div>
    </footer>
  )
}

export default Footer;