import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './sign-in/SignIn.jsx';
import Booking from './Booking.jsx';

function App() {
return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
