import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Layout, SEO, SlideShow } from "../components";
import * as styles from "./index.module.scss";

const Index = ({ data }) => {
  const title = data.prismicWebsiteDetails.data.title.text;
  const bio = data.prismicWebsiteDetails.data.bio.text;
  const nextEvent = data.allPrismicEvent.nodes[0];
  const images = data.prismicHomepage.data.slideshow;

  return (
    <Layout>
      <SEO />
      <div className={styles.homePageContainer}>
        <section
          className={`bg-light py-4 px-5 box-shadow ${styles.homePageBio}`}
        >
          <h1 className={`${styles.title} fw-xl letter-spacing-3`}>{title}</h1>
          <p className="mb-4">{bio}</p>
        </section>

        <div className={styles.altImage}>
          <GatsbyImage
            image={images[0].image.gatsbyImageData}
            alt={images[0].image.alt || ""}
          />
        </div>

        {nextEvent && (
          <Link
            className={`${styles.homePageNextEvent} box-shadow hover-shadow`}
            to={`/events/${nextEvent.uid}`}
          >
            <sub className="uppercase fw-normal letter-spacing-1">
              Our next event
            </sub>
            <h2 className="fs-600">{nextEvent.data.title.text}</h2>
            <p>{nextEvent.data.date}</p>
          </Link>
        )}
        <SlideShow images={images} />
      </div>
    </Layout>
  );
};

export default Index;

// query Prismic for page data & next event data
export const query = graphql`
  query HomepageQuery($date: Date) {
    prismicWebsiteDetails {
      data {
        title {
          text
        }
        bio {
          text
        }
      }
    }
    prismicHomepage {
      data {
        slideshow {
          image {
            gatsbyImageData(placeholder: BLURRED)
            alt
          }
        }
      }
    }
    allPrismicEvent(
      sort: { data: { date: ASC } }
      limit: 1
      filter: { data: { date: { gte: $date } } }
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
