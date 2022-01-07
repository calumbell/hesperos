import React from 'react';
import * as styles from './eventPage.module.scss';

import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout.jsx';

export default function eventPage({ data }) {
  // data argument contains result of graphql query
  const event = data.prismicEvent.data;

  return (
    <Layout >
      <h1>{event.title.text}</h1>
      <div className={styles.eventDetailContainer}>
        
        <aside className={styles.eventDetailsAside}>
          
          <p>{event.location.text}</p>
          <time>{event.date}</time>
          <time>{event.time.text}</time>
          <p>
            {event.address.text} 
            <a target="_blank" rel="noreferrer"
              href={`http://maps.google.com/?q=${event.address.text}`}
            > (View on Map)</a>
          </p>
          
        </aside>

        <div>
          <p>{event.event_description.text}</p>
          { event.buy_ticket_link.url &&
            <a
              href={event.buy_ticket_link.url}
              target="_blank"
              rel="noreferrer"
            >
              Click here to buy tickets
            </a>
          }

        </div>
      </div>
      <footer>
        <Link 
          className={styles.backlink}
          to="/events/"
        > 
          Back to all events
        </Link>
      </footer>
    </Layout>
  )
}

/* 
 * query Prismic - variable $slug passed via createPage 
 * API (see 'context' arg. in gatsby-node.js)
*/

export const query = graphql`
  query EventPage($slug: String) {
    prismicEvent(uid: {eq: $slug}) {
      data {
        title {
          text
        }
        date(formatString: "dddd DD MMMM YYYY")
        time {
          text
        }
        location {
          text
        }
        address {
          text
        }
        event_description {
          text
        }
        buy_ticket_link {
          url
        }
      }
    }
  }
`;
