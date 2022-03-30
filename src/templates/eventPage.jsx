import React from 'react';
import * as styles from './eventPage.module.scss';
import { RichText } from 'prismic-reactjs';
import { Link, graphql } from 'gatsby';
import { Layout, SEO, TitleBanner } from  '../components';

export default function eventPage({ data }) {
  const event = data.prismicEvent.data;
  return (
    <Layout>

      <SEO 
        title={event.title.text}
        image={event.event_image.url}
        desciption={event.event_description.text}
      />

      <TitleBanner
        title={event.title.text}
        image={event.event_image}
        subtitle={event.location.text || null}
      />

      <section className="center-content" style={{'--max-width': '56rem'}}>
        <div className={`d-grid my-3 ${styles.eventDetailContainer}`}>

          <aside className={`border-shadow p-4`}>
            <p className='mb-2'>
              <Link className='link fs-200' to="/events/">
                Back to all events
              </Link>
            </p> 
            <p className='fw-med ff-sans letter-spacing-3'>{event.location.text || `Location TBC`}</p>
            <time className='d-block fs-400'>{event.date}</time>
            <time className='d-block fs-300'>{event.time.text}</time>
            <address className='my-3 fs-200 address'> {RichText.render(event.address.richText)}
              <a className="link fs-200" target="_blank" rel="noreferrer"
                href={`http://maps.google.com/?q=${event.location.text} ${event.address.text}`}
              > (View on Map)</a>
            </address>
          </aside>

          <div className={styles.eventDescriptionMain}>
            <p>{event.event_description.text}</p>
            { event.buy_ticket_link.url &&
              <a
                className='link fs-300'
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
        <section className={`${styles.programContainer} center-content bg-light-shade p-4`}>
          <h2 className='fs-500 letter-spacing-3 mb-2 text-center'>Program</h2>
          <article className={`text-left ${styles.programText}`}>
            {RichText.render(event.program.richText)}
          </article>
        </section>
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
        title { text }
        date(formatString: "dddd DD MMMM YYYY")
        time { text }
        location { text }
        event_description { text }
        buy_ticket_link { url }
        event_image {
          gatsbyImageData(placeholder: BLURRED)
          alt
          url
        }
        address {
          text
          richText
        }
        program {
          text
          richText
        }
      }
    }
  }
`;
