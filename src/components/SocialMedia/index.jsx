import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { icons } from './socialMediaPathData';
import * as styles from './SocialMedia.module.scss';

const SocialMedia = () => {
  /* query Prismic for social media links */
  const data = useStaticQuery(graphql`
    query SocialMediaQuery {
      prismicWebsiteDetails {
        data {
          facebook_link { text }
          instagram_link { text }
          twitter_link { text }
        }
      }
    }
  `);
  
  /* flatten Prismic response into an array of objects */
  let networks = [];
  for (const [key, value] of Object.entries(data.prismicWebsiteDetails.data)) {
    networks.push({ 
      name: key.split('_')[0],      // rm '_link' from network name
      url: value ? value.text : '', // only check for text if value isn't null
    })
  } 

  return (
    <ul className={styles.socialMediaContainer}>
      {networks.map((network, i) => {
        if(network.url === '') return <></>
        return(
          <li key={i}>
            <a 
              href={network.url} 
              className={styles.iconLink}
              target='_blank'
              rel='noreferrer noopener'
            >
              <svg className={styles.iconSvg} viewBox='0 0 64 64'>
                <circle cx="32"cy="32" r="31"/>
                <path d={icons[network.name]} />
              </svg>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialMedia;