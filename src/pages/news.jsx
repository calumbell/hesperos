import React from 'react';
import { graphql } from 'gatsby';
import { Card, CardGrid, Layout, TitleBanner } from '../components';

export default function News({data}) {
  const flattenPostData = node => {
    return {
      uid: node.uid,
      subroute: `news`,
      title: node.data.title.text,
      date: node.data.date,
      image: node.data.thumbnail.gatsbyImageData,
      altText: node.data.thumbnail.alt,
    }
  }
  
  return (
    <Layout>
      <TitleBanner 
        title="News"
      />
      <CardGrid 
        Card={Card}
        data={data.allPrismicPost.nodes}
        flatten={flattenPostData}
      />
    </Layout>
  )
}

export const query = graphql`
  query NewsPostSummaries {
    allPrismicPost(
      sort: {fields: data___date, order: DESC}
      filter: {data: {post_type: {eq: "News"}}}
    ) {
      nodes {
        uid
        data {
          title {
            text
          }
          thumbnail {
            gatsbyImageData
            alt
          }
          date(formatString: "dddd DD MMMM YYYY")
        }
      }
    }
  }
`;