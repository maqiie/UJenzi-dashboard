import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

// Sample data
const tenders = [
  { id: 1, title: 'Tender A', amount: '$5000', deadline: '2024-10-01', status: 'Open' },
  { id: 2, title: 'Tender B', amount: '$3000', deadline: '2024-10-15', status: 'Closed' },
  { id: 3, title: 'Tender C', amount: '$7000', deadline: '2024-11-01', status: 'Open' },
  { id: 4, title: 'Tender D', amount: '$2000', deadline: '2024-09-30', status: 'Cancelled' },
];

const TendersTable = () => {
  return (
    <Box sx={{ p: 3, bgColor: '#fff', borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Tenders List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Deadline</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tenders.map((tender) => (
              <TableRow key={tender.id}>
                <TableCell>{tender.id}</TableCell>
                <TableCell>{tender.title}</TableCell>
                <TableCell>{tender.amount}</TableCell>
                <TableCell>{tender.deadline}</TableCell>
                <TableCell>{tender.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TendersTable;
