import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SignIn from './sign-in/SignIn.jsx';
import Booking from './booking/Booking.jsx';
import ResponsiveAppBar from './ResponsiveAppBar';

// แยก wrapper เพื่อให้ใช้ useLocation ได้
function AppContent() {
  const location = useLocation();

  // ซ่อน AppBar เมื่ออยู่หน้า SignIn (path "/")
  const hideAppBar = location.pathname === "/";

  return (
    <>
      {!hideAppBar && <ResponsiveAppBar />}

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
