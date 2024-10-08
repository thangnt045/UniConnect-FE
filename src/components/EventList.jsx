import React from 'react'
import EventCard from './EventCard'
import '../styles/EventList.css'

const EventList = ({events, page}) => {

    const itemsPerPage = 6
    const startIndex = (page - 1) * itemsPerPage;
    const visibleEvents = events.slice(startIndex, startIndex + itemsPerPage)

    return (
        <div className="event-list">
            {visibleEvents.map((event) => (
                <EventCard name={event.name} />
            ))}
        </div>
    )
}

export default EventList