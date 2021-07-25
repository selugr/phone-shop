/** Note: I make use of console methods to make API and LocalStorage checking easier. */

import dataServices from './services/dataServices'

const KEYS = {
    PRODUCTS: 'products',
    PRODUCT: 'product',
    TOTAL: 'total'
}

const getProducts = async () => {
    let products = dataServices.loadFromLocalStorage(KEYS.PRODUCTS) || []
    if (!products.length) {
        console.log('Calling API to fetch products...')
        try {
            products = await dataServices.getProducts()
        } catch (error) {
            console.error('API error when fetching products.', error)
            return null
        }
        dataServices.saveToLocalStorage(KEYS.PRODUCTS, products)
    }
    return products
}

const getProductById = async (id) => {
    let product = dataServices.loadFromLocalStorage(KEYS.PRODUCT)
    if (!product || product.id !== id) {
        console.log('Calling API to fetch product by id...')
        try {
            product = await dataServices.getProductById(id)
        } catch (error) {
            console.error('API error when fetching product by id.', error)
            return null
        }
        dataServices.saveToLocalStorage(KEYS.PRODUCT, product)
    }
    return product
}

const addToCart = async (product) => {
    try {
        const countRes = await dataServices.addProductToCart(product)
        dataServices.saveToLocalStorage(KEYS.TOTAL, getCart() + countRes.count)
    } catch (error) {
        console.error('API error when adding product to cart.', error)
    }
    return getCart()
}

const getCart = () => {
    return dataServices.loadFromLocalStorage(KEYS.TOTAL) || 0
}

export default {
    getProducts: getProducts,
    getProductById: getProductById,
    addToCart: addToCart,
    getCart: getCart
}
