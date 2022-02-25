import React from 'react';
import { graphql } from 'gatsby';
import { Card, CardGrid, Layout } from '../components';

export default function Notes({data}) {
  const flattenPostData = node => {
    return {
      uid: node.uid,
      subroute: `notes`,
      title: node.data.title.text,
      subtitle: node.data.subtitle.text,
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
          subtitle {
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
