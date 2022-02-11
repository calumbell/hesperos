import React from 'react';
import ContactForm from '../components/ContactForm.jsx';
import Layout from '../components/Layout.jsx';
import MailchimpForm from '../components/MailchimpForm.jsx';

import * as styles from '../styles/contact.module.scss';

export default function Contact({data}) {

  const contactFormFields = [
    {
      type: 'multi',
      content: [{
          type: 'text',
          content: {
            name: 'fname',
            displayName: 'First Name',
          }
        },
        {
          type: 'text',
          content: {
            name: 'lname',
            displayName: 'Last Name',
          }
        }
      ]
    },
    {
      type: 'email',
      content: {
        name: 'email',
        displayName: 'Email Address',
      }
    },
    
    {
      type: 'text',
      content: {
        name: 'subject',
        displayName: 'Subject',
      }
    },
    { type: 'textarea',
      content: {
        name: 'message',
        displayName: 'Message'
      }
    }
  ]


  return (
    <Layout>
      <section className={styles.contentWithAside}>       
        <aside>
          <h1>Contact</h1>
          <p>
            Please use this contact form if you have any questions about the choir.
          </p>
          <p>
            All data is processed in accordance with GDPR regulations.
          </p>
        </aside>

        <ContactForm 
          endpoint=""
          fields={contactFormFields}
        />
      </section>
      
      <section className={styles.contentWithAside}>
        <aside>
          <h2>Mailing List</h2>
          <p>
            Sign up to our mailing list for regular updates 
            (not more than once a month).
          </p>
          <p>
            You can unsubscribe at any time by clicking the link in the footer of our emails.
          </p>
        </aside>
        <MailchimpForm />
      </section>
    </Layout>
  )
}
