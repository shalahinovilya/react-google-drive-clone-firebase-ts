import {Dispatch} from "react";
import {Action, ActionType} from "../types/drive";
import {collection, onSnapshot, query, where} from "firebase/firestore";
import {db} from "../../FirebaseConfig";

export const fetchFiles = (folder: {id: number} | null) => {

    const filesQuery = query(collection(db, 'files'), where('folderId', '==', folder?.id || null) )

    return async (dispatch: Dispatch<Action>) => {
        try {
            await onSnapshot(filesQuery, (snapshot) => {
                dispatch({type: ActionType.SET_FILES, payload: {files: snapshot.docs.map(el => el.data())}})
            })
        } catch (e) {
            console.error(e)
        }
    }
}