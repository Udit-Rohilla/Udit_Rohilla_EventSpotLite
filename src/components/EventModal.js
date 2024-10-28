import React from 'react';
import { motion } from 'framer-motion';

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <motion.div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}
      >
        <h2>{event.name}</h2>
        <img src={event.image} alt={event.name} />
        <p>{event.description}</p>
        <button onClick={onClose}>Close</button>
      </motion.div>
    </div>
  );
};

export default EventModal;
