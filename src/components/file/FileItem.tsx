import React from 'react';
import firebase from "firebase/compat";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {Grid, Link} from "@mui/material";
import {FileItemStyled} from './styledItems'


interface FileItemProps {
    file : firebase.firestore.DocumentData
}

const FileItem = ({file}: FileItemProps) => {
    return (
        <Grid item xs={2} >
            <Link
                href={file.url}
                target="_blank"
            >
                <FileItemStyled sx={{cursor: 'pointer'}} elevation={3}>
                    <InsertDriveFileIcon sx={{marginRight: 1}} />
                    {file?.name?.length < 20 ? file.name : file?.name?.slice(0, 20) + '...'}
                </FileItemStyled>
            </Link>
        </Grid>
    );
};

export default FileItem;