import React from "react";
import { graphql, Link } from "gatsby";
import {
  EventCardThumbnail,
  CardGrid,
  Layout,
  TitleBanner,
  Seo,
} from "../components";

export const Head = () => <Seo path="/pastEvents" />;

export default function PastEvents({ data }) {
  const flattenEventData = (node) => {
    let date = node.data.date.split(" ").slice(1);
    date[1] = `${date[1].slice(0, 3)}.`;
    date = date.join(" ");
    return {
      uid: node.uid,
      img: node.data.event_image.gatsbyImageData,
      imgAltText: node.data.event_image.alt,
      title: node.data.title.text,
      subtitle: node.data.location.text,
      date: date,
      location: node.data.location,
    };
  };

  /* Create object where each key is a year, and that keys value
   * is an array of all events from that year. */

  let eventsByYear = {};
  data.allPrismicEvent.nodes.forEach((event) => {
    const year = event.data.date.split(" ")[3];
    if (eventsByYear.hasOwnProperty(year)) {
      eventsByYear[year].push(event);
      return;
    }
    eventsByYear[year] = [event];
  });

  return (
    <Layout>
      <TitleBanner
        title={data.prismicPastEventsPage.data.title.text}
        image={data.prismicPastEventsPage.data.banner}
      />
      <Link to="/events" className="link fs-300">
        View upcoming Events
      </Link>
      {Object.keys(eventsByYear)
        .reverse()
        .map((year, i) => {
          return (
            <div className="mt-4" key={i}>
              <p className="text-primary fs-400 fw-bold letter-spacing-2">
                {year}
              </p>
              <CardGrid
                Card={EventCardThumbnail}
                data={eventsByYear[year]}
                flatten={flattenEventData}
                size="small"
              />
            </div>
          );
        })}
    </Layout>
  );
}

export const query = graphql`
  query PastEvents($date: Date) {
    prismicPastEventsPage {
      data {
        title {
          text
        }
        banner {
          gatsbyImageData
          alt
        }
      }
    }

    allPrismicEvent(
      sort: { data: { date: DESC } }
      filter: { data: { date: { lt: $date } } }
    ) {
      nodes {
        uid
        data {
          date(formatString: "dddd DD MMMM YYYY")
          title {
            text
          }
          location {
            text
          }
          event_image {
            gatsbyImageData(placeholder: BLURRED)
            alt
          }
        }
      }
    }
  }
`;
