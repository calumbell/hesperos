import React from 'react';
import TextWithFacingImage from './TextWithFacingImage';

export default function TextWithFacingImageGrid({data}) {
  
  return(
    <div>
      {data.map((section, i) => {
        return <TextWithFacingImage data={section} key={i}/>
      })}
    </div>
  );
}
