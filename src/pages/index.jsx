import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout, SlideShow } from '../components';
import * as styles from './index.module.scss';

export default function Index({data}) {
  const nextEvent = data.allPrismicEvent.nodes[0];
  return (
    <Layout>
      <div className={`position-rel ${styles.homePageContainer}`}>
        <SlideShow images={data.prismicHomepage.data.body[0].items} />

        <aside className={`position-ab bg-light p-4 border-primary ${styles.homePageBio}`}>
          <h1 className='fs-700 fw-bold letter-spacing-3'>Hesperos Choir</h1>
          <p className='mb-4 hide-on-sm'>{data.prismicHomepage.data.short_description.text}</p>
        </aside>
        
        {nextEvent && 
          <aside className={`
            position-ab bg-light p-4 hover-shadow border-primary
            ${styles.homePageNextEvent}
          `}>
            <Link to={`/events/${nextEvent.uid}`}>
              <sub className='uppercase letter-spacing-1'>Our next event</sub>
              <h2 className='fs-500'>{nextEvent.data.title.text}</h2>
              <p>{nextEvent.data.date}</p>
            </Link>
          </aside>
        }
      </div>
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
                alt
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