import { fireEvent, render, screen } from '@testing-library/react'
import ColorSelector from './ColorSelector'

test('renders content', () => {
    const colors = [{ code: 1000, name: 'Black' }]
    const selected = null

    render(<ColorSelector colors={colors} dispatch={() => {}} selected={selected}/>)

    const optionElement = screen.getByText(colors.shift().name)
    expect(optionElement).toBeInTheDocument()
})

test('component calls event handler at rendering once to set default color if there\'s only one color in the colors array', () => {
    const colors = [{ code: 1000, name: 'Black' }]
    const selected = null
    const mockHandler = jest.fn()

    render(<ColorSelector colors={colors} dispatch={mockHandler} selected={selected}/>)
    expect(mockHandler).toHaveBeenCalledTimes(1)

    setTimeout(() => {
        const optionElement = screen.getByText(colors.shift().name)
        expect(optionElement.classList.contains('selected')).toBeTruthy()
    }, 500)
})

test('clicking an option calls event handler once', () => {
    const colors = [{ code: 1000, name: 'Black' }, { code: 1001, name: 'Blue' }]
    const selected = null
    const mockHandler = jest.fn()

    const component = render(<ColorSelector colors={colors} dispatch={mockHandler} selected={selected}/>)
    const button = component.getByText(colors.shift().name)

    fireEvent.click(button)
    expect(mockHandler).toHaveBeenCalledTimes(1)
})
