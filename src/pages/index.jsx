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
      <section className="md:h-1/2 z-0 relative">
        <aside
          className="bg-light/95 mb-2 md:px-8 md:py-6 w-full rounded-sm z-10 right-4 top-4 md:shadow-sm md:absolute md:w-96"
        >
          <h1 className="inline after:content-['_–_'] md:after:content-[] md:block text-2xl text-center md:text-right md:text-5xl leading-relaxed letter-spacing-3">
            {title}
          </h1>
          <p className="inline md:block mb-4 md:text-right">{bio}</p>
        </aside>
{/* 

        {/* Display data about the next gig */}
        {nextEvent && (
          <Link
            className="h-max items-center flex flex-col md:h-auto md:block md:absolute z-10 w-full md:w-56 rounded-sm p-2 border-x-2 border-primary md:border-none md:bg-light/90 bottom-4 left-4 sm:shadow-sm md:hover:shadow"
            to={`/events/${nextEvent.uid}`}
          >
            <GatsbyImage className="max-w-[16rem] mx-12 center-self md:m-auto h-1/3 md:h-1/2" image={nextEvent.data.event_image.gatsbyImageData}/>
            <div className="w-full max-w-[16rem]">
              <sub className="uppercase font-serif letter-spacing-1">
                Our next event
              </sub>
              <h2 className="text-2xl mb-1">{nextEvent.data.title.text}</h2>
              <p>{nextEvent.data.date}</p>
            </div>
          </Link>
        )}
        
        <SlideShow images={images} />
      </section>

      {/*  */}
      <article className="max-w-[48rem] w-full mt-4 mx-auto md:grid grid-cols-2 gap-4">
        {sections.map((section, i) => <>
            <h2 className="flex justify-center underline decoration-primary decoration-2 underline-offset-[1rem] mb-2 h-min text-nowrap" key={i}>
              {section.title.text}
            </h2>
          <p className="mt-4">{section.content.text}</p>
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
