const initState = {
    isLoading: false
}

type InitialStateType = typeof initState
type ActionType = LoadingActionType

export const loadingReducer = (state: InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-STATUS-LOADING': {
            return {...state, isLoading: action.payload.load}
        }
        default:
            return state
    }
}

export const loadingAC = (load: boolean): LoadingActionType => {
    return {
        type: "CHANGE-STATUS-LOADING",
        payload: {
            load
        }
    } as const
} // fix any

type LoadingActionType = {
    type: "CHANGE-STATUS-LOADING"
    payload: {
        load: boolean
    }
}