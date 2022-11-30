import React from 'react';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';
import {useAuth} from "../contexts/AuthContext";



const NavBar = () => {

    const {currentUser, signOut, signIn} = useAuth()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    {currentUser ? (
                        <Button onClick={signOut} color="inherit">Logout</Button>
                    ) : (
                        <Button onClick={signIn} color="inherit">Login</Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;


