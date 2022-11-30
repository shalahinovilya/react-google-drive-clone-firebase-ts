import React from 'react';
import {Grid, styled} from "@mui/material";
import firebase from "firebase/compat";
import FolderIcon from '@mui/icons-material/Folder';
import {Link} from "react-router-dom";
import {FolderItemStyled} from "./styledItems";


interface FolderItemProps {
    folder : firebase.firestore.DocumentData
}

const FolderItem = ({folder} : FolderItemProps) => {

    return (
        <Grid item xs={2} >
            <Link
               to={`/${folder.id}`}
               state={folder}
            >
                <FolderItemStyled sx={{cursor: 'pointer'}} elevation={3}>
                    <FolderIcon sx={{marginRight: 1}} /> {folder?.folderName?.length < 20 ? folder.folderName : folder?.folderName?.slice(0, 20) + '...'}
                </FolderItemStyled>
            </Link>
        </Grid>
    );
};

export default FolderItem;