import React, {useState} from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default function MailchimpForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const handleSubmit = event => {
    event.preventDefault();
    addToMailchimp(email, {
      FNAME: firstName,
      LNAME: lastName,
    })
  }

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value);
  }

  const handleFirstNameChange = event => {
    setFirstName(event.currentTarget.value);
  }

  const handleLastNameChange = event => {
    setLastName(event.currentTarget.value);
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className='form grid p-1'
    >
      <div className='d-flex form-row'>
        <label className='w-100'>
          First Name
          <input 
            className='p-2'
            type='text'
            name='first name'
            onChange={handleFirstNameChange}
          />
        </label>
        <label className='w-100'>
          Last Name
          <input 
            className='p-2'
            type='text'
            name='last name'
            onChange={handleLastNameChange}
          />
        </label>
      </div>
      <div className='d-flex form-row'>
        <label className='w-100'>
          Email Address
          <input 
            className='p-2'
            type='email'
            name='EMAIL'
            onChange={handleEmailChange}
          />
        </label>
      </div>
      <div className='form-row mt-2'>
        <button className='call-to-action' type='submit'>
          Subscribe
        </button>
      </div>
    </form>
  )
}
