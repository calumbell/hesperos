import React from 'react';
import { graphql } from 'gatsby';
import { 
  Accordion,
  ContactForm,
  Layout,
  MailchimpForm,
  TitleBanner
} from '../components';


const Contact = ({ data }) => {
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
      
      <article className='center-content' style={{'--max-width': '42rem'}}>
        <section>
          Please use the forms below if you have any queries or would like to join our mailing list.
          All data is processed in accordance with GDPR regulations.
        </section>



        <Accordion title="Email" index="1">
            <p>
              Please use this contact form if you have any questions about the choir.
            </p>
            <ContactForm fields={contactFormFields} />
        </Accordion>
        <Accordion title="Mailing List" index="2">
          <p>
            Sign up to our mailing list for regular updates (not more than once a month).
            You can unsubscribe at any time by clicking the link in the footer of our emails.
          </p>
          <MailchimpForm />
        </Accordion>
      </article>
    </Layout>
  )
}

export default Contact;

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