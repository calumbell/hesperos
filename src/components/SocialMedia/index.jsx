import React from 'react'
import { SocialIcon } from 'react-social-icons';
import * as styles from './SocialMedia.module.scss';

const SocialMedia = () => {
  const networks = [
    { name: 'facebook', url: 'https://www.facebook.com/hesperoschoir'},
    { name: 'twitter', url: 'https://twitter.com/hesperoschoir' },
    { name: 'instagram', url: 'https://www.instagram.com/hesperoschoir' },
  ]
  if (!networks) return;
  return (
    <ul className={styles.socialMediaContainer}>
      {networks.map((network, i) => 
        <li>
          <SocialIcon key={i}
            network={network.name.toLowerCase()}
            url={network.url}
            className={styles.icon}
            bgColor='#306F8D'
          />
        </li>
      )}
    </ul>
  )
}

export default SocialMedia;