import React, { useState } from 'react';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  FormControlLabel,
  Switch
} from '@mui/material';

const SettingsPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    // Save settings logic here
    console.log('Settings saved:', { email, username, notifications });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            {/* Email Input */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
              />
            </Grid>

            {/* Username Input */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                variant="outlined"
              />
            </Grid>

            {/* Notifications Toggle */}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={notifications}
                    onChange={(e) => setNotifications(e.target.checked)}
                  />
                }
                label="Enable Notifications"
              />
            </Grid>

            {/* Save Button */}
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SettingsPage;
