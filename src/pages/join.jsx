import React from 'react';
import { graphql } from 'gatsby';
import { 
  ContactForm,
  Layout,
  RichTextRenderer,
  TextSection,
  TitleBanner,
} from '../components';

const Join = ({data}) => {
  const pageData = data.prismicJoinPage.data;
  return (
    <Layout>
      <TitleBanner
        title={pageData.page_title.text}
        image={pageData.banner_image}
      />
      <div className='center-content px-3'>
        {pageData.body.map((section, i) => {
          return(
            <TextSection
              key={i}
              title={section.primary.section_title.text}
            >
              <RichTextRenderer 
                content={section.primary.section_content.richText}
              />
            </TextSection>
          )
        })}

        <ContactForm 
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

export default Join;

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