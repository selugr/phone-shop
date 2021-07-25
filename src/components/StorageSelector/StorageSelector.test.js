import { fireEvent, render, screen } from '@testing-library/react'
import StorageSelector from './StorageSelector'

test('renders content', () => {
    const storages = [{ code: 2000, name: '8 GB' }]
    const selected = null

    render(<StorageSelector storages={storages} dispatch={() => {}} selected={selected}/>)

    const optionElement = screen.getByText(storages.shift().name)
    expect(optionElement).toBeInTheDocument()
})

test('component calls event handler at rendering once to set default storage if there\'s only one storage in the storages array', () => {
    const storages = [{ code: 2000, name: '8 GB' }]
    const selected = null
    const mockHandler = jest.fn()

    render(<StorageSelector storages={storages} dispatch={mockHandler} selected={selected}/>)
    expect(mockHandler).toHaveBeenCalledTimes(1)

    setTimeout(() => {
        const optionElement = screen.getByText(storages.shift().name)
        expect(optionElement.classList.contains('selected')).toBe(true)
    }, 500)
})

test('clicking an option calls event handler once', () => {
    const storages = [{ code: 2000, name: '8 GB' }, { code: 2001, name: '16 GB' }]
    const selected = null
    const mockHandler = jest.fn()

    const component = render(<StorageSelector storages={storages} dispatch={mockHandler} selected={selected}/>)
    const button = component.getByText(storages.shift().name)

    fireEvent.click(button)
    expect(mockHandler).toHaveBeenCalledTimes(1)
})
