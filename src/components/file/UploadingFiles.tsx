import React from 'react';
import {Box, Grid} from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import {uploadingFiles} from "../../interfaces";
import CloseIcon from '@mui/icons-material/Close';
import {UploadingFileItemStyled} from "./styledItems";
import LinearProgressWithLabel from "./LinearProgressWithLabel";


interface UploadingFilesListProps {
    files: uploadingFiles[];
    closeUploadingItem: (id: string) => void;
}

const UploadingFiles = ({files, closeUploadingItem} : UploadingFilesListProps) => {
    return (
        <Grid sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            margin: '0 0 0.1rem 0rem'
        }} container spacing={2}>
            {files.map((file, index) => (
                <Grid key={file.id} item xs={2} >
                        <UploadingFileItemStyled elevation={3}>
                            <CloseIcon
                                onClick={() => closeUploadingItem(file.id)}
                                sx={{
                                    position: 'absolute',
                                    right: 0,
                                    top: 0,
                                    cursor: 'pointer'
                            }}/>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <InsertDriveFileIcon sx={{marginRight: 1}}/>
                                <span>{file?.name?.length < 25 ? file.name : file?.name?.slice(0, 25) + '...'}</span>
                            </Box>
                            <LinearProgressWithLabel value={file.progress}/>
                        </UploadingFileItemStyled>
                </Grid>
            ))}
        </Grid>
    );
};

export default UploadingFiles;