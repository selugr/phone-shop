import { render, screen } from '@testing-library/react'
import Item from './Item'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders item', () => {
    const product = {
        id: 'ZmGrkLRPXOTpxsU4jjAcv',
        brand: 'Acer',
        model: 'Iconia Talk S',
        price: '170',
        imgUrl: 'https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg'
    }
    render(
        <Router>
            <Item product={product}/>
        </Router>
    )
    const item = screen.getByText(product.model)
    expect(item).toBeInTheDocument()
})
