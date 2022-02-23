import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';

import TitleBanner from '../components/TitleBanner.jsx';
import Layout from '../components/Layout.jsx';
import ContactForm from '../components/ContactForm.jsx';

export default function Join({data}) {
  const pageData = data.prismicJoinPage.data;
  return (
    <Layout>
      <TitleBanner
        title={pageData.page_title.text}
        image={pageData.banner_image}
      />

      {pageData.body.map(section => {
        return(
          <section>
            <h2>{section.primary.section_title.text}</h2>
            {console.log(section.primary.section_content)}
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
              {
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
              displayName: 'Email',
            }
          },
          {
            type: 'text',
            content: {
              name: 'part',
              displayName: 'Voice Part',
            }
          },
          {
            type: 'textarea',
            content: {
              name: 'experience',
              displayName: 'Singing Experience',
            }
          },
        ]}
      />

    </Layout>
  )
}

export const query = graphql`
  query JoinPageQuery {
    prismicJoinPage {
      data {
        page_title {
          text
        }
        banner_image {
          gatsbyImageData
          alt
        }
        body {
          ... on PrismicJoinPageDataBodyTextSection {
            primary {
              section_title {
                text
              }
              section_content {
                richText
              }
            }
          }
        }
      }
    }
  }
`