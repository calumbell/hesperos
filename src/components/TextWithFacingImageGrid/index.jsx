import React from 'react';
import { TextWithFacingImage } from '../';

const TextWithFacingImageGrid = ({data}) => { 
  return(
    <div>
      {data.map((section, i) => 
        <TextWithFacingImage data={section} key={i}/>
      )}
    </div>
  );
}

export default TextWithFacingImageGrid;