import { createStore, combineReducers, Action, Reducer, Store } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from "./user-settings/reducer";
import { ApplicationState } from ".";


const configureStore = (): Store<ApplicationState> => {

    const rootReducer: Reducer<ApplicationState> = combineReducers({ 
        userSettings: userReducer
    })

    const store = createStore<ApplicationState, Action<any>, {}, {}>(rootReducer, composeWithDevTools());
    return store
}

export default configureStore()
