import React from "react";
import { graphql, Link } from "gatsby";
import { Card, Layout, Seo, TitleBanner } from "../components";

export const Head = () => <Seo path="/events" />;

export default function Events({ data }) {
  // Flattener fnc converts graphql response to less deeply nested JSON
  const flattenEventData = (node) => {
    return {
      uid: node.uid,
      subroute: `events`,
      image: node.data.event_image.gatsbyImageData,
      altText: node.data.event_image.alt || "",
      title: node.data.title.text,
      subtitle: node.data.location.text,
      date: node.data.date,
      displayDateBubble: true,
    };
  };
  return (
    <Layout>
      <TitleBanner
        title={data.prismicEventsPage.data.title.text}
        image={data.prismicEventsPage.data.banner}
      />
      {data.allPrismicEvent.nodes.length === 0 && <p>No events scheduled</p>}
      <ul className="grid mb-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none">
        {data.allPrismicEvent.nodes.map((event, i) => (
            <Card data={flattenEventData(event)} key={i} />
          )
        )}
      </ul>
      <Link to="/pastEvents" className="link text-xl">
        View Past Events
      </Link>
    </Layout>
  );
}

// Fetch events data
// Results are passed to Event cmp via 'data' prop
export const query = graphql`
  query EventSummaries($date: Date) {
    prismicEventsPage {
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
      sort: { data: { date: ASC } }
      filter: { data: { date: { gte: $date } } }
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
