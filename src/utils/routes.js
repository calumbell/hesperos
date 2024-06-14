const routes = [
  {
    name: `EVENTS`, url: `/events`,  
    children: [
      { name: `UPCOMING`, longName: `UPCOMING EVENTS`, url: `/events`, },
      { name: `PAST`, longName: `PAST EVENTS`, url: `/pastEvents`, },
    ]
  },
  { name: 'JOIN', url: '/join', },
  { name: 'CONTACT', url: '/contact', },
  { name: 'SUPPORT', url: '/support', style: 'call-to-action', }
]

export default routes;