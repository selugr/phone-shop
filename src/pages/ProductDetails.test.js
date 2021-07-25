import { render, screen } from '@testing-library/react'
import ProductDetails from './ProductDetails'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalProvider } from '../components/GlobalContext'

test('renders details page', () => {
    render(
        <GlobalProvider>
            <Router>
                <ProductDetails/>
            </Router>
        </GlobalProvider>
    )
    setTimeout(() => {
        const element = screen.getByText(/PRICE/i)
        expect(element).toBeInTheDocument()
    }, 2000)
})
