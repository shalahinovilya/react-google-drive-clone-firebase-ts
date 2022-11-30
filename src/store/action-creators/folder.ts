import {collection, onSnapshot, query, where} from "firebase/firestore";
import {db} from "../../FirebaseConfig";
import {Dispatch} from "react";
import {Action, ActionType} from "../types/drive";

export const fetchFolders = (folder: {id: number} | null) => {

    const foldersQuery = query(collection(db, 'folders'), where('parentId', '==', folder?.id || null))

    return async (dispatch: Dispatch<Action>) => {
        try {
            onSnapshot(foldersQuery, (snapshot) => {
                dispatch({type: ActionType.SET_FOLDERS, payload: {folders: snapshot.docs.map(el => el.data())}})
            })
        } catch (e) {
            console.error(e)
        }
    }
}