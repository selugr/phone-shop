import { useReducer } from 'react'

export const ACTIONS = {
    SETID: 'setId',
    SETCOLOR: 'setColor',
    SETSTORAGE: 'setStorage'
}

export const useProductOptions = () => {
    const initialState = {
        id: null,
        colorCode: null,
        storageCode: null
    }

    return useReducer((state, action) => {
        switch (action.type) {
        case ACTIONS.SETID:
            return {
                id: action.payload.id,
                colorCode: state.colorCode,
                storageCode: state.storageCode
            }
        case ACTIONS.SETCOLOR:
            return {
                id: state.id,
                colorCode: action.payload.colorCode,
                storageCode: state.storageCode
            }
        case ACTIONS.SETSTORAGE:
            return {
                id: state.id,
                colorCode: state.colorCode,
                storageCode: action.payload.storageCode
            }
        default:
            return state
        }
    }, initialState)
}
