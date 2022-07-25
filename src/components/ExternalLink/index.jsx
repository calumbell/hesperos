import React from 'react';

const ExternalLink = ({ 
  title,
  altTitle, 
  url
}) => {
  if (url) return (
      <a
        href={url}
        className='link d-inline'
        target="_blank"
        rel="noreferrer"
      > {title} </a>
  )
  
  return <p
    className='uppercase text-faded'
  >{altTitle ?? title}</p>
}

export default ExternalLink;