import { NavLink } from 'react-router-dom'
import Price from '../Price/Price'
import './Item.css'

const Item = ({ product }) => {
    return (
        <article>
            <NavLink className="item" exact to={product.id} >
                <div className="picture">
                    <img src={product.imgUrl} alt={product.model} />
                </div>
                <div className="info">
                    <h2>{product.model}</h2>
                    <h3 className="font-sm">{product.brand}</h3>
                    <Price price={product.price} />
                </div>
            </NavLink>
        </article>
    )
}

export default Item
