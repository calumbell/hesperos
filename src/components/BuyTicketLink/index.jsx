import React from "react";
import { ExternalLink } from "../";

const BuyTicketLink = ({ event }) => {
  // If no url is provided, then return
  if (!event.buy_ticket_link) return;

  // calculate whether an event has taken place in the past
  const today = new Date();
  const concertDate = new Date(event.date);
  if (event.time.text) concertDate.setHours(event.time.text.split(":")[0]);
  if (today > concertDate)
    return <p className="uppercase text-primary">This event has passed</p>;

  return (
    <ExternalLink
      url={event.buy_ticket_link.url}
      title="Buy Tickets"
      altTitle="No advance tickets available"
    />
  );
};

export default BuyTicketLink;
