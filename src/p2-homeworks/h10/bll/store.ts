import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore as createStore} from "redux";
import {themeReducer} from "./themeReducer";
// import {themeReducer} from "../../h12/bll/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
})

export const store = createStore(reducers)

export type AppStoreType = ReturnType<typeof reducers>

 //@ts-ignore
window.store = store // for dev
