import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Sample data for the pie chart
const data = [
  { name: 'Supervisor A', value: 400 },
  { name: 'Supervisor B', value: 300 },
  { name: 'Supervisor C', value: 300 },
  { name: 'Supervisor D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const tableData = [
  { name: 'Supervisor A', workload: 400, department: 'Sales' },
  { name: 'Supervisor B', workload: 300, department: 'Marketing' },
  { name: 'Supervisor C', workload: 300, department: 'Development' },
  { name: 'Supervisor D', workload: 200, department: 'HR' },
];

const SupervisorsPieChart = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4, p: 3, bgColor: '#fff', borderRadius: 2, boxShadow: 1 }}>
      {/* Pie Chart */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Supervisors' Workload
        </Typography>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="top" align="right" />
        </PieChart>
      </Box>

      {/* Table */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Supervisor Details
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Workload</TableCell>
                <TableCell>Department</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.workload}</TableCell>
                  <TableCell>{row.department}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default SupervisorsPieChart;

