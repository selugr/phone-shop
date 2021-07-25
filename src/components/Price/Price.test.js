import { render, screen } from '@testing-library/react'
import Price from './Price'

test('renders price', () => {
    const price = 250
    render(<Price price={price}/>)
    const element = screen.getByText(/\d+/i)
    expect(element).toBeInTheDocument()
})
