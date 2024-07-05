import React from 'react';

const LinkToMap = ({ query }) => {
  return(
    query && <a 
      className="link text-sm w-min text-nowrap inline-block"
      target="_blank"
      rel="noreferrer"
      href={`http://maps.google.com/?q=${query}`}
    >
      (View on Map)
    </a>
  )
};

export default LinkToMap;