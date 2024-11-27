import React, { useEffect, useState } from "react";
import { fetchEvents } from "../fetchAPI/api";
import "../styles/EventBanner.css";
import Registration from "./Registration";

const EventBanner = ({ eventId, isTop }) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch("/data/eventData.json") // Adjust the path as needed for your project structure
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     const foundEvent = data.events.find(
    //       (e) => e.id === parseInt(eventId, 10)
    //     );
    //     setEvent(foundEvent);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //     setLoading(false);
    //   });

    fetchEvents().then(result => {
      const foundEvent = result.find((e) => e.id === eventId);
      console.log(foundEvent.image)
      setEvent(foundEvent);
      setLoading(false);
    }).catch((error) => {
      setError(error.message);
      setLoading(false);
    })
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
            backgroundImage: `url(${event.image})`,
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
