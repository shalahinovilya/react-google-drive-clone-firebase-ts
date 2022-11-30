import React from 'react';
import {Grid} from "@mui/material";
import FileItem from "./FileItem";
import {useAppSelector} from "../../store/hooks";

const FileList = () => {

    const files = useAppSelector(state  => state.drive.files)

    return (
        <Grid sx={{margin: '3rem 3rem 3rem 0rem'}} container spacing={2}>
            {files.map((file, index) => (
                <FileItem
                    key={index}
                    file={file}
                />
            ))}
        </Grid>
    );
};

export default FileList;