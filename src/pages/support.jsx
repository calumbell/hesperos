import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { Donate, Layout, TitleBanner } from '../components';

export default function Support({data}) {
  const pageData = data.prismicSupportPage.data;

  return (
    <Layout>
      
      <TitleBanner
        title={pageData.page_title.text}
        image={pageData.banner_image}
      />

      <div className='center-content rich-text'>
        {pageData.display_friends_scheme &&
          <section className='text-center fs-700 fw-bold'>
            <h2>{pageData.friends_scheme_title.text}</h2>
            {RichText.render(pageData.friends_scheme_text.richText)}
          </section>
        }

        <section className='mt-3'>
          <h2 className='text-center fs-700 fw-bold my-2'>{pageData.donation_title.text}</h2>
          {RichText.render(pageData.donation_text.richText)}
          <Donate />
        </section>

        <section className='mt-4'>
          <h2 className='text-center fs-700 fw-xl'>{pageData.our_supporters_title.text}</h2>
          {RichText.render(pageData.our_supporters_text.richText)}
        </section>
      </div>

    </Layout>
  )
}

export const query = graphql`
  query SupportPageQuery {
    prismicSupportPage {
      data {
        page_title { text }
        banner_image {
          gatsbyImageData
          alt
        }
        display_friends_scheme
        friends_scheme_title { text }
        friends_scheme_text { richText }
        donation_title { text }
        donation_text { richText }
        our_supporters_title { text }
        our_supporters_text { richText }
      }
    }
  }
`;