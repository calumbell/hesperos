import React from 'react';
import { TextWithFacingImage } from '../';

const TextWithFacingImageGrid = ({data}) => { 
  return(
    <div>
      {data.map((section, i) => {
        return <TextWithFacingImage data={section} key={i}/>
      })}
    </div>
  );
}

export default TextWithFacingImageGrid;