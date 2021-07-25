import { NavLink } from 'react-router-dom'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import './Logo.css'

const Logo = () => {
    return (
        <div className="header-brand">
            <NavLink exact to="/" >
                <span className="logo">
                    <IoPhonePortraitOutline />
                </span>
                <h1>The Phone Shop</h1>
            </NavLink>
        </div>
    )
}

export default Logo
