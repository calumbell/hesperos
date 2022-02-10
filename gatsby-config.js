require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.hesperoschoir.com",
    title: "hesperos",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "https://gmail.us5.list-manage.com/subscribe/post?u=aca0a48cab4c3371147bdb0b5&amp;id=b2be373673",
        timeout: 3500,
      }
    },
  ],
};
