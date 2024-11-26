import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import EventBanner from "../components/EventBanner";
import Footer from "../components/Footer";
import DetailedEventPage from "../styles/DetailedEventPage.css";

const DetailedEvent = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const allEvents = useSelector((state) => state.allEvents); // Fetch all events from Redux
  const selectedEvent = useSelector((state) => state.selectedEvent);

  // Find the event using the URL ID if `selectedEvent` is not set
  const event =
    selectedEvent && selectedEvent.id === parseInt(id)
      ? selectedEvent
      : allEvents.find((event) => event.id === parseInt(id));

  // Display a fallback message if the event is not found
  if (!event) {
    return (
      <div className="detailed-event-page">
        <Navbar />
        <div className="event-not-found">
          <h1>Event not found</h1>
          <p>We couldn't find the event you're looking for.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <div className="main-content">
        <Navbar />
        {/* Original EventBanner Components */}
        <EventBanner eventId={event.id} isTop={true} />
        <EventBanner eventId={event.id} isTop={false} />
      </div>
      <Footer />
    </div>
  );
};

export default DetailedEvent;
