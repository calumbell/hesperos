import React, {useState} from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import * as styles from '../styles/modules/MailchimpForm.module.scss';

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
      className={`form flex${styles.formGrid}`}
    >
      <div className={styles.formGridRow}>
        <label className={styles.labelInputGroup}>
          Email Address
          <input 
            type="email"
            name="EMAIL"
            onChange={handleEmailChange}
          />
        </label>
      </div>
      <div className={styles.formGridRow}>
        <label className={styles.labelInputGroup}>
          First Name
          <input 
            type="text"
            name="first name"
            onChange={handleFirstNameChange}
          />
        </label>
        <label className={styles.labelInputGroup}>
          Last Name
          <input 
            type="text"
            name="last name"
            onChange={handleLastNameChange}
          />
        </label>
      </div>
      <div className={styles.formGridRow}>
        <button className="call-to-action" type="submit">
          Subscribe
        </button>
      </div>
    </form>
  )
}
