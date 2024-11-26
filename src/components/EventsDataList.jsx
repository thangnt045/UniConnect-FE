import React from "react";

const EventsDataList = ({ events, onEdit }) => {
  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.location}</p>
          <p>{event.datetime}</p>
          <p>Tickets Left: {event.ticketLeft}</p>
          <p>{event.description}</p>
          <button onClick={() => onEdit(event)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default EventsDataList;
