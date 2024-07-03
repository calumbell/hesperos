import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Layout, Seo, SlideShow } from "../components";

export const Head = () => <Seo path="/" />;

export default function Index({ data }) {
  const title = data.prismicWebsiteDetails.data.title.text;
  const bio = data.prismicWebsiteDetails.data.bio.text;
  const nextEvent = data.allPrismicEvent.nodes[0];
  const images = data.prismicHomepage.data.slideshow.filter((image) => image.image.gatsbyImageData);
  const sections = data.prismicAboutPage.data.body[0].items;

  return (
    <Layout>
      {/* Hero section - Slideshow with inset bio & next gig link */}
      <section className="sm:h-1/2 z-0 relative">
        <aside
          className="bg-light/95 px-8 py-6 w-full rounded-sm z-10 right-4 top-4 sm:shadow-sm sm:absolute sm:w-96"
        >
          <h1 className="text-4xl text-center sm:text-right sm:text-5xl leading-relaxed font-bold letter-spacing-3">
            {title}
          </h1>
          <p className="mb-4 sm:text-right">{bio}</p>
        </aside>

        <div className="sm:hidden h-1/3">
          <GatsbyImage
            image={images[0].image.gatsbyImageData}
            alt={images[0].image.alt || ""}
          />
        </div>

        {/* Display data about the next gig */}
        {nextEvent && (
          <Link
            className="w-100 block sm:absolute z-10 rounded-sm p-4 bg-light/90 bottom-4 left-4 sm:shadow-sm hover:shadow"
            to={`/events/${nextEvent.uid}`}
          >
            <sub className="uppercase font-serif letter-spacing-1">
              Our next event
            </sub>
            <h2 className="text-3xl mb-1">{nextEvent.data.title.text}</h2>
            <p>{nextEvent.data.date}</p>
          </Link>
        )}
        
        <SlideShow images={images} />
      </section>

      {/*  */}
      <article className="max-w-[48rem] mt-4 mx-auto md:grid grid-cols-2 gap-3">
        {sections.map((section, i) => <>
          <h2 className="border-b-2 border-b-primary mb-2 h-min w-min text-nowrap" key={i}>
            {section.title.text}
          </h2>
          <p>{section.content.text}</p>
        </>)}
      </article>
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
