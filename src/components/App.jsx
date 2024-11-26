import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllEvents } from "../redux/actions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailedEvent from "../pages/DetailedEvent";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("../data/EventData.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        dispatch(setAllEvents(data.events));
      })
      .catch((error) => console.error("Error loading events:", error));
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<DetailedEvent />} />
      </Routes>
    </Router>
  );
};

export default App;
