import React, { useState } from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Link,
  Box,
  Paper
} from '@mui/material';

const AuthPage = ({ isSignup }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login/signup logic
    console.log('Form submitted', { email, password, username, confirmPassword });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          {isSignup ? 'Sign Up' : 'Login'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Username (for signup) */}
            {isSignup && (
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Grid>
            )}

            {/* Email */}
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>

            {/* Password */}
            <Grid item xs={12}>
              <TextField
                label="Password"
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Grid>

            {/* Confirm Password (for signup) */}
            {isSignup && (
              <Grid item xs={12}>
                <TextField
                  label="Confirm Password"
                  fullWidth
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Grid>
            )}

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                {isSignup ? 'Sign Up' : 'Login'}
              </Button>
            </Grid>

            {/* Switch between login and signup */}
            <Grid item xs={12} textAlign="center">
              <Typography variant="body2">
                {isSignup ? 'Already have an account?' : "Don't have an account?"}
                <Link href={isSignup ? '/login' : '/signup'} color="primary" ml={1}>
                  {isSignup ? 'Login here' : 'Sign up here'}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AuthPage;
