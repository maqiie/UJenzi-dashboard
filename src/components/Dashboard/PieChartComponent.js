// import React from 'react';
// import { Card, CardContent, Typography } from '@mui/material';
// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// const PieChartComponent = () => {
//   const data = [
//     { name: 'Group A', value: 400 },
//     { name: 'Group B', value: 300 },
//     { name: 'Group C', value: 300 },
//     { name: 'Group D', value: 200 },
//   ];

//   return (
//     <Card sx={{ boxShadow: 3, '&:hover': { boxShadow: 6 }, borderRadius: 2, p: 2 }}>
//       <CardContent>
//         <Typography variant="h5" color="text.primary" gutterBottom>User Distribution</Typography>
//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie
//               data={data}
//               dataKey="value"
//               outerRadius={120}
//               fill="#8884d8"
//             >
//               {data.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8884d8' : '#82ca9d'} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </CardContent>
//     </Card>
//   );
// };

// export default PieChartComponent;

import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Card, CardContent, Typography } from '@mui/material';

// Define color scheme for the pie chart
const colors = ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'];

const PieChartComponent = () => {
  const data = [
    { name: 'Supervisor A', tasks: 20 },
    { name: 'Supervisor B', tasks: 35 },
    { name: 'Supervisor C', tasks: 15 },
    { name: 'Supervisor D', tasks: 30 },
  ];

  // Prepare data for ApexCharts
  const series = data.map(item => item.tasks);
  const labels = data.map(item => item.name);

  const chartOptions = {
    chart: {
      type: 'donut',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    labels: labels,
    colors: colors,
    legend: {
      show: true,
      position: 'right',
      offsetY: 0,
      fontSize: '14px',
      fontFamily: 'Roboto, Arial',
      labels: {
        colors: '#333',
      },
    },
    tooltip: {
      theme: 'dark',
      style: {
        fontSize: '14px',
        fontFamily: 'Roboto, Arial',
      },
      onDatasetHover: {
        highlightDataSeries: true,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '16px',
              color: '#333',
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: '20px',
              color: '#333',
              offsetY: 10,
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Total',
              color: '#333',
              fontSize: '16px',
              fontWeight: 600,
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 250,
          },
          legend: {
            position: 'bottom',
            offsetY: 0,
          },
        },
      },
    ],
  };

  return (
    <Card 
      sx={{ 
        boxShadow: 6, 
        borderRadius: 2, 
        p: 2, 
        backgroundColor: '#ffffff', 
        border: '1px solid #e0e0e0',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow: 12,
          transform: 'scale(1.02)',
        },
      }} 
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
    >
      <CardContent>
        <Typography 
          variant="h5" 
          className="text-gray-800 font-semibold mb-4"
        >
          Project Supervisors' Workload
        </Typography>
        <div className="flex justify-center mb-6">
          <div className="w-full" style={{ height: '300px' }}>
            <ApexCharts
              options={chartOptions}
              series={series}
              type="donut"
              height={300}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className={`mr-2 block h-3 w-3 rounded-full`} style={{ backgroundColor: colors[index] }}></span>
              <p className="text-sm font-medium text-black dark:text-white">
                {item.name} <span className="font-normal">({item.tasks} tasks)</span>
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PieChartComponent;
