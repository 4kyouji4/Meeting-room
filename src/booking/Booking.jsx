import React, { useState } from 'react';
import './Booking.css'; // Import the CSS file

const rooms = [
  {
    name: 'Conference Room A',
    floor: 'North Tower, Floor 3',
    capacity: 16,
    available: true,
    equipment: ['Projector', 'Display Monitor', 'Conference Phone', 'Whiteboard'],
    nextAvailable: 'Available Now',
  },
  {
    name: 'Conference Room B',
    floor: 'North Tower, Floor 4',
    capacity: 20,
    available: false,
    equipment: ['Video Conference', 'Display Monitor', 'Wireless Presentation'],
    nextAvailable: '2:00 PM Today',
  },
  {
    name: 'Board Room',
    floor: 'South Tower, Floor 5',
    capacity: 12,
    available: true,
    equipment: ['Video Conference', 'Display Monitor', 'Conference Phone', 'Whiteboard'],
    nextAvailable: 'Available Now',
  },
];

const Booking = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBookClick = (room) => {
    setSelectedRoom(room);
  };

  return (
    <div className="booking-container">
      <h2>Available Meeting Rooms</h2>
      <div className="rooms">
        {rooms.map((room) => (
          <div
            key={room.name}
            className={`room-card ${room.available ? 'available' : 'in-use'}`}
          >
            <h3>{room.name}</h3>
            <p>{room.floor}</p>
            <p>Capacity: {room.capacity} people</p>
            <div className="equipment">
              <h4>Equipment Available:</h4>
              <ul>
                {room.equipment.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="next-available">
              Next available: {room.nextAvailable}
            </p>
            {room.available ? (
              <button className="book-btn" onClick={() => handleBookClick(room)}>
                Book This Room
              </button>
            ) : (
              <button className="view-schedule-btn">View Schedule</button>
            )}
          </div>
        ))}
      </div>

      {selectedRoom && (
        <div className="modal">
          <h3>Booking Information</h3>
          <p>{selectedRoom.name} - {selectedRoom.floor}</p>
          <p>Capacity: {selectedRoom.capacity} people</p>
          <p>Next Available: {selectedRoom.nextAvailable}</p>
          <button className="close-btn" onClick={() => setSelectedRoom(null)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Booking;