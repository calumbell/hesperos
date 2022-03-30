import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { ContactForm, Layout, TitleBanner } from '../components';

export default function Join({data}) {
  const pageData = data.prismicJoinPage.data;
  return (
    <Layout>
      <TitleBanner
        title={pageData.page_title.text}
        image={pageData.banner_image}
      />
      <div className='center-content rich-text px-3'>
        {pageData.body.map((section, i) => {
          return(
            <section className='rich-text mt-4' key={i}>
              <h2 className='fs-700'>{section.primary.section_title.text}</h2>
              {RichText.render(section.primary.section_content.richText)}
            </section>
          )
        })}

        <ContactForm 
          endpoint=""
          fields={[
            {
              type: 'multi',
              content: [
                { type: 'text', content: { name: 'fname', displayName: 'First Name' } },
                { type: 'text', content: { name: 'lname', displayName: 'Last Name' } }
              ]
            },
            { type: 'email', content: { name: 'email', displayName: 'Email' } },
            { type: 'text', content: { name: 'part', displayName: 'Voice Part' } },
            { type: 'textarea', content: { name: 'experience', displayName: 'Singing Experience' } },
          ]}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query JoinPageQuery {
    prismicJoinPage {
      data {
        page_title { text }
        banner_image {
          gatsbyImageData
          alt
        }
        body {
          ... on PrismicJoinPageDataBodyTextSection {
            primary {
              section_title { text }
              section_content { richText }
            }
          }
        }
      }
    }
  }
`