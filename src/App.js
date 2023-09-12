import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './conponents/Home/Home';
import About from './conponents/About/About';
import Login from './conponents/Login/Login';
import Profile from './conponents/Profile/Profile';
import NotFound from './conponents/NotFound/NotFound';
import Header from './conponents/Header/Header';

function App() {
  return (
    <Routes path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
