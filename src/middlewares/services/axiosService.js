import axios from 'axios'
import global from '../../apiConfig'

export default {
    addProductToCart: async (product) => {
        const res = await axios.post(global.productsAPI.url + global.productsAPI.endPoints.addProductToCart, product)
        return res.data || []
    },
    getProducts: async () => {
        const res = await axios.get(global.productsAPI.url + global.productsAPI.endPoints.getProducts)
        return res.data || []
    },
    getProductById: async (id) => {
        const res = await axios.get(global.productsAPI.url + global.productsAPI.endPoints.getProductById + id)
        return res.data || []
    }
}
