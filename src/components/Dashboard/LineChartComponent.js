import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartComponent = () => {
  const data = [
    { name: 'Jan', pv: 2400, uv: 2400 },
    { name: 'Feb', pv: 1398, uv: 2210 },
    { name: 'Mar', pv: 9800, uv: 2290 },
    { name: 'Apr', pv: 3908, uv: 2000 },
    { name: 'May', pv: 4800, uv: 2181 },
    { name: 'Jun', pv: 3800, uv: 2500 },
    { name: 'Jul', pv: 4300, uv: 2100 },
  ];

  return (
    <Card sx={{ boxShadow: 3, '&:hover': { boxShadow: 6 }, borderRadius: 2, p: 2 }}>
      <CardContent>
        <Typography variant="h5" color="text.primary" gutterBottom>Sales Analytics</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LineChartComponent;
