import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import style from './index.module.css'

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
      <ListItem className={style.list} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link className={style.btn} to="/"><ListItemText primary="Home"/></Link>
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link className={style.btn} to="/about"><ListItemText primary="About"/></Link>
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link className={style.btn} to="/contact"><ListItemText primary="Contact"/></Link>
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link className={style.btn} to="/login"><ListItemText primary="Login"/></Link>
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link className={style.btn} to="/register"><ListItemText primary="Register"/></Link>
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link className={style.btn} to="/services"><ListItemText primary="Services"/></Link>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box className={style.items} sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: '#fff' }}>
                <Link className={style.item} to="/">Home</Link>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Link className={style.item} to="/about">About</Link>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Link className={style.item} to="/contact">Contact</Link>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Link className={style.item} to="/login">Login</Link>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Link className={style.item} to="/register">Register</Link>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Link className={style.item} to="/services">Services</Link>
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;