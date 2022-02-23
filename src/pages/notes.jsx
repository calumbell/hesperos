import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Card from '../components/Card';
import CardGrid from '../components/CardGrid';

export default function Notes({data}) {
  const flattenPostData = node => {
    return {
      uid: node.uid,
      subroute: `notes`,
      title: node.data.title.text,
      date: node.data.date,
      image: node.data.thumbnail.gatsbyImageData,
      altText: node.data.thumbnail.alt,
    }
  }
  
  return (
    <Layout>
      <h1>Notes</h1>
      <CardGrid 
        Card={Card}
        data={data.allPrismicPost.nodes}
        flatten={flattenPostData}
      />
    </Layout>
  )
}

export const query = graphql`
  query NotesPostSummaries {
    allPrismicPost(
      sort: {fields: data___date, order: DESC}
      filter: {data: {post_type: {eq: "Notes"}}}
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
