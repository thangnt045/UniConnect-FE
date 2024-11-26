import React, { useEffect, useState } from "react";
import "../styles/EventBanner.css";
import Registration from "./Registration";

const EventBanner = ({ eventId, isTop }) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/eventData.json") // Adjust the path as needed for your project structure
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const foundEvent = data.events.find(
          (e) => e.id === parseInt(eventId, 10)
        );
        setEvent(foundEvent);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [eventId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading event data: {error}</div>;
  }

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
            backgroundImage: `url(https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2763&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        >
          <h1 style={{ marginRight: "25em" }} className="event-banner-title">
            {event.title}
          </h1>
          <Registration eventId={eventId} />
        </div>
      ) : (
        <div className="event-banner-description">
          <p>{event.description}</p>
        </div>
      )}
    </div>
  );
};

export default EventBanner;
