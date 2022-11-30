import React from 'react';
import {Grid} from "@mui/material";
import FolderItem from "./FolderItem";
import {useAppSelector} from "../../store/hooks";


const FolderList = () => {

    const folders = useAppSelector(state  => state.drive.folders)

    return (
        <Grid sx={{margin: '3rem 3rem 3rem 0rem'}} container spacing={2}>
            {folders.map(folder => (
                <FolderItem key={folder.id} folder={folder} />
            ))}
        </Grid>
    );
};

export default FolderList;