import { useEffect } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { GLOBALACTIONS, useGlobalContext, useGlobalUpdateContext } from '../../GlobalContext'
import dataController from '../../../middlewares/dataController'
import './Cart.css'

const Cart = () => {
    const { cart } = useGlobalContext()
    const globalUpdateContext = useGlobalUpdateContext()

    useEffect(() => {
        (async () => {
            globalUpdateContext({
                type: GLOBALACTIONS.SET_TOTAL,
                payload: {
                    cart: await dataController.getCart()
                }
            })
        })()
    }, [])

    return (
        <button className="cart" onClick={(e) => e.preventDefault()}>
            <IoCartOutline className="icon" />
            <span className="counter">{cart}</span>
        </button>
    )
}

export default Cart
