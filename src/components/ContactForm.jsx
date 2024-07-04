import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const ContactForm = ({ fields }) => {
  // Query Prismic for email address to send form submissions to
  const data = useStaticQuery(graphql`
    query EmailAddressQuery {
      prismicWebsiteDetails {
        data {
          email_address { 
            text 
          }
        }
      }
    }
  `);
  const email = data.prismicWebsiteDetails.data.email_address.text;

  return (
    <form
      className='form' 
      action={`https://formsubmit.co/${email}`}
      method='POST'
    >
      {Object.keys(fields).map((name, index) => {
        return (
          <div className='form-row' key={index}>
            {fields[name] === 'name' && <NameFields />}
            {fields[name] === 'textarea' && <TextareaField title={name} />}
            {!['name','textarea'].includes(fields[name]) && 
              <FormField title={name}/>}
          </div>
        )
      })}
      <div className='form-row'>
        <button className='call-to-action' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;

// Helper Atoms: sub-components for sundry form fields
const NameFields = () => {
  return <>
    <label>
      <p>First Name</p>
      <input name="fname" type="text" />
    </label>
    <label>
      <p>Last Name</p>
      <input name="lname" type="text" />
    </label>
  </>
}

const FormField = ({ title }) => {
  return <label>
    <p>{`${title[0].toUpperCase()}${title.slice(1)}`}</p>
    <input name={title} type="text"/>
  </label>
}

const TextareaField = ({ title }) => {
  return <label>
    <p>{`${title[0].toUpperCase()}${title.slice(1)}`}</p>
    <textarea name={title} type='textarea'/>
  </label>
}