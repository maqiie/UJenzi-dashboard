

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faChartLine, faFileAlt, faCalendarAlt, faCog } from '@fortawesome/free-solid-svg-icons';

// const Sidebar = () => {
//   return (
//     <div className="bg-gray-900 text-white w-64 h-screen p-6">
//       <h1 className="text-4xl font-bold mb-10 text-center tracking-wide">Dashboard</h1>
//       <ul className="space-y-6">
//         <li className="flex items-center hover:bg-gray-700 transition-colors duration-300 p-2 rounded-lg">
//           <FontAwesomeIcon icon={faHome} className="mr-4 text-xl" />
//           <Link to="/" className="text-white text-lg hover:text-gray-400">Home</Link>
//         </li>
//         <li className="flex items-center hover:bg-gray-700 transition-colors duration-300 p-2 rounded-lg">
//           <FontAwesomeIcon icon={faChartLine} className="mr-4 text-xl" />
//           <Link to="/analytics" className="text-white text-lg hover:text-gray-400">Analytics</Link>
//         </li>
//         <li className="flex items-center hover:bg-gray-700 transition-colors duration-300 p-2 rounded-lg">
//           <FontAwesomeIcon icon={faFileAlt} className="mr-4 text-xl" />
//           <Link to="/reports" className="text-white text-lg hover:text-gray-400">Reports</Link>
//         </li>
        // <li className="flex items-center hover:bg-gray-700 transition-colors duration-300 p-2 rounded-lg">
        //   <FontAwesomeIcon icon={faCalendarAlt} className="mr-4 text-xl" />
        //   <Link to="/calendar" className="text-white text-lg hover:text-gray-400">Calendar</Link>
        // </li>
//         <li className="flex items-center hover:bg-gray-700 transition-colors duration-300 p-2 rounded-lg">
//           <FontAwesomeIcon icon={faCog} className="mr-4 text-xl" />
//           <Link to="/settings" className="text-white text-lg hover:text-gray-400">Settings</Link>
//         </li>
//         <li className="flex items-center hover:bg-gray-700 transition-colors duration-300 p-2 rounded-lg">
//           <FontAwesomeIcon icon={faCog} className="mr-4 text-xl" />
//           <Link to="/Archive" className="text-white text-lg hover:text-gray-400">Archive</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, ListItemText, Drawer, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';
import ArchiveIcon from '@mui/icons-material/Archive';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Sidebar = () => {
  const location = useLocation();

  const sidebarLinks = [
    { path: '/', label: 'Home', icon: <HomeIcon /> },
    { path: '/dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { path: '/analytics', label: 'Analytics', icon: <AnalyticsIcon /> },
    { path: '/calendar', label: 'Calendar', icon: <CalendarTodayIcon /> },
    { path: '/archive', label: 'Archive', icon: <ArchiveIcon /> },
    { path: '/settings', label: 'Settings', icon: <SettingsIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#444',  // Dark background
          color: '#fff',  // White text
        },
      }}
    >
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        <List>
          {/* Adding margin-top to create space between Home and the first link */}
          <ListItem
            button
            sx={{
              marginBottom: '1rem', // Space between Home and the first link
              color: location.pathname === '/' ? '#90caf9' : '#fff',  // Light blue for selected, white for others
              '&:hover': {
                backgroundColor: '#333',  // Dark hover effect
              },
            }}
            selected={location.pathname === '/'}
          >
            <HomeIcon />
            <ListItemText sx={{ ml: 2 }} primary="Home" />
          </ListItem>
          {sidebarLinks.slice(1).map((link) => (
            <ListItem
              button
              key={link.path}
              component={Link}
              to={link.path}
              selected={location.pathname === link.path}
              sx={{
                color: location.pathname === link.path ? '#90caf9' : '#fff',  // Light blue for selected, white for others
                '&:hover': {
                  backgroundColor: '#333',  // Dark hover effect
                },
              }}
            >
              {link.icon}
              <ListItemText sx={{ ml: 2 }} primary={link.label} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Bottom Section for Logout and Sign-in/Sign-up */}
      <Box sx={{ p: 2, borderTop: '1px solid #333' }}>
        <List>
          <ListItem
            button
            component={Link}
            to="/login"
            sx={{
              color: '#fff',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            <LoginIcon sx={{ color: '#fff' }} />
            <ListItemText sx={{ ml: 2 }} primary="Sign In" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/signup"
            sx={{
              color: '#fff',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            <PersonAddIcon sx={{ color: '#fff' }} />
            <ListItemText sx={{ ml: 2 }} primary="Sign Up" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/logout"
            sx={{
              color: '#fff',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            <LogoutIcon sx={{ color: '#fff' }} />
            <ListItemText sx={{ ml: 2 }} primary="Logout" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
