// import React from 'react';
// import { Card, CardContent, Typography } from '@mui/material';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const LineChartComponent = () => {
//   const data = [
//     { name: 'Jan', pv: 2400, uv: 2400 },
//     { name: 'Feb', pv: 1398, uv: 2210 },
//     { name: 'Mar', pv: 9800, uv: 2290 },
//     { name: 'Apr', pv: 3908, uv: 2000 },
//     { name: 'May', pv: 4800, uv: 2181 },
//     { name: 'Jun', pv: 3800, uv: 2500 },
//     { name: 'Jul', pv: 4300, uv: 2100 },
//   ];

//   return (
//     <Card sx={{ boxShadow: 3, '&:hover': { boxShadow: 6 }, borderRadius: 2, p: 2 }}>
//       <CardContent>
//         <Typography variant="h5" color="text.primary" gutterBottom>Sales Analytics</Typography>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="pv" stroke="#8884d8" />
//             <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//           </LineChart>
//         </ResponsiveContainer>
//       </CardContent>
//     </Card>
//   );
// };

// export default LineChartComponent;
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
    <Card 
      sx={{ 
        boxShadow: 3, 
        '&:hover': { boxShadow: 6 }, 
        borderRadius: 2, 
        p: 2, 
        backgroundColor: 'white', 
        border: '1px solid #e0e0e0' 
      }} 
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
    >
      <CardContent>
        <Typography variant="h5" className="text-gray-800 font-semibold mb-4">Projects Analytics</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#8884d8' }} 
              tickLine={{ stroke: '#ddd' }} 
              axisLine={{ stroke: '#ddd' }}
            />
            <YAxis 
              tick={{ fill: '#8884d8' }} 
              tickLine={{ stroke: '#ddd' }} 
              axisLine={{ stroke: '#ddd' }}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd' }} 
              labelStyle={{ color: '#8884d8' }} 
              itemStyle={{ color: '#8884d8' }} 
            />
            <Legend 
              wrapperStyle={{ bottom: 0, left: 0, right: 0 }} 
              iconType="square" 
              iconSize={14}
            />
            <Line 
              type="monotone" 
              dataKey="pv" 
              stroke="#8884d8" 
              strokeWidth={3} 
              dot={{ stroke: '#8884d8', strokeWidth: 2, r: 4 }} 
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="uv" 
              stroke="#82ca9d" 
              strokeWidth={3} 
              dot={{ stroke: '#82ca9d', strokeWidth: 2, r: 4 }} 
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LineChartComponent;
