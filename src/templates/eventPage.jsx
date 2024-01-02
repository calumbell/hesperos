import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

import {
  ExternalLink,
  Layout,
  LinkToMap,
  RichTextRenderer,
  Seo,
} from "../components";

import * as styles from "./eventPage.module.scss";
import BuyTicketLink from "../components/BuyTicketLink";

export const Head = ({ data }) => (
  <Seo
    title={`${data.prismicEvent.data.title.text} | Hesperos Choir`}
    image={data.prismicEvent.data.event_image.url}
    description={data.prismicEvent.data.event_description.text}
    path={`/events/${data.prismicEvent.uid}`}
  />
);

export default function eventPage({ data }) {
  const event = data.prismicEvent.data;
  return (
    <Layout>
      <article
        className={`${styles.page} center-content`}
        style={{ "--max-width": "48rem" }}
      >
        <section className={styles.topBox}>
          <aside className={styles.eventInfo}>
            <h1 className={styles.title}>{event.title.text}</h1>
            <time className={styles.dateTime}>
              {event.date} <br /> {event.time.text}
            </time>
            <p>{`Location: ${event.location.text || `TBC`}`}</p>
            <BuyTicketLink event={event} />
          </aside>
          <GatsbyImage
            className={styles.poster}
            image={event.event_image.gatsbyImageData}
            alt={event.event_image.alt ?? ""}
          />
        </section>
        <section className={styles.eventDescription}>
          {event.event_description.text}
        </section>

        {event.location.text && (
          <section className={styles.venueDetails}>
            <h2 className={styles.heading}>Venue</h2>
            <ExternalLink
              url={event.location_website.text}
              title={event.location.text}
            />
            <address>
              <RichTextRenderer content={event.address.richText} />
            </address>
            <LinkToMap query={`${event.location.text} ${event.address.text}`} />
          </section>
        )}

        {event.program.richText.length > 0 && (
          <section
            className={`${styles.programme} center-content`}
            style={{ "--max-width": "36rem" }}
          >
            <h2 className={`${styles.heading} text-center`}>Programme</h2>
            <article className={styles.programmeText}>
              <RichTextRenderer content={event.program.richText} />
            </article>
          </section>
        )}
      </article>
    </Layout>
  );
}

/*
 * query Prismic - variable $slug passed via createPage
 * API (see 'context' arg. in gatsby-node.js)
 */

export const query = graphql`
  query EventPage($slug: String) {
    prismicEvent(uid: { eq: $slug }) {
      uid
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
        location_website {
          text
        }
        event_description {
          text
        }
        buy_ticket_link {
          url
        }
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
