import { render, screen } from '@testing-library/react'
import { GlobalProvider } from './GlobalContext'

test('renders its children', () => {
    render(
        <GlobalProvider>
            <div>testDivContent</div>
        </GlobalProvider>
    )
    const element = screen.getByText(/testDivContent/i)
    expect(element).toBeInTheDocument()
})
