import React from 'react';
import * as styles from './eventPage.module.scss';
import { RichText } from 'prismic-reactjs';
import { Link, graphql } from 'gatsby';
import { Layout, TitleBanner } from  '../components';

export default function eventPage({ data }) {
  // data argument contains result of graphql query
  const event = data.prismicEvent.data;

  return (
    <Layout>
      <TitleBanner
        title={event.title.text}
        image={event.event_image}
        subtitle={event.location.text || null}
      />

      <div className={styles.eventDetailContainer}>

        <aside className={styles.eventDetailsAside}>   
          <p>{event.location.text || `Location TBC`}</p>
          <time>{event.date}</time>
          <time>{event.time.text}</time>
          <p>
            {event.address.text} 
            <a target="_blank" rel="noreferrer"
              href={`http://maps.google.com/?q=${event.address.text}`}
            > (View on Map)</a>
          </p>
          <p>
            <Link className='link' to="/events/">
              Back to all events
            </Link>
          </p>
          <Link className='link' to="/pastEvents/">
            View Past Events
          </Link>
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
      { event.program.richText.length > 0 &&
        <div className={styles.programContainer}>
          <h2 className={styles.programTitle}>Program</h2>
          <p className={styles.programText}>
            {RichText.render(event.program.richText)}
          </p>
        </div>
      }
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
        event_image {
          gatsbyImageData(placeholder: BLURRED)
          alt
        }
        address {
          text
        }
        event_description {
          text
        }
        program {
          text
          richText
        }
        buy_ticket_link {
          url
        }
      }
    }
  }
`;
