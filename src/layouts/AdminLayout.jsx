import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidenav from '../components/Sidebar';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { CssBaseline } from '@mui/material';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  marginLeft: "150px",
  ...theme.mixins.toolbar,
}));

const AdminLayout = ({ children }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft:30 }}>
      <CssBaseline />
      <DrawerHeader />
      <Sidenav />
      {children}
      <Outlet />
    </Box>
  );
};

export default AdminLayout;
