import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Search from './Search'

test('renders search input', () => {
    render(<Search handleFilter={() => {}} />)

    const element = screen.getByPlaceholderText('Search')
    expect(element).toBeInTheDocument()
})

test('Writing a letter calls event handler once', () => {
    const mockHandler = jest.fn()
    render(<Search handleFilter={mockHandler} />)

    const element = screen.getByPlaceholderText('Search')
    userEvent.type(element, 'A')
    expect(mockHandler).toHaveBeenCalledTimes(1)
})
