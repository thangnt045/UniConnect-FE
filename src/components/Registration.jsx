// Registration.jsx
import React from "react";
import events from "../data/eventData";
import "../styles/Registration.css";

const Registration = ({ eventId }) => {
  // Retrieve the specific event using the provided eventId
  const event = events.find((e) => e.id === parseInt(eventId, 10));

  if (!event) {
    return <div>Event not found</div>;
  }

  const { location, datetime, ticketLeft } = event;
  const tickets = ticketLeft.split("/");
  const remainingTickets = parseInt(tickets[0], 10);
  const totalTickets = parseInt(tickets[1], 10);
  const isSoldOut = remainingTickets === 0;

  return (
    <div className="registration-container">
      <p>
        <strong>Địa điểm:</strong> {location}
      </p>
      <p>
        <strong>Thời gian:</strong> {datetime}
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
