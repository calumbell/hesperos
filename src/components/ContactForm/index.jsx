import React from 'react';


const ContactForm = ({fields}) => {

  const handleSubmit = event => {
    event.preventDefault();
    // TODO: send form data via email
  };

  const createFormField = (field, key) => {
    // render multi fields by iterating over their subfields
    if (field.type === 'multi') {
      return (
        <div key={key} className='form-row d-flex'>
          {field.content.map((subfield, i) => {
            return(
              <div className='w-100' key={i}>
                <label>{subfield.content.displayName}
                  <input 
                    className='p-2'
                    type={subfield.type}
                    name={subfield.content.name}
                  />
                </label>
              </div>
            )
          })}
        </div>
      )
    }

    // render non-nested fields
    return(
      <div key={key} className='form-row d-flex'>
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
    <form className='form d-grid p-1' onSubmit={handleSubmit}>
      {fields.map((field, i) => {return createFormField(field, i)})}
      <div className='form-row mt-2'>
        <button className='call-to-action' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;