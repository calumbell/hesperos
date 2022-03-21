require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Hesperos Choir",
    description: "Hesperos is a chamber choir based in London, singing sacred and secular music.",
    url: "https://www.hesperoschoir.com",
    image: '/src/images/hesperos-favicon.png',
    twitterUsername: "@hesperoschoir",
  },

  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_SUBSCRIBE_ENDPOINT,
        timeout: 3500,
      }
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
      },
    },
  ],
};
