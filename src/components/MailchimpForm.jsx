import React, {useState} from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import * as styles from './MailchimpForm.module.scss';

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
      className={styles.formGrid}
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
          Second Name
          <input 
            type="text"
            name="second name"
            onChange={handleLastNameChange}
          />
        </label>
      </div>
      <div className={styles.formGridRow}>
        <button className={styles.submitBtn} type="submit">
          Subscribe
        </button>
      </div>
    </form>
  )
}
