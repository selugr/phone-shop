import { render, screen } from '@testing-library/react'
import Header from './Header'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalProvider } from '../GlobalContext'

test('renders logo content', () => {
    render(
        <GlobalProvider>
            <Router>
                <Header/>
            </Router>
        </GlobalProvider>
    )
    const linkElement = screen.getByText(/The Phone Shop/i)
    expect(linkElement).toBeInTheDocument()
})
