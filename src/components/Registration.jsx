import React, { useEffect, useState } from "react";
import "../styles/Registration.css";

const Registration = ({ eventId }) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/EventData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Access the "events" array from the fetched object
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

  // Destructure event data
  const { ticketLeft } = event;
  const tickets = ticketLeft.split("/");
  const remainingTickets = parseInt(tickets[0], 10);
  const totalTickets = parseInt(tickets[1], 10);
  const isSoldOut = remainingTickets === 0;

  return (
    <div className="registration-container">
      <p>
        <strong>Địa điểm:</strong> {event.location}
      </p>
      <p>
        <strong>Thời gian:</strong> {event.datetime}
      </p>
      <p>
        <strong>Vé còn lại:</strong> {remainingTickets}/{totalTickets}
      </p>
      {isSoldOut ? (
        <p className="sold-out">Hết hạn</p>
      ) : (
        <button className="register-button">Đăng ký</button>
      )}
    </div>
  );
};

export default Registration;
