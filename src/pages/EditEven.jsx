import React, { useState } from "react";
import EditEvent from "../components/EditEvent.jsx";
import EventsDataList from "../components/EventsDataList.jsx";
import eventsData from "../data/eventData.js.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function App() {
  const [events, setEvents] = useState(eventsData);
  const [currentEvent, setCurrentEvent] = useState(null);

  const handleEditEvent = (event) => {
    setCurrentEvent(event); 
  };

  const handleSaveEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(updatedEvents); 
    setCurrentEvent(null); 
  };

  const handleCancelEdit = () => {
    setCurrentEvent(null); 
  };

  return (
    <div>
      <Navbar/>
      {currentEvent ? (
        <EditEvent
          event={currentEvent}
          editEvent={handleSaveEvent}
          onCancel={handleCancelEdit}
        />
      ) : (
        <EventsDataList events={events} onEdit={handleEditEvent} />
      )}
      <Footer/>
    </div>
  );
}

export default App;
