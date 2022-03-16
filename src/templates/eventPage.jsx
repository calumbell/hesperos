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
      <section className="center-content rich-text" style={{'--max-width': '56rem'}}>
        <div className={`d-grid my-4 ${styles.eventDetailContainer}`}>
          <aside className={styles.eventDetailsAside}>
            <p className='mb-2'>
              <Link className='link fs-400' to="/events/">
                Back to all events
              </Link>
            </p> 
            <p className='fw-med ff-sans letter-spacing-3'>{event.location.text || `Location TBC`}</p>
            <date className='d-block fs-400'>{event.date}</date>
            <time className='d-block fs-300'>{event.time.text}</time>
            <p className='my-3'> {RichText.render(event.address.richText)}</p>
            <a className="link" target="_blank" rel="noreferrer"
              href={`http://maps.google.com/?q=${event.location.text} ${event.address.text}`}
            > (View on Map)</a>
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
      </section>
      { event.program.richText.length > 0 &&
        <div className={`${styles.programContainer} center-content bg-light-shade p-4`}>
          <h2 className='fs-500 letter-spacing-3 mb-2 text-center'>Program</h2>
          <p className={`text-left ${styles.programText}`}>
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
          richText
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
