import React from 'react';
import { graphql } from 'gatsby';
import { ContactForm, Layout, MailchimpForm, TitleBanner } from '../components';

export default function Contact({ data }) {
  const contactFormFields = [
    {
      type: 'multi',
      content: [
        { type: 'text', content: { name: 'fname', displayName: 'First Name' } },
        { type: 'text', content: { name: 'lname', displayName: 'Last Name' } }
      ]
    },
    { type: 'email', content: { name: 'email', displayName: 'Email Address', } }, 
    { type: 'text', content: { name: 'subject', displayName: 'Subject' } },
    { type: 'textarea', content: { name: 'message', displayName: 'Message' } }
  ];

  const pageData = data.prismicContactPage.data;

  return (
    <Layout>
      <TitleBanner 
        title={pageData.page_title.text}
        image={pageData.banner_image}
       />
      <div className='center-content'>

        <section className='d-flex flex-wrap mt-4'>       
          <aside>
            <p>Please use this contact form if you have any questions about the choir.</p>
            <p>All data is processed in accordance with GDPR regulations.</p>
          </aside>

          <ContactForm 
            endpoint=""
            fields={contactFormFields}
          />
        </section>
        
        <section className='d-flex flex-wrap mt-4'>
          <aside>
            <h2 className='fs-600'>Mailing List</h2>
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
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ContactPageQuery {
    prismicContactPage {
      data {
        page_title { text }
        body { richText }
        banner_image {
          gatsbyImageData
          alt
        }
      }
    }
  }
`