import React from 'react';

const Map = ({ address }) => {
  const url = `https://www.google.com/maps/embed/v1/place?q=${address}&key=${process.env.GATSBY_GOOGLE_MAP_API_KEY}`
  return (
    <iframe
      title="map"
      width="600"
      height="450"
      frameborder="0"
      src={url}
    />
  )
}

export default Map;