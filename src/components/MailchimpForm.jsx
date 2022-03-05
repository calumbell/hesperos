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
      className='form flex'
    >
      <div className='flex form-row'>
        <label className='w-100'>
          First Name
          <input 
            className='w-100 p-2'
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
      <div className='flex form-row'>
        <label className='w-100'>
          Email Address
          <input 
            className='w-100 p-2'
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
