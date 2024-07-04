import React from 'react';

const ExternalLink = ({ 
  title,
  altTitle, 
  url
}) => {
  if (url) return (
      <a
        href={url}
        className='link inline w-min text-nowrap'
        target="_blank"
        rel="noreferrer"
      > {title} </a>
  )
  
  return <p
    className='uppercase text-primary'
  >{altTitle ?? title}</p>
}

export default ExternalLink;