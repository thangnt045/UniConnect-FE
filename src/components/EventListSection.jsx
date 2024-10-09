import React from "react";
import { useState } from "react";
import EventList from "./EventList";
import "../styles/EventListSection.css"

function EventListSection() {
  // State to hold event data
  const [events, setEvents] = useState([
    { name: 'Event 1' },
    { name: 'Event 2' },
    { name: 'Event 3' },
    { name: 'Event 4' },
    { name: 'Event 5' },
    { name: 'Event 6' },
    { name: 'Event 7' },
    { name: 'Event 8' },
    { name: 'Event 9' },
    { name: 'Event 10' },
    { name: 'Event 11' },
    { name: 'Event 12' },
    { name: 'Event 13' },
    { name: 'Event 14' },
    { name: 'Event 15' },
  ]);

  const [page, setPage] = useState(1);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(events.length / itemsPerPage);

  // Handle next page
  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }

  // Handle previous page
  const previousPage = () => {
    if (page > 1) {
      setPage(page -1)
    }
  }

  return (
    <div className="event-list-section">
      <header>
        <div className="location">
          <p>Browsing events in</p>
          <select>
            <option value="cs1">Cơ sở 1</option>
            <option value="cs2">Cơ sở 2</option>
            <option value="cs3">Cơ sở 3</option>
          </select>
        </div>
        <div className="categories">
          <button>Technology</button>
          <button>Art</button>
          <button>Workshops</button>
          <button>Business</button>
        </div>
      </header>
      <div className="event-list-container">
        <div className="pagination-controls">
          <button onClick={previousPage} disabled={page === 1}>
            &larr;
          </button>
        </div>
        <EventList events={events} page={page} />
        <div className="pagination-controls">
          <button onClick={nextPage} disabled={page === totalPages}>
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventListSection;