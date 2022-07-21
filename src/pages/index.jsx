import React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout, SEO, SlideShow } from '../components';
import * as styles from './index.module.scss';

export default function Index({data}) {
  const title = data.prismicWebsiteDetails.data.title.text;
  const bio = data.prismicWebsiteDetails.data.bio.text;
  const nextEvent = data.allPrismicEvent.nodes[0];
  return (
    <Layout>
      <SEO />
      <div className={`position-rel ${styles.homePageContainer}`}>
        
        <aside className={`bg-light py-4 px-5 box-shadow ${styles.homePageBio}`}>
          <h1 className={`${styles.title} fw-xl letter-spacing-3`}>{title}</h1>
          <p className='mb-4'>{bio}</p>
        </aside>

        <SlideShow images={data.prismicHomepage.data.body[0].items} />

        {nextEvent && 
          <aside className={`
            bg-light px-5 py-3 box-shadow 
            hover-shadow ${styles.homePageNextEvent} `}
          >
            <Link to={`/events/${nextEvent.uid}`}>
              <sub className='uppercase fw-normal letter-spacing-1'>Our next event</sub>
              <h2 className='fs-600'>{nextEvent.data.title.text}</h2>
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
    prismicWebsiteDetails {
      data {
        title { text }
        bio { text }
      }
    }
    prismicHomepage {
      data {
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
          title { text }
          event_image {
            gatsbyImageData(placeholder: BLURRED)
            alt
          }
        }
      }
    }
  }
`;