import React, { useState } from "react";
import "../styles/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, setSelectedEvent } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchQuery = useSelector((state) => state.searchQuery);
  const filteredEvents = useSelector((state) =>
    state.allEvents.filter((event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value;
    dispatch(setSearchQuery(query));
    setShowSuggestions(query.length > 0); // Show dropdown if query is not empty
  };

  const clearSearch = () => {
    dispatch(setSearchQuery(""));
    setShowSuggestions(false); // Hide dropdown
  };

  const handleEventClick = (event) => {
    dispatch(setSelectedEvent(event)); // Set selected event in Redux
    setShowSuggestions(false); // Hide dropdown
    clearSearch(); // Optionally clear search
    navigate(`/event/${event.id}`); // Navigate to event detail page
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="/assets/images/app_icon.png"
          alt="app logo"
          style={{ width: 30, height: 20 }}
        />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#1">Trang Chủ</a>
        </li>
        <li>
          <a href="#2">Hội Nghị Sự Kiện</a>
        </li>
        <li>
          <a href="#3">Lịch Sự Kiện</a>
        </li>
        <li>
          <a href="#4">Sự Kiện Của Tôi</a>
        </li>
      </ul>
      <div className="navbar-search">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Tìm kiếm sự kiện..."
          className="navbar-search-input"
        />
        {searchQuery && (
          <button onClick={clearSearch} className="clear-button">
            X
          </button>
        )}
        {showSuggestions && (
          <div className="search-suggestions">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="suggestion-item"
                  onClick={() => handleEventClick(event)} // Handle click
                >
                  <p>{event.title}</p>
                </div>
              ))
            ) : (
              <div className="no-suggestions">No events found</div>
            )}
          </div>
        )}
      </div>
      <button className="signin-button">Đăng Nhập</button>
    </nav>
  );
};

export default Navbar;
