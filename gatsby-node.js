const path = require('path');
const { formatDate } = require('./src/utils/dates')

exports.createPages = async ({ graphql, actions }) => {
  const { data } =  await graphql(`
    query Events {
      allPrismicEvent {
        nodes {
          uid
        }
      }
      allPrismicPost {
        nodes {
          uid
          data {
            post_type
          }
        }
      }
    }
  `);
  
  // create event pages
  data.allPrismicEvent.nodes.forEach((event) => {
    actions.createPage({
      path: `/events/${event.uid}`,
      component: path.resolve('./src/templates/eventPage.jsx'),
      context: { slug: event.uid },
    });
  })

  // create post pages
  data.allPrismicPost.nodes.forEach((post) => {
    const subroute = post.data.post_type.toLowerCase();
    actions.createPage({
      path: `/${subroute}/${post.uid}`,
      component: path.resolve('./src/templates/postPage.jsx'),
      context: { slug: post.uid },
    })
  })
};


/*
 * To pass variables into graphql page queries, they must be added to the
 * page context via the Create Page API. We use this date to filter events.
 * gatsbyjs.com/docs/creating-and-modifying-pages/#pass-context-to-pages
 */

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions;
  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      date: formatDate(new Date()),
    },
  });
}