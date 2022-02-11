import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout.jsx';
import CardGrid from '../components/CardGrid.jsx';
import Card from '../components/Card.jsx';

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
      <h1>News</h1>
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
      sort: {fields: data___date, order: ASC}
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