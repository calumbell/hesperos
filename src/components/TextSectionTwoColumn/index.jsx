import React from 'react';

const TextSectionTwoColumn = ({data}) => {

  return (
    <section className="grid grid-cols-2 my-6">
      <h2 className='title text-3xl'>
        {data.title}
      </h2>
      <p>
        {data.bodyText}
      </p>
    </section>
  )
}

export default TextSectionTwoColumn;