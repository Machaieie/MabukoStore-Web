import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { ExitToApp, Edit } from '@mui/icons-material';

const TopbarContainer = styled('div')({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    
  };

  const handleEditProfile = () => {
    // Implement your edit profile logic here
    // For now, just close the menu
    handleMenuClose();
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <TopbarContainer>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <Avatar alt="User Avatar" src="https://example.com/user-avatar.jpg" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleEditProfile}>
              <Edit fontSize="small" sx={{ marginRight: 1 }} />
              Editar Perfil
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ExitToApp fontSize="small" sx={{ marginRight: 1 }} />
              Sair
            </MenuItem>
          </Menu>
        </TopbarContainer>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
