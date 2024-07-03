import React from "react";
import { graphql } from "gatsby";
import {
  Accordion,
  ContactForm,
  Layout,
  MailchimpForm,
  Seo,
  TitleBanner,
} from "../components";

export const Head = () => <Seo path="/contant" />;

export default function Contact({ data }) {
  const pageData = data.prismicContactPage.data;

  return (
    <Layout>
      <TitleBanner
        title={pageData.page_title.text}
        image={pageData.banner_image}
      />

      <article className="max-w-[42rem] mx-auto table">
        <section>
          Please use the forms below if you have any queries or would like to
          join our mailing list. All data is processed in accordance with GDPR
          regulations.
        </section>

        <Accordion title="Email" index="1">
          <p>
            Please use this contact form if you have any questions about the
            choir.
          </p>
          <ContactForm
            fields={{
              name: "name",
              email: "text",
              subject: "text",
              message: "textarea",
            }}
          />
        </Accordion>
        <Accordion title="Mailing List" index="2">
          <p>
            Sign up to our mailing list for regular updates (not more than once
            a month). You can unsubscribe at any time by clicking the link in
            the footer of our emails.
          </p>
          <MailchimpForm />
        </Accordion>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query ContactPageQuery {
    prismicContactPage {
      data {
        page_title {
          text
        }
        body {
          richText
        }
        banner_image {
          gatsbyImageData
          alt
        }
      }
    }
  }
`;
