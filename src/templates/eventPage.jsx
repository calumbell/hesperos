import React from 'react';
import * as styles from './eventPage.module.scss';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';
import { Layout, SEO } from  '../components';
import { GatsbyImage } from 'gatsby-plugin-image';

const eventPage = ({ data }) => {
  const event = data.prismicEvent.data;
  return (
    <Layout>
      <SEO 
        title={event.title.text}
        image={event.event_image.url}
        desciption={event.event_description.text}
      />

      <div className={`${styles.page} center-content`} style={{'--max-width': '48rem'}}>
        <div className={styles.topBox}>
          <aside className={styles.eventInfo}>
            <h1 className={styles.title}>{event.title.text}</h1>
            <p className={styles.dateTime}>
              <date>{event.date}</date>
              <time>{event.time.text}</time>
            </p>
            <p>{`Venue: ${event.location.text || `TBC`}`}</p>
            <p>
              { event.buy_ticket_link.url &&
                <a
                  className='call-to-action'
                  href={event.buy_ticket_link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy Tickets
                </a>
              }
            </p>
          </aside>
          <GatsbyImage
            className={styles.poster}
            image={event.event_image.gatsbyImageData}
            width={400}
            height={400}
          />
        </div>

        <section className={styles.eventDescription}>{event.event_description.text}</section>
        
        { event.program.richText.length > 0 &&
          <section 
            className={`${styles.program} center-content`}
            style={{'--max-width': '36rem'}}
          >
            <h2 className={`${styles.heading} text-center`}>Program</h2>
            <article className={styles.programText}>
              {RichText.render(event.program.richText)}
            </article>
          </section>
        }

        { event.location.text && <section className={styles.venueDetails}>
          <h2 className={styles.heading}>Venue</h2>
          <p>{event.location.text}</p>
          <p>{RichText.render(event.address.richText)}</p>
        </section>}
      </div>
    </Layout>
  )
}

export default eventPage;

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
