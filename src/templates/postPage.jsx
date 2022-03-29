import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';

import { Layout, SEO }  from '../components';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function postPage({ data }) {
  const post = data.prismicPost.data;
  const url = data.site.siteMetadata.url;
  return (
    <Layout>

      <SEO
        title={`${post.title.text} | Hesperos Choir`}
        image={post.thumbnail.url}
        url={`${url}/${post.post_type}/${data.prismicPost.uid}`}
        description={post.body.find(section => {
            return section.slice_type === "text_section";
          }).primary.section_body.richText[0]
            .text.split('.')[0].concat('.').slice(0,320)
        }
      />

      <article className='center-content rich-text'>

        <h1 className='fs-700'>
          {post.title.text}
        </h1>

        <sub>
          {post.title.subtitle}
        </sub>
        
        <time className='fw-xl fs-400'>
          {post.date}
        </time>

        {post.body.map((section, i) => {
            if (section.slice_type === "text_section") {
              return <section key={i}>
                {RichText.render(section.primary.section_body.richText)}
              </section>
            } 

            else if (section.slice_type === "imbedded_image") {
              return <section key={i}>
                <GatsbyImage 
                  key={i} 
                  image={section.primary.embedded_image.gatsbyImageData} 
                  alt={section.primary.embedded_image.alt}
                />
                <sub className='ff-sans d-block text-primary uppercase letter-spacing-2 my-2'>{section.primary.caption.text}</sub>
              </section>
            }

            else if (section.slice_type === "embedded_element") {
              // remove default sizing for embedded YouTube videos
              const html = section.primary.element.provider_name === "YouTube"
                ? section.primary.element.html.replace(`width="200"`, `width="100%"`).replace(`height="113"`, `height="300"`)
                : section.primary.element.html;
              
              return (
                <section key={i}>
                  <div dangerouslySetInnerHTML={{ __html: html}} />
                  <sub>{section.primary.caption.text}</sub>
                </section>
              )
            }
            else return <></>

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
      siteMetadata { url }
    }
    prismicPost(uid: {eq: $slug}) {
      uid
      data {
        post_type
        title { text }
        subtitle { text }
        thumbnail { url }
        date(formatString: "DD MMMM YYYY")
        body {
          ... on PrismicPostDataBodyTextSection {
            slice_type
            primary {
              section_heading { text }
              section_body { richText }
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
              caption { text }
            }
          }
          ... on PrismicPostDataBodyEmbeddedElement {
            slice_type
            primary {
              element {
                html
                provider_name
              }
              caption { text }
            }
          }
        }
      }
    }
  }
`;