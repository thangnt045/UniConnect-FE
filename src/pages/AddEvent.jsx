import React, { useEffect, useState } from "react";
import { fetchEvents, updateEvent } from "../fetchAPI/api";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar";
import "../styles/Event.css"
import AddEventForm from "../components/AddEvent";

const AddEvent = () => {
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
      
      <div className="dashboard-content">
        <Sidebar className="sidebar"/>
        <AddEventForm />
      </div>

      <Footer/>
    </div>
  );
};

export default AddEvent;