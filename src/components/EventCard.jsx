import React from 'react'
import '../styles/EventCard.css'

const EventCard = ({ name }) => {
    return (
        <div className="event-card">
            <div className="image-placeholder"></div>
            <div className="event-info">
                <h3>{name}</h3>
                <button className="view-details-button">View Details</button>
            </div>
        </div>
    )
}

export default EventCard