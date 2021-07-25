import { useEffect, useState } from 'react'
import Loader from '../components/Loader/Loader'
import Search from '../components/Search/Search'
import Item from '../components/Item/Item'
import { GLOBALACTIONS, useGlobalContext, useGlobalUpdateContext } from '../components/GlobalContext'
import dataController from '../middlewares/dataController'
import './ListOfProducts.css'

const ListOfProducts = () => {
    const { products } = useGlobalContext()
    const globalUpdateContext = useGlobalUpdateContext()

    const [filters, setFilters] = useState([])

    useEffect(() => {
        (async () => {
            globalUpdateContext({
                type: GLOBALACTIONS.SET_PRODUCTS,
                payload: {
                    products: await dataController.getProducts()
                }
            })
        })()
    }, [])

    const handleFilter = (filter) => {
        const filters = filter
            .toLowerCase()
            .split(/[ ,]+/)
            .filter(f => f !== '')
        setFilters(filters)
    }

    const isOnFilter = (product) => {
        const result = Object.values(filters).every(f => {
            return f ? product.model.toLowerCase().includes(f.trim()) || product.brand.toLowerCase().includes(f.trim()) : false
        })
        return result
    }

    if (!products) {
        return <Loader />
    }

    return (
        <div id="product-list">
            <Search handleFilter={handleFilter} />
            <ul className="list-container">
                {products.length > 0
                    ? products
                        .filter(p => filters.length > 0 ? isOnFilter(p) : true)
                        .map(p => <li key={p.id}><Item product={p}/></li>)
                    : <></>
                }
            </ul>
        </div>
    )
}

export default ListOfProducts
