const routes = [
  { name: `ABOUT`, url: `/about`, },
  {
    name: `EVENTS`, url: `/events`,  
    children: [
      { name: `UPCOMING`, longName: `UPCOMING EVENTS`, url: `/events`, },
      { name: `PAST`, longName: `PAST EVENTS`, url: `/pastEvents`, },
    ]
  },
  {
    name: `NEWS`, url: `/news`,
    children: [
      { name: `NEWS`, url: `/news`, },
      { name: `NOTES`, url: `/notes`, },
    ]
  },
  { name: 'JOIN', url: '/join' },
  { name: 'CONTACT', url: '/contact' },
  { name: 'SUPPORT', url: '/support', style: 'call-to-action', }
]

export default routes;