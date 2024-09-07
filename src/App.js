import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Analytics from './components/Analytics/Analytics';
import Calendar from './components/Calender/Calendar';
import Dashboard from './components/Dashboard/Dashboard';
import SettingsPage from './Settings/Settings';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
              <Navbar/>

      <div className="min-h-screen flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-10 bg-gray-100">
          {/* Define Routes for the different pages */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/settings" element={<SettingsPage />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
