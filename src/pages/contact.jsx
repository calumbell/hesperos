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
      <div className='center-content' style={{'--max-width': '42rem'}}>

        <section>       
          <aside className='my-3'>
            <p>
              Please use this contact form if you have any questions about the choir.
              All data is processed in accordance with GDPR regulations.
            </p>
          </aside>
          <div>
            <ContactForm 
              endpoint=""
              fields={contactFormFields}
            />
          </div>
        </section>
        
        <section className='mt-4'>
          <aside className='my-3'>
            <h2 className='fs-600'>Mailing List</h2>
            <p>
              Sign up to our mailing list for regular updates (not more than once a month).
              You can unsubscribe at any time by clicking the link in the footer of our emails.
            </p>
          </aside>
          <div>
            <MailchimpForm />
          </div>
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