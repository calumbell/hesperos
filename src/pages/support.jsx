import React from 'react';
import { graphql } from 'gatsby';

import { 
  Donate,
  Layout,
  RichTextRenderer,
  TextSection,
  TitleBanner,
} from '../components';

const Support = ({data}) => {
  const pageData = data.prismicSupportPage.data;

  return (
    <Layout>
      
      <TitleBanner
        title={pageData.page_title.text}
        image={pageData.banner_image}
      />

      <div className='center-content'>
        {pageData.display_friends_scheme && 
          <TextSection title={pageData.friends_scheme_title.text}>
            <RichTextRenderer content={pageData.friends_scheme_text.richText}/>
          </TextSection>
        }

        <TextSection title={pageData.donation_title.text}>
          <RichTextRenderer content={pageData.donation_text.richText} />
          <Donate />
        </TextSection>

        <TextSection title={pageData.our_supporters_title.text}>
          <RichTextRenderer content={pageData.our_supporters_text.richText} />
        </TextSection>
      </div>

    </Layout>
  )
}

export default Support;

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