import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import { styled } from '@mui/system';
import logoImage from '../assets/png/logo-no-background.png';
import avatar from '../assets/png/logo-white.png';

import {
  ExpandLess,
  ExpandMore,
  Dashboard,
  Mail,
  Inbox,
  AccountCircle,
  ExitToApp,
  Edit,
  Book,
  SupervisedUserCircle,
  Store,
  Group,
  FormatListBulleted,
  PersonAddAlt1,
  AddBusiness,
  GroupAdd,
  BookmarkAdd
} from '@mui/icons-material';

const drawerWidth = 240;

const DrawerContainer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
});

const NestedListItem = styled(ListItemButton)({
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

const useStyles = styled('div')(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

function Sidebar() {
  const [openMenu, setOpenMenu] = useState({
    books: false,
    authors: false,
    publishers: false,
    users: false,
  });

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (menu) => {
    setOpenMenu((prevOpenMenu) => ({
      ...prevOpenMenu,
      [menu]: !prevOpenMenu[menu],
    }));
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // For now, just close the menu
    handleMenuClose();
  };

  const handleEditProfile = () => {
    // Implement your edit profile logic here
    // For now, just close the menu
    handleMenuClose();
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          
        </Toolbar>
      </AppBar>
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
          <ListItemButton>
            <LogoContainer>
              <LogoImage src={logoImage} alt="Logo" />
            </LogoContainer>
          </ListItemButton>
          <Divider />

          <ListItemButton component={Link} to="/dashboard">
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

        
          
          <ListItemButton onClick={() => handleMenuClick('books')}>
            <ListItemIcon>
              <Book />
            </ListItemIcon>
            <ListItemText primary="Livros" />
            {openMenu.books ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openMenu.books} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NestedListItem button component={Link} to="/addBook">
                <ListItemIcon>
                  <BookmarkAdd />
                </ListItemIcon>
                <ListItemText primary="Adicionar" />
              </NestedListItem>
              <NestedListItem button component={Link} to="/listBooks">
                <ListItemIcon>
                  <FormatListBulleted />
                </ListItemIcon>
                <ListItemText primary="Listar" />
              </NestedListItem>
            </List>
          </Collapse>

          <ListItemButton onClick={() => handleMenuClick('authors')}>
            <ListItemIcon>
              <SupervisedUserCircle  />
            </ListItemIcon>
            <ListItemText primary="Autores" />
            {openMenu.authors ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openMenu.authors} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NestedListItem button component={Link} to="/addAuthors">
                <ListItemIcon>
                  <GroupAdd />
                </ListItemIcon>
                <ListItemText primary="Adicionar" />
              </NestedListItem>
              <NestedListItem button component={Link} to="/listAuthors">
                <ListItemIcon>
                  <FormatListBulleted />
                </ListItemIcon>
                <ListItemText primary="Listar" />
              </NestedListItem>
            </List>
          </Collapse>

         <ListItemButton onClick={() => handleMenuClick('publishers')}>
            <ListItemIcon>
              <Store />
            </ListItemIcon>
            <ListItemText primary="Editoras" />
            {openMenu.publishers ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openMenu.publishers} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NestedListItem button component={Link} to="/addPublisher">
                <ListItemIcon>
                  <AddBusiness />
                </ListItemIcon>
                <ListItemText primary="Adicionar" />
              </NestedListItem>
              <NestedListItem button component={Link} to="/listPublisher">
                <ListItemIcon>
                  <FormatListBulleted />
                </ListItemIcon>
                <ListItemText primary="Listar" />
              </NestedListItem>
            </List>
          </Collapse>

          <ListItemButton onClick={() => handleMenuClick('users')}>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Usuarios" />
            {openMenu.users ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openMenu.users} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NestedListItem button component={Link} to="/addUser">
                <ListItemIcon>
                  <PersonAddAlt1 />
                </ListItemIcon>
                <ListItemText primary="Adicionar" />
              </NestedListItem>
              <NestedListItem button component={Link} to="/listusers">
                <ListItemIcon>
                  <FormatListBulleted />
                </ListItemIcon>
                <ListItemText primary="Listar" />
              </NestedListItem>
            </List>
          </Collapse>

          <ListItemButton component={Link} to="/logout">
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Sair" />
          </ListItemButton>

          
        </List>
      </DrawerContainer>
    </div>
  );
}

export default Sidebar;
