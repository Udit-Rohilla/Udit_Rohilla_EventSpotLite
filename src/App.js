import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import EventList from './components/EventList';
import EventModal from './components/EventModal';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';
import mockData from './mockData.json';
import 'animate.css';

function App() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    setTimeout(() => {
      setEvents(mockData);
      setFilteredEvents(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearch = (query) => {
    const filtered = events.filter((event) =>
      event.name.toLowerCase().includes(query.toLowerCase()) ||
      event.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app">
      <NavBar onSearch={handleSearch} onToggleTheme={toggleTheme} theme={theme} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <EventList
          events={filteredEvents}
          onSelectEvent={setSelectedEvent}
          className="animate__animated animate__fadeIn"
        />
      )}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        className="animate__animated animate__fadeIn"
      />
    </div>
  );
}

export default App;
