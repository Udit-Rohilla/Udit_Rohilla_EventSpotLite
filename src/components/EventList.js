import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const EventList = ({ events, onSelectEvent }) => {
  return (
    <div className="event-list">
      {events.map(event => (
        <Card
          key={event.id}
          onClick={() => onSelectEvent(event)}
          className="event-card"
        >
          <CardMedia
            component="img"
            height="140"
            image={event.image}
            alt={event.name}
          />
          <CardContent>
            <Typography variant="h5">{event.name}</Typography>
            <Typography>{event.date} - {event.location}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EventList;
