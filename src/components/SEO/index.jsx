import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const SEO = ({
  description,
  keywords,
  title,
  image, 
  url,
}) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description;
        const metaTitle = title || data.site.siteMetadata.title;
        const metaURL = url || data.site.siteMetadata.url;
        const metaImage = image || data.site.siteMetadata.image;
        const metaKeywords = keywords || ["hesperos", "choir", "london", "chamber choir"]
        return (
          <Helmet 
            title={title}
            meta={[
              { name: 'description', content: metaDescription, },

              /* Open Graph */
              {
                name: 'og:title',
                content: metaTitle,
              },
              {
                name: 'og:description',
                content: metaDescription,
              },
              {
                name: 'og:type',
                content: 'website',
              },
              {
                name: 'og:image',
                content: metaImage,
              },
              {
                name: 'og:url',
                content: metaURL,
              },

              /* Twitter */
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
              {
                name: 'twitter:title',
                content: metaTitle,
              },
              {
                name: 'twitter:image',
                content: metaImage,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0 ? {
                name: 'keywords',
                content: metaKeywords.join(', '),
              } : []
            )}
          />
        )
      }}
    />
  )
}

const query = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        image
      }
    }
  }
`;

export default SEO;