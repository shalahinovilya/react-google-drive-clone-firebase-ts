import React, {useState} from 'react';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import {Input} from '@mui/material';
import { InputLabel } from '@mui/material';
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../FirebaseConfig";
import UploadingFiles from './UploadingFiles'
import {uploadingFiles} from "../../interfaces";
import {createUUID} from "../../utils";


interface AddFileBtnProps {
    folder: {
        id: string,
        parentId: string,
        folderName: string,
        path: [{id: string | null, name: string}]
    } | null
}

const AddFileBtn = ({folder} : AddFileBtnProps) => {

    const documentRef = collection(db, 'files');

    const [uploadingFiles, setUploadingFiles] = useState<uploadingFiles[]>([])

    const closeUploadingItem = (id: string) => {
        setUploadingFiles(uploadingFiles.filter(file => file.id !== id))
    }


    const uploadFile = (e: React.FormEvent<EventTarget>) => {

        const target = e.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];

        const id = createUUID()
        const path = folder?.path ? folder?.path?.map(el => el.name).join('/') + '/' : '/'

        setUploadingFiles(prevState => [...prevState, {id: id, name: file.name, progress: 0}])

        const storage = getStorage();
        const storageRef = ref(storage, path + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadingFiles(prevUploadingFiles => {
                    return prevUploadingFiles.map(uploadingFile => {
                        if (uploadingFile.id === id) {
                            return {...uploadingFile, progress: progress}
                        }
                        return uploadingFile
                    })
                })
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        break;
                    case 'storage/unknown':
                        break;
                }
            },
            () => {

                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    addDoc(documentRef, {
                        url: downloadURL,
                        name: file.name,
                        folderId: folder?.id || null
                    })
                });
            }
        );
    }

    return (
        <>
            <InputLabel
                sx={{cursor: 'pointer'}}
                htmlFor="selectFile">
                <NoteAddIcon sx={{fontSize: 45}} />
            </InputLabel>
            <Input
                id="selectFile"
                type="file"
                sx={{opacity: 0, left: '-9999', position: 'absolute'}}
                onChange={e => uploadFile(e)}
           />
            <UploadingFiles closeUploadingItem={closeUploadingItem} files={uploadingFiles} />
        </>
    );
};

export default AddFileBtn;