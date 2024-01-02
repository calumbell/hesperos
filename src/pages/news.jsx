import React from "react";
import { graphql } from "gatsby";
import { Card, CardGrid, Layout, Seo, TitleBanner } from "../components";

export const Head = () => <Seo path="/news" />;

export default function News({ data }) {
  const flattenPostData = (node) => {
    return {
      uid: node.uid,
      subroute: `news`,
      title: node.data.title.text,
      subtitle: node.data.subtitle.text,
      date: node.data.date,
      image: node.data.thumbnail.gatsbyImageData,
      altText: node.data.thumbnail.alt,
    };
  };

  return (
    <Layout>
      <TitleBanner title="News" />
      <CardGrid
        Card={Card}
        size="medium"
        data={data.allPrismicPost.nodes}
        flatten={flattenPostData}
      />
    </Layout>
  );
}

export const query = graphql`
  query NewsPostSummaries {
    allPrismicPost(sort: { data: { date: DESC } }) {
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
