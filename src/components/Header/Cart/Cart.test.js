import { render, screen, waitFor } from '@testing-library/react'
import Cart from './Cart'
import { GlobalProvider } from '../../GlobalContext'

test('renders cart counter', async () => {
    render(
        <GlobalProvider>
            <Cart/>
        </GlobalProvider>
    )
    const counter = screen.getByText(/^\d+$/i)
    await waitFor(() => {
        expect(counter).toBeInTheDocument()
    })
})
