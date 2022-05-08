import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore as createStore} from "redux";

const reducers = combineReducers({
    loading: loadingReducer,
})

export const store = createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>

 //@ts-ignore
window.store = store // for dev
