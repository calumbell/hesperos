import React from 'react';
import { graphql, Link } from 'gatsby';
import { Card, CardGrid, Layout } from '../components';

export default function Events({data}) {

  // Flattener fnc converts graphql response to less deeply nested JSON
  const flattenEventData = node => {
    return {
      uid: node.uid,
      subroute: `events`,
      image: node.data.event_image.gatsbyImageData,
      altText: node.data.event_image.alt || '',
      title: node.data.title.text,
      subtitle: node.data.location.text,
      date: node.data.date,
      displayDateBubble: true,
    }  
  }

  return (
    <Layout>
      <h1 className='fs-800 letter-spacing-3'>Events</h1>
      <Link to="/pastEvents" className="link fs-200">View Past Events</Link>
      <CardGrid
        Card={Card}
        data={data.allPrismicEvent.nodes}
        flatten={flattenEventData}
      />
    </Layout>
  )
}

// Fetch events data
// Results are passed to Event cmp via 'data' prop
export const query = graphql`
  query EventSummaries($date: Date) {
    allPrismicEvent(
      sort: {fields: data___date, order: ASC}
      filter: {data: {date: {gte: $date}}}
    ) {
      nodes {
        uid
        data {
          date(formatString: "dddd DD MMMM YYYY")
          title { text }
          location { text }
          event_image {
            gatsbyImageData(placeholder: BLURRED)
            alt
          }
        }
      }
    }
  }
  `;