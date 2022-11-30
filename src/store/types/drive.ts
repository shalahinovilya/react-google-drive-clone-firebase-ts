import firebase from "firebase/compat";

export interface driveState {
    folderId: number | null
    folder: {} | null
    folders: firebase.firestore.DocumentData[]
    files: firebase.firestore.DocumentData[]
}

export enum ActionType {
    SET_FILES = "SET_FILES",
    SET_FOLDERS = "SET_FOLDERS",
    SET_CURRENT_FOLDER = "SET_CURRENT_FOLDER",
    UPDATE_FOLDER = "UPDATE_FOLDER",
}

interface setFilesA {
    type: ActionType.SET_FILES;
    payload?: {files: firebase.firestore.DocumentData[]}
}

interface setFoldersA  {
    type: ActionType.SET_FOLDERS;
    payload?: {folders: firebase.firestore.DocumentData[]}
}

interface setCurrentFolderA  {
    type: ActionType.SET_CURRENT_FOLDER;
    payload?: {folderId: number | null, folder: null | {}}
}

interface updateFolderA  {
    type: ActionType.UPDATE_FOLDER;
    payload?: {folder: {} | null}
}

export type Action = setFilesA | setFoldersA | setCurrentFolderA | updateFolderA