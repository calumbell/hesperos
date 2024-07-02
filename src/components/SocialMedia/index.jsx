import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { icons } from './socialMediaPathData';

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
    <ul className="flex justify-evenly h-8 w-100">
      {networks.map((network, i) => {
        if(network.url === '') return <></>
        return(
          <li key={i}>
            <a 
              href={network.url} 
              className="inline-block group relative top-2 size-8"
              target='_blank'
              rel='noreferrer noopener'
            >
              <svg className="rounded-full" viewBox='0 0 64 64'>
                <circle className="fill-light" cx="32"cy="32" r="31" />
                <path className="fill-primary transition-colors group-hover:fill-primary-shade" d={icons[network.name]} />
              </svg>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialMedia;