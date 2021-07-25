import { render, screen } from '@testing-library/react'
import Breadcrumbs from './Breadcrumbs'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalProvider } from '../../GlobalContext'

test('renders main breadcrumb', () => {
    render(
        <GlobalProvider>
            <Router>
                <Breadcrumbs/>
            </Router>
        </GlobalProvider>
    )
    const breadcrumb = screen.getByText(/Catalogue/i)
    expect(breadcrumb).toBeInTheDocument()
})
