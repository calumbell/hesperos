import React from "react";
import { graphql } from "gatsby";

import {
  Layout,
  RichTextRenderer,
  Seo,
  TextSection,
  TitleBanner,
} from "../components";

export const Head = () => <Seo path="/support" />;

export default function Support({ data }) {
  const pageData = data.prismicSupportPage.data;

  return (
    <Layout>
      <TitleBanner
        title={pageData.page_title.text}
        image={pageData.banner_image}
      />

      <article className="center-content">
        {pageData.display_friends_scheme && (
          <TextSection title={pageData.friends_scheme_title.text}>
            <RichTextRenderer content={pageData.friends_scheme_text.richText} />
          </TextSection>
        )}

        <TextSection title={pageData.donation_title.text}>
          <RichTextRenderer content={pageData.donation_text.richText} />
        </TextSection>
        <section className="center-children m-0">
          <a
            href="https://hesperos.sumupstore.com/product/donate-to-hesperos-choir"
            className="call-to-action w-fit text-2xl"
          >
            Make a one-off donatation
          </a>
        </section>
        <TextSection title={pageData.our_supporters_title.text}>
          <RichTextRenderer content={pageData.our_supporters_text.richText} />
        </TextSection>
      </article>
    </Layout>
  );
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
        display_friends_scheme
        friends_scheme_title {
          text
        }
        friends_scheme_text {
          richText
        }
        donation_title {
          text
        }
        donation_text {
          richText
        }
        our_supporters_title {
          text
        }
        our_supporters_text {
          richText
        }
      }
    }
  }
`;
