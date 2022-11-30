import React, {useEffect} from 'react';
import {Container, Divider} from "@mui/material";
import NavBar from "../components/NavBar";
import FolderList from "../components/folder/FolderList";
import FileList from "../components/file/FileList"
import Header from "../components/Header";
import {useLocation, useParams} from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import {fetchFolders} from "../store/action-creators/folder";
import {fetchFiles} from "../store/action-creators/file";
import {useAppDispatch} from "../store/hooks";


export const RootState = {
    folderName: 'root',
    id: null,
    parentId: null,
    path: ['root']
}

const Drive = () => {

    const location = useLocation()
    const folder = location.state
    const {folderId} = useParams()

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch({type: 'SET_CURRENT_FOLDER', payload: {folderId, folder}})
    }, [folderId])

    useEffect(() => {
        if (!folder?.id) {
            dispatch({type: 'UPDATE_FOLDER', payload: {folder: RootState}})
        }
    }, [folderId])

    useEffect(() => {
        dispatch(fetchFolders(folder))
    }, [folderId])

    useEffect(() => {
        dispatch(fetchFiles(folder))
    }, [folderId])


    return (
        <>
            <NavBar/>
            <Header/>
            <Breadcrumb folder={folder}/>
            <Container maxWidth={"xl"} sx={{margin: '3rem 3rem 3rem 3rem'}}>
                <FolderList/>
                <Divider/>
                <FileList/>
            </Container>
        </>
            )

};

export default Drive;