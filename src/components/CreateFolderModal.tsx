import React, {useState} from 'react';
import {Box, Button, Input, Modal, Typography} from "@mui/material";

interface FolderModalProps {
    open: boolean;
    handleClose (): void;
    createFolder (createFolder: string): void;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CreateFolderModal = ({open, handleClose, createFolder}: FolderModalProps) => {

    const [folderName, setFolderName] = useState('')

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography sx={{textAlign: 'center'}} id="modal-modal-title" variant="h6" component="h2">
                   Folder Name
                </Typography>
                <Input
                    value={folderName}
                    placeholder="folder name"
                    onChange={e => setFolderName(e.target.value)}
                />
                <Button onClick={() => createFolder(folderName)} color="primary" sx={{marginTop: '2rem'}}>
                    Create Folder
                </Button>
            </Box>
        </Modal>
    );
};

export default CreateFolderModal;