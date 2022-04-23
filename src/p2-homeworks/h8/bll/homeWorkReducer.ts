import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: HomeWorkReducerType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'SORT-BY-NAME': {
            // need to fix
            let newState = [...state]
            return newState.sort((a, b) => a.name < b.name ? -1 : 1)
        }
        case 'SORT-BY-NAME-REVERS': {
            // need to fix
            let newState = [...state]
            return newState.sort((a, b) => a.name < b.name ? 1 : -1)
        }
        case 'CHECK-MAJORITY': {
            // need to fix
            let newState = [...state]
            return newState.filter(el => el.age >= 18)
        }
        default:
            return state
    }
}

type HomeWorkReducerType = SortUsersByNameACType | SortUsersByNameReversACType | checkMajorityACType

type SortUsersByNameACType = ReturnType<typeof sortUsersByNameAC>
export const sortUsersByNameAC = () => {
    return {
        type: "SORT-BY-NAME",
        payload: "up"
    } as const
}

type SortUsersByNameReversACType = ReturnType<typeof sortUsersByReversNameAC>
export const sortUsersByReversNameAC = () => {
    return {
        type: "SORT-BY-NAME-REVERS",
        payload: "down"
    } as const
}

type checkMajorityACType = ReturnType<typeof checkMajorityAC>
export const checkMajorityAC = () => {
    return {
        type: "CHECK-MAJORITY",
        payload: 18
    } as const
}



