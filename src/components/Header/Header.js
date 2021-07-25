import Breadcrumbs from './Breadcrumbs/Breadcrumbs'
import Cart from './Cart/Cart'
import Logo from './Logo/Logo'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="header-main">
                <Logo />
                <Cart />
            </div>
            <div className="header-breadcrumbs">
                <Breadcrumbs/>
            </div>
        </header>
    )
}

export default Header
