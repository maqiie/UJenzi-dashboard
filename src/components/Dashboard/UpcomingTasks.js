import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

// Sample data for testing
const mockTasks = [
  { title: 'Complete Report', dueDate: '2024-09-15', status: 'Pending' },
  { title: 'Submit Proposal', dueDate: '2024-09-20', status: 'In Progress' },
  { title: 'Prepare Presentation', dueDate: '2024-09-25', status: 'Completed' },
];

const UpcomingTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Mock data usage for testing
    setTasks(mockTasks);

    // Uncomment and use the following line to fetch data from your API
    // axios.get('/api/upcoming-tasks') // Adjust endpoint as needed
    //   .then(response => setTasks(response.data))
    //   .catch(error => console.error("There was an error fetching the tasks!", error));
  }, []);

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Upcoming Tasks
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Task</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task, index) => (
                <TableRow key={index}>
                  <TableCell>{task.title}</TableCell>
                  <TableCell>{task.dueDate}</TableCell>
                  <TableCell>{task.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default UpcomingTasks;
