

import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Dashboard as DashboardIcon, Task as TaskIcon, Assignment as AssignmentIcon, CalendarToday as CalendarTodayIcon } from '@mui/icons-material';

const StatisticsCards = () => {
  // Sample data
  const stats = {
    users: 5,
    tenders: 6,
    ongoingProjects: 14,
    upcomingTasks: 9,
  };

  return (
    <Grid container spacing={4}>
      {/* Total Users */}
      <Grid item xs={12} sm={6} md={3}>
        <Card className="bg-blue-100 shadow-lg hover:shadow-xl transition-shadow rounded-lg border border-blue-200">
          <CardContent className="flex items-center p-6">
            <DashboardIcon fontSize="large" className="text-blue-600 mr-4" />
            <div>
              <Typography variant="h5" className="text-blue-800 font-semibold">Total Users</Typography>
              <Typography variant="h2" className="text-blue-900 font-bold">{stats.users}</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* New Tenders */}
      <Grid item xs={12} sm={6} md={3}>
        <Card className="bg-green-100 shadow-lg hover:shadow-xl transition-shadow rounded-lg border border-green-200">
          <CardContent className="flex items-center p-6">
            <TaskIcon fontSize="large" className="text-green-600 mr-4" />
            <div>
              <Typography variant="h5" className="text-green-800 font-semibold">New Tenders</Typography>
              <Typography variant="h2" className="text-green-900 font-bold">{stats.tenders}</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Ongoing Projects */}
      <Grid item xs={12} sm={6} md={3}>
        <Card className="bg-orange-100 shadow-lg hover:shadow-xl transition-shadow rounded-lg border border-orange-200">
          <CardContent className="flex items-center p-6">
            <AssignmentIcon fontSize="large" className="text-orange-600 mr-4" />
            <div>
              <Typography variant="h5" className="text-orange-800 font-semibold">Ongoing Projects</Typography>
              <Typography variant="h2" className="text-orange-900 font-bold">{stats.ongoingProjects}</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Upcoming Tasks */}
      <Grid item xs={12} sm={6} md={3}>
        <Card className="bg-yellow-100 shadow-lg hover:shadow-xl transition-shadow rounded-lg border border-yellow-200">
          <CardContent className="flex items-center p-6">
            <CalendarTodayIcon fontSize="large" className="text-yellow-600 mr-4" />
            <div>
              <Typography variant="h5" className="text-yellow-800 font-semibold">Upcoming Tasks</Typography>
              <Typography variant="h2" className="text-yellow-900 font-bold">{stats.upcomingTasks}</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default StatisticsCards;
