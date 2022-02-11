import React from 'react';
import * as styles from './ContactForm.module.scss';

export default function ContactForm() {
  const handleSubmit = event => {
    event.preventDefault();
    // TODO: send form data via email
  };

  return(
    <form 
      className={styles.formGrid}
      obSubmit={handleSubmit}
    >
      <div className={styles.formGridRow}>
        <label className={styles.formInputLabelGroup}>First Name
          <input type='text' name='firstName' />
        </label>

        <label className={styles.formInputLabelGroup}>Last Name
          <input type='text' name='lastName'/>
        </label>
      </div>

      <div className={styles.formGridRow}>
        <div className={styles.formInputLabelGroup}>
          <label>Email address
            <input type='text' name='email'/>
          </label>
        </div>
      </div>

      <div className={styles.formGridRow}>
        <div className={styles.formInputLabelGroup}>
          <label>Subject
            <input type='text' name='subject' />
          </label>
        </div>
      </div>

      <div className={styles.formGridRow}>
        <div className={styles.formInputLabelGroup}>
          <label>Message
            <textarea className={styles.lrgTextField} type='text' name='message'/>
          </label>
        </div>
      </div>
      <div className={styles.formGridRow}>
        <button className={styles.submitBtn} type='submit'>
          Submit Query
        </button>
      </div>
      
    </form>
  );
}
