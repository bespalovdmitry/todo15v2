import {SetAppStatusAC, SetAppStatusACType, SetErrorAC, SetErrorACType} from "../app/app-reduser";
import {Dispatch} from "redux";


export const handleServerNetworkError = (message: string, dispatch: ErrorUtilsDispatchType) => {
    dispatch(SetErrorAC(message))
    dispatch(SetAppStatusAC('filed'))
}

export const handleServerAppError = (data: any, dispatch: ErrorUtilsDispatchType) => {
    if (data.messages.length) {
        dispatch(SetErrorAC(data.messages[0]))
        dispatch(SetAppStatusAC('filed'))
    } else {
        dispatch(SetErrorAC('Some error occurred'))
        dispatch(SetAppStatusAC('filed'))
    }
}

type ErrorUtilsDispatchType = Dispatch<SetAppStatusACType | SetErrorACType>