import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Divider } from '@mui/material';
import { styled } from '@mui/system';
import logoImage from '../../../assets/png/logo-no-background.png';
import { ExpandLess, ExpandMore, Dashboard, Mail, Inbox } from '@mui/icons-material';

const drawerWidth = 240;

const DrawerContainer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
});

const NestedListItem = styled(ListItem)({
  paddingLeft: (theme) => theme.spacing(4),
});

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '150px',
});

const LogoImage = styled('img')({
  width: '100%',
  height: 'auto',
});

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <DrawerContainer
      variant="permanent"
      component="nav"
      PaperProps={{
        style: {
          width: drawerWidth,
        },
      }}
      anchor="left"
    >
      <List>
        <ListItem>
          <LogoContainer>
            <LogoImage src={logoImage} alt="Logo" />
          </LogoContainer>
        </ListItem>
        <Divider />
        <ListItem  component={Link} to="/dashboard">
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/inbox">
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="Mail" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <NestedListItem button component={Link} to="/submenu1">
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Submenu 1" />
            </NestedListItem>
            <NestedListItem button component={Link} to="/submenu2">
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Submenu 2" />
            </NestedListItem>
          </List>
        </Collapse>
      </List>
    </DrawerContainer>
  );
};

export default Sidebar;
