// DetailedEvent.js
import React from "react";
import Navbar from "../components/Navbar";
import EventBanner from "../components/EventBanner";
import Footer from "../components/Footer";

const DetailedEvent = ({ eventId }) => {
  return (
    <div className="detailed-event-page">
      <div>
        <Navbar />
        <EventBanner eventId={eventId} isTop={true} />

        <EventBanner eventId={eventId} isTop={false} />
      </div>
      <Footer />
    </div>
  );
};

export default DetailedEvent;
