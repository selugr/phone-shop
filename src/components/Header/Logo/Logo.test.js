import { render, screen } from '@testing-library/react'
import Logo from './Logo'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders logo content', () => {
    render(
        <Router>
            <Logo/>
        </Router>
    )
    const linkElement = screen.getByText(/The Phone Shop/i)
    expect(linkElement).toBeInTheDocument()
})
