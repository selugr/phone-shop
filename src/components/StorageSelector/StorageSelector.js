import { useEffect } from 'react'
import { ACTIONS } from '../../hooks/useProductOptions'
import './StorageSelector.css'

const StorageSelector = ({ storages, dispatch, selected }) => {
    useEffect(() => {
        if (storages.length === 1) {
            setStorage(storages[0])
        }
    }, [storages.length])

    const handleClick = (storage, e) => {
        if (e) { e.preventDefault() }
        setStorage(storage)
    }

    const setStorage = (storage, e) => {
        dispatch({
            type: ACTIONS.SETSTORAGE,
            payload: { storageCode: storage.code }
        })
    }

    return (
        <ul className="storage-selector">
            {storages.map(s =>
                <li key={s.code} className={selected === s.code ? 'selected' : ''}>
                    <button id={s.code}
                        onClick={ e => handleClick(s, e)}
                    >
                        <label className="mt" htmlFor={s.code}>{s.name}</label>
                    </button>
                </li>
            )}
        </ul>
    )
}

export default StorageSelector
