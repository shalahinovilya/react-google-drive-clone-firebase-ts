import {Action, ActionType, driveState} from "./types/drive";


const defaultState: driveState = {
    folderId: null,
    folder: null,
    folders: [],
    files: [],
}

export const driveReducer = (state = defaultState, action: Action): driveState => {
    switch (action.type) {
        case ActionType.SET_FILES:
            return {...state, files: action?.payload?.files || []}
        case ActionType.SET_FOLDERS:
            return {...state, folders: action?.payload?.folders || []}
        case ActionType.SET_CURRENT_FOLDER:
            return {folderId: action?.payload?.folderId || null, folder: action?.payload?.folder || null, folders: [], files: []}
        case ActionType.UPDATE_FOLDER:
            return {...state, folder: action?.payload?.folder || {}}

        default:
            return state
    }
}