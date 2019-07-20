import { SET_ONLINE_FLAG_ACTION } from "./actions";
import { UserSettings, initialUserSettings } from ".";

export const userReducer = (state: UserSettings = initialUserSettings, action: any): UserSettings => {
    switch (action.type) {
        
        case SET_ONLINE_FLAG_ACTION:
            return {...state, isOnline: action.payload.isOnline}

        default:
            return state
    }
}