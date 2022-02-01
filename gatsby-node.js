const path = require('path');

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
    actions.createPage({
      path: `/news/${post.uid}`,
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

const date = new Date();
const formattedDate = `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,'0')}-${date.getDate().toString().padStart(2,'0')}`;

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions;
  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      date: formattedDate,
    },
  });
}