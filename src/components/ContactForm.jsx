import React from 'react';
import * as styles from './ContactForm.module.scss';

export default function ContactForm() {
  return(
    <form className={styles.formGrid}>
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
        <input className={styles.submitBtn} type='submit' value='Submit Query' />
      </div>
      
    </form>
  );
}
