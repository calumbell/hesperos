import React, {useState} from 'react'
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
    .then(data => {
      console.log(data)
      alert(data.response)
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <span>Email Address</span>
          <input 
            type="email"
            name="EMAIL"
            placeholder="Enter Email Address"
            onChange={handleEmailChange}
          />
        </label>
      </div>
      <div>
        <label>
          <span>First Name</span>
          <input 
            type="text"
            name="first name"
            placeholder="Enter First Name"
            onChange={handleFirstNameChange}
          />
        </label>
        <label>
          <span>Second Name</span>
          <input 
            type="text"
            name="second name"
            placeholder="Enter Second Name"
            onChange={handleLastNameChange}
          />
        </label>
      </div>
      <button type="submit">Subscribe</button>
    </form>
  )
}
