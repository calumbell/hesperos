import React from "react";
import { graphql } from "gatsby";
import {
  ContactForm,
  Layout,
  RichTextRenderer,
  Seo,
  TitleBanner,
} from "../components";

export const Head = () => <Seo path="/join" />;

export default function Join({ data }) {
  const pageData = data.prismicJoinPage.data;
  return (
    <Layout>
      <TitleBanner
        title="Join"
        image={pageData.banner_image}
      />
      <article className="max-w-[48rem] mx-auto table px-3">
        {pageData.body.map((section, i) => (
            <section key={i} className="flex flex-col gap-2">
              <h2 className="text-4xl text-center mb-2 self-center border-b-2 border-b-primary w-fit">
                {section.primary.section_title.text}
              </h2>
              <RichTextRenderer
                content={section.primary.section_content.richText}
              />
            </section>
          )
        )}

        <ContactForm
          fields={{
            name: "name",
            email: "text",
            "Voice Part": "text",
            "Singing Experience": "textarea",
          }}
        />
      </article>
    </Layout>
  );
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
`;
