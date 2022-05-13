import React from 'react';
import { RichText } from 'prismic-reactjs';
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
          {RichText.render(pageData.content)}
          <p>Please use the forms below if you have any queries or would like to join our mailing list</p>
          <ul>
            <li>
              <a className='link' href='#email-form'>Send us an email</a>
            </li>
            <li>
              <a className='link' href='#mailing-list'>Join our mailing list</a>
            </li>
          </ul>
        </section>

        <section id='email-form'>
          <h2 className='fs-700 mt-4 text-faded text-center'>Send us an Email</h2>       
            <p className='my-3'>
              Please use this contact form if you have any questions about the choir.
              All data is processed in accordance with GDPR regulations.
            </p>
          <div>
            <ContactForm 
              endpoint=""
              fields={contactFormFields}
            />
          </div>
        </section>
        
        <section id='mailing-list'>
            <h2 className='fs-700 mt-4 text-faded text-center'>
              Mailing List
            </h2>
            <p className='my-3'>
              Sign up to our mailing list for regular updates (not more than once a month).
              You can unsubscribe at any time by clicking the link in the footer of our emails.
            </p>
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