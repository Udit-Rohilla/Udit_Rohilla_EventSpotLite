import React from 'react';

const EventCard = ({ event, onClick }) => {
  return (
    <div className="event-card" onClick={onClick}>
      <h3>{event.name}</h3>
      <p className="date-location">{event.date} - {event.location}</p>
    </div>
  );
};

export default EventCard;
