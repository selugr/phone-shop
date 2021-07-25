import { IoPricetagsOutline } from 'react-icons/io5'
import './Price.css'

const Price = ({ price }) => {
    return (
        <p className="price">
            <IoPricetagsOutline className="mr"/>
            {price ? price + '€' : 'Not available'}
        </p>
    )
}

export default Price
