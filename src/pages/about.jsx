import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout.jsx';
import TextWithFacingImageGrid from '../components/TextWithFacingImageGrid.jsx';

export default function About({data}) {
  const pageData = data.prismicAboutPage.data;

  // function for flatten graphql response into something easier to use
  const flattenSection = section => {
    return {
      title: section.section_title.text,
      bodyText: section.main_text.text,
      image: {
        gatsbyImageData: section.optional_section_image.gatsbyImageData,
        alt: section.optional_section_image.alt,
      },
      format: section.format,
      isHeadingAboveText: section.heading_above_main_text,

    }
  }
  return(
    <Layout>
      <h1>{pageData.page_title.text}</h1>
      <TextWithFacingImageGrid 
        data={pageData.body[0].items.map(section => flattenSection(section))} 
      />
    </Layout>
  )
}

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
              section_title {
                text
              }
              main_text {
                text
              }
              optional_section_image {
                gatsbyImageData
                alt
              }
              format
              heading_above_main_text
            }
          }
        }
      }
    }
  }
`;