import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout.jsx';
import EventCard from '../components/EventCard.jsx';

export default function Events() {

  const data = useStaticQuery(graphql`
    query EventSummaries {
      allPrismicEvent {
        nodes {
          uid
          data {
            date
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

  return (
    <Layout>
      <h1>Events</h1>
      <div styles={{
        display: "flex",
        alignContent: "center",
      }}>
        {data.allPrismicEvent.nodes.map((event) => {
          return <EventCard data={{
            uid: event.uid,
            img: event.data.event_image.url,
            imgAltText: event.data.event_image.alt,
            title: event.data.title.text,
            date: event.data.date,
          }}
          />
        })}
      </div>
    </Layout>
  )

  
}
