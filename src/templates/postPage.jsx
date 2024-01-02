import React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import { GatsbyImage } from "gatsby-plugin-image";

import { Layout, SEO } from "../components";

import * as styles from "./postPage.module.scss";

export const Head = ({ data }) => (
  <SEO
    title={`${data.prismicPost.data.title.text} | Hesperos Choir`}
    image={data.prismicPost.data.thumbnail.url}
    path={`/news/${data.prismicPost.uid}`}
  />
);

export default function postPage({ data }) {
  const post = data.prismicPost.data;
  return (
    <Layout>
      <article className="center-content rich-text">
        <h1
          className={`fw-light mb-2
          ${
            post.title.text.length < 20 ? styles.titleLong : styles.titleShort
          }`}
        >
          {post.title.text}
        </h1>

        {post.subtitle.text && (
          <sub className="d-block ff-sans fs-400 mb-2 fw-light uppercase text-faded">
            {post.subtitle.text}
          </sub>
        )}

        <p>
          {post.author.text && <span>By {post.author.text}, </span>}
          {post.date && <span>{post.date}</span>}
        </p>

        {post.body.map((section, i) => {
          if (section.slice_type === "text_section") {
            return (
              <section key={i}>
                {RichText.render(section.primary.section_body.richText)}
              </section>
            );
          } else if (section.slice_type === "imbedded_image") {
            return (
              <section key={i} className={styles.imageSection}>
                <GatsbyImage
                  key={i}
                  image={section.primary.embedded_image.gatsbyImageData}
                  alt={section.primary.embedded_image.alt}
                />
                <sub
                  className="d-block my-2 fs-200 fw-light
                  ff-sans text-faded uppercase letter-spacing-2"
                >
                  {section.primary.caption.text}
                </sub>
              </section>
            );
          } else if (section.slice_type === "embedded_element") {
            // remove default sizing for embedded YouTube videos
            const html =
              section.primary.element.provider_name === "YouTube"
                ? section.primary.element.html
                    .replace(`width="200"`, `width="100%"`)
                    .replace(`height="113"`, `height="300"`)
                : section.primary.element.html;

            return (
              <section key={i}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <sub>{section.primary.caption.text}</sub>
              </section>
            );
          } else return <></>;
        })}
      </article>
    </Layout>
  );
}

/* Query Prismic - variable $slug is passed via the
 * create pages API (see context arg in gatsby-node.js)
 */

export const query = graphql`
  query PostPage($slug: String) {
    site {
      siteMetadata {
        url
      }
    }
    prismicPost(uid: { eq: $slug }) {
      uid
      data {
        title {
          text
        }
        subtitle {
          text
        }
        author {
          text
        }
        thumbnail {
          url
        }
        date(formatString: "DD MMMM YYYY")
        body {
          ... on PrismicPostDataBodyTextSection {
            slice_type
            primary {
              section_heading {
                text
              }
              section_body {
                richText
              }
            }
          }
          ... on PrismicPostDataBodyImbeddedImage {
            slice_type
            primary {
              embedded_image {
                gatsbyImageData
                alt
                url
              }
              caption {
                text
              }
            }
          }
          ... on PrismicPostDataBodyEmbeddedElement {
            slice_type
            primary {
              element {
                html
                provider_name
              }
              caption {
                text
              }
            }
          }
        }
      }
    }
  }
`;
