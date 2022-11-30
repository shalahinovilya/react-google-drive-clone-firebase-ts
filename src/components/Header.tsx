import React from 'react';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddFolderBtn from "./folder/AddFolderBtn";
import AddFileBtn from "./file/AddFileBtn";
import {useLocation} from "react-router-dom";

const Header = () => {

    const location = useLocation()
    const folder = location.state

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{background: 'white'}} position="static">
                <Toolbar>
                    <Typography
                        sx={{ flexGrow: 1, fontSize: 28 }}
                        color="primary"
                    >
                        Drive
                    </Typography>
                    <>
                        <AddFolderBtn folder={folder}/>
                        <AddFileBtn folder={folder}/>
                    </>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;