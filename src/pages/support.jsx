import React from "react";
import { graphql } from "gatsby";

import {
  Layout,
  RichTextRenderer,
  Seo,
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

      <article className="max-w-[48rem] mx-auto table">
        {pageData.display_friends_scheme && (
          <section className="flex flex-col gap-2">
            <h2 className="text-4xl text-center mb-2 self-center border-b-2 border-b-primary w-fit">
              {pageData.friends_scheme_title.text}
            </h2>
            <RichTextRenderer content={pageData.friends_scheme_text.richText} />
          </section>
        )}
        {pageData.donation_text.text && <section className="flex flex-col gap-2">
          <h2 className="text-4xl text-center mb-2 self-center border-b-2 border-b-primary w-fit">
            {pageData.donation_title.text}
          </h2>
          <RichTextRenderer content={pageData.donation_text.richText} />
        </section>}

        <section className="flex flex-col">
          <a
            href="https://hesperos.sumupstore.com/product/donate-to-hesperos-choir"
            className="call-to-action w-fit mb-4 text-2xl self-center"
          >
            Make a one-off donatation
          </a>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-4xl text-center mb-2 self-center border-b-2 border-b-primary w-fit">
            {pageData.our_supporters_title.text}
          </h2>
          <RichTextRenderer content={pageData.our_supporters_text.richText} />
        </section>

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
