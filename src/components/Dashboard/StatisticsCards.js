import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Dashboard as DashboardIcon, ShoppingCart as ShoppingCartIcon, MonetizationOn as MonetizationOnIcon, AttachMoney as AttachMoneyIcon } from '@mui/icons-material';

const StatisticsCards = ({ stats }) => {
  return (
    <Grid container spacing={4}>
      {/* Total Users */}
      <Grid item xs={12} sm={6} md={3}>
        <Card className="shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg">
          <CardContent className="flex items-center">
            <DashboardIcon fontSize="large" className="text-blue-500 mr-4" />
            <div>
              <Typography variant="h5" className="text-gray-700">Total Users</Typography>
              <Typography variant="h2" className="text-gray-900 font-bold">{stats.users}</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* New Orders */}
      <Grid item xs={12} sm={6} md={3}>
        <Card className="shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg">
          <CardContent className="flex items-center">
            <ShoppingCartIcon fontSize="large" className="text-green-500 mr-4" />
            <div>
              <Typography variant="h5" className="text-gray-700">New Orders</Typography>
              <Typography variant="h2" className="text-gray-900 font-bold">{stats.orders}</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Sales */}
      <Grid item xs={12} sm={6} md={3}>
        <Card className="shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg">
          <CardContent className="flex items-center">
            <MonetizationOnIcon fontSize="large" className="text-orange-500 mr-4" />
            <div>
              <Typography variant="h5" className="text-gray-700">Sales</Typography>
              <Typography variant="h2" className="text-gray-900 font-bold">${stats.sales}</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Revenue */}
      <Grid item xs={12} sm={6} md={3}>
        <Card className="shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg">
          <CardContent className="flex items-center">
            <AttachMoneyIcon fontSize="large" className="text-yellow-500 mr-4" />
            <div>
              <Typography variant="h5" className="text-gray-700">Revenue</Typography>
              <Typography variant="h2" className="text-gray-900 font-bold">${stats.revenue}</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default StatisticsCards;
