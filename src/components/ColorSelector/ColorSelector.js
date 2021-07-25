import { useEffect } from 'react'
import { ACTIONS } from '../../hooks/useProductOptions'
import './ColorSelector.css'

const ColorSelector = ({ colors, dispatch, selected }) => {
    useEffect(() => {
        if (colors.length === 1) {
            setColor(colors[0])
        }
    }, [colors.length])

    const handleClick = (color, e) => {
        if (e) { e.preventDefault() }
        setColor(color)
    }

    const setColor = (color) => {
        dispatch({
            type: ACTIONS.SETCOLOR,
            payload: { colorCode: color.code }
        })
    }

    return (
        <ul className="color-selector">
            {colors.map(c =>
                <li key={c.code} className={selected === c.code ? 'selected' : ''}>
                    <button id={c.code}
                        style={{ backgroundColor: c.name }}
                        onClick={ e => handleClick(c, e)}
                    />
                    <label className="mt" htmlFor={c.code}>{c.name}</label>
                </li>
            )}
        </ul>
    )
}

export default ColorSelector
