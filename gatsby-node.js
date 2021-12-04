const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } =  await graphql(`
    query Events {
      allPrismicEvent {
        nodes {
          uid
        }
      }
    }
  `);
  
  data.allPrismicEvent.nodes.forEach((event) => {
    actions.createPage({
      path: `/events/${event.uid}`,
      component: path.resolve('./src/templates/eventPage.jsx'),
      context: { slug: event.uid },
    });
  })
};