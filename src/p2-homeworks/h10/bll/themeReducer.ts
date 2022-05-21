const initState = {
    theme: "some"
}

type InitialStateType = typeof initState
type ActionType = changeThemeActionType

export const themeReducer = (state: InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state, theme: action.payload.theme}
        }
        default:
            return state
    }
}

export const changeThemeAC = (theme: string): changeThemeActionType => {
    return {
        type: "CHANGE-THEME",
        payload: {
            theme
        }
    } as const
} // fix any

type changeThemeActionType = {
    type: "CHANGE-THEME"
    payload: {
        theme: string
    }
}