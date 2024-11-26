import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAllEvents } from "../redux/actions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailedEvent from "../pages/DetailedEvent";
import EditEvent from "../pages/Event";
import { fetchEvents } from "../fetchAPI/api";
import "../styles/App.css"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch("../data/EventData.json")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Fetched Data:", data);
    //     console.log(fetchEvents().then())
    //     dispatch(setAllEvents(data.events));
    //   })
    //   .catch((error) => console.error("Error loading events:", error));

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
      </Routes>
    </Router>
  );
};

export default App;
