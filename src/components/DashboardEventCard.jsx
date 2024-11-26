import React from "react";
import "../styles/DashboardEventCard.css"

const DashboardEventCard = ({ title, description, date, tags }) => (
    <div className="event-card">
      {/* Image Placeholder */}
      <div className="event-image"></div>
  
      {/* Event Info */}
      <div className="event-info">
        <h3 className="event-title">{title}</h3>
        <p className="event-description">{description}</p>
        <div className="event-tags">
          {tags.map((tag, index) => (
            <span key={index} className="event-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
  
      {/* Date and Edit Button */}
      <div className="event-actions">
        <p className="event-date">{date}</p>
        <button className="edit-button">Edit</button>
      </div>
    </div>
  );

export default DashboardEventCard;