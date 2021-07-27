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
    const [filteredProducts, setFilteredProducts] = useState([])

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

    useEffect(() => {
        setFilteredProducts(
            products.filter(p => filters.length > 0 ? isOnFilter(p) : true)
                .map(p => <li key={p.id}><Item product={p}/></li>)
        )
    }, [products, filters])

    const handleFilter = (filter) => {
        setFilters(filter
            .toLowerCase()
            .split(/[ ,]+/)
            .filter(f => f !== ''))
    }

    const isOnFilter = (product) => {
        const result = Object.values(filters).every(f => {
            return f ? product.model.toLowerCase().includes(f.trim()) || product.brand.toLowerCase().includes(f.trim()) : false
        })
        return result
    }

    if (!products.length || (!filteredProducts.length && !filters.length)) {
        return (
            <div className="loader-container">
                <Loader/>
            </div>
        )
    }

    return (
        <div id="product-list">
            <Search handleFilter={handleFilter} />
            {filteredProducts.length > 0
                ? <ul className="list-container">
                    {filteredProducts}
                </ul>
                : <div className="loader-container">
                    <h1>No products matching search criteria</h1>
                </div>
            }
        </div>
    )
}

export default ListOfProducts
