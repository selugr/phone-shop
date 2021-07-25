import { render, screen } from '@testing-library/react'
import ListOfProducts from './ListOfProducts'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalProvider } from '../components/GlobalContext'

test('renders at least a product', () => {
    render(
        <GlobalProvider>
            <Router>
                <ListOfProducts/>
            </Router>
        </GlobalProvider>
    )
    setTimeout(() => {
        const element = screen.getByText(/Acer/i)
        expect(element).toBeInTheDocument()
    }, 2000)
})
