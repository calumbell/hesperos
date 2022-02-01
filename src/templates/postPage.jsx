import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';

import Layout from '../components/Layout';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function postPage({ data }) {
  const post = data.prismicPost.data;

  return (
    <Layout>
      <h1>{post.title.text}</h1>
      <sub>{post.date}</sub>
      <article>
        {post.body.map((section, i) => {
          if (section.slice_type === "text_section") {
            return RichText.render(section.primary.section_body.richText)
          } else {
            console.log(section.primary)
            return <GatsbyImage key={i} image={section.primary.imbedded_image.gatsbyImageData} alt={section.primary.imbedded_image.alt}/>
          }
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
    prismicPost(uid: {eq: $slug}) {
      data {
        title {
          text
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
              imbedded_image {
                gatsbyImageData
                url
              }
            }
          }
        }
      }
    }
  }
`;