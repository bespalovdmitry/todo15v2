export type RequestStatusType = 'idle' | 'loading' | 'success' | 'filed'

const initialState = {
    status: 'success' as RequestStatusType,
    error: null as null | string
}
type InitialStateType = typeof initialState
export type ActionAppType =  SetAppStatusACType | SetErrorACType
export const appReducer = (state: InitialStateType = initialState, action: ActionAppType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

export type SetAppStatusACType = ReturnType<typeof SetAppStatusAC>
export const SetAppStatusAC = (status: RequestStatusType) => {
    return {
        type: 'APP/SET-STATUS',
        status
    } as const
}

export type SetErrorACType = ReturnType<typeof SetErrorAC>
export const SetErrorAC = (error: null | string) => {
    return {
        type: 'SET-ERROR', error
    } as const
}