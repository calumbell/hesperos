import React from "react";
import { graphql } from "gatsby";
import {
  ContactForm,
  Layout,
  RichTextRenderer,
  SEO,
  TextSection,
  TitleBanner,
} from "../components";

export const Head = () => <SEO />;

export default function Join({ data }) {
  const pageData = data.prismicJoinPage.data;
  return (
    <Layout>
      <TitleBanner
        title="Join"
        // title={pageData.page_title.text}
        image={pageData.banner_image}
      />
      <article className="center-content px-3">
        {pageData.body.map((section, i) => {
          return (
            <TextSection key={i} title={section.primary.section_title.text}>
              <RichTextRenderer
                content={section.primary.section_content.richText}
              />
            </TextSection>
          );
        })}

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
