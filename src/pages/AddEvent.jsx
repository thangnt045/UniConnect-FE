import React, { useEffect, useState } from "react";
import { fetchEvents, updateEvent } from "../fetchAPI/api";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar";
import "../styles/Event.css"
import AddEventForm from "../components/AddEvent";

const AddEvent = () => {
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