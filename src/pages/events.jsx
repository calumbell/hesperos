import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout.jsx';
import EventCard from '../components/EventCard.jsx';
import CardGrid from '../components/CardGrid.jsx';

export default function Events() {

  // Query Prismic for event summaries
  const data = useStaticQuery(graphql`
    query EventSummaries {
      allPrismicEvent {
        nodes {
          uid
          data {
            date(formatString: "dddd DD MMMM YYYY")
            title {
              text
            }
            event_image {
              url
              alt
            }
          }
        }
      }
    }
  `);
  
  // Flattener function for graphql response
  const flattenEventData = node => {
    return {
      uid: node.uid,
      img: node.data.event_image.url,
      imgAltText: node.data.event_image.alt,
      title: node.data.title.text,
      date: node.data.date,
    }  
  }

  return (
    <Layout>
      <h1>Events</h1>
      <CardGrid
        Card={EventCard}
        data={data.allPrismicEvent.nodes}
        flatten={flattenEventData}
      />
    </Layout>
  )
}
