import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout.jsx';
import SlideShow from '../components/SlideShow.jsx';
import * as styles from './index.module.scss';

export default function Index({data}) {
  console.log(data.allPrismicEvent.nodes[0].data);
  return (
    <Layout>
      <aside className={styles.homePageAside}>
        <h1>Hesperos Choir</h1>
        <p>{data.prismicHomepage.data.short_description.text}</p>
        {data.allPrismicEvent.nodes[0] && (
          <Link to={`/events/${data.allPrismicEvent.nodes[0].uid}`}>
            <sub>Our next concert:</sub>
            <h2>{data.allPrismicEvent.nodes[0].data.title.text}</h2>
            <p>{data.allPrismicEvent.nodes[0].data.date}</p>
          </Link>)
        }
      </aside>
      <SlideShow images={data.prismicHomepage.data.body[0].items} />

    </Layout>
  )
}

// query Prismic for page data
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