import React from 'react';
import { graphql } from 'gatsby';
import { 
  Layout, 
  TextSectionTwoColumn, 
  TitleBanner
} from '../components';

const About = ({ data }) => {
  const sections = data.prismicAboutPage.data.body[0].items;
  const pageData = data.prismicAboutPage.data;

  return(
    <Layout>
      <TitleBanner 
        title={pageData.page_title.text}
        image={pageData.hero_image}
      />
      <div className='center-content rich-text'>
        {sections.map(section => 
          <TextSectionTwoColumn 
            data={{
              title: section.title.text,
              bodyText: section.content.text,
            }}
          />
        )}
      </div>
    </Layout>
  )
}

export default About;


export const query = graphql`
  query AboutPageQuery {
    prismicAboutPage {
      data {
        page_title {
          text
        }
        hero_image {
          gatsbyImageData
          alt
        }
        body {
          ... on PrismicAboutPageDataBodyTwoColumnRichText {
            items {
              title {
                text
              }
              content {
                text
              }
            }
          }
        }
      }
    }
  }
`;