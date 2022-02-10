import React from 'react';
import ContactForm from '../components/ContactForm.jsx';
import Layout from '../components/Layout.jsx';
import MailchimpForm from '../components/MailchimpForm.jsx';

import * as styles from '../styles/contact.module.scss';

export default function Contact() {
  return (
    <Layout>
      <section className={styles.contentWithAsideLeft}>       
        <aside>
        <h1>Contact</h1>
        <p>
          Please use this contact form if you have any questions about the choir,
          or sign up to our mailing list below for regular updates (not more than
          once a month).
        </p>
        <p>
           All data is processed in accordance with GDPR regulations.
        </p>
        </aside>
        <ContactForm />
      </section>
      
      <section>
        <MailchimpForm />
      </section>
    </Layout>
  )
}
