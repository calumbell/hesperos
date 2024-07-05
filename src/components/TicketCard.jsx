import React from "react";

const TicketCard = ({ event }) => {
  if (!event) return;
  const TimeElement = () => (
    <time className="text-lg align-center flex flex-row justify-between gap-1 mb-0 ">
      <span className="pt-1 text-xl">{event.date}</span>
      <span className="pt-1">{event.time.text}</span>
    </time>
  )

  // calculate whether an event has taken place in the past
  const today = new Date();
  const concertDate = new Date(event.date);
  if (event.time.text) concertDate.setHours(event.time.text.split(":")[0]);

  // if the concert date has passed, don't link to the ticket page
  if (today > concertDate) return (
    <div className="border-primary block rounded border-2 my-4 px-4 py-2 transition-all bg-light-shade">
      <TimeElement />
      <p className="tracking-wider">This event has passed</p>
    </div>
  );
  
  // if no ticket link, only display concert time and date
  if (!event.buy_ticket_link?.url) return (
    <div className="border-primary block rounded border-2 my-4 px-4 py-2 transition-all">
      <TimeElement />
    </div>
  )

  // base case: if concert in future & ticket link available, link to ticket page
  return (
    <a 
      className="border-primary block rounded border-2 my-4 px-4 py-2 transition-all hover:bg-light-shade"
      href={event.buy_ticket_link.url }
      target="_blank"
      rel="noreferrer"
    >
      <TimeElement />
      <p className="tracking-wider font-bold">Book Ticket</p>
    </a>
  )
};

export default TicketCard;
