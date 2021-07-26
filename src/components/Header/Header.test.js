import { render, screen, waitFor } from '@testing-library/react'
import Header from './Header'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalProvider } from '../GlobalContext'

test('renders logo content', async () => {
    render(
        <GlobalProvider>
            <Router>
                <Header/>
            </Router>
        </GlobalProvider>
    )
    await waitFor(() => {
        const linkElement = screen.getByText(/The Phone Shop/i)
        expect(linkElement).toBeInTheDocument()
    })
})
