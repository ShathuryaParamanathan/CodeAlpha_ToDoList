import React from 'react';
import { Box, Typography } from '@mui/material';

const NavBar2 = (props) => {
  return (
    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 20px',
        backgroundColor: '#1976d2', // Primary color of Material-UI
        color: '#fff', // White text color
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
      }}
    >
      <Typography variant="h4" sx={{ flexGrow: 1, textAlign: 'center' }}>
        {props.heading}
      </Typography>
    </Box>
  );
}

export default NavBar2;
