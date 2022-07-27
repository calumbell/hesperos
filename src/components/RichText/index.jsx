import React from 'react';
import { RichText } from 'prismic-reactjs';

const RichTextRenderer = ({ content }) => {
  return <>
    {RichText.render(content)}
  </>
}

export default RichTextRenderer;