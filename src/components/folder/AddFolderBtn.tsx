import React, {useState} from 'react';
import {Button} from '@mui/material';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import CreateFolderModal from "../CreateFolderModal";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../FirebaseConfig";
import {createUUID} from "../../utils";
import {RootState} from "../../pages/Drive";


interface AddFolderBtnProps {
    folder: {
        id: string,
        parentId: string,
        folderName: string,
        path: [{name: string, id: number}]
    } | null
}


const AddFolderBtn = ({folder}: AddFolderBtnProps) => {

    const documentRef = collection(db, 'folders');

    const [open, setOpen] = useState(false)

    const createFolder = async (folderName: string) => {
        if (folderName) {
            const id = createUUID()
            await addDoc(documentRef, {
                id,
                parentId: folder?.id || null,
                folderName: folderName,
                path: folder ? [...folder.path, {name: folderName, id}] :
                    [{name: RootState.folderName, id: RootState.id}, {name: folderName, id}]
            })
            await handleClose()
        }
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <>
            <Button onClick={handleOpen}>
                <CreateNewFolderIcon sx={{fontSize: 45}} />
            </Button>
            <CreateFolderModal
                open={open}
                handleClose={handleClose}
                createFolder={createFolder}
            />
        </>
    );
};

export default AddFolderBtn;