import './app.css';
import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Protected from './components/Protected';
import { Box } from '@mui/system';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Settings from './components/Settings';
import About from './components/About';
import Details from './components/Details';

function App() {
  return (
    <>
      <Router>
        <Box sx={{ display: "flex" }}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route element={<Protected />}>
              <Route path='/home' element={<Home />} />
              <Route path='/home/dashboard' element={<Dashboard />} />
              <Route path='/home/settings' element={<Settings />} />
              <Route path='/home/about' element={<About />} />
              <Route path='/home/profile' element={<Profile />} />
              <Route path="/dashbord/details" element={<Details />} />
            </Route>
          </Routes>
        </Box>
      </Router>
    </>

  )
};

export default App;