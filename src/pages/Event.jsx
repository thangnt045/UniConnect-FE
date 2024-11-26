import React, { useEffect, useState } from "react";
import { fetchEvents, updateEvent } from "../fetchAPI/api";
import EventsDataList from "../components/EventsDataList";
import EditEvent from "../components/EditEvent";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Event = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  
  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  
  const handleEdit = (event) => {
    setEditingEvent(event);
  };

  
  const handleSave = async (updatedEvent) => {
    const savedEvent = await updateEvent(updatedEvent.id, updatedEvent);
    setEvents((prevEvents) =>
      prevEvents.map((e) => (e.id === savedEvent.id ? savedEvent : e))
    );
    setEditingEvent(null);
  };

  return (
    <div>
      <Navbar/>
      
      {editingEvent ? (
        <EditEvent
          event={editingEvent}
          onSave={handleSave}
          onCancel={() => setEditingEvent(null)}
        />
      ) : (
        <EventsDataList events={events} onEdit={handleEdit} />
      )}

      <Footer/>
    </div>
  );
};

export default Event;
