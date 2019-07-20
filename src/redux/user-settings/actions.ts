export const SET_ONLINE_FLAG_ACTION = 'SET_ONLINE_FLAG_ACTION';

export const setOnline = (isOnline: boolean) => ({
    type: SET_ONLINE_FLAG_ACTION,
    payload: {
        isOnline
    }
})