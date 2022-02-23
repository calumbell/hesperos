import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout.jsx';
import TitleBanner from '../components/TitleBanner.jsx';

export default function Support({data}) {
  const pageData = data.prismicSupportPage.data;

  return (
    <Layout>
      <TitleBanner
        title={pageData.page_title.text}
        image={pageData.banner_image}
      />
      
      <h2>Make of one-off donation</h2>
      <p>Thank you for deciding to help the evening star shine a little brighter</p>
    </Layout>
  )
}

export const query = graphql`
  query SupportPageQuery {
    prismicSupportPage {
      data {
        page_title {
          text
        }
        banner_image {
          gatsbyImageData
          alt
        }
      }
    }
  }
`;