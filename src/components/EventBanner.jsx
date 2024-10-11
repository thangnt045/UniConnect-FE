// EventBanner.jsx
import React from "react";
import events from "../data/eventData";
import "../styles/EventBanner.css";
import Registration from "./Registration";

const EventBanner = ({ eventId, isTop }) => {
  // Retrieve the specific event using the provided eventId
  const event = events.find((e) => e.id === parseInt(eventId, 10));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div
      className={`event-banner ${isTop ? "top-banner" : "description-banner"}`}
    >
      {isTop ? (
        <div
          className="event-banner-image"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        >
          <h1 style={{ marginRight: "25em" }} className="event-banner-title">
            {event.title}
          </h1>
          <Registration eventId={eventId} />
        </div>
      ) : (
        <div className="event-banner-description">
          <p style={{ fontSize: "20px" }}>{event.description}</p>
        </div>
      )}
    </div>
  );
};

export default EventBanner;
