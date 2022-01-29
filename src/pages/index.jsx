import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout.jsx';
import SlideShow from '../components/SlideShow.jsx';
import * as styles from '../styles/index.module.scss';

export default function Index({data}) {
  const nextEvent = data.allPrismicEvent.nodes[0];
  return (
    <Layout>
      <aside className={styles.homePageAside}>
        <h1>Hesperos Choir</h1>
        <p>{data.prismicHomepage.data.short_description.text}</p>
        {nextEvent && (
          <Link to={`/events/${nextEvent.uid}`}>
            <sub>Our next event:</sub>
            <h2>{nextEvent.data.title.text}</h2>
            <p>{nextEvent.data.date}</p>
          </Link>)
        }
      </aside>
      <SlideShow images={data.prismicHomepage.data.body[0].items} />

    </Layout>
  )
}

// query Prismic for page data & next event data
export const query = graphql`
  query HomepageQuery ($date: Date) {
    prismicHomepage {
      data {
        short_description {
          text
        }
        body {
          ... on PrismicHomepageDataBodyImageCarousel {
            items {
              image {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    allPrismicEvent(
      sort: {fields: data___date, order: ASC}
      limit: 1
      filter: {data: {date: {gte: $date}}}
    ) {
      nodes {
        uid
        data {
          date(formatString: "dddd DD MMMM YYYY")
          title {
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