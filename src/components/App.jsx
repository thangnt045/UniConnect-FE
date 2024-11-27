import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAllEvents } from "../redux/actions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailedEvent from "../pages/DetailedEvent";
import EditEvent from "../pages/Event";
import { fetchEvents } from "../fetchAPI/api";
import "../styles/App.css"
import AddEvent from "../pages/AddEvent";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchEvents().then(result => {
      dispatch(setAllEvents(result));
    })
    .catch(error => {
      console.error(error);
    })
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:id" element={<DetailedEvent />} />
        <Route path="/events" element={<EditEvent />} />
        <Route path="/events/new" element={<AddEvent />} />
      </Routes>
    </Router>
  );
};

export default App;
