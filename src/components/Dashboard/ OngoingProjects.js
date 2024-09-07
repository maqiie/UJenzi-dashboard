import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

// Sample data for testing
const mockProjects = [
  { name: 'Project Alpha', manager: 'Alice Smith', status: 'In Progress', deadline: '2024-09-30' },
  { name: 'Project Beta', manager: 'Bob Johnson', status: 'Delayed', deadline: '2024-10-15' },
  { name: 'Project Gamma', manager: 'Charlie Brown', status: 'Completed', deadline: '2024-08-20' },
];

const OngoingProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Mock data usage for testing
    setProjects(mockProjects);

    // Uncomment and use the following line to fetch data from your API
    // axios.get('/api/ongoing-projects') // Adjust endpoint as needed
    //   .then(response => setProjects(response.data))
    //   .catch(error => console.error("There was an error fetching the projects!", error));
  }, []);

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Ongoing Projects
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Project</TableCell>
                <TableCell>Manager</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Deadline</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project, index) => (
                <TableRow key={index}>
                  <TableCell>{project.name}</TableCell>
                  <TableCell>{project.manager}</TableCell>
                  <TableCell>{project.status}</TableCell>
                  <TableCell>{project.deadline}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default OngoingProjects;
