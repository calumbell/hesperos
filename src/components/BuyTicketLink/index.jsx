import React from 'react';
import { ExternalLink } from '../';

const BuyTicketLink = ({ event }) => {
  const isPast = Date.parse(event.date) < Date.now()
  if (isPast) return (
    <p className='uppercase text-primary'>This event has passed</p>
  )


  return <ExternalLink
    url={event.buy_ticket_link.url}
    title='Buy Tickets'
    altTitle='No advance tickets available'
  />
}

export default BuyTicketLink;