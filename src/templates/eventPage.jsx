import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

import {
  Layout, RichTextRenderer, Seo, TicketCard
} from "../components";

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
  const isTitleLong = event.title.text.length > 24;
  return (
    <Layout>
      <article
        className="max-w-[48rem] mx-auto table py-0"
      > 
        <section className="sm:grid grid-cols-[8fr_5fr] gap-6 mb-4 w-full">
          <aside className="font-light flex flex-col mb-4 h-full">
            <h1 className={`
              w-full text-center sm:text-left sm:border-none pb-2 my-2 text-balance text-4xl
              ${ isTitleLong ? " text-2xl" : " text-4xl"}
            `}>
              {event.title.text}
            </h1>
            <TicketCard event={event} />
            {event.location.text && (
              <section className="mb-4">
  
                <h2 className="text-lg">Venue </h2>
                {event.location_website.text 
                  ? <a
                      className="text-xl text-primary hover:text-primary-shade"
                      href={event.location_website.text}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {event.location.text}
                    </a>
                  : <p className="text-xl">{event.location.text}</p>
                }
                            
               <address className="mb-2 block">
                  <RichTextRenderer content={event.address.richText} />
                </address>
                <a 
                  className="link text-sm w-min text-nowrap inline sm:inline-block"
                  target="_blank"
                  rel="noreferrer"
                  href={`http://maps.google.com/?q=${event.location.text} ${event.address.text}`}
                >
                  (View on Map)
                </a>
              </section>
            )}

            
          </aside>

            <GatsbyImage
              image={event.event_image.gatsbyImageData}
              alt={event.event_image.alt ?? ""}
              className="w-full sm:h-auto"
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
