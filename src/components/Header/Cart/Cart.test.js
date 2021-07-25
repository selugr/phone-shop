import { render, screen } from '@testing-library/react'
import Cart from './Cart'
import { GlobalProvider } from '../../GlobalContext'

test('renders cart counter', () => {
    render(
        <GlobalProvider>
            <Cart/>
        </GlobalProvider>
    )
    const counter = screen.getByText(/^\d+$/i)
    expect(counter).toBeInTheDocument()
})
