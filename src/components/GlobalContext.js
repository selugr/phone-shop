import { createContext, useContext, useReducer } from 'react'

export const GLOBALACTIONS = {
    SET_PRODUCTS: 'setProducts',
    SET_PRODUCT: 'setProduct',
    SET_TOTAL: 'setTotal'
}

const useGlobal = () => {
    const initialState = {
        cart: 0,
        products: [],
        product: null
    }

    return useReducer((state, action) => {
        switch (action.type) {
        case GLOBALACTIONS.SET_TOTAL:
            return {
                cart: action.payload.cart,
                products: state.products,
                product: state.product
            }
        case GLOBALACTIONS.SET_PRODUCTS:
            return {
                cart: state.cart,
                products: action.payload.products,
                product: state.product
            }
        case GLOBALACTIONS.SET_PRODUCT:
            return {
                cart: state.cart,
                products: state.products,
                product: action.payload.product
            }
        default:
            return state
        }
    }, initialState)
}

const GlobalContext = createContext()
const GlobalUpdateContext = createContext()

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export const useGlobalUpdateContext = () => {
    return useContext(GlobalUpdateContext)
}

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useGlobal()

    return (
        <GlobalContext.Provider value={state}>
            <GlobalUpdateContext.Provider value={dispatch}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    )
}
