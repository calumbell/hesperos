import React from 'react';


export default function ContactForm({fields}) {
  const handleSubmit = event => {
    event.preventDefault();
    // TODO: send form data via email
  };

  const createFormField = field => {
    // render multi fields by iterating over their subfields
    if (field.type === 'multi') {
      return (
        <div className='form-row flex'>
          {field.content.map((subfield, i) => {
            return(
              <div className='w-100' key={i}>
                <label>{subfield.content.displayName}
                  <input 
                    className='p-2'
                    type={subfield.type}
                    name={subfield.content.name}/>
                </label>
              </div>
            )
          })}
        </div>
      )
    }

    // render non-nested fields
    return(
      <div className='form-row flex'>
        <label className='w-100'>{field.content.displayName}
          {field.type === 'textarea' 
          ? <textarea 
              className='p-2'
              type={field.content.type}
              name={field.content.name}
            />
          : <input className='p-2'
              type={field.content.type}
              name={field.content.name}
            />
          }
        </label>
      </div>
    )
  };

  return(
    <form className='form grid p-1' onSubmit={handleSubmit}>
      {fields.map(field => {return createFormField(field)})}
      <div className='form-row mt-2'>
        <button className='call-to-action' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
}