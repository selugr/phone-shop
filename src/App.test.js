import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

test('renders title', async () => {
    // act(() => {
    render(<App />)
    const title = screen.getByText(/The Phone Shop/i)
    await waitFor(() => {
        expect(title).toBeInTheDocument()
    })
    // })
})
