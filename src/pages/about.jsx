import React from "react";
import { graphql } from "gatsby";
import { Layout, TextSectionTwoColumn, Seo, TitleBanner } from "../components";

export const Head = () => <Seo path="/about" />;

export default function About({ data }) {
  const sections = data.prismicAboutPage.data.body[0].items;
  const pageData = data.prismicAboutPage.data;

  return (
    <Layout>
      <TitleBanner
        title={pageData.page_title.text}
        image={pageData.hero_image}
      />
      <article className="center-content">
        {sections.map((section, i) => (
          <TextSectionTwoColumn
            key={i}
            data={{
              title: section.title.text,
              bodyText: section.content.text,
            }}
          />
        ))}
      </article>
    </Layout>
  );
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
