import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Grid, Box } from '@mui/material';

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
  {
    name: 'Meeting Room 1',
    floor: 'East Wing, Floor 2',
    capacity: 6,
    available: true,
    equipment: ['Display Monitor', 'Whiteboard'],
    nextAvailable: 'Available Now',
  },
  {
    name: 'Meeting Room 2',
    floor: 'East Wing, Floor 2',
    capacity: 8,
    available: true,
    equipment: ['Display Monitor', 'Conference Phone', 'Wireless Presentation'],
    nextAvailable: 'Available Now',
  },
  {
    name: 'Innovation Lab',
    floor: 'West Wing, Floor 1',
    capacity: 25,
    available: true,
    equipment: ['Projector', 'Video Conference', 'Display Monitor', 'Wireless Presentation', 'Whiteboard'],
    nextAvailable: 'Available Now',
  },
  {
    name: 'Executive Conference',
    floor: 'South Tower, Floor 6',
    capacity: 14,
    available: true,
    equipment: ['Video Conference', 'Display Monitor', 'Conference Phone'],
    nextAvailable: 'Available Now',
  },
  {
    name: 'Huddle Room 1',
    floor: 'North Tower, Floor 2',
    capacity: 4,
    available: true,
    equipment: ['Display Monitor'],
    nextAvailable: 'Available Now',
  },
];

const Booking = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBookRoom = (room) => {
    setSelectedRoom(room);
    alert(`You have booked ${room.name}`);
  };

  return (
    <Box sx={{ padding: 2, marginBottom: 4 }}>
      <Typography variant="h4" gutterBottom>
        Search Available Rooms
      </Typography>

      <Grid container spacing={2}>
        {rooms.map((room, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{room.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {room.floor}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Capacity: {room.capacity} people
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Equipment Available: {room.equipment.join(', ')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Next Available: {room.nextAvailable}
                </Typography>
                <Button
                  variant="contained"
                  color={selectedRoom === room ? 'success' : 'primary'}
                  disabled={!room.available}
                  fullWidth
                  onClick={() => handleBookRoom(room)}
                  sx={{ marginTop: 1 }}
                >
                  {selectedRoom === room
                    ? 'Booked!'
                    : room.available
                    ? 'Book This Room'
                    : 'Room In Use'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Booking;
