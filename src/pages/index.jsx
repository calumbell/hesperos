import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { TextSectionTwoColumn, Layout, Seo, SlideShow } from "../components";
import * as styles from "./index.module.scss";

export const Head = () => <Seo path="/" />;

export default function Index({ data }) {
  const title = data.prismicWebsiteDetails.data.title.text;
  const bio = data.prismicWebsiteDetails.data.bio.text;
  const nextEvent = data.allPrismicEvent.nodes[0];
  const images = data.prismicHomepage.data.slideshow;
  const sections = data.prismicAboutPage.data.body[0].items;

  return (
    <Layout>
      <div className={styles.homePageContainer}>
        <section
          className={`bg-light py-4 px-5 box-shadow ${styles.homePageBio}`}
        >
          <h1 className="text-5xl leading-relaxed font-bold letter-spacing-3">{title}</h1>
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
            <sub className="uppercase font-serif fw-normal letter-spacing-1">
              Our next event
            </sub>
            <h2 className="text-3xl mb-1">{nextEvent.data.title.text}</h2>
            <p>{nextEvent.data.date}</p>
          </Link>
        )}
        <SlideShow images={images} />
        <section>
          <article className="center-content">
            {sections.map((section, i) => (
              <TextSectionTwoColumn
                key={i}
                data={{
                  title: section.title.text,
                  bodyText: section.content.text,
                }}
              />
            ))}
          </article>
        </section>
      </div>
    </Layout>
  );
}

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
    prismicAboutPage {
      data {
        page_title {
          text
        }
        hero_image {
          gatsbyImageData
          alt
        }
        body {
          ... on PrismicAboutPageDataBodyTwoColumnRichText {
            items {
              title {
                text
              }
              content {
                text
              }
            }
          }
        }
      }
    }
  }
`;
