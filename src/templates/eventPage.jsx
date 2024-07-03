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
        className="max-w-[48rem] mx-auto table"
      > 
        <section className="md:grid grid-cols-[8fr_5fr] my-4">
          <aside className="font-light flex flex-col mb-4 justify-between h-full">
          <h1 className="border-b-primary text-center md:text-left border-b-2 md:border-none pb-2 my-2 text-balance text-4xl">{event.title.text}</h1>
            {event.location.text && (
              <section className="mb-4">
                <h2 className="text-xl inline md:block">Venue</h2>
                <ExternalLink
                  url={event.location_website.text}
                  title={event.location.text}
                />
                <address className="mb-2 hidden md:block">
                  <RichTextRenderer content={event.address.richText} />
                </address>
                <LinkToMap query={`${event.location.text} ${event.address.text}`} />
              </section>
            )}
            
            <p className="text-lg align-center flex flex-row md:flex-col gap-1 mb-4 ">
              <h2 className="text-xl p-0">Time</h2>
              <time className="pt-1">{event.date}</time>
              <time className="pt-1">{event.time.text}</time>
            </p>
            
            
            <BuyTicketLink event={event} />
          </aside>
          <GatsbyImage
            image={event.event_image.gatsbyImageData}
            alt={event.event_image.alt ?? ""}
          />
        </section>
        <section className="mb-4">
          {event.event_description.text}
        </section>

        

        {event.program.richText.length > 0 && (
          <section
            className="max-w-[36rem] mt-8 mx-auto bg-light-shade border border-primary"
          >
            <h2 className="text-center">Programme</h2>
            <article className="p-4">
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
